import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaPinterest } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="bg-secondary px:4 md:px-10 lg:px-20 xl:px-28">
        <div className="grid grid-cols-3 py-16">
          <div className="flex flex-col gap-2">
            <Image src="/logo.png" alt="" width={120} height={80} className="mb-4" />
            <p>Address: 60-49 Road 11378 New York</p>
            <p>Phone: +65 11.188.888</p>
            <p>Email: hello@colorlib.com</p>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="font-extrabold text-lg"> Useful Links</h2>
            <div className="flex gap-20 text-sm">
              <div className="flex flex-col gap-1.5">
                <Link href="/">About Us</Link>
                <Link href="/">About Our Shop</Link>
                <Link href="/">Secure Shopping</Link>
                <Link href="/">Delivery Information</Link>
                <Link href="/">Privacy Policy</Link>
                <Link href="/">Our Sitemap</Link>
              </div>
              <div className="flex flex-col gap-1.5">
                <Link href="/">Who We are</Link>
                <Link href="/">Our Services</Link>
                <Link href="/">Projects</Link>
                <Link href="/">Contact</Link>
                <Link href="/">Innovation</Link>
                <Link href="/">Testimonials</Link>
             </div>
            </div>
          </div>
          <div>
            <h2 className="font-extrabold text-lg">Join Our Newsletter Now</h2>
            <p className="text-sm mt-1"> Get E-mail updates about our latest shop and special offers.</p>
            <div className="w-full flex my-8">
              <input type="email" placeholder="Enter your E-mail" name="email" className="flex-1 py-2 outline-none bg-white px-4" />
              <button className="text-white bg-primary py-2 uppercase px-5">subscribe</button>
            </div>
            <div className="flex gap-3 text-gray-600">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer transition-all duration-300">
                <FaFacebookF />
              </div>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer transition-all duration-300">
                <FaTwitter />
              </div>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer transition-all duration-300">
                <IoLogoInstagram />
              </div>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer transition-all duration-300">
                <FaPinterest />
              </div>
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-200" />
        <div className="flex justify-between py-5 items-center">
          <div className="text-gray-500">Copyright ©2024 All rights reserved | This template is made with  by  <span className="text-primary hover:text-white cursor-pointer">Rony</span> </div>
          <div>
            <Image src="/payment-item.png" alt="" width={300} height={30} />
          </div>
        </div>
    </div>
  )
}

export default Footer
