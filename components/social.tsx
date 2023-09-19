"use client"

import React from 'react';
import { BsInstagram, BsFacebook, BsTwitter, BsFillStarFill } from 'react-icons/bs';
import { Image } from '@nextui-org/react';
import { motion } from "framer-motion";

export const SocialComponent = () => {
  return (
    <div className="social__container">
        <motion.div
            className="box tu-boleta-logo"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        ><Image src='/star.png' alt='star-icon' height={24} width={24} /></motion.div>
        <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        ><BsInstagram /></motion.div>
        <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        ><BsFacebook /></motion.div>
        <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        ><BsTwitter /></motion.div>
    </div>
  )
}
