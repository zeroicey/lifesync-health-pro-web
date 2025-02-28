'use client'

import { motion, AnimatePresence } from "framer-motion"
import { ReactNode } from "react"

interface FadeInProps {
  children: ReactNode
  delay?: number
}

export function FadeIn({ children, delay = 0 }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, delay }}
    >
      {children}
    </motion.div>
  )
}

interface SlideInProps {
  children: ReactNode
  direction?: "left" | "right" | "up" | "down"
  delay?: number
}

export function SlideIn({ children, direction = "right", delay = 0 }: SlideInProps) {
  const variants = {
    initial: {
      opacity: 0,
      x: direction === "left" ? -20 : direction === "right" ? 20 : 0,
      y: direction === "up" ? -20 : direction === "down" ? 20 : 0,
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
    },
    exit: {
      opacity: 0,
      x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
      y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
    },
  }

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3, delay }}
    >
      {children}
    </motion.div>
  )
}

interface TabTransitionProps {
  children: ReactNode
  isActive: boolean
}

export function TabTransition({ children, isActive }: TabTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
