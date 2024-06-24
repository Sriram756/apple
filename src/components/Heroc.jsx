import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { heroVideo,smallHeroVideo } from "../utils"
import { useState } from "react"
import { useEffect } from "react"
const Heroc = () => {
 useGSAP(() => {
  gsap.to('#hero',{opacity:1, delay:1.5})
  gsap.to('#cta',{opacity:1,delay:2, y:-50})
 },[])
 const [videoSrc,setVideoSrc] = useState(window.innerWidth<760 ? smallHeroVideo : heroVideo)

 const respHero =() =>{
  if(window.innerWidth<760) {
    setVideoSrc(smallHeroVideo)
  }
  else{
    setVideoSrc(heroVideo)
  }
 }

 useEffect(()=>{
  window.addEventListener('resize',respHero)
  return() => {
    window.removeEventListener('resie',respHero)
  }
  
 })
   return (
  <section className="w-full nav-height bg-black relative">
    <div className="h-5/6 w-full flex-center flex-col">
    <p id='hero' className="hero-title">Yphone 15 pro</p>
    <div className="md:w-83 w-9/12">
      <video className='pointer-events-none'src={videoSrc} type='video/mp4' autoPlay muted playsInline={true} key={videoSrc} ></video>
    </div>
    </div>
    <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        <h1 className="hero-title" id="hero">Designed By Sriram</h1>
        <a href="#highlights" className="btn">Buy</a>
        <p className="font-noramal text-xl">From$199/month or $999</p>
    </div>
  </section>
  )
}

export default Heroc
