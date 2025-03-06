import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import bg from "../images/gallery-bg.jpg";
import data from "../data.json"; // Import the JSON file

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [categories, setCategories] = useState<{ [key: string]: string[] }>({});
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const itemsPerPage = 15; // Number of items per page

  // Dynamically load all images from the src/images/img directory
  const importAllImages = () => {
    const context = import.meta.glob<true, string, { default: string }>(
      "../images/img/*.{jpg,png,jpeg}",
      { eager: true }
    );

    const imageMap: { [key: string]: string } = {};

    for (const path in context) {
      const fileName = path.split("/").pop() as string; // Extract the filename (e.g., "1.jpg")
      imageMap[fileName] = context[path].default; // Use default export for the resolved URL
    }

    return imageMap;
  };

  useEffect(() => {
    const imageMap = importAllImages();
    const categoryMap: { [key: string]: string[] } = {};

    // Map categories and load image URLs
    data.forEach((item) => {
      const { type, image } = item;
      if (!categoryMap[type]) {
        categoryMap[type] = [];
      }
      if (imageMap[image]) {
        categoryMap[type].push(imageMap[image]);
      }
    });

    setCategories(categoryMap);
  }, []);

  const allImages = Object.entries(categories).flatMap(([category, images]) =>
    images.map((image) => ({ url: image, category }))
  );

  const filteredImages =
    selectedCategory === "All"
      ? allImages
      : allImages.filter((image) => image.category === selectedCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredImages.length / itemsPerPage);
  const paginatedImages = filteredImages.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      {/* Header Section */}
      <section className="relative h-[50vh] w-full">
        <img
          src={bg}
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
          {["Quartz", "Granite", "Marble", "Tile"]
            .filter((category) => categories[category]) // Ensure only available categories are shown
            .map((category) => (
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
            {paginatedImages.map((image, index) => (
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

          {/* Pagination Controls */}
          <div className="flex justify-center mt-8">
            <button
              className="px-4 py-2 mx-2 font-semibold rounded bg-gray-200 text-gray-800 hover:bg-gray-300"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <p className="px-4 py-2 font-semibold">
              Page {currentPage} of {totalPages}
            </p>
            <button
              className="px-4 py-2 mx-2 font-semibold rounded bg-gray-200 text-gray-800 hover:bg-gray-300"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
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
