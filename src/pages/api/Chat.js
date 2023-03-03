import GPT from "./GPT";
import Transcript from "./Transcript";

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.GPT_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function chat(req, res) {
    try {
        let finalPrompt;

        if (req.body.type === 'speech') {

            // Convert speech to text 
            await Transcript(openai, req.body.speech).then(val => {
                if (val.response)
                    finalPrompt = val.result
                else
                    throw val.result
            }).catch(e => {
                throw e
            })

        } else {
            finalPrompt = req.body.input
        }

        // Now Ask CHATGPT for an response
        await GPT(openai, finalPrompt).then(val => {
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