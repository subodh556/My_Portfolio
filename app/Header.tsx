'use client';
import { useState, useEffect } from 'react'

import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'

import { FaNodeJs } from 'react-icons/fa'
import { CgClose, CgMenuRight } from 'react-icons/cg'
import Image from 'next/image'
export default function Header({ logo }: { logo: string }) {

    const [navCollapse, setNavCollapse] = useState(true)
    const [scroll, setScroll] = useState(false)
    

    useEffect(() => {
        const updateScroll = () => {
            window.scrollY >= 90 ? setScroll(true) : setScroll(false)
        }
        window.addEventListener('scroll', updateScroll)
    }, [])


    const navs = ['Home', 'About', 'Skills', 'Projects',  'Contact']
    
    return (
        <header className={`backdrop-filter backdrop-blur-lg ${scroll ? 'border-b bg-white bg-opacity-40' : 'border-b-0'} dark:bg-grey-900 dark:bg-opacity-40 border-gray-200 dark:border-b-0 z-30 min-w-full flex flex-col fixed`}>
            <nav className='lg:w-11/12 2xl:w-4/5 w-full md:px-6 2xl:px-0 mx-auto py-4 hidden sm:flex items-center justify-between'>

            <Link href="/" className={`Navbar__logo flex justify-start items-center text-lg md:text-2xl bg-gradient-to-r from-blue-500 via-purple-600 to-red-500 text-transparent bg-clip-text font-bold`}>
            SUBODH
        </Link>

                <ul className='flex items-center gap-8'>
                    {navs.map((e, i) => (
                        <li key={i}>
                            <ScrollLink
                                className='navbar__link opacity-80 hover:opacity-100 hover:bg-gradient-to-r from-blue-500 via-purple-600 to-red-500 hover:text-transparent hover:bg-clip-text font-bold '
                                to={e}
                                offset={-60}
                                smooth={true}
                                duration={500}
                                isDynamic={true}
                            >
                                {e}
                            </ScrollLink>
                        </li>
                    ))}
                    
                </ul>
            </nav>

            <nav className='p-4 flex sm:hidden items-center justify-between'>
                
                  <CgMenuRight size={20} onClick={() => setNavCollapse(false)} />
                
            </nav>

            <div className={`flex min-h-screen w-screen absolute md:hidden top-0 ${!navCollapse ? 'right-0' : 'right-[-100%]'} bottom-0 z-50 ease-in duration-300`}>
                <div className="w-1/4" onClick={() => setNavCollapse(true)}></div>

                <div className="flex flex-col p-4 gap-5 bg-gray-100/95 backdrop-filter backdrop-blur-sm dark:bg-grey-900/95 w-3/4">
                    <CgClose className='self-end my-2' size={20} onClick={() => setNavCollapse(true)} />

                    {navs.slice(0, 4).map((e) => (
                        <ScrollLink
                            key={e}
                            className='navbar__link opacity-80 hover:opacity-100 hover:bg-gradient-to-r from-blue-500 via-purple-600 to-red-500 hover:text-transparent hover:bg-clip-text font-bold  py-1.5 px-4 rounded transition-colors capitalize cursor-pointer'
                            to={e}
                            offset={-60}
                            smooth={true}
                            duration={500}
                            isDynamic={true}
                            onClick={() => setNavCollapse(true)}
                        >
                            {e}
                        </ScrollLink>
                    ))}
                    <ScrollLink
                        to='contact'
                        offset={-60}
                        smooth={true}
                        duration={500}
                        onClick={() => setNavCollapse(true)}
                        className='px-6 py-1.5 rounded-md bg-blue-600 hover:opacity-100 hover:bg-gradient-to-r from-blue-500 via-purple-600 to-red-500 hover:text-transparent hover:bg-clip-text font-bold text-white text-center'>
                        Contact
                    </ScrollLink>
                </div>
            </div>

        </header>
    )
}