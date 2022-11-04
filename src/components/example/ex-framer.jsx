import { useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import styles from './ex-style.module.css';

export default function App() {
  return (
    <AnimateSharedLayout>
      <motion.table layout initial={{ borderRadius: 25 }} className={styles.table}>
        {items.map((item) => (
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
    <motion.td layout onClick={toggleOpen} initial={{ borderRadius: 10 }} className={styles.td}>
      <motion.div className={styles.avatar} layout />
      <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
    </motion.td>
  );
}

function Content() {
  return (
    <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className={styles.row} />
      <div className={styles.row} />
      <div className={styles.row} />
    </motion.div>
  );
}

const items = [0, 1, 2];
