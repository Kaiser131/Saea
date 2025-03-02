import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useState } from 'react';
import FillUpBtn from '../Shared/FillUpBtn';
import { Link } from 'react-router-dom';
import WhiteFillupBtn from '../Shared/WhiteFillupBtn';



const CloseModal = ({ uxModal, setUxModal }) => {


    return (
        <div>

            <Dialog open={uxModal} as="div" className="relative z-10 focus:outline-none" onClose={() => setUxModal(!uxModal)} __demoMode>
                <div className="fixed inset-0 z-10 bg-[#8C8C8C] bg-opacity-80 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="w-full max-w-md rounded p-6 py-16 bg-[#BEBEBE] duration-700 delay-75 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            <DialogTitle as="h3" className="text-2xl text-center font-lexend font-medium">
                                Added To The Cart !
                            </DialogTitle>

                            <div className="mt-4">

                                <p className='text-center my-5'>Do You Want To Continue ?</p>

                                <div className='flex justify-evenly'>
                                    <Link to={'/products'}>
                                        <WhiteFillupBtn text={'Buy More '} />
                                    </Link>

                                    <Link to={'/dashboard/myCart'}>
                                        <FillUpBtn text={'See Cart'} />
                                    </Link>
                                </div>

                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>

        </div>
    );
};

export default CloseModal;