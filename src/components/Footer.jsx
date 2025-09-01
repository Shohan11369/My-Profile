import React from "react";
import {
  AddIcCall,
  Mail,
  Facebook,
  X,
  Instagram,
  WhatsApp,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";

function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[url('/footer.jpg')] bg-cover  bg-no-repeat  m-0 p-0 opacity-100 text-white "
    >
      {/* Top Section */}
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row justify-between gap-8 py-16">
        {/* Logo & Address */}
        <div>
          <h2 className="font-semibold text-lg mb-2">Home Address:</h2>
          <p className="text-white">Petaling Jaya,Malaysia</p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Contact</h2>
          <ul className="space-y-2 text-white">
            <li className="flex items-center gap-2">
              <AddIcCall fontSize="small" /> +60-1126631075
            </li>
            <li className="flex items-center gap-2">
              <Mail fontSize="small" /> sarkershohan346@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 py-16">
        <a
          href="https://www.facebook.com/share/16tZpoBkap/"
          target="_blank"
          className="bg-black p-3 md:p-4 rounded-full hover:bg-gray-500 transition"
        >
          <Facebook className="text-2xl md:text-4xl" />
        </a>
        <a
          href=""
          target="_blank"
          className="bg-black p-3 md:p-4 rounded-full hover:bg-gray-500 transition"
        >
          <X className="text-2xl md:text-4xl" />
        </a>
        <a
          href="https://www.instagram.com/shohan_sarker_11_369?igsh=MXMwcXoxaTQyaW5odg=="
          target="_blank"
          className="bg-black p-3 md:p-4 rounded-full hover:bg-gray-500 transition"
        >
          <Instagram className="text-2xl md:text-4xl" />
        </a>
        <a
          href="https://wa.me/6011266310755"
          target="_blank"
          rel="noreferrer"
          className="bg-black p-3 md:p-4 rounded-full hover:bg-gray-500 transition"
        >
          <WhatsApp className="text-2xl md:text-4xl" />
        </a>
        <a
          href="http://linkedin.com/in/shohan-md-mizanur-rahman-21394027b"
          target="_blank"
          className="bg-black p-3 md:p-4 rounded-full hover:bg-gray-500 transition"
        >
          <LinkedIn className="text-2xl md:text-4xl" />
        </a>
        <a
          href="https://github.com/Shohan11369"
          target="_blank"
          className="bg-black p-3 md:p-4 rounded-full hover:bg-gray-500 transition"
        >
          <GitHub className="text-2xl md:text-4xl" />
        </a>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 bg-black text-center py-4 text-white text-sm">
        © {new Date().getFullYear()} Shohan sarker — All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
