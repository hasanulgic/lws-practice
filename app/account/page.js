import React from "react";

export default function page() {
  return (
    <>
      {/* <!-- breadcrumb --> */}
      <div class="container py-4 flex items-center gap-3">
        <a href="../index.html" class="text-primary text-base">
          <i class="fa-solid fa-house"></i>
        </a>
        <span class="text-sm text-gray-400">
          <i class="fa-solid fa-chevron-right"></i>
        </span>
        <p class="text-gray-600 font-medium">Account</p>
      </div>
      {/* <!-- ./breadcrumb --> */}

      {/* <!-- account wrapper --> */}
      <div class="container  items-start gap-6 pt-4 pb-16">
        {/* <!-- info --> */}
        <div class=" grid grid-cols-3 gap-4 mx-auto max-w-5xl">
          <div class="shadow rounded bg-white px-4 pt-6 pb-8">
            <div class="flex items-center justify-between mb-4">
              <h3 class="font-medium text-gray-800 text-lg">
                Personal Profile
              </h3>
              <a href="#" class="text-primary">
                Edit
              </a>
            </div>
            <div class="space-y-1">
              <h4 class="text-gray-700 font-medium">John Doe</h4>
              <p class="text-gray-800">example@mail.com</p>
              <p class="text-gray-800">0811 8877 988</p>
            </div>
          </div>

          <div class="shadow rounded bg-white px-4 pt-6 pb-8">
            <div class="flex items-center justify-between mb-4">
              <h3 class="font-medium text-gray-800 text-lg">
                Shipping address
              </h3>
              <a href="#" class="text-primary">
                Edit
              </a>
            </div>
            <div class="space-y-1">
              <h4 class="text-gray-700 font-medium">John Doe</h4>
              <p class="text-gray-800">Medan, North Sumatera</p>
              <p class="text-gray-800">20371</p>
              <p class="text-gray-800">0811 8877 988</p>
            </div>
          </div>

          <div class="shadow rounded bg-white px-4 pt-6 pb-8">
            <div class="flex items-center justify-between mb-4">
              <h3 class="font-medium text-gray-800 text-lg">Billing address</h3>
              <a href="#" class="text-primary">
                Edit
              </a>
            </div>
            <div class="space-y-1">
              <h4 class="text-gray-700 font-medium">John Doe</h4>
              <p class="text-gray-800">Medan, North Sumatera</p>
              <p class="text-gray-800">20317</p>
              <p class="text-gray-800">0811 8877 988</p>
            </div>
          </div>
        </div>
        {/* <!-- ./info --> */}
      </div>
      {/* <!-- ./account wrapper --> */}
    </>
  );
}
