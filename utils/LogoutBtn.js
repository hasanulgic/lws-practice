"use client";
import { signOut } from "next-auth/react";

export default function LogoutBtn() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "http://localhost:3000/login" })}
      class="text-gray-900 hover:text-white transition bg-primary px-4 py-1 rounded-md"
    >
      Logout
    </button>
  );
}
