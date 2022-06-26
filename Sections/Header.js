import React from 'react';
import Logo from "../Components/Logo";
import {useTheme} from "next-themes";
import{SunIcon ,MoonIcon} from "@heroicons/react/outline";
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
          <SunIcon className="w-9 h-9 text-yellow-500 hover:text-cyan-500 " role="button" onClick={() => setTheme('light')} />
        )
      }

      else {
        return (
          <MoonIcon className="w-9 h-9 text-gray-900 hover:text-cyan-500 " role="button" onClick={() => setTheme('dark')} />
        )
      }
   };

  return (
    <header className="h-15 dark:border-gray-700">
      <div className="sm:px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Logo />
        

        {renderThemeChanger()}
      </div>
    </header>
  );
};

export default Header;