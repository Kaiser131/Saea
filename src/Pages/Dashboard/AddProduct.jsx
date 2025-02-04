import WhiteFillupBtn from "../../Component/Shared/WhiteFillupBtn";

const AddProduct = () => {



    const handleSubmit = (e) => {
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

        console.log(name, brand, warranty, price, availability, material, waterResistance, SKU, category, details);


    };


    return (
        <div className=" min-h-screen min-w-screen">

            <div className="">
                <div className="border-b border-black">
                    <h1 className="text-4xl my-10 font-lexend text-center">Submit Product Details</h1>
                </div>

                {/* form */}
                <form onSubmit={handleSubmit} className="flex   flex-col py-10 px-5 max-w-[1000px] mx-auto capitalize gap-10">


                    {/* 1stdiv */}
                    <div className="flex  justify-between px-5 gap-10">

                        <div className=" w-1/2">
                            <label className="block text-2xl font-lexend">Name</label>
                            <input className="bg-[#D8D8D8] w-3/4 my-5 outline-none placeholder:text-black border-b border-black" type="text" name="name" placeholder="name" />
                        </div>

                        <div className=" w-1/2 ">
                            <label className="block text-xl dark:text-gray-300">Image</label>
                            <input type="file" className="block w-2/3 px-3 py-2 mt-2 text-sm text-gray-600 border border-gray-400 rounded-lg file:bg-[#BEBEBE] file:rounded-lg file:border-none file:text-gray-600  " />
                        </div>

                    </div>


                    {/* 2nd div */}
                    <div className="flex  justify-between px-5 gap-10">
                        <div className=" w-1/2">
                            <label className="block text-2xl font-lexend">Brand</label>
                            <input className="bg-[#D8D8D8] w-3/4 my-5 outline-none placeholder:text-black border-b border-black" type="text" name="brand" placeholder="brand" />
                        </div>

                        <div className=" w-1/2">
                            <label className="block text-2xl font-lexend">Warranty</label>
                            <input className="bg-[#D8D8D8] w-3/4 my-5 outline-none placeholder:text-black border-b border-black" type="text" name="warranty" placeholder="warranty" />
                        </div>
                    </div>

                    {/* 3rd div */}
                    <div className="flex  justify-between px-5 gap-10">
                        <div className=" w-1/2">
                            <label className="block text-2xl font-lexend">Price</label>
                            <input min={0} className="bg-[#D8D8D8] w-3/4 outline-none placeholder:text-black border-b border-black" type="number" name="price" placeholder="price" />
                        </div>

                        <div className=" w-1/2">
                            <label className="block text-2xl font-lexend">availability</label>
                            <input className="bg-[#D8D8D8] w-3/4 outline-none placeholder:text-black border-b border-black" type="text" name="availability" placeholder="availability" />
                        </div>
                    </div>


                    {/* 4th div */}
                    <div className="flex  justify-between px-5 gap-10">
                        <div className=" w-1/2">
                            <label className="block text-2xl font-lexend">material</label>
                            <input min={0} className="bg-[#D8D8D8] w-3/4 outline-none placeholder:text-black border-b border-black" type="text" name="material" placeholder="material" />
                        </div>

                        <div className=" w-1/2">
                            <label className="block text-2xl font-lexend">waterResistance</label>
                            <input className="bg-[#D8D8D8] w-3/4 outline-none placeholder:text-black border-b border-black" type="text" name="waterResistance" placeholder="Resistance" />
                        </div>
                    </div>


                    {/* 5th div */}
                    <div className="flex  justify-between px-5 gap-10">
                        <div className=" w-1/2">
                            <label className="block text-2xl font-lexend">SKU</label>
                            <input className="bg-[#D8D8D8] w-3/4 my-5 outline-none placeholder:text-black border-b border-black" type="text" name="SKU" placeholder="resistance" />
                        </div>

                        <div className=" w-1/2">
                            <label className="block text-2xl font-lexend">Category</label>
                            <select className="px-5 cursor-pointer h-10 border-b appearance-none border-black rounded-sm bg-[#D8D8D8] outline-none" name="category" id="">
                                <option disabled selected>Select</option>
                                <option value="Luxury">Luxury</option>
                                <option value="Smartwatches">Smartwatches</option>
                                <option value="Sports">Sports</option>
                                <option value="Casual">Casual</option>
                            </select>
                        </div>

                    </div>

                    {/* 6th div */}
                    <textarea name="details" id="" rows='5' className="rounded outline-none border border-gray-400 bg-[#D8D8D8] placeholder:p-5" placeholder="Descriptions"></textarea>


                    <button>
                        <WhiteFillupBtn size={325} text='Submit' ></WhiteFillupBtn>
                    </button>

                </form>
            </div>

        </div>
    );
};

export default AddProduct;