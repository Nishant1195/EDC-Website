import React from 'react';
import { motion } from 'framer-motion';
import Card from './card'; // Importing the Card component

// WhatWeDo component that imports and uses the Card component
const WhatWeDo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-8 pt-24">
      <div className="max-w-4xl mx-auto">
        {/* Main Title with Animation */}
        <motion.div 
          className="text-left mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            What We Do?
          </h1>
        </motion.div>

        {/* Content Card using the imported Card component with enhanced shadow */}
        <motion.div 
          className="flex justify-center"
          initial={{ scale: 2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Card
            variant="elevated"
            customPadding="px-12 md:px-16 lg:px-20 py-8 md:py-10 lg:py-12"
            customShadow="shadow-2xl shadow-black/30 drop-shadow-2xl"
            className="max-w-5xl w-full backdrop-blur-sm"
            contentSize="text-2xl"
            spacing="space-y-4"
            style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 25px 25px -12px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="text-blue-800 leading-relaxed">
              At EDC DYPCOE, we strive to build a thriving entrepreneurial ecosystem within the campus by organizing a variety of events such as workshops, ideation camps, business plan competitions, start-up expos, guest lectures, and mentoring sessions. Through strategic collaborations and partnerships, we provide students with the knowledge, resources, and network necessary to transform innovative ideas into viable business ventures.Also opening an education department that will teach entrepreneurship strategy .
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeDo;