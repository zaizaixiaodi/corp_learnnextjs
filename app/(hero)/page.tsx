import Image, { StaticImageData} from 'next/image'
import React from 'react'
import homeSrc from '@/public/8aa6a993e1baf7f459972b7bacd772195594.jpeg'
import Hero from '@/components/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title:'Home',
}
export default function page() {
  console.log('hero子路由组的page渲染了');
  return (
    <Hero imgURL={homeSrc}  altTxt='一个图片' content='Next.js is GOOD'/>
  )
}