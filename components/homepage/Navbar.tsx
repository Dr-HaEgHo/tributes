import Image from 'next/image';
import React from 'react'

const Navbar = () => {

    return (
        <div className='w-full bg-primary10  py-2 z-50' >
            <div className='l-container'>
                <div className='w-full flex items-center justify-between'>
                    {/* LOGO */}
                    <a href='/' className='w-[123px]'>
                        <div className='flex items-center gap-1'>
                            <div className='h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white font-bold'>t.</div>
                            <p className='font-bold text-primary text-base'>tributes</p>
                        </div>
                    </a>


                    {/* NAV */}
                    <div className='flex items-center flex-1 justify-end mr-4 font-semibold text-primary'>
                        Hello Fam!
                    </div>
                    <button className='buttons-2 flex items-center gap-1 !py-1' >
                        <p className='text-xs 2xl:text-sm text-white' >Invite Others</p>
                        <Image
                            src={require('../../assets/icons/circleArrow.png')}
                            alt='stacfx.com'
                            className='w-[18px]'
                        />
                    </button>
                </div>
            </div>


        </div>
    )
}

export default Navbar;