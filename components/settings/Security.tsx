import React from 'react'
import { InputFade } from '../Input'
import Image from 'next/image'

const Security = () => {
  return (
      <div className='w-full' >

          {/* TOP  */}
          <div className='w-full mb-[56px]' >
              <h3 className='text-lg 2xl:text-xl text-headDesc ' >Password</h3>
          </div>


          {/* PROFILE DIV */}
          <div className='w-full flex flex-col items-center' >


              {/* PROFILE FORM */}
              <div className='w-[360px]'>
                  <form className='w-full flex flex-col gap-4 ' >
                      <InputFade
                          label='Existing Password'
                          placeholder="e.g Khenny"
                          type='text'
                          isDisabled={false}
                          setValue={() => { }}
                      />
                      <InputFade
                          label='New Password'
                          placeholder="e.g Michael"
                          type='text'
                          isDisabled={false}
                          setValue={() => { }}
                      />
                      <InputFade
                          label='Confirm password'
                          placeholder="Kendynamite001"
                          type='text'
                          isDisabled={false}
                          setValue={() => { }}
                      />
                    
                      <button className='buttons' >
                          <p className='text-[13px] 2xl:text-[15px]'>Update Password</p>
                      </button>
                      <button className='buttons-2 !bg-blueGray' >
                          <p className='text-[13px] 2xl:text-[15px] text-primary'>Reset Password</p>
                      </button>
                  </form>
              </div>
          </div>

      </div>
  )
}

export default Security