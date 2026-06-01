"use client";

import { useState } from "react"
import { Tabs } from "@heroui/react"

export default function Posts() {
  return <div className="w-full max-w-5xl m-auto px-2">
    <h1 className="font-bold text-4xl tracking-tighter my-6">Posts</h1>
    <Tabs>
      <Tabs.ListContainer className="w-[240px]">
        <Tabs.List aria-label="Options" className="bg-white *:data-[selected=true]:text-accent-foreground">
          <Tabs.Tab id="article">
            Article
            <Tabs.Indicator className="bg-purana-2 shadow-none"/>
          </Tabs.Tab>
          <Tabs.Tab id="project-and-show-off">
            Show Off
            <Tabs.Indicator className="bg-purana-2 shadow-none"/>
          </Tabs.Tab>
        </Tabs.List>
      </Tabs.ListContainer>
      <Tabs.Panel className="pt-4" id="article">
        <div className="w-full h-120 flex flex-col items-center justify-center">
          <img
            width={80}
            src="https://raw.githubusercontent.com/ernestoyoofi/ernestoyoofi/refs/heads/main/image/purana-icon.webp"
          />
          <p className="text-neutral-600 mt-2">This content is currently unavailable</p>
        </div>
      </Tabs.Panel>
      <Tabs.Panel className="pt-4" id="project-and-show-off">
        <div className="w-full h-120 flex flex-col items-center justify-center">
          <img
            width={80}
            src="https://raw.githubusercontent.com/ernestoyoofi/ernestoyoofi/refs/heads/main/image/purana-icon.webp"
          />
          <p className="text-neutral-600 mt-2">This content is currently unavailable</p>
        </div>
      </Tabs.Panel>
    </Tabs>
  </div>
}