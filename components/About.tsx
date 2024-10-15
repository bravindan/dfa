'use client'

import React from 'react'
import { FaUsers } from 'react-icons/fa'
import { IoIosPricetag } from 'react-icons/io'
import { FaDumbbell } from 'react-icons/fa6'
import Achievements from './Achievements'
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/variants'


const featured =[
  {icon: <FaUsers/>,
  title: 'Best Trainers',
  subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi exercitationem excepturi accusantium qui veritatis sequi veniam aliquam fugit repellendus tempore.'
  },
  {icon: <IoIosPricetag/>,
  title: 'Best prices',
  subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi exercitationem excepturi accusantium qui veritatis sequi veniam aliquam fugit repellendus tempore.'
  },
  {icon: <FaDumbbell/>,
  title: 'Modern equipment',
  subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi exercitationem excepturi accusantium qui veritatis sequi veniam aliquam fugit repellendus tempore.'
  },
  
]

export default function About() {
  return (
    <section id='about' className='pt-8 pb-14 lg:pb-28'>
      <div className="container mx-auto"> 
        <div>
          <motion.h2 
          variants={fadeIn('up',0.4)}
          initial='hidden'
          whileInView={'visible'}
          viewport={{once:false, amount: 0.2}}
          className='h2 text-center'>About Us</motion.h2>
          <motion.p
          variants={fadeIn('up',0.6)}
          initial='hidden'
          whileInView={'visible'}
          viewport={{once:false, amount: 0.2}}
          className='max-w-[700px] mx-auto text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, cupiditate rem! Quasi?</motion.p>
        </div>
          {/* featured section  */}
        <motion.div 
        variants={fadeIn('up',0.8)}
          initial='hidden'
          whileInView={'visible'}
          viewport={{once:false, amount: 0.2}}
         className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-4 mb-16'>
          {featured.map((item, index) => (
            <div key={index} className='flex flex-col items-center justify-center gap-4 border p-10'>
              <div className='text-4xl bg-primary-300 text-white h-[80px] w-[80px] flex items-center justify-center  rounded-full '>{item.icon}</div> 
              <div className='flex flex-col justify-center items-center gap-2 text-center'>
                <h4 className='h4 text-accent'>{item.title}</h4>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </motion.div>
        {/* Achievements section  */}
        <motion.div
        variants={fadeIn('up',1)}
          initial='hidden'
          whileInView={'visible'}
          viewport={{once:false, amount: 0.2}}>
        <Achievements />
        </motion.div>
      </div>
    </section>
  )
}
