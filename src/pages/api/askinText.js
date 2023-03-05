import GPT from "./GPT";
import Transcript from "./Transcript";
import Formidable from 'formidable'

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.GPT_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
    try {
        await GPT(openai, req.body.input).then(val => {
            if (val.response)
                res.send({ response: true, result: val.result })
            else
                throw val.result
        }).catch(e => {
            throw e
        })
    } catch (e) {
        console.log(e);
        res.send({ response: false, result: e })
    }
}