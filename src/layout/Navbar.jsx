import React, { useContext, useRef } from "react";
import { CiMenuBurger } from "react-icons/ci";
import YouTube from "../foto/headerIcons/Black.svg";
import { IoSearchOutline } from "react-icons/io5";
import Kamera from "../foto/headerIcons/camera.svg";
import Combi from "../foto/headerIcons/Combined Shape.svg";
import { CiSun } from "react-icons/ci";
import User from "../foto/headerIcons/Userpic.svg";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../App";

export default function Navbar({ changeMenu }) {
  const inputRef = useRef(null);
  const goPage = useNavigate();
  const { isDark, setIsDark } = useContext(AppContext);

  function Submit() {
    console.log("SUBMIT");
    if (inputRef.current.value.length > 0) {
      console.log("Nimadir");
      goPage("/search?search_value=" + inputRef.current.value);
    }
  }

  return (
    <header  className={isDark && "nav-dark"}>
      <nav>
        <div className="navLeft">
          <CiMenuBurger onClick={() => changeMenu((state) => !state)} />
          <img src={YouTube} alt="" onClick={() => goPage("/home")} />
        </div>
        <div className="navSearch">
          <input ref={inputRef} type="text" placeholder="Search" />
          <IoSearchOutline onClick={() => Submit()} />
        </div>
        <div className="navRight">
          <img src={Kamera} alt="k" />
          <img src={Combi} alt="k" />
          <CiSun onClick={() => setIsDark(!isDark)}/>
          <img src={User} alt="k" />
        </div>
      </nav>
    </header>
  );
}
