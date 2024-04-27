'use client'
import { GlobalContext } from '@/context/context'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'

const Stats = () => {

    const tabs = [
        {id: 1, title:"About", route: "/about", number:"" },
        {id: 2, title:"Tributes", route: "/tributes", number:"" },
        {id: 3, title:"Gallery", route: "/gallery", number:"" },
        {id: 4, title:"Stories", route: "/stories", number:"" },
    ]

    const router = useRouter()
    const { tabActive, setTabActive } = useContext(GlobalContext)

    const handleRoute = (arg: string) => {
        setTabActive(arg)
        router.push(arg)
    }

    return (
        <div className='w-full' >
                <div className='w-full bg-primary2 rounded-tr-xl rounded-tl-xl flex items-center gap-2 px-1 pt-1'>
                    {
                        tabs && tabs.map((tab, i) => (
                            <button onClick={() => {handleRoute(tab.route)}} key={tab.id} className={`transition duration-200 px-12 py-3 rounded-tr-lg text-sm font-semibold rounded-tl-lg ${tabActive === tab.route ? 'bg-white ': 'text-white hover:bg-whiteHover'}`}>{ tab.title.toUpperCase() }</button>
                        ))
                    }
                </div>
        </div>
    )
}

export default Stats