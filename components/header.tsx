"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


// const accessLink = ['/', '/performance', '/reliability','/scale']
export default function Header() {
  const linkData = [
    { name: "nini", href: "/performance" },
    { name: "liuhaocun", href: "/reliability" },
    { name: "songyi", href: "/scale" },
  ]
  const pathname = usePathname()
  // if(!accessLink.includes(pathname)) return null
  return (
    <div className="absolute w-full z-10">
      {/* ⬆️专门用来把头部搞抽离，z-10是层级的意思 */}
      <div className="flex justify-between container mx-auto text-white p-8 items-center">
        {/* ⬆️用来把home、和几个标签栏都分开布局，调整字体颜色什么的 */}
        <Link className="text-3xl font-bold" href='/'> 
          Home
        </Link>
        <div className="text-xl space-x-4">
          {
            linkData.map((link) => (
              <Link
                key={link.name}
                className={pathname === link.href ? "text-purple-500" : ""}
                href={link.href}
              >{ link.name}</Link>))
          }
          {/* <Link className={pathname === "/performance" ? "text-purple-500" : ""} href='/performance'>Performance</Link>
          <Link className={pathname === "/reliability" ? "text-purple-500" : ""} href='/reliability'>Reliability</Link>
          <Link className={pathname === "/scale" ? "text-purple-500" : ""} href='/scale'>Scale</Link> */}
        </div>
      </div>
    </div >
  )
}
