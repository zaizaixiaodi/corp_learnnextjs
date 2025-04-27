import Image, { StaticImageData } from 'next/image'
import React from 'react'
import scaleSrc from '@/public/8dfa9a6613d1f53efa4e3b55627481bd.jpg'
import Hero from '@/components/hero'
import { Metadata } from 'next'

export const metadata:Metadata = {
  title: 'Scale',
}
export default function page() {
  return (
    <Hero imgURL={scaleSrc} altTxt='一个图片' content='铁子 is GOOD' />
  )
}