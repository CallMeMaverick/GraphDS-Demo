import React from 'react';
import { motion } from "framer-motion";

export const GraphHeader = ({ rotate=0 }) => {
    // Define initial width and height
    const width = 500;
    const height = 500;

    return (
        <motion.svg
            className="inline-block"
            width={width}
            height={height}
            viewBox="0 0 250 250"
            animate={{ rotate: rotate }} // specify animation type (rotation)
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }} // set animation params
        >
            {/* Build a graph */}
            <circle cx="100" cy="50" r="8" stroke="ghostwhite" strokeWidth="2" fill="ghostwhite" opacity={0.8}/>
            <circle cx="50" cy="150" r="8" stroke="ghostwhite" strokeWidth="2" fill="ghostwhite" opacity={0.8}/>
            <circle cx="150" cy="150" r="8" stroke="ghostwhite" strokeWidth="2" fill="ghostwhite" opacity={0.8}/>
            <circle cx="80" cy="150" r="8" stroke="ghostwhite" strokeWidth="2" fill="ghostwhite" opacity={0.8}/>
            <circle cx="120" cy="150" r="8" stroke="ghostwhite" strokeWidth="2" fill="ghostwhite" opacity={0.8}/>
            <circle cx="75" cy="100" r="8" stroke="ghostwhite" strokeWidth="2" fill="ghostwhite" opacity={0.8}/>
            <circle cx="125" cy="100" r="8" stroke="ghostwhite" strokeWidth="2" fill="ghostwhite" opacity={0.8}/>
            <line x1="100" y1="50" x2="50" y2="150" stroke="ghostwhite" strokeWidth="2" opacity={0.8}/>
            <line x1="100" y1="50" x2="150" y2="150" stroke="ghostwhite" strokeWidth="2" opacity={0.8}/>
            <line x1="75" y1="100" x2="80" y2="150" stroke="ghostwhite" strokeWidth="2" opacity={0.8}/>
            <line x1="125" y1="100" x2="120" y2="150" stroke="ghostwhite" strokeWidth="2" opacity={0.8}/>
        </motion.svg>
    );
};



