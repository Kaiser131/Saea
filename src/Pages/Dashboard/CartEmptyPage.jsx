const CartEmptyPage = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center text-black">
            <div className="text-center p-6">
                <h1 className="font-kaushan text-3xl md:text-4xl">Your Cart is Empty</h1>
                <h1 className="font-kaushan  md:text-lg mt-5">Please Add Something!</h1>
                <img className="md:h-[500px] md:w-[500px] size-72 mx-auto" src="/images/EmptyCart.png" alt="" />
            </div>
        </div>

    );
};

export default CartEmptyPage;