import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import Sidebar from "../_components/Sidebar";
import FormPermohonan from "../_components/FormPermohonan";

async function BuatPermohonan() {
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
          <FormPermohonan />
        </div>
      </div>
    </div>
  );
}

export default BuatPermohonan;
