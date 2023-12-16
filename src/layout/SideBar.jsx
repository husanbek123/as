import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { SlFire } from "react-icons/sl";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GoFileDirectory } from "react-icons/go";
import { GoHistory } from "react-icons/go";
import { GoStopwatch } from "react-icons/go";
import { GrFavorite } from "react-icons/gr";
import { FaRegStar } from "react-icons/fa";
import { CiMusicNote1 } from "react-icons/ci";
import { IoGameControllerOutline } from "react-icons/io5";
import { MdExpandMore } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import foto1 from '../foto/navImg/Oval.svg';
import foto2 from '../foto/navImg/Oval (1).svg';
import foto3 from '../foto/navImg/Oval (2).svg';
import foto4 from '../foto/navImg/Oval (3).svg';
import foto5 from '../foto/navImg/Oval (4).svg';
import foto6 from '../foto/navImg/Oval (5).svg';





export default function SideBar({isMenuOpen}) {
    const [showContent,setShowContent]=useState(false)

    const hidden = !isMenuOpen ? 'hidden' : '';

  return (
     <aside className={hidden}>
        <div className={`asideMain `} >
          <ul>
          <NavLink className={`link `} to='/home'><li><IoHomeOutline /> <span>Home</span></li></NavLink>
            <NavLink className={`link `} to='/trend'><li> <SlFire /> <span>Trending</span></li></NavLink>
            <NavLink className={`link `} to='/subscription'><li> <MdOutlineSubscriptions /> <span>Subscriptions</span></li></NavLink>
          </ul>
          <ul className='ul'>
            <NavLink className={`link `} to='/library'><li><GoFileDirectory /> <span>Library</span></li></NavLink>
            <NavLink className={`link `} to='/history'><li><GoHistory /> <span>History</span></li></NavLink>
            <NavLink className={`link `} to='/watch'><li><GoStopwatch /> <span>Watch later</span></li></NavLink>
            <NavLink className={`link `} to='/favourites'><li><FaRegStar /> <span>Favourites</span></li></NavLink>
            <NavLink className={`link `} to='/liked'><li><GrFavorite /> <span>Liked videos</span></li></NavLink>
            <NavLink className={`link `} to='/music'><li><CiMusicNote1 /> <span>Music</span></li></NavLink>
            <NavLink className={`link `} to='/games'><li><IoGameControllerOutline /> <span>Games</span></li></NavLink>
          </ul>
        </div>
        <div className={`users ${hidden && 'users-hidden'} `}>
           <button onClick={()=>setShowContent(!showContent)}>
            <MdExpandMore />{showContent ? 'Hide more' : <span className='link-icon'>Show more</span>}
            </button>
          {showContent&&(
             <div className='hideUsers'>
             <h3>Subscriptions</h3>
            
              <ul>
                  <li><img src={foto1} alt="" />Gussie Singleton</li>
                  <li><img src={foto2} alt="" />Nora Francis</li>
                  <li><img src={foto3} alt="" />Belle Briggs</li>
                  <li><img src={foto4} alt="" />Eunice Cortez</li>
                  <li><img src={foto5} alt="" />Emma Hanson</li>
                  <li><img src={foto6} alt="" />Leah Berry</li>
              </ul>
             </div>
          )}
           <span className='link-icon'><IoSettingsOutline /> Setting</span>
        </div>
        
      </aside>
  )
}
