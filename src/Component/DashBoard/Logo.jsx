import { motion } from "framer-motion";
import useAuth from "../../hooks/useAuth";
const Logo = () => {

    const { user } = useAuth();

    return (
        <motion.div
            layout
            className="grid size-10 shrink-0 place-content-center rounded-md"
        >
            <img src={user?.photoURL} alt="" />
        </motion.div>
    );
};

export default Logo;