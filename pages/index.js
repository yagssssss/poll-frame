import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cats vs Dogs Poll</title>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://placekitten.com/600/400" />
        <meta property="fc:frame:button:1" content="🐱 Cats" />
        <meta property="fc:frame:button:2" content="🐶 Dogs" />
        <meta
          property="fc:frame:post_url"
          content="https://poll-frame-z7e1.vercel.app/api/frame"
        />
      </Head>
      <h1>Cats vs Dogs Poll</h1>
      <p>Vote by clicking a button in Farcaster!</p>
    </>
  );
}
