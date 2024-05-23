"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

function Profile() {
  const { toast } = useToast();
  const { user } = useKindeBrowserClient();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {}, [user]);

  function onSubmit(data) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    console.log(data);
  }

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
        Selamat Datang, {user?.given_name}!
      </h1>
      <p className="mt-1.5 text-sm text-gray-500">Silahkan lengkapi profile anda.</p>

      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="nama_lengkap" className="block text-sm font-medium text-gray-700">
              Nama Lengkap
            </label>

            <Input
              type="text"
              id="nama_lengkap"
              name="nama_lengkap"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              defaultValue={user?.given_name}
              {...register("nama_lengkap", { required: true })}
            />
            {errors.nama_lengkap && (
              <span className="text-sm text-red-500">*This field is required</span>
            )}
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>

            <Input
              type="email"
              id="email"
              name="email"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              value={user?.email}
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-sm text-red-500">*This field is required</span>}
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="instansi" className="block text-sm font-medium text-gray-700">
              Instansi/Lembaga/Badan
            </label>

            <Input
              type="text"
              id="instansi"
              name="instansi"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              defaultValue={user?.instansi}
              {...register("instansi", { required: true })}
            />
            {errors.instansi && (
              <span className="text-sm text-red-500">*This field is required</span>
            )}
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="no_hp" className="block text-sm font-medium text-gray-700">
              No. Telp/HP
            </label>

            <Input
              type="text"
              id="no_hp"
              name="no_hp"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              defaultValue={user?.no_hp}
              {...register("no_hp", { required: true })}
            />
            {errors.no_hp && <span className="text-sm text-red-500">*This field is required</span>}
          </div>

          <div className="col-span-6">
            <label htmlFor="alamat" className="block text-sm font-medium text-gray-700">
              Alamat
            </label>

            <Input
              type="text"
              id="alamat"
              name="alamat"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              defaultValue={user?.alamat}
              {...register("alamat", { required: true })}
            />
            {errors.alamat && <span className="text-sm text-red-500">*This field is required</span>}
          </div>

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              type="submit"
              className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Profile;
