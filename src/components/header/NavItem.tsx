"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItem = ({item}: {item: {title: string, path: string}}) => {
    const pathname = usePathname();
  return (
    <Link href={item.path} className={`${pathname === item.path && "text-primary"}`}>
        {item.title}
    </Link>
  )
}

export default NavItem
