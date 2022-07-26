import Head from "next/head";
import { useEffect } from "react";
import { fromEvent, map, } from "rxjs";
import SubtitleScreen from "src/components/templates/SubtitleScreen";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  useEffect(() => {
    const shortcut = fromEvent<KeyboardEvent>(window.document.documentElement, 'keydown')
      .pipe(
        map((e) => e.key),
      )
      .subscribe(console.log);
    return () => shortcut.unsubscribe();
  }, []);

  return (
    <>
      <Head>
        <title>자막 생성기</title>
      </Head>
      <SubtitleScreen
        items={[{ text: 'Hello world!' }]}
      ></SubtitleScreen>
    </>
  );
};

export default Home;
