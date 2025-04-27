import Image, { StaticImageData } from 'next/image'
import React from 'react'
// import homeSrc from '@/public/8aa6a993e1baf7f459972b7bacd772195594.jpeg'

interface ImageProps{
  imgURL: StaticImageData;
  altTxt: string;
  content: string;
}

export default function Hero(props: ImageProps) {
  return (
    <div className='h-screen relative'>
      <div className='absolute inset-0'>
        <Image src={props.imgURL} fill style={{ objectFit: 'cover' }} alt={props.altTxt} />
        {/* ⬆️这是让图片展示全了，且没有滚动条 */}
        <div className='absolute inset-0 bg-gradient-to-r from-black'></div>
      </div>
      <div className='flex justify-center pt-68'>
        <h1 className='text-white z-10 text-6xl'>{props.content}</h1>
      </div>
    </div>
  )
}