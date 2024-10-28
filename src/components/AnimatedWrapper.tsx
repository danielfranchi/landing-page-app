import React, { ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";

interface AnimatedWrapperProps {
  children: ReactNode;
  animationProps: MotionProps;
}

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  children,
  animationProps,
}) => {
  return <motion.div {...animationProps}>{children}</motion.div>;
};

export default AnimatedWrapper;
