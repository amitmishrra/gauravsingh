import React, { useState, useEffect } from 'react'
import { NavLink, useLocation  } from 'react-router-dom'
import "./style.css"

export default function Header() {
    const [active, setActive] = useState("menu");
    const [togglerIcon, setIcon] = useState("navToggler");
    const [ activeIndex, setActiveIndex ] = useState(0);
    
    const location = useLocation()
    const paths = ['/',
    '/about',
    '/experience',
    '/projects',
    '/resume',
    '/contact']

    useEffect(() => {
       setActiveIndex(paths.indexOf(location.pathname))
    })

    const navToggle = () => {
        active === 'menu' ?
            setActive('menuActive menu') :
            setActive('menu')

        togglerIcon === 'navToggler' ?
            setIcon('navToggler toggle') :
            setIcon('navToggler')
    }
    return (
        <div className="headWrapper z-[1] h-[75px] md:h-[100px] p-[4]">
            <div className="header h-full ">
                <NavLink to={'/'} >
                    <div className='flex justify-center items-center'>
                        <div className='text-[37px] md:text-[45px] logotext'>
                            GS.
                        </div>
                    </div>
                </NavLink>
                <div className={active} >
                    <ul className='appleFont font-bold'>
                        <NavLink onClick={()=>{setActiveIndex(0)}} className={activeIndex == 0 ? 'active_item' : 'menu_item'} to={'/'} ><li className='p-[30px] md:p-[15px]' onClick={navToggle}> HOME </li></NavLink>
                        {/* <li onClick={navToggle}><NavLink onClick={()=>{setActiveIndex(1)}} className={activeIndex == 1 ? 'active_item ' : 'menu_item'} to={'/about'} > About </NavLink></li> */}
                        <NavLink onClick={()=>{setActiveIndex(2)}} className={activeIndex == 2 ? 'active_item ' : 'menu_item'} to={'/experience'} ><li className='p-[30px] md:p-[15px]' onClick={navToggle}> EXPERIENCE </li></NavLink>
                        <NavLink onClick={()=>{setActiveIndex(3)}} className={activeIndex == 3 ? 'active_item ' : 'menu_item'} to={'/projects'} ><li className='p-[30px] md:p-[15px]' onClick={navToggle}> PROJECTS </li></NavLink>
                        <NavLink onClick={()=>{setActiveIndex(4)}} className={activeIndex === 4 ? 'active_item ' : 'menu_item'} to={'/resume'} ><li className='p-[30px] md:p-[15px]' onClick={navToggle}> RESUME </li></NavLink>
                        <NavLink onClick={()=>{setActiveIndex(5)}} className={activeIndex === 5 ? 'active_item ' : 'menu_item'} to={'/contact'} ><li className='p-[30px] md:p-[15px]' onClick={navToggle}> CONTACT </li></NavLink>
                    </ul>
                </div>
                <div onClick={navToggle} className={togglerIcon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

            </div>
        </div>
    )
}