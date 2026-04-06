import React, { ReactElement } from 'react'
import { FaRegCircleDot } from 'react-icons/fa6'
import { GoDotFill } from 'react-icons/go'

export default function Eyebrow({children} :{children: ReactElement | string}) {
  return (
    <div className='flex items-center gap-2'>
      <GoDotFill size={20} />
        <p className='font-helvetica uppercase pb-[0.8px] text-md'>
          {children}
        </p>
    </div>
  )
}
