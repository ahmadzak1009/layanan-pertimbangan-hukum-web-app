import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import Profile from "../_components/Profile";
import Sidebar from "../_components/Sidebar";

export const metadata = {
  title: "Profile",
  description: "Layanan Pertimbangan Hukum Kejaksaan Negeri Tana Toraja",
};

async function ProfilePage() {
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login?post_login_redirect_url=/dashboard");
  }

  return (
    <div className="mx-auto max-w-screen-xl px-4 pt-6 pb-20 sm:px-6 lg:px-8 lg:pt-16">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="rounded-lg">
          <Sidebar />
        </div>
        <div className="rounded-lg lg:col-span-2 bg-gray-100 p-4">
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
