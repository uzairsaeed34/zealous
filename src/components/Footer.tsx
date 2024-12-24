import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Zealous CounterTops</h3>
            <p className="text-gray-400">
              Crafting premium countertops that transform your space into a
              masterpiece.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" /> (555) 123-4567
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" /> info@Zealous CounterTops.com
              </p>
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" /> 123 Marble Street, Suite 100
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Facebook />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Instagram />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Twitter />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Zealous CounterTops. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
