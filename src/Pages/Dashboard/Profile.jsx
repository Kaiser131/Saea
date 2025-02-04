import useAuth from "../../hooks/useAuth";

const Profile = () => {
    const { user } = useAuth();
    return (
        <div className="min-h-screen w-screen flex justify-center items-center">
            <div className=" relative w-[400px] h-[600px] glass-morphism shadow-xl">
                <div className="bg-cover w-full h-full bg-center size-80 mr-4" style={{ backgroundImage: `url("${user?.photoURL}")` }} />
                <div className="absolute bottom-0 profile-clip w-[400px] h-[600px] bg-white" />
                <div className="absolute bottom-0 profile-clip2 w-[400px] h-[600px] bg-white opacity-50" />
                <div className="absolute bottom-0 profile-clip3 w-[400px] h-[600px]  bg-white opacity-30" />
                <div className="absolute bottom-0 profile-clip4 w-[400px] h-[600px]  bg-white opacity-20" />
                <div className="absolute bottom-0 profile-clip5 w-[400px] h-[600px]  bg-white opacity-20" />

                {/* center image */}
                <div className="bg-cover top-[270px] left-8 bg-center absolute rounded-full h-[100px] w-[100px] mr-4" style={{ backgroundImage: `url("${user?.photoURL}")` }} />

                <div className="absolute bottom-0 my-5 space-y-4 p-5">
                    <h1 className=" font-lexend text-4xl">{user?.displayName}</h1>
                    <div className="border-t border-black" />
                    <h1 className=" font-lexend font-light">{user?.email}</h1>
                    <h1 className=" font-lexend font-light">01648922413</h1>
                    <h1 className={`${user?.emailVerified ? 'text-[#1C1713]' : 'text-[#847E72]'}`}>{user?.emailVerified ? 'Verified' : 'Not Verified'} </h1>
                </div>

            </div>

        </div>

    );
};

export default Profile;