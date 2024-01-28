import Image from 'next/image'
import React from 'react'

const stages = [
  {id:1, title:"Introduction", isCompleted: true},
  {id:2, title:"Phase 1", isCompleted: true},
  {id:3, title:"Phase 2", isCompleted: false},
  {id:4, title:"Phase 3", isCompleted: false},
  {id:5, title:"Phase 4", isCompleted: false}
]

const OnboardingPanel = () => {
  return (
    <div className='w-full p-[13px] 2xl:p-[17px] bg-onPanelGray rounded-2xl flex flex-col '  >
      
      
      {/* BUTTON TO GO TO DASHBOARD */}
      <div className='w-full '>
        <button className='w-full p-[10px] bg-blueGray rounded flex items-center justify-center gap-[10px]' >
          <Image
            src={ require('../assets/icons/leftarrow.png') }
            alt="stackfx.com"
            className='w-[18px]'
          />
          <p className='text-primary text-[13px] font-[200]' >Go to Dashboard</p>
        </button>
      </div>
    
    
      {/* ONBOARDING PROGRESS */}
      <div className='w-full mt-[29px] 2xl:mt-[39px] mb-[38px] 2xl:mb-[50px]' >
        <h3 className='text-primary2 text-sm font-normal mb-[9px] 2xl:mb-[12px]' >Onboarding Progress </h3>

        {/* PROGRESS BAR */}
        <div className='w-full h-[5px] bg-progressTrack rounded-full mb-2' >
          <div className='w-[20%] bg-progress h-full rounded-full'   />
        </div>


        <p className='text-greytxt text-xs font-normal' >20% Complete</p>
      </div>


      {/* ONBOARDING STAGES */}
      <div className='w-full flex flex-col gap-[18px] ' >


        {/* MAPPED STAGES */}
        {
          stages && stages.map((item) => (
            <div key={item.id} className='w-full flex items-center justify-between' >
              <p className='text-headDesc text-[13px] font-normal' >{item.title}</p>

              {item.isCompleted === true ? (<Image
                src={require('../assets/icons/bluetick.png')}
                alt='stacfx.com'
                className='w-[20px]'
              />) : (<Image
                src={require('../assets/icons/notick.png')}
                alt='stacfx.com'
                className='w-[18px]'
              />)}
            </div>
          )) 
        }

      </div>
    
    
    
    </div>
  )
}

export default OnboardingPanel