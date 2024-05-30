"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { GraphHeader } from "@/utils/graphHeader";

// Define the sliding keyframes
const sliderVariants = {
    initial: {
        x: "0%", // initial position
    },
    animate: {
        x: "-100%", // Move the whole width of the container to achieve seamless wrap
        transition: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
        }
    }
};

export default function Header() {
    return (
        <>
            {/* Header styling*/}
            <div className="relative overflow-hidden w-full bg-yellow-500 flex h-80 bg-custom-gradient">
                <motion.div className={"m-20 z-10 flex flex-col gap-5"}>
                    <motion.div className={"flex gap-3"}>
                        <motion.h1 className={"text-white text-6xl"}
                        >Let&apos;s talk about </motion.h1>
                        <motion.span className={"text-white font-bold text-6xl"}>Graphs</motion.span>
                    </motion.div>

                    <div>
                        <p className={"text-white text-3xl"}>One of the most effective ways to present data and uncover insights</p>
                    </div>
                </motion.div>

                <motion.div className="absolute flex w-[200%] h-full items-center -z-0" variants={sliderVariants} initial="initial" animate="animate">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="flex justify-center items-start w-[30%]"
                        >
                            {/* Conditionally define rotation side */}
                            <GraphHeader rotate={i % 2 === 0 ? -180: 180 } />
                        </div>
                    ))}
                </motion.div>
            </div>
            <hr/>
        </>
    );
};