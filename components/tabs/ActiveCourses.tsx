import React, { useState } from 'react'
import EmptyCourse from '../Empty'
import ProgressCard from './ProgressCard'
import CardLoader from '../CardLoader'

const ActiveCourses = ({ data }: { data: any }) => {

    const [loading, setLoading] = useState<boolean>(false)

    return (
        <>
            {
                loading === true ? (<CardLoader />) : (

                    <div className='w-full pt-8 gridd' >


                        {
                            // loading === true ? (<Loader/>) :
                            data && data.length ? data.map((item: {}) => (

                                <div className='slide-up'>
                                    <ProgressCard data={item} />
                                </div>

                            )) : (

                                <EmptyCourse />

                            )
                        }



                    </div>
                )
            }
        </>
    )
}

export default ActiveCourses