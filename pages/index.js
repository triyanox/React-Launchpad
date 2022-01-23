import Head from 'next/head'
import Launchpad from '../components/Launchpad'

export default function Home() {
  return (
    <div>
      <Head>
        <title>React Launchpad</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap" rel="stylesheet" />
      </Head>
      <Launchpad />
    </div>
  )
}
