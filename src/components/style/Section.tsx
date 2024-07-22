import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  delay?: number;
}

const Section: React.FC<SectionProps> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    className="mb-6"
  >
    {children}
  </motion.div>
);

export default Section;
