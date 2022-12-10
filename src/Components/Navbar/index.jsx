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
        <div className="headWrapper z-[1] h-[75px] md:h-[100px] md:pt-24 p-[4]">
            <div className="header h-full ">
                <NavLink to={'/'} >
                    <div className='flex justify-center items-center'>
                        <div className='text-[37px] md:text-[45px] logotext'>
                            GS.
                        </div>
                    </div>
                </NavLink>
                <div className={active} >
                    <ul className='appleFont font-bold' >
                        <li className='p-[30px] md:p-[15px]' onClick={navToggle}><NavLink onClick={()=>{setActiveIndex(0)}} className={activeIndex == 0 ? 'active_item' : 'menu_item'} to={'/'} > HOME </NavLink></li>
                        {/* <li onClick={navToggle}><NavLink onClick={()=>{setActiveIndex(1)}} className={activeIndex == 1 ? 'active_item ' : 'menu_item'} to={'/about'} > About </NavLink></li> */}
                        <li className='p-[30px] md:p-[15px]' onClick={navToggle}><NavLink onClick={()=>{setActiveIndex(2)}} className={activeIndex == 2 ? 'active_item ' : 'menu_item'} to={'/experience'} > EXPERIENCE </NavLink></li>
                        <li className='p-[30px] md:p-[15px]' onClick={navToggle}><NavLink onClick={()=>{setActiveIndex(3)}} className={activeIndex == 3 ? 'active_item ' : 'menu_item'} to={'/projects'} > PROJECTS </NavLink></li>
                        <li className='p-[30px] md:p-[15px]' onClick={navToggle}><NavLink onClick={()=>{setActiveIndex(4)}} className={activeIndex === 4 ? 'active_item ' : 'menu_item'} to={'/resume'} > RESUME </NavLink></li>
                        <li className='p-[30px] md:p-[15px]' onClick={navToggle}><NavLink onClick={()=>{setActiveIndex(5)}} className={activeIndex === 5 ? 'active_item ' : 'menu_item'} to={'/contact'} > CONTACT </NavLink></li>
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