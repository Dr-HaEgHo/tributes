'use client'
import FeaturedCourses from '@/components/homepage/FeaturedCourses';
import Hero from '@/components/homepage/Hero';
import Navbar from '@/components/homepage/Navbar';
import PricingSection from '@/components/homepage/PricingSection';
import Stats from '@/components/homepage/Stats';
import WhoWeAre from '@/components/homepage/WhoWeAre';
import { GlobalContext } from '@/context/context';
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';


export default function Home() {

  const { loading, setLoading} = useContext(GlobalContext)
  return (
   <div className=''>
    
   </div>
  )
}
