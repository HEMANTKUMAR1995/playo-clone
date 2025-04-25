import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-16 px-6 py-10 text-sm text-gray-700">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
        {/* Company Info */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Learn Links */}
        <div>
          <h4 className="font-semibold mb-3">Learn</h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                How it Works
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="font-semibold mb-3">Social</h4>
          <ul className="space-y-1">
            <li className="flex items-center gap-2">
              <FaInstagram />{" "}
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaFacebookF />{" "}
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaLinkedinIn />{" "}
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-3">Policy & Terms</h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Refund Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs mt-10 text-gray-500">
        <p>© {new Date().getFullYear()} Playo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
