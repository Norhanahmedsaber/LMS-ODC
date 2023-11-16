import React, { useState } from 'react';

export default function Section() {
  const [content, setContent] = useState([
    'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW',
    'SW', 'SW', 'SW', 'SW','SW', 'SW','SW', 'SW','SW', 'SW','SW', 'SW','SW', 'SW',
  ]);

  return (
    <div className='grid grid-flow-row-dense grid-cols-5 text-3xl h-screen'>
      <div className="col-span-4 font-bold bg-slate-500 flex justify-center items-center h-full">
        Rawan
      </div>
      <div className="h-full col-span-1 bg-slate-700 items-center overflow-y-scroll">
        {content.map((item, index) => (
          <div className='p-2' key={index} onClick={() => setContent(index)}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}