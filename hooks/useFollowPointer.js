import { useMotionValue, useSpring, useAnimationFrame } from "framer-motion";
import { useEffect } from "react";

const spring = { damping: 15, stiffness: 100 };

export default function useFollowPointer(ref) {
    const x = useSpring(0, spring);
    const y = useSpring(0, spring);

    useEffect(() => {
        const handlePointerMove = ({ clientX, clientY }) => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            x.set(clientX - rect.left);
            y.set(clientY - rect.top);
        };

        window.addEventListener("pointermove", handlePointerMove);

        return () => window.removeEventListener("pointermove", handlePointerMove);
    }, [ref, x, y]);

    return { x, y };
}
