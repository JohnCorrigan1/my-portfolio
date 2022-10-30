import Head from "next/head";
import About from "./components/About";
import Header from "./components/ui/Header";
import Projects from "./components/Projects";

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
    </div>
  );
}
