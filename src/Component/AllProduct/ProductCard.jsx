import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ productData }) => {

    const { _id, image, category, price, availability, name } = productData;

    return (
        <Link to={`/product/${_id}`}>
            <div className="relative group min-w-[300px] bg-white text-black ">
                <div className=" min-h-52 md:min-h-80 h-fit  " style={{
                    backgroundImage: `url("${image}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }} />

                <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                        <h1 className="text-base font-light">{category}</h1>
                        <p className="text-xl font-medium">${price}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-xl">{name.slice(0, 20)}</p>
                        <div className="flex justify-between mt-2">
                            <p className="absolute font-semibold text-white top-3 right-3">{availability}</p>
                            <button><FaArrowRight></FaArrowRight></button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;