import { useMutation } from "@tanstack/react-query";
import WhiteFillupBtn from "../../Component/Shared/WhiteFillupBtn";
import axios from "axios";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { imageUpload } from "../../Utils/imageUpload";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddProduct = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { mutateAsync } = useMutation({
        mutationFn: async (addData) => {
            const { data } = await axiosSecure.post('/watch', addData);
            return data;
        },
        onSuccess: () => {
            toast.success('New Product Added Successfully !');
        }
    });

    // henrywilson19112


    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const warranty = form.warranty.value;
        const price = form.price.value;
        const availability = form.availability.value;
        const material = form.material.value;
        const waterResistance = form.waterResistance.value;
        const SKU = form.SKU.value;
        const category = form.category.value;
        const details = form.details.value;
        const image = form.image.files[0];

        const imageUrl = await imageUpload(image);

        console.log(imageUrl);

        const addData = {
            image: imageUrl,
            name,
            brand,
            warranty,
            price,
            availability,
            material,
            waterResistance,
            SKU,
            category,
            details,
            submittedBy: user?.email
        };

        console.log(addData);

        await mutateAsync(addData);

    };


    return (
        <div className=" min-h-screen min-w-full">

            <div className="text-black">
                <div className="border-b border-black">
                    <h1 className="text-4xl my-10 font-lexend text-center">Submit Product Details</h1>
                </div>

                {/* form */}
                <form onSubmit={handleSubmit} className="flex   flex-col py-10 px-5 max-w-[1000px] mx-auto capitalize gap-10">


                    {/* 1stdiv */}
                    <div className="flex  justify-between px-5 gap-5 md:gap-10">

                        <div className=" w-1/2">
                            <label className="block text-2xl font-lexend">Name</label>
                            <input required className="bg-[#D8D8D8] w-3/4 my-5 outline-none placeholder:text-gray-500 border-b border-black" type="text" name="name" placeholder="name" />
                        </div>

                        <div className=" w-1/2 ">
                            <label className="block text-xl dark:text-gray-300">Image</label>
                            <input required type="file" name="image" className="block w-2/3 px-3 py-2 mt-2 text-sm text-gray-600 border border-gray-400 rounded-lg file:bg-[#BEBEBE] file:rounded-lg file:border-none file:text-gray-600  " />
                        </div>

                    </div>


                    {/* 2nd div */}
                    <div className="flex  justify-between px-5 gap-5 md:gap-10">
                        <div className=" w-1/2">
                            <label className="block text-2xl font-lexend">Brand</label>
                            <input required className="bg-[#D8D8D8] w-3/4 my-5 outline-none placeholder:text-gray-500 border-b border-black" type="text" name="brand" placeholder="brand" />
                        </div>

                        <div className=" w-1/2">
                            <label className="block text-2xl font-lexend">Warranty</label>
                            <input required className="bg-[#D8D8D8] w-3/4 my-5 outline-none placeholder:text-gray-500 border-b border-black" type="text" name="warranty" placeholder="warranty" />
                        </div>
                    </div>

                    {/* 3rd div */}
                    <div className="flex  justify-between px-5 gap-5 md:gap-10">
                        <div className=" w-1/2">
                            <label className="block text-2xl font-lexend">Price</label>
                            <input required min={0} className="bg-[#D8D8D8] w-3/4 outline-none placeholder:text-gray-500 border-b border-black" type="number" name="price" placeholder="price" />
                        </div>

                        <div className=" w-1/2">
                            <label className="block text-2xl font-lexend">availability</label>
                            <input required className="bg-[#D8D8D8] w-3/4 outline-none placeholder:text-gray-500 border-b border-black" type="text" name="availability" placeholder="availability" />
                        </div>
                    </div>


                    {/* 4th div */}
                    <div className="flex  justify-between px-5 gap-5 md:gap-10">
                        <div className=" w-1/2">
                            <label className="block text-2xl font-lexend">material</label>
                            <input required min={0} className="bg-[#D8D8D8] w-3/4 outline-none placeholder:text-gray-500 border-b border-black" type="text" name="material" placeholder="material" />
                        </div>

                        <div className=" w-1/2">
                            <label className="block text-2xl font-lexend">Durability</label>
                            <input required className="bg-[#D8D8D8] w-3/4 outline-none placeholder:text-gray-500 border-b border-black" type="text" name="waterResistance" placeholder="Resistance" />
                        </div>
                    </div>


                    {/* 5th div */}
                    <div className="flex  justify-between px-5 gap-5 md:gap-10">
                        <div className=" w-1/2">
                            <label className="block text-2xl font-lexend">SKU</label>
                            <input required className="bg-[#D8D8D8] w-3/4 my-5 outline-none placeholder:text-gray-500 border-b border-black" type="text" name="SKU" placeholder="resistance" />
                        </div>

                        <div className=" w-1/2">
                            <label className="block text-2xl font-lexend">Category</label>
                            <select required className="px-5 cursor-pointer h-10 border-b appearance-none border-black rounded-sm bg-[#D8D8D8] outline-none" name="category" id="">
                                <option disabled selected>Select</option>
                                <option value="Luxury">Luxury</option>
                                <option value="Smartwatches">Smartwatches</option>
                                <option value="Sports">Sports</option>
                                <option value="Casual">Casual</option>
                            </select>
                        </div>

                    </div>

                    {/* 6th div */}
                    <textarea required name="details" id="" rows='5' className="rounded outline-none border border-gray-400 bg-[#D8D8D8] placeholder:p-5" placeholder="Descriptions"></textarea>


                    <button>
                        <WhiteFillupBtn size={325} text='Submit' ></WhiteFillupBtn>
                    </button>

                </form>
            </div>

        </div>
    );
};

export default AddProduct;