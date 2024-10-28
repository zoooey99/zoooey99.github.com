'use client'

import React from 'react'
import NavbarGlobal from "@/components/nav-bar-global"
import FooterGlobal from "@/components/footer-global"
import Header from "@/components/home/header"
import AboutMe from "@/components/home/about-me"
import Timeline from "@/components/home/timeline"
import Hobbies from "@/components/home/hobbies"
import Hero2 from "@/components/home/hero2"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarGlobal />

      <main className="flex-grow">
        <Hero2 />
        <AboutMe />
        <Timeline />
        <Hobbies />
      </main>

      <FooterGlobal />
    </div>
  )
}
