import Link from "next/link";

export default function Homepage() {
  return <div className="w-full h-dvh min-h-100 flex items-center justify-center">
    <div className="w-full max-w-sm md:max-w-4xl flex max-md:flex-col-reverse gap-4 items-center justify-center px-5">
      <div className="w-full md:w-[calc(100%-300px)] h-full flex flex-col justify-between">
        <div className="w-full max-sm:text-center">
          <h2 className="font-bold text-3xl tracking-tight"><img src="https://em-content.zobj.net/source/apple/453/waving-hand_light-skin-tone_1f44b-1f3fb_1f3fb.png" width={32} height={32} className="mr-1.5 max-sm:hidden"/>Hi!, I'm Ernestoyoofi <span className="text-pink-600">(Yupi!)</span></h2>
          <p className="tracking-tight text-neutral-500">Want to get to know me? Are you really keen, or what? <Link href="/about" className="text-purana-2">Learn more (≧∇≦)ﾉ</Link></p>
        </div>
        <div className="mt-4 w-full flex flex-wrap gap-1 tracking-tighter text-neutral-500 max-sm:justify-center">
          <span className="cursor-pointer active:scale-90 hover:rotate-2 duration-200 text-blue-500 bg-blue-100 border border-blue-200 px-3.5 py-0.5 rounded-3xl flex items-center">
            <img src="https://em-content.zobj.net/source/apple/453/laptop_1f4bb.png" width={16} height={16} className="mr-1.5"/>
            Frontend Dev (React & React Native)
          </span>
          <span className="cursor-pointer active:scale-90 hover:-rotate-3 duration-200 text-fuchsia-500 bg-fuchsia-100 border border-fuchsia-200 px-3.5 py-0.5 rounded-3xl flex items-center">
            <img src="https://em-content.zobj.net/source/apple/453/chains_26d3-fe0f.png" width={16} height={16} className="mr-1.5"/>
            Network Engineering
          </span>
          <span className="cursor-pointer active:scale-90 hover:-rotate-1 duration-200 text-pink-500 bg-pink-100 border border-pink-200 px-3.5 py-0.5 rounded-3xl flex items-center">
            <img src="https://em-content.zobj.net/source/apple/453/paintbrush_1f58c-fe0f.png" width={16} height={16} className="mr-1.5"/>
            Poster Design/GFX (Figma)
          </span>
          <span className="cursor-pointer active:scale-90 hover:rotate-2 duration-200 text-emerald-500 bg-emerald-100 border border-emerald-200 px-3.5 py-0.5 rounded-3xl flex items-center">
            <img src="https://em-content.zobj.net/source/apple/453/camera_1f4f7.png" width={16} height={16} className="mr-1.5"/>
            Photographer
          </span>
          <span className="cursor-pointer active:scale-90 hover:-rotate-4 duration-200 text-orange-500 bg-orange-100 border border-orange-200 px-3.5 py-0.5 rounded-3xl flex items-center">
            <img src="https://em-content.zobj.net/source/apple/453/movie-camera_1f3a5.png" width={16} height={16} className="mr-1.5"/>
            Videographer
          </span>
        </div>
      </div>
      <div className="w-full md:w-[300px] max-w-[300px]">
        <div className="w-full relative pt-[100%] group">
          <div className="w-full h-full top-0 left-0 right-0 bottom-0 absolute rounded-xl bg-neutral-400 overflow-hidden flex items-center justify-center">
            <img src="https://github.com/ernestoyoofi.png" className="w-full h-full object-cover"/>
            <img src="/assets-public/img/plana-blue-archive.gif" className="absolute w-full h-full object-cover duration-200 group-hover:opacity-100 opacity-0"/>
          </div>
        </div>
      </div>
    </div>
  </div>
}