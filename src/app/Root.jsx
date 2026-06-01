"use client";

import NavbarMenu from "@/components/ui/NavbarMenu"

export default function Root({ children }) {
  return <>
    <div className="fixed top-0 left-0 w-full flex justify-center">
      <span className="text-[0.9rem] bg-yellow-600 text-white px-3.5 py-1">The website is currently under progress development!</span>
    </div>
    <NavbarMenu
      items={[
        { label: "Home", href: "/" },
        { label: "Posts", href: "/posts?t=article" },
        { label: "Achievements", href: "/achievements" },
        { label: "About Me?", href: "/about" },
        { label: "Old Web?", href: "https://yupibknpermen.my.id" },
        // { label: "Lena ExLab (AI)", href: "https://lena.yupibknpermen.my.id" },
        // { label: "Exclusive", href: "https://exclusive.yupibknpermen.my.id" },
      ]}
      socialmedia={[
        { label: "Github", href: "https://github.com/ernestoyoofi" },
        { label: "Tiktok", href: "https://tiktok.com/@nakiko.chan_" },
        { label: "Instagram", href: "https://instagram.com/nakiko.chan_" },
      ]}
    />
    {children}
  </>
}