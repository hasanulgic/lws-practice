/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
   <nav class="bg-gray-800">
        <div class="container flex">
            <div class="px-8 py-4 bg-primary md:flex items-center cursor-pointer relative group hidden">
                <span class="text-white">
                    <i class="fa-solid fa-bars"></i>
                </span>
                <span class="capitalize ml-2 text-white hidden">All Categories</span>

                {/* <!-- dropdown --> */}
                <div class="absolute left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible w-[600px]"
                    style={{width: "300px"}}>
                    <Link href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="assets/images/icons/sofa.svg" alt="sofa" class="w-5 h-5 object-contain"/>
                        <span class="ml-6 text-gray-600 text-sm">Sofa</span>
                    </Link>
                    <Link href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="assets/images/icons/terrace.svg" alt="terrace" class="w-5 h-5 object-contain"/>
                        <span class="ml-6 text-gray-600 text-sm">Living Room</span>
                    </Link>
                    <Link href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="assets/images/icons/bed.svg" alt="bed" class="w-5 h-5 object-contain"/>
                        <span class="ml-6 text-gray-600 text-sm">Bedroom</span>
                    </Link>
                    <Link href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="assets/images/icons/office.svg" alt="Outdoor" class="w-5 h-5 object-contain"/>
                        <span class="ml-6 text-gray-600 text-sm">Outdoor</span>
                    </Link>
                    <Link href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="assets/images/icons/outdoor-cafe.svg" alt="outdoor" class="w-5 h-5 object-contain"/>
                        <span class="ml-6 text-gray-600 text-sm">Outdoor</span>
                    </Link>
                    <Link href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="assets/images/icons/bed-2.svg" alt="Mattress" class="w-5 h-5 object-contain"/>
                        <span class="ml-6 text-gray-600 text-sm">Mattress</span>
                    </Link>
                </div>
            </div>

            <div class="flex items-center justify-between flex-grow md:pl-12 py-5">
                <div class="flex items-center space-x-6 capitalize">
                    <Link href="/" class="text-gray-200 hover:text-white transition">Home</Link>
                    <Link href="/shop" class="text-gray-200 hover:text-white transition">Shop</Link>
                    <Link href="/" class="text-gray-200 hover:text-white transition">About us</Link>
                    <Link href="/" class="text-gray-200 hover:text-white transition">Contact us</Link>
                </div>
                <Link href="/login" class="text-gray-200 hover:text-white transition">Login</Link>
            </div>
        </div>
    </nav>
  )
}
