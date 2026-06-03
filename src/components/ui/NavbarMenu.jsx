"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Xmark, ArrowUpRight } from "@gravity-ui/icons";

export default function NavbarMenu({ items = [], socialmedia = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathnameNow = usePathname();

  const openKey = (e) => {
    if (e.key === "Escape") {
      setIsOpen(!isOpen)
    }
  }
  useEffect(() => {
    document.addEventListener("keydown", openKey)
    return () => {
      document.removeEventListener("keydown", openKey)
    }
  }, [isOpen])

  return <>
    <motion.div
      onClick={() => {
        setIsOpen(false);
      }}
      className="fixed top-0 left-0 w-full h-dvh bg-purana-1-low/50 z-100"
      initial={{
        opacity: 0,
        pointerEvents: "none",
        backdropFilter: "blur(0px)"
      }}
      animate={{
        transition: { duration: 0.7, delay: 0.05, ease: [0.76, 0, 0.24, 1] },
        opacity: isOpen? 1:0, 
        pointerEvents: isOpen? "auto":"none",
        backdropFilter: isOpen? "blur(12px)":"blur(0px)"
      }}
    />
    <button
      className="fixed left-3 bottom-3 bg-neutral-200/50 backdrop-blur-md text-black hover:text-purana-1-low duration-150 cursor-pointer pl-3 px-4 py-2 rounded-4xl outline-none flex items-center z-102 select-none"
      onClick={() => { setIsOpen(!isOpen) }}
    >
      <motion.div
        initial={{
          rotate: 45
        }}
        animate={{
          transition: { duration: 0.8, delay: 0.05, ease: [0.76, 0, 0.24, 1] },
          rotate: isOpen? -360:45,
        }}
        className="w-[20px] h-[20px] flex items-center justify-center"
      >
        <Xmark />
      </motion.div>
      <div className="overflow-hidden w-[43px] h-[20px] select-none">
        <motion.div
          initial={{
            marginTop: 0
          }}
          animate={{
            marginTop: isOpen? -100:0,
            transition: { duration: 0.8, delay: 0.05, ease: [0.76, 0, 0.24, 1] }
          }}
          className="flex flex-col items-end w-[43px] text-sm"
        >
          <span>Close</span>
          <span>Open</span>
          <span>Close</span>
          <span>Open</span>
          <span>Close</span>
          <span>Open</span>
        </motion.div>
      </div>
    </button>
    <motion.nav
      initial={{
        marginLeft: "-100%"
      }}
      animate={{
        marginLeft: isOpen? "0%":"-100%",
        transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed top-0 left-0 bg-white/60 text-black w-full h-dvh max-w-md z-101 flex flex-col select-none"
    >
      <div className="h-[70px]" />
      <div className="px-7 h-[calc(100vh-140px)] flex flex-col items-center justify-center">
        {items.map((item, index) => {
          const isActive = pathnameNow === item.href.split("?")[0];
          const isExternal = item.href.startsWith("http");
          let urlHref = item.href

          if (isExternal) {
            const baseURL = new URL(item.href)
            baseURL.searchParams.set("utm_source", "yupibknpermen.my.id")
            baseURL.searchParams.set("utm_medium", "link")
            baseURL.searchParams.set("utm_content", "navigation")
            urlHref = baseURL.toString()
          }

          return <Link
            target={isExternal? "_blank":""}
            key={index}
            href={urlHref}
            className={"w-full h-[44px] block py-1 my-1 duration-100 overflow-hidden outline-blue-400 "+(isActive? "text-purana-2 hover:text-purana-1":"hover:text-purana-2")}
            onClick={() => { setIsOpen(false) }}
          >
            <motion.span
              initial={{
                marginTop: "55px",
                transform: "rotate(6deg)"
              }}
              animate={{
                marginTop: isOpen? "0":"55px",
                transform: isOpen? "rotate(0deg)":"rotate(6deg)",
                transition: {
                  duration: isOpen? 0.7:0.2,
                  delay: isOpen? 0.6 + (0.05 * index) : (0.05 * (items.length - 1 - index)),
                  ease: [0.76, 0, 0.24, 1]
                }
              }}
              className="flex items-start text-3xl font-bold uppercase tracking-tighter"
            >
              {item.label}
              {isExternal && <div className="flex w-[28px] h-[36px] items-center">
                <ArrowUpRight
                  width={28}
                  height={28}
                />
              </div>}
              <span className="text-sm ml-2 text-purana-3">{String(index + 1).padStart(2, "0")}</span>
            </motion.span>
          </Link>
        })}
      </div>
      <div className="h-[70px]" />
    </motion.nav>
  </>
}