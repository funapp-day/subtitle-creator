import Head from "next/head";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>자막 생성기</title>
      </Head>
      <div className="HomeScreen" />
    </>
  );
};

export default Home;
