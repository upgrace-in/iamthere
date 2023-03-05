import nextConnect from 'next-connect';
import multer from 'multer';
import Transcript from './Transcript';
import GPT from './GPT';

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.GPT_API_KEY,
});
const openai = new OpenAIApi(configuration);

const upload = multer({
    storage: multer.diskStorage({
        destination: process.env.TEMP_PATH,
        filename: (req, file, cb) => cb(null, file.originalname),
    }),
});

const apiRoute = nextConnect({
    onError(error, req, res) {
        res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
    },
    onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
});

apiRoute.use(upload.array('audio'));

apiRoute.post(async (req, res) => {
    try {
        // Convert speech to text 
        await Transcript(openai, process.env.TEMP_PATH + '/' + req.body.fileName).then(async val => {
            if (val.response) {
                // Send to GPT
                await GPT(openai, val.result).then(val => {
                    if (val.response) {
                        res.send({ response: true, result: val.result })
                    } else
                        throw val.result
                }).catch(e => {
                    throw e
                })
            }
            else
                throw val.result
        }).catch(e => {
            console.log(e);
        })
    } catch (e) {
        console.log(e);
        res.status(405).json({ data: 'failed' });
    }
});

export default apiRoute;

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
};