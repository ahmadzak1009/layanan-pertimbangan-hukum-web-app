import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import Sidebar from "./_components/Sidebar";
import Dashboard from "./_components/Dashboard";

export const metadata = {
  title: "Dashboard",
  description: "Layanan Pertimbangan Hukum Kejaksaan Negeri Tana Toraja",
};

async function DashboardPage() {
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
        <div className="rounded-lg lg:col-span-2">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
