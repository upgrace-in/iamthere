import gTTS from 'gtts';

var speech = 'comment allez-vous';
var gtts = new gTTS(speech, 'en');

export default function Speak() {
    return true
    // gtts.save('Voice.mp3', function (err, result) {
    //     if (err) { throw new Error(err); }
    //     console.log("Text to speech converted!");
    // });
}