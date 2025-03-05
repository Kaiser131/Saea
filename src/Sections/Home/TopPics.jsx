import { Link, useSearchParams } from "react-router-dom";
import SlideTabs from "../../Component/Home/TopPicsTab/SlideTabs";
import { useQuery } from "@tanstack/react-query";
import FillUpBtn from "../../Component/Shared/FillUpBtn";
import ProductCard from "../../Component/AllProduct/ProductCard";
import ZoopText from "../../Component/Shared/ZoopText";
import useAuth from "../../hooks/useAuth";
import Loading from "../../Pages/Loading/Loading";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const TopPics = () => {

    const [params, setParams] = useSearchParams();
    const category = params.get('category');

    const axiosSecure = useAxiosSecure();

    const { data = [], isLoading } = useQuery({
        queryKey: ['watchCategory', category],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/watchs?category=${category}`);
            return data;
        }
    });

    const { loading } = useAuth();

    if (loading || isLoading) return <Loading />;

    return (
        <div className="min-h-screen min-w-full text-white">

            <div className="">

                {/* text div */}
                <div className="px-10 md:px-40 md:py-10 mt-5">
                    <div className="flex items-center gap-2">
                        <h1 className="text-black uppercase font-sirin text-xs md:text-xl mb-3">Top Time Tellers</h1>
                        <div className=" w-24 h-[1px] bg-black mb-3"></div>
                    </div>
                    <div className="hidden md:inline-flex gap-3">
                        <ZoopText design='uppercase font-raleway text-xl md:text-3xl lg:text-4xl' >
                            Perfectly
                        </ZoopText>
                        <ZoopText design='uppercase font-raleway text-xl md:text-3xl lg:text-4xl' >
                            crafted,
                        </ZoopText>
                        <ZoopText design='uppercase font-raleway text-xl md:text-3xl lg:text-4xl' >
                            endlessly
                        </ZoopText>
                        <ZoopText design='uppercase font-raleway text-xl md:text-3xl lg:text-4xl' >
                            admired.
                        </ZoopText>

                    </div>

                    <p className="md:hidden font-raleway text-2xl">Perfectly crafted, endlessly admired.</p>

                </div>


                {/* tab section */}
                <div className="mt-5">
                    <SlideTabs></SlideTabs>
                </div>


                {/* card section */}
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-10 mt-10 max-w-[1300px] mx-auto">
                    {data.slice(0, 4).map(data => <ProductCard key={data._id} productData={data} ></ProductCard>)}
                </div>

                {/* button */}
                <div className="flex justify-center my-10">
                    <Link to='/products'>
                        <FillUpBtn text='See More'></FillUpBtn>
                    </Link>
                </div>


            </div>


        </div>
    );
};

export default TopPics;