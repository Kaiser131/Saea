import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios from "axios";
import DrawOutlineButton from "../../Component/Shared/DrawOutlineButton";

const ProductDetails = () => {
    const { id } = useParams();


    const { data: watchData = [] } = useQuery({
        queryKey: ['watchData', id],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:5000/watch/${id}`);
            return data;
        }
    });

    const { SKU, availability, brand, category, details, image, material, name, price, warranty, waterResistance, } = watchData;


    return (
        <div className="h-screen w-full px-10 py-[86px] relative">

            <div className=" border-t-[1px] flex flex-col md:flex-row border-[#BEBEBE] p-6 gap-10 ">

                <div className="md:w-1/2">
                    <div
                        className="w-full min-h-[calc(100vh-140px)] bg-cover bg-center"
                        style={{
                            backgroundImage: `url("${image}")`
                        }}
                    />
                </div>

                <div className="w-1/2 flex flex-col h-full">
                    <h1 className="text-4xl font-lexend font-light my-10">{name}</h1>
                    <p className="font-lexend">{details}</p>
                    <p className="font-lexend text-3xl font-extralight my-3">{price}$</p>

                    {/* color div */}
                    <div className="space-y-3">
                        <p className="uppercase font-lexend text-xl">varients:</p>
                        <div className="w-20 h-20 bg-cover p-3 hover:border bg-center rounded-sm shadow-md"
                            style={{ backgroundImage: `url(${image})` }}>
                        </div>
                    </div>

                    {/* product description div */}
                    <div className="ml-10 my-10">
                        <ul className="capitalize">
                            <li className="list-disc"><span className="font-semibold ">brand:</span> {brand}</li>
                            <li className="list-disc"><span className="font-semibold ">category:</span> {category}</li>
                            <li className="list-disc"><span className="font-semibold ">material:</span> {material}</li>
                            <li className="list-disc"><span className="font-semibold ">durability:</span> {waterResistance}</li>
                            <li className="list-disc"><span className="font-semibold ">warranty:</span> {warranty}</li>
                            <li className="list-disc"><span className="font-semibold ">sku:</span> {SKU}</li>
                            <li className="list-disc"><span className="font-semibold ">available:</span> {availability}</li>
                        </ul>
                    </div>

                    {/* Button div stays at bottom */}
                    <div className="mt-auto flex gap-5 ">
                        <button className="px-10 py-3 font-lexend border border-black text-black">Add To Cart</button>
                        <div className="md:py-2 md:px-16 px-8 py-2 bg-black">
                            <DrawOutlineButton text='Buy Now' ></DrawOutlineButton>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default ProductDetails;