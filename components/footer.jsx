import React from 'react'
import { checkUser } from "@/lib/checkUser";
import Image from 'next/image';
import Link from 'next/link';

const Footer = async () => {
  await checkUser();
  return (
    <footer className="bg-blue-50 text-black py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Footer Top Section */}
        <div className="flex flex-wrap gap-10 mb-10">
          {/* Brand Section */}
          <div className="flex-1 min-w-[250px] text-center">
            <div href="/"className="inline-block text-xl font-bold text-[#6c47ff] py-2 px-5 rounded mb-2 cursor-pointer">
              BUDGETBUDDY
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              BudgetBuddy makes managing your money simple. Track, plan, and reach your financial goals—starting today.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1 min-w-[150px]">
            <h4 className="text-xl font-semibold mb-5 text-black text-center">Quick Links</h4>
            <ul className="list-none p-0 space-y-2 text-center">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#6c47ff] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/dashboard"} className="text-gray-600 hover:text-[#6c47ff] transition">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href={"/transaction/create"} className="text-gray-600 hover:text-[#6c47ff] transition">
                  Add Transaction
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex-1 min-w-[150px]">
            <h4 className="text-lg font-semibold mb-5 text-black text-center">Follow Us</h4>
            <div className="flex gap-4 justify-center items-center">
              <a href="https://www.facebook.com/" aria-label="Facebook">
                <Image src="/icons8-facebook.svg" width={10} height={10} alt="Facebook" className="w-10 h-10 hover:scale-110 transition-transform" />
              </a>
              <a href="https://x.com/?lang=en-in" aria-label="Twitter">
                <Image src="/icons8-twitter.svg" width={10} height={10} alt="Twitter" className="w-10 h-10 hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.instagram.com/" aria-label="Instagram">
                <Image src="/icons8-instagram.svg" width={10} height={10} alt="Instagram" className="w-10 h-10 hover:scale-110 transition-transform" />
              </a>
              <a href="https://in.linkedin.com/" aria-label="LinkedIn">
                <Image src="/icons8-linkedin.svg" width={10} height={10} alt="LinkedIn" className=" w-10 h-10 hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex-2 min-w-[250px]">
            <h4 className="text-lg font-semibold mb-5 text-black text-center">Subscribe to Our Newsletter</h4>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-2 rounded bg-white text-gray-700 text-sm border border-[#333] placeholder:text-[#b0b0b0] focus:outline-none"
              />
              <button
                type="submit"
                className="bg-black text-white px-5 py-2 rounded font-semibold hover:bg-[#6c47ff] transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-[#333] pt-5 text-sm text-gray-600">
          <p>&copy; 2025 BudgetBuddy. All rights reserved.</p>
          <div className="flex gap-5 mt-3 sm:mt-0">
            <a href="#" className="hover:text-[#6c47ff] transition">Privacy Policy</a>
            <a href="#" className="hover:text-[#6c47ff] transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
