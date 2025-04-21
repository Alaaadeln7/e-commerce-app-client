import { useState } from "react";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebook, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  const [selectedLang, setSelectedLang] = useState("en");

  return (
    <div className="mt-60 bg-base-300  py-16 px-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-wrap gap-32">
            <div>
              <h1 className="text-2xl font-medium mb-4">About</h1>
              <h5 className="text-base-400 mb-2">Home</h5>
              <h5 className="text-base-400 mb-2">Shop</h5>
              <h5 className="text-base-400 mb-2">Our Story</h5>
              <h5 className="text-base-400 mb-4">Blog</h5>
              <select
                value={selectedLang}
                onChange={(e) => setSelectedLang(e.target.value)}
                className="select"
              >
                <option value="en">English</option>
                <option value="ar">العربية</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
                <option value="es">Español</option>
              </select>
            </div>
            <div>
              <h1 className="text-2xl font-medium mb-4">Help</h1>
              <h5 className="text-base-900 mb-2">Shipping & Returns</h5>
              <h5 className="text-base-900 mb-2">Track Order</h5>
              <h5 className="text-base-900">FAQs</h5>
            </div>
            <div>
              <h1 className="text-2xl font-medium mb-4">Contact</h1>
              <h5 className="text-base-900">Phone</h5>
              <h4 className="mb-2">(+1) 123 456 7893</h4>
              <h5 className="text-base-900">Email</h5>
              <h4>name@email.com</h4>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-medium mb-4">
              Receive new promotions
            </h1>
            <p className="text-gray-400 mb-4">
              Duis ea tempor commodo amet reprehende
            </p>
            <div className="flex items-center border border-base-100 rounded-lg overflow-hidden">
              <label className="flex items-center gap-2 px-4 py-3 text-base-900">
                <IoMailOutline className="text-base-900 text-xl" />
                <input
                  type="email"
                  placeholder="Input your email"
                  className="bg-transparent outline-none text-base-900 placeholder-base-900"
                  required
                />
              </label>
              <button className="px-6 py-3 bg-primary text-base-100">
                Subscribe
              </button>
            </div>
            <div className="flex gap-6 text-base-900 text-xl mt-6 mb-6">
              <FaXTwitter />
              <FaFacebook />
              <FaLinkedin />
              <FaYoutube />
            </div>
            <p className="text-base-900">
              © 2025 Brand, Inc. Privacy. Terms. Sitemap
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
