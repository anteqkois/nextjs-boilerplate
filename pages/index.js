import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  const handleEvent = (e) => {
    const val = e !== treu ? true : false;
  };
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline text-red-600">Test 2</h1>
      </main>
    </div>
  );
}
