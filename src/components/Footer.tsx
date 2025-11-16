// components/Footer.tsx

import { FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail, MdPhone, MdAccessTime } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-300 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10">
        
        {/* SHOP */}
        <div>
          <h3 className="font-semibold text-white mb-4">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li>New Arrivals</li>
            <li>Best Sellers</li>
            <li>Collection</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Our Story</li>
            <li>Blogs</li>
          </ul>
        </div>

        {/* CUSTOMER CARE */}
        <div>
          <h3 className="font-semibold text-white mb-4">Customer Care</h3>
          <ul className="space-y-2 text-sm">
            <li>Shipping & Delivery</li>
            <li>Return Policy</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Contact</li>
            <li>Track Order</li>
          </ul>
        </div>

        {/* SOCIAL + CONTACT */}
        <div>
          <h3 className="font-semibold text-white mb-4">Ovulan</h3>
          
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <MdPhone /> +44 7557 446760
            </li>

            <li className="flex items-center gap-2">
              <MdEmail /> Ovulan@support.com
            </li>

            <li className="flex items-center gap-2">
              <MdAccessTime /> Mon–Sat 8am–7pm GMT
            </li>
          </ul>

          <div className="flex items-center gap-4 mt-4 text-xl">
            <FaTwitter className="cursor-pointer hover:text-white" />
            <FaYoutube className="cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>

   
    </footer>
  );
}
export default Footer;
