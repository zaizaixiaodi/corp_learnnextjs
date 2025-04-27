"use client"  //这个是为了解决下面的报错
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
//You're importing a component that needs `useState`. This React hook only works in a client component. To fix, mark the file (or its parent) with the `"use client"` directive.
//为了解决上面这个问题，我们要在上面写“useState”

const linkData = [
  { name: "About", path: "/dashboard/about" },
  { name: "Settings", path: "/dashboard/settings" },
]

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0)
  const pathname = usePathname() //
  // console.log(pathname);


  return (
    <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto mt10">
      <div className="flex gap-4 font-bold text-lg mb-4">
        {
          linkData.map((link) => (
            <Link key={link.path} className={pathname === link.path ? "text-purple-500" : ""} href={link.path}>{link.name}</Link>
          ))
        }

      </div>
      <h2>Dashboard Layout{count}</h2>
      <button className="bg-black text-white p-2 my-4 rounded-md" onClick={() => setCount(count + 1)}>increment</button>
      {children}
    </div>
  );
}