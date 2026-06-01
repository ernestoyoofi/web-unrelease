import Link from "next/link";

export default function Homepage() {
  return <div className="w-full h-dvh min-h-100 flex items-center justify-center">
    <div className="w-full max-w-sm md:max-w-4xl flex max-md:flex-col-reverse gap-4 items-center justify-center px-5">
      <div className="w-full md:w-[calc(100%-300px)] h-full flex flex-col justify-between">
        <div className="w-full">
          <h2 className="font-bold text-3xl tracking-tight">Hi!, I'm Ernestoyoofi <span className="text-pink-600">(Yupi!)</span></h2>
          <p className="tracking-tight text-neutral-500">Want to get to know me? Are you really keen, or what? <Link href="/about" className="text-purana-2">Learn more (≧∇≦)ﾉ</Link></p>
        </div>
        <div className="mt-4 w-full flex flex-wrap gap-1 tracking-tighter text-neutral-500">
          <span className="text-blue-500 bg-blue-100 border border-blue-200 px-3.5 py-0.5 rounded-3xl">Frontend Dev (React & React Native)</span>
          <span className="text-fuchsia-500 bg-fuchsia-100 border border-fuchsia-200 px-3.5 py-0.5 rounded-3xl">Network Engineering</span>
          <span className="text-pink-500 bg-pink-100 border border-pink-200 px-3.5 py-0.5 rounded-3xl">Poster Design/GFX (Figma)</span>
          <span className="text-emerald-500 bg-emerald-100 border border-emerald-200 px-3.5 py-0.5 rounded-3xl">Photographer</span>
          <span className="text-orange-500 bg-orange-100 border border-orange-200 px-3.5 py-0.5 rounded-3xl">Videographer</span>
        </div>
      </div>
      <div className="w-full md:w-[300px] max-w-[300px]">
        <div className="w-full relative pt-[100%]">
          <div className="w-full h-full top-0 left-0 right-0 bottom-0 absolute rounded-xl bg-neutral-400 overflow-hidden flex items-center justify-center">
            <img src="https://github.com/ernestoyoofi.png" className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </div>
  </div>
}