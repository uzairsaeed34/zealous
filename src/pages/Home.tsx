import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Star, Shield, Clock, Award } from 'lucide-react';

const Home = () => {
  return (
    <div className="marble-overlay">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[80vh] flex items-center"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Kitchen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl font-bold mb-4">Transform Your Space</h1>
            <p className="text-xl mb-8">Premium countertops crafted with precision and elegance</p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold flex items-center hover:bg-gray-100 transition-colors">
              Explore Our Collection <ChevronRight className="ml-2" />
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Star, title: 'Premium Quality', desc: 'Finest materials and craftsmanship' },
              { icon: Shield, title: 'Durability', desc: 'Built to last generations' },
              { icon: Clock, title: 'Quick Install', desc: 'Professional installation' },
              { icon: Award, title: 'Warranty', desc: 'Peace of mind guaranteed' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-gray-800" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Our Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Marble', img: 'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=2080&auto=format&fit=crop' },
              { name: 'Granite', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2072&auto=format&fit=crop' },
              { name: 'Quartz', img: 'https://images.unsplash.com/photo-1609259886986-a6cfb5b0b2fd?q=80&w=2074&auto=format&fit=crop' }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="relative group overflow-hidden rounded-lg"
              >
                <img 
                  src={product.img} 
                  alt={product.name}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{product.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;