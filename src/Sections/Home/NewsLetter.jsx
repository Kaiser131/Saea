import EncryptButton from "../../Component/Shared/EncryptBtn";
import TextBanner from "../../Component/TextBanner/TextBanner";

const NewsLetter = () => {
    return (
        <div>

            <div className="my-10">
                <TextBanner heading="Time for Something Special" subHeading="Join our newsletter for premium insights and unbeatable offers on luxury watches." ></TextBanner>
            </div>

            <section className="flex mb-10 flex-col max-w-4xl mx-auto overflow-hidden bg-white rounded shadow-lg dark:bg-gray-800 md:flex-row md:h-48">
                <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-black md:dark:bg-gray-800">
                    <div className="px-6 py-6 md:px-8 md:py-0">
                        <h2 className="text-lg font-bold font-merriway text-gray-700 dark:text-white md:text-gray-100">
                            Keep Time with Us
                        </h2>

                        <p className="mt-2 text-sm text-gray-600 font-sirin dark:text-gray-400 md:text-gray-400">
                            Be the first to discover new arrivals, exclusive deals, and timeless classics.
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
                    <form>
                        <div className="flex flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                            <input
                                className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"
                                type="text"
                                name="email"
                                placeholder="Enter your email"
                                aria-label="Enter your email"
                            />

                            <EncryptButton name="SUBSCRIBE" />

                        </div>
                    </form>
                </div>
            </section>

        </div>
    );
};

export default NewsLetter;