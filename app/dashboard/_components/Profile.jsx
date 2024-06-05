"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import GlobalApi from "@/app/_utils/GlobalApi";
import { Modal } from "flowbite-react";
import { PiSealCheck } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function Profile() {
  const [pengguna, setPengguna] = useState({});
  const [emailPengguna, setEmailPengguna] = useState("");
  const [idPengguna, setIdPengguna] = useState("");
  const { user, isLoading } = useKindeBrowserClient();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      GlobalApi.getOnePenggunaByEmail(user.email)
        .then((res) => {
          setPengguna(res.data.data[0].attributes);
          setIdPengguna(res.data.data[0].id);
          setEmailPengguna(res.data.data[0].attributes.email);
          // console.log(res.data.data[0]);
        })
        .catch((err) => console.log(err));
    }
  }, [isLoading]);

  function onSubmit(data) {
    // console.log(idPengguna, { data: { ...data, identitasLengkap: true } });

    GlobalApi.updatePengguna(idPengguna, { data: { ...data, identitasLengkap: true } })
      .then((res) => {
        setOpenModal(true);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
        Selamat Datang, {pengguna?.nama}!
      </h1>
      <p className="mt-1.5 text-sm text-gray-500">Silahkan lengkapi profile anda.</p>

      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="nama" className="block text-sm font-medium text-gray-700">
              Nama Lengkap
            </label>

            <Input
              type="text"
              id="nama"
              name="nama"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              value={pengguna?.nama}
              {...register("nama", { required: { value: true, message: "wajib diisi" } })}
            />
            {errors.nama && <span className="text-sm text-red-500">{errors.nama.message}</span>}
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>

            <Input
              type="email"
              readOnly
              id="email"
              name="email"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              value={emailPengguna}
              {...register("email", { required: { value: true, message: "wajib diisi" } })}
            />
            {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
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
              defaultValue={pengguna?.instansi}
              {...register("instansi", { required: { value: true, message: "wajib diisi" } })}
            />
            {errors.instansi && (
              <span className="text-sm text-red-500">{errors.instansi.message}</span>
            )}
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="no_hp" className="block text-sm font-medium text-gray-700">
              No. Telp/HP
            </label>

            <Input
              type="number"
              id="no_hp"
              name="no_hp"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              defaultValue={pengguna?.no_hp}
              {...register("no_hp", {
                required: { value: true, message: "wajib diisi" },
                minLength: { value: 9, message: "minimal 9 angka" },
                maxLength: { value: 12, message: "maximal 12 angka" },
              })}
            />
            {errors.no_hp && <span className="text-sm text-red-500">{errors.no_hp.message}</span>}
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="nip" className="block text-sm font-medium text-gray-700">
              NIP
            </label>

            <Input
              type="number"
              id="nip"
              name="nip"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              defaultValue={pengguna?.nip}
              {...register("nip", {
                required: { value: true, message: "wajib diisi" },
                minLength: { value: 16, message: "minimal 16 angka" },
              })}
            />
            {errors.nip && <span className="text-sm text-red-500">{errors.nip.message}</span>}
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="nik" className="block text-sm font-medium text-gray-700">
              NIK
            </label>

            <Input
              type="number"
              id="nik"
              name="nik"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              defaultValue={pengguna?.nik}
              {...register("nik", {
                required: { value: true, message: "wajib diisi" },
                minLength: { value: 13, message: "minimal 13 angka" },
              })}
            />
            {errors.nik && <span className="text-sm text-red-500">{errors.nik.message}</span>}
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
              defaultValue={pengguna?.alamat}
              {...register("alamat", { required: { value: true, message: "wajib diisi" } })}
            />
            {errors.alamat && <span className="text-sm text-red-500">{errors.alamat.message}</span>}
          </div>

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              type="submit"
              className="inline-block shrink-0 rounded-md border border-blue-600 bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>

      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <PiSealCheck className="mx-auto mb-4 h-20 w-20 text-green-500" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Profile anda sudah lengkap. <br />
              Lanjut ke Halaman Buat Permohonan?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() => {
                  setOpenModal(false);
                  router.push("/dashboard/buat-permohonan");
                }}
                className="bg-primary"
              >
                Ya
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Profile;
