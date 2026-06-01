"use client";

export default function Achievement({ data = [] }) {
  return <div className="w-full max-w-5xl m-auto px-2">
    <h1 className="font-bold text-4xl tracking-tighter my-6">Achievements</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 w-full items-start">
      {data.map((item, key) => (
        <div className="border border-neutral-200 rounded-2xl overflow-hidden flex flex-col h-full" key={key}>
          <div className="relative w-full aspect-video bg-neutral-300">
            <img src={item?.image || ""} className="absolute inset-0 w-full h-full object-cover" alt={item.title}/>
          </div>
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-xl mb-1 line-clamp-2" title={item.title}>{item.title}</h4>
              {item.description && (
                <p className="text-neutral-600 text-sm line-clamp-3">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
}