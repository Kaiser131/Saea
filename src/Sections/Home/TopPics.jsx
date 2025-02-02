import { Link, useSearchParams } from "react-router-dom";
import SlideTabs from "../../Component/Home/TopPicsTab/SlideTabs";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Card from "../../Component/Home/TopPicsTab/Card";
import EncryptButton from "../../Component/Shared/EncryptBtn";
import { IoSearchSharp } from "react-icons/io5";
import WhiteFillupBtn from "../../Component/Shared/WhiteFillupBtn";
import FillUpBtn from "../../Component/Shared/FillUpBtn";

const TopPics = () => {

    const [params, setParams] = useSearchParams();
    const category = params.get('category');

    const { data = [] } = useQuery({
        queryKey: ['watchCategory', category],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:5000/watchs?category=${category}`);
            return data;
        }
    });


    return (
        <div className="min-h-screen min-w-full text-white ">

            <div className="p-40">

                {/* text div */}
                <div>
                    <div className="flex items-center gap-2">
                        <h1 className="text-black uppercase font-sirin text-xs md:text-xl mb-3">Top Time Tellers</h1>
                        <div className=" w-24 h-[1px] bg-black mb-3"></div>
                    </div>
                    <p className=" uppercase font-raleway text-xl md:text-3xl lg:text-4xl">Perfectly crafted, endlessly admired.</p>
                </div>


                {/* tab section */}
                <div className="mt-5">
                    <SlideTabs></SlideTabs>
                </div>


                {/* card section */}
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 max-w-[1300px] mx-auto">
                    {data.slice(0, 4).map(data => <Card key={data._id} topPicData={data} ></Card>)}
                </div>

                {/* button */}
                <div className="flex justify-center mt-10">
                    <Link to='/products'>
                        <FillUpBtn text='See More'></FillUpBtn>
                    </Link>
                </div>


            </div>


        </div>
    );
};

export default TopPics;