"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Achievement({ data = [] }) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="w-full max-w-5xl m-auto px-5 relative">
      <h1 className="font-bold text-4xl tracking-tighter mt-6">Achievements</h1>
      <p className="text-sm mb-6 text-neutral-600">Achievements that have been attained</p>
      
      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 w-full items-start pb-10">
        {data.map((item, key) => {
          const itemId = item.id || key;
          return (
            <div
              onClick={() => setSelectedItem(item)}
              className="relative w-full aspect-4/6 bg-neutral-100 rounded-md overflow-hidden cursor-pointer select-none flex items-end group"
              key={key}
            >
              <motion.img 
                layoutId={`img-${itemId}`}
                src={item?.image || ""} 
                className="absolute inset-0 w-full h-full object-cover rounded-md" 
                alt={item.title}
              />
              <div className="absolute w-full h-[240px] bg-neutral-300/80 masking-gradation-bottom-to-top z-10 pointer-events-none" />
              <div className="absolute w-full z-10 px-5 py-4 pointer-events-none">
                <h4 className="font-bold line-clamp-2" title={item.title}>{item.title}</h4>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal Dialog Pop-up */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-bluearchive-7/80 backdrop-blur-sm"
            />
            <div className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center z-10 pointer-events-none">
              <motion.img 
                layoutId={`img-${selectedItem.id || data.indexOf(selectedItem)}`}
                src={selectedItem?.image || ""} 
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl pointer-events-auto cursor-pointer"
                onClick={() => setSelectedItem(null)}
              />
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-center text-white pointer-events-auto max-w-xl px-4"
              >
                <h3 className="font-bold text-lg md:text-xl line-clamp-2">{selectedItem.title}</h3>
                {selectedItem.description && (
                  <p className="text-sm text-neutral-300">{selectedItem.description}</p>
                )}
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}