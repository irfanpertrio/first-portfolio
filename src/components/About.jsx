import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full my-9">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
          className="bg-tertiary rounded-[20px] py-16 px-16 min-h-[280px] justify-evenly items-center flex-col">
          <img
            src={icon}
            alt={title}
            className=" w-20 h-20 object-contain mx-auto my-auto"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-2 text-secondary text-[16px] max-w-3xl leading-[30px]"
      >
        "I am an enthusiastic programmer with a focus on backend development. I am determined to establish a robust technical foundation
        in software development. Throughout my educational journey, I have learned various programming concepts
        and cutting-edge technologies that support the creation of efficient and scalable backend systems. Through
        dedication and curiosity, I am committed to delivering reliable and innovative solutions to support
        modern applications that offer optimal performance and superior user experiences."
      </motion.p>

      <div className="flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index=
            {index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")