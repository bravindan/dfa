"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/navigation'
import Btn from "./Btn"
import SwiperBtns from "./SwiperBtns"
import { motion } from "framer-motion"
import { fadeIn } from "@/lib/variants"


export default function HeroSlider() {
  return (
    <Swiper className="h-full">
        
        <SwiperSlide >
          <div className="h-full flex justify-end pt-48">
              <div className='flex flex-col items-center lg:items-start lg:max-w-[700px]' >
                  <motion.h1
                  variants={fadeIn('up',0.4)}
                  initial='hidden'
                  whileInView={'visible'}
                  viewport={{once:false, amount: 0.2}}
                  className="h1 lg:text-left text-center mb-2">
                    <span>Where hard</span> work meets success
                  </motion.h1>
                  <motion.p
                  variants={fadeIn('up',0.6)}
                  initial='hidden'
                  whileInView={'visible'}
                  viewport={{once:false, amount: 0.2}}
                  className="text-white italic text-center lg:text-left mb-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vitae eos pariatur.</motion.p>
                  <motion.div
                  variants={fadeIn('up',0.4)}
                  initial='hidden'
                  whileInView={'visible'}
                  viewport={{once:false, amount: 0.2}}
                  >
                    <Btn text="Get Started" containerStyles='w-[196px] h-[62px]'/>
                  </motion.div>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="h-full flex justify-end pt-48">
              <div className='flex flex-col items-center lg:items-start lg:max-w-[700px]' >
                  <motion.h1
                  variants={fadeIn('up',0.4)}
                  initial='hidden'
                  whileInView={'visible'}
                  viewport={{once:false, amount: 0.2}}
                  className="h1 lg:text-left text-center mb-2">
                    <span>Where hard</span> work meets success
                  </motion.h1>
                  <motion.p
                  variants={fadeIn('up',0.6)}
                  initial='hidden'
                  whileInView={'visible'}
                  viewport={{once:false, amount: 0.2}}
                  className="text-white italic text-center lg:text-left mb-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vitae eos pariatur.</motion.p>
                  <motion.div
                  variants={fadeIn('up',0.4)}
                  initial='hidden'
                  whileInView={'visible'}
                  viewport={{once:false, amount: 0.2}}
                  >
                    <Btn text="Get Started" containerStyles='w-[196px] h-[62px]'/>
                  </motion.div>
              </div>
          </div>
        </SwiperSlide>
          <SwiperSlide >
          <div className="h-full flex justify-end pt-48">
              <div className='flex flex-col items-center lg:items-start lg:max-w-[700px]' >
                  <motion.h1
                  variants={fadeIn('up',0.4)}
                  initial='hidden'
                  whileInView={'visible'}
                  viewport={{once:false, amount: 0.2}}
                  className="h1 lg:text-left text-center mb-2">
                    <span>Where hard</span> work meets success
                  </motion.h1>
                  <motion.p
                  variants={fadeIn('up',0.6)}
                  initial='hidden'
                  whileInView={'visible'}
                  viewport={{once:false, amount: 0.2}}
                  className="text-white italic text-center lg:text-left mb-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vitae eos pariatur.</motion.p>
                  <motion.div
                  variants={fadeIn('up',0.4)}
                  initial='hidden'
                  whileInView={'visible'}
                  viewport={{once:false, amount: 0.2}}
                  >
                    <Btn text="Get Started" containerStyles='w-[196px] h-[62px]'/>
                  </motion.div>
              </div>
          </div>
        </SwiperSlide>
        <div>
        <SwiperBtns 
         containerStyles="absolute bottom-2 lg:bottom-0 right-0 h-[130px] w-full lg:w-[700px] z-50 flex justify-center lg:justify-start gap-1"
         iconStyles="text-2xl "
         btnStyles="border border-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transition-all duration-300"/>
        </div>
        
    </Swiper>
  )
}
