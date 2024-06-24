import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { animateWithGsap } from '../utils/animations'

const HowIsIt = () => {
    const videoRef = useRef();
useGSAP(() => {
  gsap.from('#chip',{
    scrollTrigger:{
        trigger:'#chip',
        start:"20% bottom"
    },
    opacity:0,
    scale:2,
    duration:2,
    ease:'power2.inOut'
  })
  animateWithGsap('.g_fadeIn',{
    opacity:1,
    y:0,
    duration:1,
    ease:'power2.inOut'
  })
},[])
  return (
    
    <section className="common-padding">
        <div className="screen-max-width">
           <div id="chip" className="flex-center w-full my-20 ">
            <img src={chipImg} alt="chip" width={180} height={180} />
           </div>
           <div className="flex flex-col items-center">
            <h2 className="hiw-title">
                A17 pro chip.
                <br />A monster win for gaming
            </h2>
            <p className='hiw-subtitle'>its here, the biggest redesign in the history of apple gpu's</p>
           </div>
           <div className="mt-10 md:mt-20 mb-14">
             <div className="relative h-full flex-center">
                <div className='overflow-hidden'>
                    <img src={frameImg} alt="frame" className='bg-transparent z-10 relative' />
                </div>
                <div className="hiw-video">
                    <video src={frameVideo} className='pointer-events-none'playsInline preload='none' autoPlay ref={videoRef} muted ='video/mp4' ></video>
                </div>
             </div>
             <p className="text-gray font-semibold text-center">honkai : star rail</p>
             <div className="hiw-text-container">
                <div className="flex-1 flex-col flex justify-center">
                  <p className="hiw-text g_fadeIn">
                      A17 Pro is an entirely new class of YPhone chip that delivers our{' '}
                   <span className="text-white">best graphics performance by far. </span>
                    
                  </p>
                  <p className="hiw-text g_fadeIn">
                      mobile{' '}
                   <span className="text-white">games will look and feel so immersive,  </span>
                    with incredibly detailed environments and more realistic characters. And with industry-leading speed and efficiency, A17 Pro takes fast and runs with it.
                  </p>
                </div>
                <div className="flex flex-1 flex-col justify-center g_fadeIn">
                  <p className="hiw-text">new</p>
                 <p className="hiw-bigtext">pro-class gpu</p>
                 <p className="hiw-text">with 6 cores</p>
                </div>

             </div>
           </div>
        </div>
    </section>
  )
}

export default HowIsIt
