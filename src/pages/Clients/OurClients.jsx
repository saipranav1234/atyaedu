import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './OurClients.css';

import a from './1.png';
import b from './2.png';
import c from './3.png';
import g from './n.png';
import h from './mintapp.jpeg';
import f from './6.jpg';
import tec from './techzipe.png';

const OurClients = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="clients-container"
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
        <h2 className="clients-title">Our Trusted Partners</h2>
        
        <motion.div 
          className="clients-logos"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <img src={b} alt="GEN" className="client-logo" />
          <img src={c} alt="EXION" className="client-logo" />
          <img src={g} alt="Another" className="client-logo" />
          {/* <img src={h} alt="Another" className="client-logo" /> */}
          <img src={tec} alt="Another" className="client-logo" />
          <img src={f} alt="Another" className="client-logo" />
          <img src={a} alt="ZWISS" className="client-logo" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default OurClients;
