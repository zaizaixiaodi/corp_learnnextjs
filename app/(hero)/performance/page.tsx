import Image, { StaticImageData } from 'next/image'
import React from 'react'
import performanceSrc from '@/public/a6ffe54470a840fa8c91d5b40bc8c0a0.webp'
import Hero from '@/components/hero'

import { Metadata } from 'next'
import { notFound } from 'next/navigation'


export const metadata: Metadata = {
  title: 'Performance',
}
export default function Page() {
  // notFound()
  return (
    <Hero imgURL={performanceSrc} altTxt='一个图片' content='妮子 is GOOD' />
  )
}