import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className=" w-full">
      <Head>
        <title>John Corrigan</title>
        <meta name="description" content="My personal portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <About />
      <Projects />
      <div className="h-10" />
      <Skills />
      <div className="h-10" />
    </div>
  );
}
