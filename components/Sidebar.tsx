'use client'

import { Logout, MenuBoard, People, Profile } from 'iconsax-react'
import Image from 'next/image';
import React, { useState } from 'react';
import { useParams, usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
// import Prompt from './Prompt';/
// import { useAppDispatch } from '@/store/hooks';
// import { logout } from '@/store/auth/authSlice';

const Sidebar = () => {

    const location = usePathname();
    const router = useRouter();
    const param = useParams();
    // const dispatch = useAppDispatch();



    const [onlineStatus, setOnlineStatus] = useState("online");
    const [logoutOpen, setLogoutOpen] = useState(false)

    const sidebarLinks = [
        { id: 1, image:require('../assets/icons/onboarding.png'), title: "Onboarding", route: "/dashboard/onboarding" },
        { id: 2, image:require('../assets/icons/dash.png'), title: "Dashboard", route: "/dashboard", subRoutes: "/dashboard/incubatees/new-incubatee", subRoutes1: `/dashboard/incubatees/${param?.id}` },
        { id: 3, image:require('../assets/icons/profile.png'), title: "Profile", route: "/dashboard/profile", subRoutes1: `/dashboard/users/${param?.id}` },
        { id: 4, image:require('../assets/icons/courses.png'), title: "Courses", route: "/dashboard/courses", subRoutes1: `/dashboard/users/${param?.id}` },
        { id: 5, image:require('../assets/icons/chat.png'), title: "Stac Hub", route: "/dashboard/chat", subRoutes1: `/dashboard/users/${param?.id}` },
        { id: 6, image:require('../assets/icons/chat.png'), title: "Templates & Downloads", route: "/dashboard/downloads", subRoutes1: `/dashboard/users/${param?.id}` },
        { id: 7, image:require('../assets/icons/settings.png'), title: "Settings", route: "/dashboard/settings", subRoutes1: `/dashboard/settings/${param?.id}` },
    ]

    const handleLogout = () => {
        // dispatch(logout())
        router.push('/login')
    }

    const handleCancel = () => {
        setLogoutOpen((prev: boolean) => prev = !prev)
    }


    return (
        <div className='w-full h-full sidebar-bg border-sidebarDiv border-r-[0.2px] bg-white ' >
            <div className="h-full w-full relative slim-scroll flex flex-col">

                {/* <Prompt
                    title='Are you sure you want to logout ?'
                    subtitle='You can always log back in at any time'
                    action={handleLogout}
                    action2={handleCancel}
                    btn1='Logout'
                    btn2='Cancel'
                    isOpen={logoutOpen}
                    setIsOpen={setLogoutOpen}
                /> */}

                {/* <div className='fixed -bottom-[80px] -right-[100px] w-[283px] h-auto 2xl:w-[303px] 2xl:h-[349px] ' >
                    <Image
                        src={require('../assets/images/logomark.png')}
                        alt='stacfx.com'
                        className='w-full'
                    />
                </div> */}

                {/* TOP  */}
                <div className="w-full py-6  2xl:py-10  flex flex-col items-center justify-center">
                    <div className='w-[50%] flex items-center justify-center ' >
                        <Image
                            src={require('../assets/images/fullLogo.png')}
                            alt='stacfx.com'
                            className='w-full'
                        />
                    </div>
                </div>

                
                {/* USER DETAILS SECTION */}
                <div className='w-full flex flex-col items-center gap-4 mb-[38px] mt-[20px] 2xl:mt-[27px] 2xl:mb-[47px]' >
                    <div className='w-[48px] h-[48px] rounded-full overflow-hidden flex items-center justify-center'>
                        <Image
                            src={require('../assets/images/Avatar.png')} 
                            alt='stacfx.com'
                        />
                    </div>
                    <div className='w-full flex flex-col items-center gap-1' >
                        <h2 className='text-base text-white font-[400] text-center' >Kenny Michael</h2>
                        <p className='text-xs text-userEmail font-[200] text-center' >kkmichaellll@gmail.com</p>
                    </div>
                </div>

                {/* LINKS SECTION */}
                <div className="w-full ">   



                    {/* MAIN LINKS */}

                    <div className="w-full flex flex-col items-start gap-1 py-2">
                        {sidebarLinks?.map((item) => (
                            <div onClick={() => {
                                router.push(item.route)
                            }} className={`w-full cursor-pointer relative transition duration-200 pl-[38px] py-[12px] 2xl:py-[15px] flex border-primary1 items-center gap-4 hover:bg-whiteHover active:bg-whiteActive`}
                                style={{
                                    color: "#fff",
                                    backgroundColor: location === item.route || location === item.subRoutes || location === item.subRoutes1 ? "#2A66AE" : "",
                                }}
                            > 
                                <div
                                    style={{
                                        width: location === item.route || location === item.subRoutes || location === item.subRoutes1 ? 3 : 0
                                    }}
                                    className={`transition duration-200 left-0 bg-appOrange h-[20px] 2xl:h-[26px] absolute`} />
                                
                                <div className='w-5 h-5' >
                                    <Image
                                        src={item.image }
                                        alt='stacfx.com'
                                        className='w-full'
                                    /> 
                                </div>
                                <p className={`text-xs 2xl:text-sm text-white font-[200]`} >{item.title && item.title}</p>
                            </div>
                        ))}
                    </div>




                    {/* SYSTEM LINKS */}


                    <div className="w-full flex flex-col items-start gap-2 py-3">
                        <div onClick={() => {
                            setLogoutOpen((prev: boolean) => prev = true)
                        }} className={`w-full cursor-pointer transition duration-200 p-2 flex border-primary1 items-center gap-4 hover:bg-sidebarTxtHover active:bg-sidebarTxtActive`} >
                            <Logout color="#D92C20" />
                            <p className={`text-xs 2xl:text-sm font-normal text-error`} >Logout</p>
                        </div>
                    </div>
                </div>


      





            </div>
        </div>
    )
}

export default Sidebar;