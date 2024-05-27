"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Datepicker, FileInput, Modal } from "flowbite-react";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import GlobalApi from "@/app/_utils/GlobalApi";
import { PiSealCheck } from "react-icons/pi";
import { useRouter } from "next/navigation";

function FormPermohonan() {
  const [pengguna, setPengguna] = useState({});
  const [idPengguna, setIdPengguna] = useState();
  const [file, setFile] = useState();
  const { user, isLoading } = useKindeBrowserClient();
  const [date, setDate] = useState(new Date());
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!isLoading) {
      GlobalApi.getOnePenggunaByEmail(user.email)
        .then((res) => {
          setPengguna(res.data.data[0].attributes);
          setIdPengguna(res.data.data[0].id);
          // console.log(res.data.data[0]);

          if (res.data.data[0].attributes.identitasLengkap == false) {
            router.push("/dashboard");
          }
        })
        .catch((err) => console.log(err));
    }
  }, [isLoading]);

  function onSubmit(data, e) {
    const file = data.dokumenSurat[0];

    // console.log(e);

    GlobalApi.addPengajuan({
      data: {
        ...data,
        // dokumenSurat: { data: data.dokumenSurat[0] },
        tanggalSurat: format(date, "yyyy-MM-dd", { locale: id }),
        progressPengajuan: [
          {
            progres: "Diproses",
            keterangan: "sedang di proses",
            warnaNotif: "yellow",
            notifiedAt: new Date(),
          },
        ],
        pengguna: {
          connect: [idPengguna],
        },
      },
    })
      .then((res) => {
        // console.log(res.data);
        const form = new FormData();
        form.append("ref", "api::pengajuan.pengajuan");
        form.append("refId", res.data.data.id);
        form.append("field", "dokumenSurat");
        form.append("files", file);

        GlobalApi.uploadDokumen(form)
          .then((res) => {
            setOpenModal(true);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
        Form Pengajuan Pertimbangan Hukum
      </h1>
      <p className="mt-1.5 text-sm text-gray-500"></p>

      <div className="">
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid grid-cols-6 gap-6">
          <div className="col-span-6">
            <label htmlFor="perihal" className="block text-sm font-medium text-gray-700">
              Perihal
            </label>

            <Input
              type="text"
              id="perihal"
              name="perihal"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              {...register("perihal", { required: true })}
            />
            {errors.perihal && (
              <span className="text-sm text-red-500">*This field is required</span>
            )}
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="nomorSurat" className="block text-sm font-medium text-gray-700">
              Nomor Surat
            </label>

            <Input
              type="text"
              id="nomorSurat"
              name="nomorSurat"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              {...register("nomorSurat", { required: true })}
            />
            {errors.nomorSurat && (
              <span className="text-sm text-red-500">*This field is required</span>
            )}
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="tanggalSurat" className="block text-sm font-medium text-gray-700">
              Tanggal Surat
            </label>

            <Datepicker
              id="tanggalSurat"
              name="tanggalSurat"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              value={format(date, "dd MMMM yyyy", { locale: id })}
              onSelectedDateChanged={(e) => setDate(e)}
              {...register("tanggalSurat")}
            />
            {errors.tanggalSurat && (
              <span className="text-sm text-red-500">*This field is required</span>
            )}
          </div>

          <div className="col-span-6">
            <label htmlFor="penandatanganSurat" className="block text-sm font-medium text-gray-700">
              Penandatangan Surat
            </label>

            <Input
              type="text"
              id="penandatanganSurat"
              name="penandatanganSurat"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              {...register("penandatanganSurat", { required: true })}
            />
            {errors.penandatanganSurat && (
              <span className="text-sm text-red-500">*This field is required</span>
            )}
          </div>

          <div className="col-span-6">
            <label htmlFor="dokumenSurat" className="block text-sm font-medium text-gray-700">
              Upload Surat
            </label>

            <FileInput
              helperText="PDF (MAX. 3MB)."
              id="dokumenSurat"
              name="dokumenSurat"
              accept="application/pdf"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              {...register("dokumenSurat", { required: true })}
            />
            {errors.dokumenSurat && (
              <span className="text-sm text-red-500">*This field is required</span>
            )}
          </div>

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              type="submit"
              className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            >
              Ajukan
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
              Permohonan berhasil terkirim! <br />
              Anda dapat melihat progres pengajuan melalui Halaman Daftar Permohonan.
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() => {
                  setOpenModal(false);
                  router.push("/dashboard/daftar-permohonan");
                }}
              >
                Lihat
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FormPermohonan;
