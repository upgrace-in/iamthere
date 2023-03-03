export default async function GPT(openai, input) {

    try {
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "<|endoftext|>" + input + "\n--\nLabel:",
            temperature: 0.9,
            max_tokens: 4000,
            top_p: 1
        });
        const data = completion.data.choices[0].text;
        return { response: true, result: data }
    } catch (e) {
        return { response: false, result: e }
    }

}
