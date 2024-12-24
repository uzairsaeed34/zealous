import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { LucideIcon } from 'lucide-react';

interface StatItemProps {
  icon: LucideIcon;
  value: number;
  label: string;
  suffix?: string;
  delay: number;
}

const StatItem = ({ icon: Icon, value, label, suffix = '', delay }: StatItemProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay }}
      className="card text-center"
    >
      <Icon className="w-12 h-12 mx-auto mb-4 text-gray-800" />
      <div className="text-4xl font-bold text-gray-800 mb-2">
        {inView && (
          <CountUp
            end={value}
            duration={2.5}
            suffix={suffix}
            start={0}
          />
        )}
      </div>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  );
};

export default StatItem;