import { departments } from '@/utils/data'
import Link from 'next/link'
import React from 'react'

const Department = () => {
  return (
    <div>
      <h1 className="text-2xl font-extrabold mb-6">Department</h1>
      <div className="flex flex-col gap-2">
        {
            departments.map((item, index) => (
                <Link href="/" key={index}> {item} </Link>
            ))
        }
      </div>
    </div>
  )
}

export default Department
