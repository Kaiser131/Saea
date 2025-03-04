import { useQuery } from "@tanstack/react-query";
import ProductCard from "../../Component/AllProduct/ProductCard";
import { IoSearchSharp } from "react-icons/io5";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

// filter icons
import { IoDiamondOutline } from "react-icons/io5";
import { BsSmartwatch } from "react-icons/bs";
import { MdSportsFootball } from "react-icons/md";
import { TbPeace } from "react-icons/tb";

// sortBy icons
import { MdOutlineTurnSharpRight } from "react-icons/md";
import { MdUTurnLeft } from "react-icons/md";
import SortByDropdown from "../../Sections/AllProducts/DropDown/SortByDropdown";
import FilterDropdown from "../../Sections/AllProducts/DropDown/FilterDropdown";
import useAuth from "../../hooks/useAuth";
import Loading from "../Loading/Loading";
import useAxiosCommon from "../../hooks/useAxiosCommon";


const AllProduct = () => {

    const [itemsPerPage, setItemsPerPage] = useState(12);
    const [count, setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [filterDropdownData, setFilterDropdownData] = useState("");
    const [sortByDropdownData, setSortByDropdownData] = useState("");
    const [search, setSearch] = useState("");

    const axiosCommon = useAxiosCommon();


    // left Filter dropdownData
    const filterDropdownOptionsData = [
        { name: 'Luxury', icon: IoDiamondOutline },
        { name: 'Smartwatches', icon: BsSmartwatch },
        { name: 'Sports', icon: MdSportsFootball },
        { name: 'Casual', icon: TbPeace },
    ];

    // right sortBy dropDownData
    const sortByDropdownOptionsData = [
        { name: 'Price, low to high', icon: MdOutlineTurnSharpRight },
        { name: 'Price,high to low', icon: MdUTurnLeft },
    ];


    const { loading } = useAuth();

    const { data = [], isLoading } = useQuery({
        queryKey: ['allProducts', currentPage, itemsPerPage, filterDropdownData, sortByDropdownData, search],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/all-product?page=${currentPage}&size=${itemsPerPage}&category=${filterDropdownData}&sort=${sortByDropdownData}&search=${search}`);
            return data;
        },
    });

    // send data query for length
    const { data: productCount = [] } = useQuery({
        queryKey: ['productCount', filterDropdownData, search],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/product-count?category=${filterDropdownData}&search=${search}`);
            setCount(data.count);
            return data;
        }
    });



    const totalPages = Math.ceil(count / itemsPerPage);
    const pages = [...Array(totalPages).keys()].map(element => element + 1);

    // handle pagination button
    const handlePaginationButton = (value) => {
        setCurrentPage(value);
    };

    if (loading || isLoading) {
        return <Loading></Loading>;
    }

    // search function
    const handleSearch = (e) => {
        e.preventDefault();
        const text = e.target.search.value;
        setSearch(text);
    };




    return (
        <div className="relative min-h-screen w-full ">


            <div className="pt-24">
                {/* heading text */}
                <div className="flex border border-[#BEBEBE] justify-between text-center items-center">

                    {/* left filter dropdown  */}
                    <div className="relative md:border-x border-[#BEBEBE] z-50">
                        <FilterDropdown
                            setCurrentPage={setCurrentPage}
                            dropDownOptionsData={filterDropdownOptionsData}
                            dropBtnText="Filter"
                            setFilterDropdownData={setFilterDropdownData}
                            setSortByDropdownData={setSortByDropdownData}
                            setSearch={setSearch}
                        />
                    </div>

                    {/* product length */}
                    <h1 className="font-light hidden md:block font-lexend md:py-4 md:w-full ">{data.length} Products</h1>

                    {/* search and right dropdown */}
                    <div className="flex">
                        {/* search */}

                        <form onSubmit={handleSearch} className="flex px-2 items-center gap-2 font-light font-lexend py-4 border-x  md:px-10 border-[#BEBEBE] whitespace-nowrap">
                            <input type="text" placeholder="Search" name="search" className="bg-[#D8D8D8] placeholder-black w-20 outline-none" />
                            <button>
                                <IoSearchSharp className="text-2xl" />
                            </button>
                        </form>

                        {/* right dropdown Sort By */}
                        <div className="">
                            <SortByDropdown setDropdownData={setSortByDropdownData} dropDownOptionsData={sortByDropdownOptionsData} dropBtnText='Sort By' ></SortByDropdown>
                        </div>
                    </div>
                </div>

                {/* card */}
                <div className="container mx-auto px-4 my-10">
                    <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center z-10">
                        {data.map(product => (
                            <ProductCard key={product._id} productData={product} />
                        ))}
                    </div>
                </div>


                {/* pagination */}

                <div className="flex text-xl py-10 w-20 mx-auto">

                    {/* previous */}
                    <button
                        disabled={currentPage === 1}
                        onClick={() => handlePaginationButton(currentPage - 1)}>
                        <FaArrowLeft />
                    </button>


                    {/* number */}
                    {pages.map((page, idx) => (
                        <button key={idx} onClick={() => handlePaginationButton(page)} className={`btn-outline ${currentPage === page ? 'text-red-600' : ''} px-5 py-2`}>{page}</button>
                    ))}


                    {/* next */}
                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => handlePaginationButton(currentPage + 1)}>
                        <FaArrowRight />
                    </button>
                </div>

            </div>
        </div >
    );
};

export default AllProduct;