"use client";
import { Button } from "@/components/ui/button";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Modal, Table, Timeline } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { SlInfo, SlDoc } from "react-icons/sl";
import GlobalApi from "@/app/_utils/GlobalApi";
import { format } from "date-fns";
import { id } from "date-fns/locale";

function DaftarPengajuan() {
  const [openModal, setOpenModal] = useState(false);
  const [pengguna, setPengguna] = useState({});
  const [idPengguna, setIdPengguna] = useState("");
  const [dataModal, setDataModal] = useState({});

  const { user, isLoading } = useKindeBrowserClient();

  useEffect(() => {
    if (!isLoading) {
      GlobalApi.getOnePenggunaByEmail(user.email)
        .then((res) => {
          setPengguna(res.data.data[0].attributes);
          setIdPengguna(res.data.data[0].id);
        })
        .catch((err) => console.log(err));
    }
  }, [isLoading]);

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Pengajuan Permohonan Anda</h1>
      <p className="mt-1.5 text-sm text-gray-500">Daftar permohonan yang sedang diproses.</p>

      <div className="overflow-x-auto mt-4">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Perihal</Table.HeadCell>
            <Table.HeadCell>Tanggal</Table.HeadCell>
            <Table.HeadCell>Penandatangan</Table.HeadCell>
            <Table.HeadCell>Progres</Table.HeadCell>
            <Table.HeadCell>Dokumen</Table.HeadCell>
            <Table.HeadCell>Details</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {pengguna?.pengajuans?.data[0] ? (
              pengguna.pengajuans.data.map((v, i) => (
                <Table.Row key={i} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {v.attributes.perihal}
                  </Table.Cell>
                  <Table.Cell>
                    {format(v.attributes.tanggalSurat, "dd MMM yyyy", { locale: id })}
                  </Table.Cell>
                  <Table.Cell>{v.attributes.penandatanganSurat}</Table.Cell>
                  <Table.Cell>
                    <span
                      className={`bg-${
                        v.attributes.progressPengajuan[v.attributes.progressPengajuan.length - 1]
                          .warnaNotif
                      }-100 text-black`}
                    >
                      {
                        v.attributes.progressPengajuan[v.attributes.progressPengajuan.length - 1]
                          .progres
                      }
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <a
                      href={v.attributes.dokumenSurat.data.attributes.url}
                      target="_blank"
                      className="flex items-center font-medium cursor-pointer text-cyan-600 dark:text-cyan-500"
                    >
                      <SlDoc />
                      Lihat
                    </a>
                  </Table.Cell>
                  <Table.Cell>
                    <a
                      onClick={() => {
                        setOpenModal(true);
                        setDataModal({
                          perihal: v.attributes.perihal,
                          tanggalSurat: v.attributes.tanggalSurat,
                          penandatanganSurat: v.attributes.penandatanganSurat,
                          nomorSurat: v.attributes.nomorSurat,
                          tanggalPengajuan: v.attributes.createdAt,
                          dokumenSurat: v.attributes.dokumenSurat.data.attributes.url,
                          progressPengajuan: v.attributes.progressPengajuan,
                        });
                      }}
                      className="font-medium cursor-pointer text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      <SlInfo />
                    </a>
                  </Table.Cell>
                </Table.Row>
              ))
            ) : (
              <></>
            )}
          </Table.Body>
        </Table>
      </div>

      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Details</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div className="flow-root">
              <dl className="-my-3 divide-y divide-gray-100 text-sm">
                <div className="grid grid-cols-1 gap-1 py-2 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Perihal</dt>
                  <dd className="text-gray-700 sm:col-span-2">{dataModal?.perihal}</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-2 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Tanggal Pengajuan</dt>
                  <dd className="text-gray-700 sm:col-span-2">
                    {format(dataModal?.tanggalPengajuan || new Date(), "dd MMM yyyy", {
                      locale: id,
                    })}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-2 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Nomor Surat</dt>
                  <dd className="text-gray-700 sm:col-span-2">{dataModal?.nomorSurat}</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-2 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Tanggal Surat</dt>
                  <dd className="text-gray-700 sm:col-span-2">
                    {format(dataModal?.tanggalSurat || new Date(), "dd MMM yyyy", { locale: id })}
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-2 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Penandatangan Surat</dt>
                  <dd className="text-gray-700 sm:col-span-2">{dataModal?.penandatanganSurat}</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-2 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Dokumen Surat</dt>
                  <dd className="text-gray-700 sm:col-span-2">
                    <a
                      href={dataModal?.dokumenSurat}
                      target="_blank"
                      className="flex items-center font-medium cursor-pointer text-cyan-600 dark:text-cyan-500"
                    >
                      <SlDoc />
                      Lihat
                    </a>
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Dokumen Pendukung</dt>
                  <dd className="text-gray-700 sm:col-span-2"></dd>
                </div>
              </dl>
            </div>

            <h3 class="text-lg font-medium text-gray-900">Progres Pengajuan</h3>
            <Timeline>
              {dataModal?.progressPengajuan?.map((val, i) => (
                <>
                  <Timeline.Item key={i}>
                    <Timeline.Point />
                    <Timeline.Content>
                      <Timeline.Time>
                        {format(val.notifiedAt, "PPPPpppp" || new Date(), { locale: id })}
                      </Timeline.Time>
                      <Timeline.Title>{val.progres}</Timeline.Title>
                      <Timeline.Body>{val.keterangan}</Timeline.Body>
                    </Timeline.Content>
                  </Timeline.Item>
                </>
              ))}
            </Timeline>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="blue" onClick={() => setOpenModal(false)}>
            Kembali
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DaftarPengajuan;
