import React from "react";
import Layout from "../src/Sections/Layout"
import Hero from "../src/Sections/Hero"
import About from "../src/Sections/About"

export default function Home() {
  return (
    <Layout>
     <Hero/>
     <About/>
    </Layout>
  );
}
