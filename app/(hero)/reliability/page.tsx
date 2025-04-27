import Image, { StaticImageData } from 'next/image'
import React from 'react'
import reliabilitySrc from '@/public/v2-7fb023abcdbf35bcd1dddc89ca4053e5.png'
import Hero from '@/components/hero'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reliability',
}
export default function page() {
  return (
    <Hero imgURL={reliabilitySrc} altTxt='一个图片' content='存子 is Good' />
  )
}