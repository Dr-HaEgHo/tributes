'use client'
import { useEffect, useState } from "react";

const Load = () => {

  const [ dots, setDots] = useState<number>(0);

  useEffect(() => {
  }, [])


  
  return (
    <main className="fixed fade z-40 top-0 right-left w-full h-screen bg-whiteLoading flex items-center justify-center ">
      <div className="flex flex-col gap-4 items-center justify-center z-50">
        <div className="flex items-center flex-col gap-1">
          <div className="spinning-logo h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
            t.
          </div>
          <p className="font-bold text-primary text-base">tributes{}</p>
        </div>
      </div>
    </main>
  );
};

export default Load;