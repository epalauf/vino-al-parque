"use client"

import React from 'react';
import { BsInstagram, BsFacebook, BsTwitter, BsTiktok } from 'react-icons/bs';
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
        ><BsInstagram onClick={() => {
            let url = "https://www.instagram.com/vinoalparque.col/?igshid=MzRlODBiNWFlZA=="
            const newTab = window.open(url, "_blank");
            if (newTab) {
                newTab.focus();
            }
        }} /></motion.div>
        <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        ><BsFacebook onClick={() => {
            let url = "https://www.facebook.com/VinoAlParque?mibextid=LQQJ4d"
            const newTab = window.open(url, "_blank");
            if (newTab) {
                newTab.focus();
            }
        }}/></motion.div>
        <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        ><BsTiktok onClick={() => {
            let url = "https://www.tiktok.com/@vinoalparque.col?_t=8fsr4gG92bG&_r=1"
            const newTab = window.open(url, "_blank");
            if (newTab) {
                newTab.focus();
            }
        }} /></motion.div>
    </div>
  )
}
