import { FiChevronDown } from "react-icons/fi";
import Logo from "./Logo";
import { motion } from "framer-motion";
import useAuth from "../../hooks/useAuth";
const TitleSection = ({ open }) => {
    const { user } = useAuth();
    return (
        <div className="mb-3 border-b border-slate-300 pb-3">
            <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-100">
                <div className="flex items-center gap-2">
                    <Logo />
                    {open && (
                        <motion.div
                            layout
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.125 }}
                        >
                            <span className="block text-xs font-semibold">{user?.displayName}</span>
                            <span className="block text-xs ">{user?.email}</span>
                        </motion.div>
                    )}
                </div>
                {open && <FiChevronDown className="mr-2" />}
            </div>
        </div>
    );
};

export default TitleSection;