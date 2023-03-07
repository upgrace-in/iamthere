import { useEffect, useState } from 'react';
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder'
import axios from 'axios'
import { v4 } from "uuid";

export default function EndPart(props) {

    const recorderControls = useAudioRecorder();
    const [input, setInput] = useState('')

    // const addAudioElement = (blob) => {
    //     // Creating a DOM
    //     const url = URL.createObjectURL(blob);
    //     const audio = document.createElement('audio');
    //     audio.src = url;
    //     audio.controls = true;
    //     $('#audioDiv').html(audio)
    // };

    const askinSpeech = async (data) => {
        // Creating formData
        const audiofile = new File([data], v4() + ".mp3", {
            type: "audio/mpeg",
        });
        let formData = new FormData()
        formData.append("fileName", audiofile.name)
        formData.append("audio", audiofile)

        // Sending to the server
        const config = {
            headers: { 'content-type': 'multipart/form-data' },
            onUploadProgress: (event) => {
                console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
            },
        };

        if (audiofile.size > 19649)
            await sendToServer('/api/askInSpeech', formData, config)
        else
            console.log("Audio is too short !!!");
    }

    const askinText = async (data) => {
        if (data.length > 5)
            await sendToServer('/api/askinText', { "input": data }, {})
        else
            alert("Your question is too short !!!")
    }

    const sendToServer = async (url, formData, config) => {
        // Start animation
        await axios.post(url, formData, config).then(val => {
            // Stop Animation
            handleResult([val.data.input, val.data.result])
        }).catch(e => {
            console.log(e);
        })
    }

    const handleResult = (arr) => {
        props.setDict(old => {
            let finalData;
            if (old !== null)
                finalData = [arr, ...old]
            else
                finalData = [arr]
            localStorage.setItem("dict", JSON.stringify(finalData))
            return finalData
        })
    }

    return (
        <div id="div3" className='bottomCon'>
            <div className='bCon'>
                <div className='thirdCON'>
                    <div className='col-First'>
                        <div className='form-group'>
                            <input  onChange={(e) => setInput(e.target.value)} value={input} className='fc form-control' placeholder='Type here...' />
                            <div onClick={() => askinText(input)} className='cr absICON'>
                                <i className='fas fa-paper-plane'></i>
                            </div>
                        </div>
                    </div>
                    <div className='col-Second'>
                        <div onClick={() => { recorderControls.startRecording() }} className='cr circleBorder mx-auto text-center'>
                            <i className='fas fa-microphone'></i>
                        </div>
                    </div>
                </div>
                <div className='absAudioCON' style={recorderControls.isRecording ? { "display": "block" } : { "display": "none" }}>
                    <AudioRecorder
                        classes={"move"}
                        onRecordingComplete={(blob) => askinSpeech(blob)}
                        recorderControls={recorderControls}
                    />
                </div>
            </div>
        </div>
    )
}