"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface AnimationProps {
  children: ReactNode;
  delay?: number;
}

interface StaggerProps {
  children: ReactNode;
  staggerDelay?: number;
}

interface FloatingProps {
  children: ReactNode;
  duration?: number;
  y?: number;
}

type Direction = "up" | "down" | "left" | "right";

interface TextRevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
}

// Fade up animation for sections
export const FadeUpSection = ({ children, delay = 0 }: AnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

// Staggered card animation
export const StaggeredCards = ({ children, staggerDelay = 0.1 }: StaggerProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
};

// Card animation for individual cards
export const CardAnimation = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
};

// Parallax section
export const ParallaxSection = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};

// Text reveal animation
export const TextReveal = ({ children, direction = "up", delay = 0 }: TextRevealProps) => {
  const variants = {
    up: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    down: {
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0 },
    },
    left: {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 },
    },
    right: {
      hidden: { opacity: 0, x: 20 },
      visible: { opacity: 1, x: 0 },
    },
  };

  return (
    <motion.div
      variants={variants[direction]}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

// Floating animation
export const FloatingElement = ({ children, duration = 3, y = 10 }: FloatingProps) => {
  return (
    <motion.div
      animate={{
        y: [-y, y],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}; 