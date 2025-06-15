import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Approved.css';

import a from './AICTE.png';
import b from './NCS.png';
import c from './MSME.png';
import h from './ISO.png';
import f from './STIND.png';

const Approved = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="clients-container approved"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="clients-content"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h2 className="clients-title">Approved By</h2>

        <motion.div 
          className="clients-logos"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <img src={a} alt="AICTE" className="client-logo" />
          <img src={h} alt="ISO" className="client-logo iso" />
          <img src={b} alt="NCS" className="client-logo" />
          <img src={f} alt="STIND" className="client-logo" />
          <img src={c} alt="MSME" className="client-logo" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Approved;
