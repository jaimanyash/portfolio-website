import React from "react";
import Layout from "../Sections/Layout"
import Hero from "../Sections/Hero"
import About from "../Sections/About"

export default function Home() {
  return (
    <Layout>
     <Hero/>
     <About/>
    </Layout>
  );
}
