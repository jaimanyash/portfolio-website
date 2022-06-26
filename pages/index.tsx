import React from "react";
import Layout from "../src/Sections/Layout"
import Hero from "../src/Sections/Hero"
import About from "../src/Sections/About"
import Projects from "../src/Sections/Projects"
import Stack from "../src/Sections/Contact"

export default function Home() {
  return (
    <Layout>
     <Hero/>
     <About/>
     <Projects/>
     <Stack/>
    </Layout>
  );
}
