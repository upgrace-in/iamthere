const fs = require('fs')

export default async function Transcript(openai, audioFile) {

    try {
        const resp = await openai.createTranscription(
            fs.createReadStream(audioFile),
            "whisper-1"
        );
        return { response: true, result: resp.data.text }
    } catch (e) {
        return { response: false, result: e }
    }

}
