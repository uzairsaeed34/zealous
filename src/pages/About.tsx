import { motion } from "framer-motion";
import { useEffect } from "react";
import { Users, Package, Wrench, ThumbsUp } from "lucide-react";
import StatItem from "../components/StatsCounter";
import img1 from "../images/13.jpg";
import bg from "../images/gallery-bg.jpg";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { icon: Users, value: 1000, label: "Happy Clients" },
    { icon: Package, value: 500, label: "Products" },
    { icon: Wrench, value: 15, label: "Years Experience" },
    { icon: ThumbsUp, value: 98, label: "Satisfaction Rate", suffix: "%" },
  ];

  return (
    <div>
      {/* Header Section */}
      <section className="relative h-[50vh] w-full">
        <img
          src={bg}
          alt="About Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl font-bold mb-2">About Us</h1>
          <p className="text-sm">
            <span className="text-gray-300">Zealous</span> &lt; About Us
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">Our Story</h1>
              <p className="text-gray-600 mb-4">
                For over 15 years, Zealous CounterTops has been at the forefront
                of innovative countertop solutions. Our journey began with a
                simple mission: to transform spaces with exceptional
                craftsmanship and premium materials.
              </p>
              <p className="text-gray-600">
                Today, we're proud to be one of the leading providers of
                high-quality countertops, serving both residential and
                commercial clients with the same dedication to excellence that
                has defined us since day one.
              </p>
              <p className="text-gray-600 mt-4 leading-relaxed">
                <span className="font-semibold">
                  With Zealous CounterTops, you’re not just investing in a
                  countertop—you’re investing in quality, innovation, and a
                  design that will stand the test of time.
                </span>
              </p>
            </div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <img src={img1} alt="Workshop" className="rounded-lg shadow-xl" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Product Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Durability",
                score: 95,
                desc: "Resistant to scratches, heat, and impacts",
              },
              {
                title: "Maintenance",
                score: 90,
                desc: "Easy to clean and maintain",
              },
              {
                title: "Longevity",
                score: 98,
                desc: "Built to last for decades",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="card"
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <div className="relative pt-1">
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.score}%` }}
                      transition={{ duration: 1 }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-800"
                    />
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-semibold">{item.score}%</span>
                    <span className="text-sm text-gray-600">{item.desc}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
