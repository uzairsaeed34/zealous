import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Phone, Mail, MapPin } from "lucide-react";
import "leaflet/dist/leaflet.css";
import banner from "../images/29.jpg";

const Contact = () => {
  const position: [number, number] = [51.1257, -114.0079]; // Coordinates for 5150 47 St Bay #2126 NE Calgary, Canada
  const googleMapsLink = "https://www.google.com/maps?q=51.1257,-114.0079"; // Google Maps link

  return (
    <div>
      {/* Header Section */}
      <section className="relative h-[50vh] w-full">
        <img
          src={banner}
          alt="Contact Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-sm">
            <span className="text-gray-300">Zealous</span> &lt; Contact
          </p>
        </div>
      </section>

      <div className="marble-overlay min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {/* Contact Form */}
            <div className="card">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div className="card">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-gray-600" />
                    <span>+1 (403) 919-0426</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-gray-600" />
                    <span>info@zealouscountertops.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-gray-600" />
                    <a
                      href={googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      5150 47 St Bay #2126 NE
                      <br />
                      Calgary - Canada. T3N 4N4
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="h-64 rounded-lg overflow-hidden shadow-lg">
                <MapContainer
                  center={position}
                  zoom={13}
                  style={{ height: "100%", width: "100%" }}
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={position}>
                    <Popup>
                      Zealous granite & Tile Showroom
                      <br />
                      <a
                        href={googleMapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        Open in Google Maps
                      </a>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
