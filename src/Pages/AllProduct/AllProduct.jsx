import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "../../Component/AllProduct/ProductCard";
import { IoSearchSharp } from "react-icons/io5";
import DropDown from "../../Component/Shared/DropDown/Dropdown";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useState } from "react";

const AllProduct = () => {

    const [itemsPerPage, setItemsPerPage] = useState(12);
    const [count, setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);


    const { data = [] } = useQuery({
        queryKey: ['allProducts', currentPage, itemsPerPage],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:5000/all-product?page=${currentPage}&size=${itemsPerPage}`);
            return data;
        }
    });

    const { data: productCount = [] } = useQuery({
        queryKey: ['productCount'],
        queryFn: async () => {
            const { data } = await axios.get('http://localhost:5000/product-count');
            setCount(data.count);
            return data;
        }
    });

    console.log(currentPage);


    const totalPages = Math.ceil(count / itemsPerPage);
    const pages = [...Array(totalPages).keys()].map(el => el + 1);

    // handle pagination button
    const handlePaginationButton = (value) => {
        setCurrentPage(value);

    };


    return (
        <div className="relative min-h-screen w-full">
            <div className="pt-24">
                {/* heading text */}
                <div className="flex border border-[#BEBEBE] justify-between text-center items-center">

                    {/* right dropdown Filter */}
                    <div className="border-x border-[#BEBEBE]">
                        <DropDown dropBtnText="Filter"></DropDown>
                    </div>

                    {/* product length */}
                    <h1 className="font-light hidden md:block font-lexend py-4 w-full ">{data.length} Products</h1>

                    {/* search and right dropdown */}
                    <div className="flex">
                        {/* search */}
                        <div className="flex items-center gap-5 font-light font-lexend py-4 border-x px-5 md:px-10 border-[#BEBEBE] whitespace-nowrap">
                            <input type="text" placeholder="Search" className="bg-[#D8D8D8] w-40 outline-none" />
                            <button>
                                <IoSearchSharp className="text-2xl" />
                            </button>
                        </div>

                        {/* right dropdown Sort By */}
                        <div>
                            <DropDown dropBtnText="Post actions"></DropDown>
                        </div>
                    </div>
                </div>

                {/* card */}
                <div className="container mx-auto px-4 my-10">
                    <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center">
                        {data.map(product => (
                            <ProductCard key={product._id} productData={product} />
                        ))}
                    </div>
                </div>


                {/* pagination */}

                <div className="flex m-10 w-20 mx-auto">

                    {/* previous */}
                    <button
                        disabled={currentPage === 1}
                        onClick={() => handlePaginationButton(currentPage - 1)}>
                        <FaArrowAltCircleLeft></FaArrowAltCircleLeft>
                    </button>


                    {/* number */}
                    {pages.map((page, idx) => (
                        <button key={idx} onClick={() => handlePaginationButton(page)} className={`btn-outline ${currentPage === page ? 'text-red-600' : ''} px-5 py-2`}>{page}</button>
                    ))}


                    {/* next */}
                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => handlePaginationButton(currentPage + 1)}>
                        <FaArrowAltCircleRight></FaArrowAltCircleRight>
                    </button>
                </div>

            </div>
        </div >
    );
};

export default AllProduct;