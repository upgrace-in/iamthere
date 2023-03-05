import Head from 'next/head'
import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react'
import $ from 'jquery'
import axios from 'axios'
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder'
import { v4 } from "uuid";

export default function Home() {

  const recorderControls = useAudioRecorder();

  const addAudioElement = (blob) => {
    // Creating a DOM
    const url = URL.createObjectURL(blob);
    const audio = document.createElement('audio');
    audio.src = url;
    audio.controls = true;
    $('#audioDiv').html(audio)

    askinSpeech(blob)
  };

  const [input, setInput] = useState('')

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

    await sendToServer('/api/askInSpeech', formData, config)
  }

  const askinText = async (data) => {
    await sendToServer('/api/askinText', { "input": data }, {})
  }

  const sendToServer = async (url, formData, config) => {
    await axios.post(url, formData, config).then(val => {
      console.log(val.data.result);
    }).catch(e => {
      console.log(e);
    })
  }

  useEffect(() => {
    // ask({"type": "text", "input": "How are you???"})
  }, [])

  return (
    <>
      <Head>
        <title>I AM THERE</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div id="div1" className='topCon'>
          <div>
            <h1>Iamthere.AI</h1>
          </div>
        </div>
        <div id="div2" className='midCon'>
          <div>
            <h1>Swipe to regenerate</h1>
            <AudioRecorder
              onRecordingComplete={(blob) => addAudioElement(blob)}
              recorderControls={recorderControls}
            />
          </div>
        </div>
        <div id="div3" className='bottomCon'>
          <div className='bCon'>
            <div className='thirdCON'>
              <div className='col-First'>
                <div className='form-group'>
                  <input onChange={(e) => setInput(e.target.value)} value={input} className='fc form-control' placeholder='Type here...' />
                  <div onClick={() => askinText(input)} className='cr absICON'>
                    <i className='fas fa-paper-plane'></i>
                  </div>
                </div>
              </div>
              <div className='col-Second'>
                <div className='cr microphone mx-auto text-center'>
                  <i className='fas fa-microphone'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
