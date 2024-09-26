import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const Loading = () => {

    const l = useRef(null);
    const loadpage = useRef(null);

    useGSAP(()=>{
        const tl = gsap.timeline();

        tl.to(l.current,{
            width: "100%",
            duration: 1.3,
            ease: "circ.out"
        })

        tl.to(loadpage.current,{
            y: "-100%",
            duration:1.1,
            ease: "power4.out"
        })
    })

  return (
    <div ref={loadpage} className='absolute z-20 w-full h-screen bg-[#141414]'>
        <div ref={l} className='w-0 h-[4px] rounded-md bg-white'></div>
    </div>
  )
}

export default Loading