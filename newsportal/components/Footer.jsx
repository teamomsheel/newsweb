
import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-4 divide-y dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="/home"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <span className="self-center  text-2xl font-semibold">
              My StartUp <span className="text-yellow-300">News</span>
            </span>
          </a>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase font-semibold dark:text-gray-900">
              Business
            </h3>
            <ul className="space-y-1">
              <li>
                <a href="#">OTT</a>
              </li>
              <li>
                <a href="#">Media</a>
              </li>
              <li>
                <a href="#">Dadi</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="tracking-wide uppercase  font-semibold dark:text-gray-900">
              Company
            </h3>
            <ul className="space-y-1">
              <li>
                <Link href="/privacy">Privacy</Link>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="uppercase font-semibold dark:text-gray-900">
              Contact Us
            </h3>
            <ul className="space-y-1">
              {/* <li>
                <a href="#">+91 73372 23376</a>
              </li> */}
              <li>
                <a
                  className="text-blue-500"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sharemystory@mystratuptv.in,editor@mystartuptv.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  sharemystory@mystratuptv.in
                  <br />
                  editor@mystartuptv.in
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-3">
            <h3 className="uppercase font-semibold dark:text-gray-900">
              Social media
            </h3>
            <div className="flex justify-start space-x-4 text-xl">
              <a
                href="https://www.facebook.com/mystartuptvin/"
                title="Facebook"
                className="text-blue-600 hover:scale-110 transition-transform"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://x.com/mystartuptvin/"
                title="Twitter"
                className="text-sky-500 hover:scale-110 transition-transform"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/mystartuptvin/?hl=en"
                title="Instagram"
                className="text-pink-500 hover:scale-110 transition-transform"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@MyStartupTV"
                title="YouTube"
                className="text-red-600 hover:scale-110 transition-transform"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-6 text-sm text-center dark:text-gray-600">
        © 2025{" "}
        <a
          className="text-pink-400 font-semibold text-[16px]"
          href="https://www.omsheelgroup.in/"
        >
          Omsheel
        </a>
        . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
