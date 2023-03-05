import Head from 'next/head'
import { useEffect, useState } from 'react'
import $ from 'jquery'

import TopPart from './components/TopPart'
import MidPart from './components/MidPart'
import EndPart from './components/EndPart'

export default function Home() {

  return (
    <>
      <Head>
        <title>I AM THERE</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TopPart />
        <MidPart />
        <EndPart />
      </main>
    </>
  )
}
