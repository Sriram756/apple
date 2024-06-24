import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React, { useRef } from 'react'
import { animateWithGsap } from '../utils/animations';
import { explore1Img, explore2Img, exploreVideo } from '../utils';

const Features = () => {
    const videoRef = useRef()
    useGSAP(() =>{
     gsap.to("#expVideo",{
        scrollTrigger: {
            trigger:"#expVideo",
            toggleActions:'play  reverse restart',
            start: '-10% bottom',
        },
        onComplete: ()=>{
            videoRef.current.play();
        }
    })
    animateWithGsap('#features-title',{y:0, opacity:1})
    animateWithGsap('.g_grow',{scale:1, opacity:1, ease:'power1'},{scrub:5.5})
    animateWithGsap('.g_text',{opacity:1, y:0, ease:'power2.inOut' ,duration:1})
    },[]);
  return (
   <section className='h-full common-padding bg-zinc relative overflow-hidden'>
    <div className="screen-max-width">
        <div className="mb-12 w-full">
            <h1 id='features-title' className='section-heading'>Explore the full story</h1>
        </div>
        <div className="flex flex-col justify-center items-center overflow-hidden">
            <div className='mt-32 mb-24 pl-24'>
                <h2 className='text-5xl lg:text-7xl font-semibold'>iphone</h2>
                 <h2 className='text-5xl lg:text-7xl font-semibold'>forged by titanium</h2>

            </div>
            <div className="flex-center flex-col sm:px-10 ">
                <div className="relative h-[50vh] w-full flex items-center">
                    <video playsInline autoPlay id='expVideo' muted preload='none' className='h-full w-full object-cover' ref={videoRef} src={exploreVideo}  ></video>
                </div>
                <div className="flex flex-col w-full relative">
                    <div className="feature_video_container">
                        <div className="flex-1 h-[50vh] overflow-hidden">
                            <img src={explore1Img} alt="titan" className='g_grow feature-video' />
                        </div>
                        <div className="flex-1 h-[50vh] overflow-hidden">
                            <img src={explore2Img} alt="titan1" className='g_grow feature-video' />
                        </div>
                    </div>
                    <div className="feature-text-container">
                        <div className="flex-1 flex-center">
                            <p className="feature-text g_text">
                                Iphone 15 pro is {' '}
                                <span className="text-white">the first iphone to feature an aerospace - grade titanium design ,  </span>, using the same alloy that spacecraft use for missioms to mars, 
                            </p>
                        </div>
                         <div className="flex-1 flex-center">
                            <p className="feature-text g_text">
                               Titanium has one of the best strength‑to‑weight ratios of any metal, making these our
                             <span className="text-white"> lightest Pro models ever.  </span>You’ll notice the difference the moment you pick one up.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
   </section>
  )
}

export default Features
