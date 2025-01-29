import { Link } from "react-router-dom";

const HorizonCard = ({ newArriveData }) => {

    const { image, name, _id } = newArriveData;

    return (

        <Link to={`/product/${_id}`}>

            <div
                className="group relative h-[450px] w-[450px] overflow-hidden bg-[#D8D8D8] "
            >
                <div
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
                ></div>
                <div className="absolute inset-0 z-10 grid place-content-center">
                    <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-2xl font-sirin text-shadow uppercase text-white backdrop-blur-lg">
                        {name}
                    </p>
                </div>
            </div>

        </Link>

    );
};

export default HorizonCard;