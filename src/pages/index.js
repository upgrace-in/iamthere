import Head from 'next/head'
import { use, useEffect, useState } from 'react'
import $ from 'jquery'

import TopPart from './components/TopPart'
import MidPart from './components/MidPart'
import EndPart from './components/EndPart'

export default function Home() {

  const [dict, setDict] = useState()

  const [arr, setarr] = useState()

  const [processing, setprocessing] = useState(false)

  useEffect(() => {
    // localStorage.removeItem('dict')
    setDict(JSON.parse(localStorage.getItem('dict')))
  }, [])

  useEffect(() => {

    if ((dict !== undefined) && (dict !== null) && (dict.length > 0))
      setarr(dict[0])

  }, [dict])

  return (
    <>
      <Head>
        <title>I AM THERE</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TopPart dict={dict} setarr={setarr} />
        <MidPart processing={processing} arr={arr} />
        <EndPart setarr={setarr} processing={processing} setprocessing={setprocessing} setDict={setDict} dict={dict} />
      </main>
    </>
  )
}
