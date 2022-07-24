import Head from "next/head";
import Subtitle from "src/components/atoms/Subtitle";
import SubtitleScreen from "src/components/templates/SubtitleScreen";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>자막 생성기</title>
      </Head>
      <SubtitleScreen
        items={[{ text: 'asd' }]}
      ></SubtitleScreen>
    </>
  );
};

export default Home;
