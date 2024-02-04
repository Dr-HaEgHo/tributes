'use client'
import LatestCard from '@/components/LatestCard'
import OngoingCard from '@/components/OngoingCard'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const latest = [
    { id: 1, title: "The Fundamentals of FX trading - Beginner to Advanced", total: 20, completed: 0, instructor: "Kore Ayobami" },
    { id: 2, title: "The Fundamentals of FX trading - Beginner to Advanced", total: 20, completed: 0, instructor: "Kore Ayobami" },
    { id: 3, title: "The Fundamentals of FX trading - Beginner to Advanced", total: 20, completed: 0, instructor: "Kore Ayobami" },
    // { id: 4, title: "The Fundamentals of FX trading - Beginner to Advanced", total: 20, completed: 0, instructor: "Kore Ayobami" },
]

const ongoing = [
    { id: 1, title: "The Fundamentals of FX trading - Beginner to Advanced", total: 20, completed: 4, instructor: "Kore Chiefdrummer" },
    { id: 2, title: "The Fundamentals of FX trading - Beginner to Advanced", total: 20, completed: 10, instructor: "Kore Chiefdrummer" },
    { id: 3, title: "The Fundamentals of FX trading - Beginner to Advanced", total: 20, completed: 12, instructor: "Kore Chiefdrummer" },
    // { id: 4, title: "The Fundamentals of FX trading - Beginner to Advanced", total: 20, completed: 12, instructor: "Kore Chiefdrummer" },
]

const page = () => {
    return (
        <div className='w-full bg-white ' >
            <div className='dash-container' >
                <div className="w-full pt-[26px] 2xl:pt-[34px] ">


                    {/* TOP BAR WELCOME */}
                    <div className='w-full bg-primary2 h-[182px] 2xl:h-[202px] p-[26px] 2xl:p-[30px] relative rounded-xl overflow-hidden flex flex-col items-start justify-between' >



                        {/* ABSOLUTE BG IMG */}
                        <div className='w-[357px] 2xl:w-[387px] absolute z-0 -top-[10px] right-[128px] 2xl:right-[148px]' >
                            <Image
                                src={require('../../assets/images/userdash.png')}
                                alt='stacfx.com'
                                className='w-full'
                            />
                        </div>


                        {/* ABSOLUTE USET IMAGE */}
                        <div className='w-[290px] 2xl:w-[304px] absolute z-0 left-[300px] 2xl:left-[338px]' >
                            <Image
                                src={require('../../assets/images/logomark.png')}
                                alt='stacfx.com'
                                className='w-full'
                            />
                        </div>

                        <p className='text-white text-[11px] 2xl:text-[13px] z-10 ' > December 16, 2024</p>

                        <div className='z-10' >
                            <h3 className='text-white text-[28px] 2xl:text-[32px] ' >Welcome Back, Khenny</h3>
                            <span className='text-userEmail text-[11px] 2xl:text-[13px] font-[100] ' >Always stay updated in your personal dashboard</span>
                        </div>
                    </div>


                    {/* DIVIDER DIV  */}
                    <div className='w-full py-[16px] 2xl:py-[30px] flex items-center gap-[12px]'>
                        <h3 className=' text-[17px] 2xl:text-[20px]' >Latest Lessons</h3>
                        <div className='flex-[1] h-[1px] bg-dividerGray' />
                        <Link href='/' ><p className='text-[13px] 2xl:text-[15px] underline' >Show All</p></Link>
                    </div>



                    {/* COURSES MAPPED OUT */}
                    <div className='flex gap-[18px] 2xl:gap-[24px] justify-between' >
                        {
                            latest && latest.map((item) => (
                                <div className='w-[33%]' >
                                    <LatestCard data={item} />
                                </div>
                            ))
                        }
                    </div>


                    {/* DIVIDER DIV  */}
                    <div className='w-full py-[16px] 2xl:py-[30px] flex items-center gap-[12px]'>
                        <h3 className=' text-[17px] 2xl:text-[20px]' >Ongoing Courses</h3>
                        <div className='flex-[1] h-[1px] bg-dividerGray' />
                        <Link href='/' ><p className='text-[13px] 2xl:text-[15px] underline' >Show All</p></Link>
                    </div>

                    {/* COURSES MAPPED OUT */}
                    <div className='w-full flex items-start gap-[18px] 2xl:gap-[24px] flex-nowrap' >
                        {
                            ongoing && ongoing.map((item) => (
                                <div className='w-[33%]' >
                                    <OngoingCard data={item} />
                                </div>
                            ))
                        }
                    </div>


                    <div className='h-[5rem]' />
                </div>
            </div>
        </div>
    )
}

export default page;