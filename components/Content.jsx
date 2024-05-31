import { motion } from "framer-motion";
import { useRef } from "react";
import useFollowPointer from "@/hooks/useFollowPointer";

export default function Content({ object }) {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);

    return (
        <motion.div
            // style={{ width: "150px", height: "150px" }}
            className="md:w-[300px] md:h-[300px] w-[200px] h-[350px] border-2 rounded-2xl text-center p-4 relative overflow-hidden group border-sky-400 hover:bg-sky-600 hover:text-white hover:border-sky-600"
            ref={ref}
            animate={"animate"}
            whileHover={{ scale: 1.1 }}
        >
            <motion.div
                style={{ translateX: x, translateY: y }}
                className="absolute w-20 h-20 bg-gradient-to-r from-blue-500 via-white-500 to-sky-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none"
            />
            <div className={"flex-col flex md:flex-row justify-between items-center gap-3"}>
                {object.svgCode}
                <h4 className="text-3xl z-10 relative font-bold">{object.title}</h4>
            </div>

            <p className="text-xl z-10 relative mt-12">{object.description}</p>
        </motion.div>
    );
}





