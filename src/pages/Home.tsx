import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Star, Shield, Clock, Award } from "lucide-react";
import img1 from "../images/27.jpg";
import img2 from "../images/25.jpg";
import img3 from "../images/26.jpg";
import img4 from "../images/12.jpg";
import img5 from "../images/28.jpg";
import img6 from "../images/29.jpg";
import img7 from "../images/10.jpg";
import img8 from "../images/10.jpg";

import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    image: img2,
    title: "Elegant Countertops",
    description: "Discover the perfect blend of beauty and durability",
  },
  {
    id: 2,
    image: img1,
    title: "Transform Your Space",
    description: "Premium countertops crafted with precision and elegance",
  },
  {
    id: 3,
    image: img3,
    title: "Luxury for Every Home",
    description: "Designs that elevate your living space",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Slider */}
      <section className="relative h-[80vh] overflow-hidden">
        <AnimatePresence>
          {slides.map((slide, index) =>
            index === currentSlide ? (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                {/* Image */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Text Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white h-full flex flex-col justify-center items-center">
                  <motion.h1
                    className="text-5xl font-bold text-center mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    className="text-xl text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    {slide.description}
                  </motion.p>
                  <motion.button
                    className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold flex items-center hover:bg-gray-100 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                  >
                    <Link to="/gallery" className="flex items-center">
                      Explore Our Collection <ChevronRight className="ml-2" />
                    </Link>
                  </motion.button>
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </section>
      {/* About Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Zealous Granit & tile</h2>
            <p className="text-gray-700 leading-relaxed">
              We specialize in offering quality, premium countertops that embody
              elegance, durability, and functionality. Our mission is to
              transform your spaces with top-notch designs and materials,
              crafted with precision and care. Whether you are redesigning your
              kitchen, bathroom, or workspace, we bring your vision to life.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              With years of experience and a commitment to excellence, we strive
              to deliver products that exceed expectations, ensuring customer
              satisfaction every step of the way.
            </p>
            <motion.button
              className="px-8 py-3 mt-5 rounded-lg font-semibold flex items-center transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              style={{
                backgroundImage: `url(${img8})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "#333",
                border: "1px solid #ccc",
              }}
            >
              <Link to="/gallery" className="flex items-center text-white">
                Read More <ChevronRight className="ml-2" />
              </Link>
            </motion.button>
          </div>
          <div className="md:w-1/2">
            <img
              src={img4}
              alt="About us"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Star,
                title: "Premium Quality",
                desc: "Finest materials and craftsmanship",
              },
              {
                icon: Shield,
                title: "Durability",
                desc: "Built to last generations",
              },
              {
                icon: Clock,
                title: "Quick Install",
                desc: "Professional installation",
              },
              {
                icon: Award,
                title: "Warranty",
                desc: "Peace of mind guaranteed",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-lg shadow-md"
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
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Marble",
                img: img6,
              },
              {
                name: "Granite",
                img: img7,
              },
              {
                name: "Premium Tile",
                img: img5,
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">
                    {product.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
