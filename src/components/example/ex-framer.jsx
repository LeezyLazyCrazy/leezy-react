import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "../example/ex-style.css";


export default function App() {
  return (
    <AnimateSharedLayout>
      <motion.table layout initial={{ borderRadius: 25 }} className="motionTable">
        {items.map(item => (
          <Item key={item} />
        ))}
      </motion.table>
    </AnimateSharedLayout>
  );
}

function Item() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.td layout onClick={toggleOpen} initial={{ borderRadius: 10 }} className="motionTd">
      <motion.div className="avatar" layout />
      <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
    </motion.td>
  );
}

function Content() {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="row" />
      <div className="row" />
      <div className="row" />
    </motion.div>
  );
}

const items = [0, 1, 2];
