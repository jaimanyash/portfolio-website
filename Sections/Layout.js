import React from 'react';
import Header from "./Header";
import Footer from "./Footer";


const Layout = ({ children }) => {
  return (
    <>
      
        <title>Yash Jaiman</title>
        <link rel="icon" href="/favicon.ico" />
      

      <div className="min-h-screen mx-auto max-w-4xl flex flex-col">
        <Header />
        <main >
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
