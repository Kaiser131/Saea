import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useWindowScroll } from "react-use";
import { FaOpencart } from "react-icons/fa6";
import { motion } from 'framer-motion';
import useAuth from "../../hooks/useAuth";


const NavBar = () => {

    const { user } = useAuth();

    const navContainerRef = useRef(null);
    const navItems = [
        { name: 'Home', destination: '/' },
        { name: 'Products', destination: '/products' },
        { name: 'Menu', destination: 'dashboard' },
    ];




    // scroll implementation using react-use
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(true);

    const { y: currentScrollY } = useWindowScroll();

    useEffect(() => {
        if (currentScrollY === 0) {
            setIsNavVisible(true),
                navContainerRef.current.classList.remove('floating-nav');
        } else if (currentScrollY > lastScrollY) {
            setIsNavVisible(false),
                navContainerRef.current.classList.add('floating-nav');
        } else if (currentScrollY < lastScrollY) {
            setIsNavVisible(true),
                navContainerRef.current.classList.add('floating-nav');
        }
        setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY]);


    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.2
        });
    }, [isNavVisible]);

    const location = useLocation();



    // audio function
    const [audioPlaying, setAudioPlaying] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);
    const audioElementRef = useRef(null);
    const toggleAudio = () => {
        setAudioPlaying(prev => !prev);
        setIsIndicatorActive(prev => !prev);
    };

    useEffect(() => {
        if (audioPlaying) {
            audioElementRef.current.play();
        } else {
            audioElementRef.current.pause();
        }
    }, [audioPlaying]);


    return (
        <div ref={navContainerRef} className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6 ">
            <header className="absolute top-1/2 w-full -translate-y-1/2 ">
                <nav className={`flex size-full items-center justify-between p-4 ${location?.pathname !== '/' && currentScrollY === 0 ? 'bg-black bg-opacity-30 rounded-lg' : ''} `}>

                    <div className="flex items-center gap-7">
                        {
                            location?.pathname === '/' ?
                                <Link to='/'><motion.button
                                    initial={{
                                        opacity: 0,
                                        y: -40
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            delay: 2,
                                            duration: 2,
                                            ease: 'easeInOut'
                                        }

                                    }}
                                    className="font-kaushan text-white text-4xl">Siea</motion.button></Link>
                                :
                                <Link to='/'><motion.button className="font-kaushan text-white text-4xl">Siea</motion.button></Link>}
                    </div>

                    {
                        location?.pathname === '/' ?
                            <motion.div
                                initial={{
                                    opacity: 0
                                }}
                                animate={{
                                    opacity: 1,
                                    transition: {
                                        delay: 2.5,
                                        ease: 'easeInOut',
                                        duration: 1.2
                                    }
                                }}
                                className={`flex  h-full items-center`}>

                                <div className=" hidden md:block text-white ">
                                    {navItems.map((nav, idx) => (
                                        <Link key={idx} to={nav?.destination} >
                                            <button className="uppercase nav-hover-btn">{nav?.name}</button>
                                        </Link>
                                    ))}
                                </div>

                                <Link className="nav-hover-btn md:hidden" to='/dashboard'>Menu</Link>
                                <Link className="nav-hover-btn md:hidden" to='/products'>Product</Link>

                                {/* cart button */}
                                {user ?
                                    <Link className="nav-hover-btn" to='dashboard/myCart'><FaOpencart className="text-2xl md:text-4xl" /></Link> :
                                    <Link to='/login' className="nav-hover-btn" >login</Link>
                                }
                                {/* music buttton */}
                                <button className="ml-10 flex items-center space-x-0.5" onClick={toggleAudio}>
                                    <audio src="/audio/loop.mp3" ref={audioElementRef} className="hidden" loop />
                                    {[1, 2, 3, 4].map((bar) => (
                                        <div key={bar}
                                            className={`indicator-line ${isIndicatorActive ? 'active' : ''}`} style={{ animationDelay: `${bar * 0.1}s` }} />
                                    ))}

                                </button>
                            </motion.div>

                            :

                            <motion.div
                                className={`flex  h-full items-center`}>

                                <div className=" hidden md:block text-white ">
                                    {navItems.map((nav, idx) => (
                                        <Link key={idx} to={nav?.destination} >
                                            <button className="uppercase nav-hover-btn">{nav?.name}</button>
                                        </Link>
                                    ))}
                                </div>

                                <Link className="nav-hover-btn md:hidden" to='/dashboard'>Menu</Link>

                                {user ?
                                    <Link className="nav-hover-btn" to='dashboard/myCart'><FaOpencart className="text-2xl md:text-4xl" /></Link> :
                                    <Link to='/login' className="nav-hover-btn" >login</Link>
                                }

                                {/* music buttton */}
                                <button className="ml-10 flex items-center space-x-0.5" onClick={toggleAudio}>
                                    <audio src="/audio/loop.mp3" ref={audioElementRef} className="hidden" loop />
                                    {[1, 2, 3, 4].map((bar) => (
                                        <div key={bar}
                                            className={`indicator-line ${isIndicatorActive ? 'active' : ''}`} style={{ animationDelay: `${bar * 0.1}s` }} />
                                    ))}

                                </button>
                            </motion.div>
                    }


                </nav>
            </header>
        </div>
    );
};

export default NavBar;