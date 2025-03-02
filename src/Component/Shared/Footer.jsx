import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="pt-20">
            <footer className="flex justify-evenly sm:footer-horizontal bg-[#262626] text-neutral-content p-10">
                <aside className="space-y-5">
                    <p className="text-4xl font-lexend">
                        Saea
                    </p>
                    <p className="font-merriway">Providing best tech since 1992</p>
                </aside>
                <nav>
                    <h6 className="footer-title font-lexend">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <FaTwitter className="text-2xl" />
                        </a>
                        <a>
                            <FaYoutube className="text-2xl" />
                        </a>
                        <a>
                            <FaFacebook className="text-2xl" />
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;