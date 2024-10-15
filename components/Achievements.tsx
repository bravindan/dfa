"use client"

import {useRef} from 'react'
import CountUp from 'react-countup'
import { FaBriefcase,FaClock,FaTrophy } from 'react-icons/fa'
import { ImUsers } from 'react-icons/im'
import { motion, useInView } from 'framer-motion'


const stats = [
    {
        icon: FaBriefcase,
        title: 'Projects',
        count: 10,
    },
    {
        icon: FaClock,
        title: 'Hours',
        count: 100,
    },
    {
        icon: FaTrophy,
        title: 'Awards',
        count: 5,
    },
    {
        icon: ImUsers,
        title: 'Team ',
        count: 10,
    },
    ]
const statsContainervariants = {
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4,
                duration: 0.5,
                ease: 'linear'
            }
        },
        hidden: {
            opacity: 0,
        }
    };
    const statsItemvariants = {
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: [0.25,0.6,0.3,0.8]
            }
        },
        hidden: {
            y: 20,
            opacity: 0,
        }
        };

export default function Achievements() {
    const ref = useRef(null)
    const isInView = useInView(ref)

    return (
      <section className="">
        <div className="container mx-auto">
        <div>
          <motion.div 
          variants={statsContainervariants}
          initial='hidden'
          whileInView={'visible'}
          viewport={{once:false, amount: 0.3}}
           className='grid grid-cols-2 md:grid-cols-4 gap-16'>
            {stats.map((stat, index) => (
              <motion.div
              variants={statsItemvariants}
               key={index} className="flex flex-col justify-center items-center">
                <div className="border border-accent/90 w-[140px] h-[140px] mx-auto rounded-full p-1 mb-6">
                  <div
                    ref={ref}
                    className="border border-accent/30 w-full h-full flex items-center justify-center text-5xl rounded-full"
                  >
                    {isInView && (
                      <CountUp start={0} end={stat.count} duration={6} />
                    )}
                  </div>
                </div>
                  <div className="flex flex-col justify-center items-center text-center">
                    <stat.icon className="text-3xl mb-2" />
                    <h4 className='h4'>{stat.title}</h4>
                  </div>
              </motion.div>

            ))}
          </motion.div>
          </div>
        </div>
      </section>
    );
}
