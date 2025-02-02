import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useWindowScroll } from "react-use";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { FaOpencart } from "react-icons/fa6";

const NavBar = () => {

    const navContainerRef = useRef(null);
    const navItems = [
        { name: 'Home', destination: '/' },
        { name: 'Products', destination: '/products' },
        { name: 'Contact', destination: '/contact' },
    ];


    const { user, logOut } = useAuth();


    const handleLogOut = () => [
        logOut(),
        toast.success('Log Out Successfully')
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
                <nav className="flex size-full items-center justify-between p-4 ">

                    <div className="flex items-center gap-7">
                        {/* <img src="" alt="logo" className="w-10" /> */}
                        <Link to='/'><button className="font-kaushan text-white text-4xl">Siea</button></Link>
                    </div>

                    <div className="flex  h-full items-center  ">

                        <div className=" hidden md:block text-white ">
                            {navItems.map((nav, idx) => (
                                <Link key={idx} to={nav?.destination} >
                                    <button className="uppercase nav-hover-btn">{nav?.name}</button>
                                </Link>
                            ))}
                        </div>
                        <Link className="nav-hover-btn" to='/dashboard'>Menu</Link>
                        {
                            user ?
                                <div onClick={handleLogOut} className="nav-hover-btn">LogOut</div> :
                                <span className="nav-hover-btn"><Link to='/login'>Login</Link></span>
                        }
                        {/* cart button */}
                        <Link className="nav-hover-btn" to='/cart'><FaOpencart className="text-4xl" /></Link>
                        {/* music buttton */}
                        <button className="ml-10 flex items-center space-x-0.5" onClick={toggleAudio}>
                            <audio src="/audio/loop.mp3" ref={audioElementRef} className="hidden" loop />
                            {[1, 2, 3, 4].map((bar) => (
                                <div key={bar}
                                    className={`indicator-line ${isIndicatorActive ? 'active' : ''}`} style={{ animationDelay: `${bar * 0.1}s` }} />
                            ))}

                        </button>
                    </div>


                </nav>
            </header>
        </div>
    );
};

export default NavBar;