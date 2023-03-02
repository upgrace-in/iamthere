import Head from 'next/head'
import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react'
import $ from 'jquery'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [toggle, setToggle] = useState(true)

  return (
    <>
      <Head>
        <title>I AM THERE</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="wrapper" className={toggle ? "wrapper-content" : "wrapper-content toggled"}>
        <div id="sidebar-wrapper">
          <ul className="sidebar-nav" style={{ marginTop: 10 + 'px' }}>
            <li>
              <button className='desktopView btn mx-auto text-center' style={{ width: 230 + 'px' }}>
                <i className='fas fa-plus-circle'></i>&nbsp;&nbsp;New Chat
              </button>
            </li>
            <li>
              <a className='questionSideBAR' href="#"><i className='far fa-comment-alt'></i>&nbsp;&nbsp;How are you?</a>
            </li>
          </ul>
          <div className='sidebar-nav-bt'>
            <hr style={{ margin: 10 + 'px' }} />
            <ul className="sidebar-nav">
              <li>
                <a href="#"><i className='far fa-trash-alt'></i>&nbsp;&nbsp;Clear Conversations</a>
              </li>
              <li>
                <a href="#"><i className='far fa-moon'></i>&nbsp;&nbsp;Dark Mode</a>
              </li>
            </ul>
          </div>
        </div>

        <div id="page-content-wrapper">

          <div className="container-fluid">

            <div id="div2-1">
              <div className='mobileView'>
                <div className='row'>
                  <div className='col'>
                    <button onClick={() => setToggle(old => !old)} className='btn'>
                      <i className='fas fa-bars'></i>
                    </button>
                  </div>
                  <div className='col'>
                    <button className='btn' style={{ width: 230 + 'px' }}>
                      <i className='fas fa-plus-circle'></i>&nbsp;&nbsp;New Chat
                    </button>
                  </div>
                </div>
              </div>
              <div className='questions' style={{marginTop: 10+'px'}}>
                <div className='questionBOX'>
                  <div className='boxStyle question'>
                    <h5>How are you???</h5>
                  </div>
                  <br/><br/><br/>
                  <div className='boxStyle answer'>
                    <h5>All Good !</h5>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div id="div2">
            <div className='absCon2 form-group mx-auto text-center'>
              <textarea
                rows="1"
                type="text"
                className='form-control'></textarea>
              <button className='btn absBTN absBTN2'><i className='fas fa-microphone-alt'></i></button>
              <button className='btn absBTN'><i className='far fa-paper-plane'></i></button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
