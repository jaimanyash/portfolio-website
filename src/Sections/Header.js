import React from 'react';
import Logo from "../Components/Logo";
import {useTheme} from "next-themes";
import{BsSun, BsMoon} from "react-icons/bs";
import {useState, useEffect} from "react";

const Header = () => {

  const {systemTheme , theme, setTheme} = useTheme ();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() =>{
    setMounted(true);
  },[])

   const renderThemeChanger= () => {
      if(!mounted) return null;

      const currentTheme = theme === "system" ? systemTheme : theme ;

      if(currentTheme ==="dark"){
        return (
          <div className="border-2  rounded-xl w-10 h-10 border-gray-200  ">
          <BsSun className=" mx-auto mt-1.5 w-6 h-6 text-yellow-500 hover:text-cyan-500 " role="button" onClick={() => setTheme('light')} />
          </div>
        )
      }

      else {
        return (
          <div className="border-gray-600 border-2 rounded-xl w-10 h-10 ">
          <BsMoon className=" mx-2 mt-1.5 w-6 h-6 text-gray-700 hover:text-cyan-500 " role="button" onClick={() => setTheme('dark')} />
          </div>
        )
      }
   };

  return (
    <header className="h-15 dark:border-gray-700">
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Logo />
        
        {renderThemeChanger()}
      </div>
    </header>
  );
};

export default Header;