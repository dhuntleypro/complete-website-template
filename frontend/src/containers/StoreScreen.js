import { motion } from 'framer-motion';
import { useState } from 'react';
import '../components/StoreScreen/style.scss';

function StoreScreen() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="storescreen-container">
      <motion.div
        Layout
        onClick={() => setIsOpen(!isOpen)}
        className="storescreen-card"
      >
        <motion.image Layout="position">
          <img
            src="/images/me.jpg"
            alt="power"
            width={isOpen && '50%'}
            height={isOpen && '50%'}
          ></img>
          <p>Full Stack Developer</p>
        </motion.image>
      </motion.div>
    </div>
  );
}

export default StoreScreen;
