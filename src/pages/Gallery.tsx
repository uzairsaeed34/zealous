import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import banner from "../images/29.jpg";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";
import img7 from "../images/7.jpg";
import img8 from "../images/8.jpg";
import img9 from "../images/9.jpg";
import img10 from "../images/10.jpg";
import img11 from "../images/11.jpg";
import img12 from "../images/12.jpg";
import img13 from "../images/13.jpg";
import img15 from "../images/15.jpg";
import img17 from "../images/17.jpg";
import img20 from "../images/20.jpg";
import img21 from "../images/21.jpg";
import img23 from "../images/23.jpg";
import img27 from "../images/27.jpg";
import img24 from "../images/24.jpg";
import img28 from "../images/28.jpg";
import img29 from "../images/29.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = {
    Kitchen: [
      img1,
      img2,
      img3,
      img5,
      img6,
      img8,
      img9,
      img11,
      img12,
      img20,
      img21,
      img23,
      img27,
    ],
    Granite: [img10, img13, img7],
    Tile: [img7, img24, img17, img15],
    Marble: [img10, img28, img29, img4],
  };

  const allImages = Object.entries(categories).flatMap(([category, images]) =>
    images.map((image) => ({ url: image, category }))
  );

  const filteredImages =
    selectedCategory === "All"
      ? allImages
      : allImages.filter((image) => image.category === selectedCategory);

  return (
    <div>
      {/* Header Section */}
      <section className="relative h-[50vh] w-full">
        <img
          src={banner}
          alt="Gallery Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl font-bold mb-2">Our Gallery</h1>
          <p className="text-sm">
            <span className="text-gray-300">Zealous</span> &lt; Gallery
          </p>
        </div>
      </section>

      {/* Navbar for Categories */}
      <div className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-4 justify-center">
          <button
            className={`px-4 py-2 font-semibold rounded ${
              selectedCategory === "All"
                ? "bg-gray-800 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </button>
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              className={`px-4 py-2 font-semibold rounded ${
                selectedCategory === category
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="marble-overlay min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.category}
                  className="w-full h-64 object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity rounded-lg flex items-center justify-center">
                  <p className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    {image.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Modal for Selected Image */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
                className="relative max-w-4xl w-full"
              >
                <button
                  className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="w-8 h-8" />
                </button>
                <img
                  src={selectedImage}
                  alt="Enlarged view"
                  className="w-full h-auto rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;
