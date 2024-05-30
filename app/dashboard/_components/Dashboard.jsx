"use client";
import React, { useEffect, useState } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import GlobalApi from "@/app/_utils/GlobalApi";
import { GiGears } from "react-icons/gi";
import { FaFileUpload } from "react-icons/fa";
import { GoIssueClosed } from "react-icons/go";
import { RiCloseCircleLine } from "react-icons/ri";

function Dashboard() {
  const [pengguna, setPengguna] = useState({});
  const [diajukan, setDiajukan] = useState(null);
  const [diproses, setDiproses] = useState(null);
  const [disetujui, setDisetujui] = useState(null);
  const [ditolak, setDitolak] = useState(null);
  const { user, isLoading } = useKindeBrowserClient();

  useEffect(() => {
    if (!isLoading) {
      GlobalApi.getOnePenggunaByEmail(user.email)
        .then((res) => {
          setPengguna(res.data.data[0].attributes);
          setDiajukan(res.data.data[0].attributes.pengajuans.data.length);
          setDiproses(
            res.data.data[0].attributes.pengajuans.data.filter(
              (d) => d.attributes.disetujui == null
            ).length
          );
          setDisetujui(
            res.data.data[0].attributes.pengajuans.data.filter(
              (d) => d.attributes.disetujui == true
            ).length
          );
          setDitolak(
            res.data.data[0].attributes.pengajuans.data.filter(
              (d) => d.attributes.disetujui == false
            ).length
          );
          setDisetujui(
            res.data.data[0].attributes.pengajuans.data.filter(
              (d) => d.attributes.disetujui == true
            ).length
          );
          //   console.log(
          //     res.data.data[0].attributes.pengajuans.data.filter(
          //       (d) => d.attributes.disetujui == true
          //     ).length
          //   );
        })
        .catch((err) => console.log(err));
    }
  }, [isLoading]);

  return (
    <>
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-blue-400 text-white shadow">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Diajukan</h3>
            <div>
              <FaFileUpload className="text-white text-2xl" />
            </div>
          </div>

          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">{diajukan}</div>
          </div>
        </div>
        <div className="rounded-xl border bg-yellow-200 text-white shadow">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Diproses</h3>
            <div>
              <GiGears className="text-white text-2xl" />
            </div>
          </div>

          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">{diproses}</div>
          </div>
        </div>
        <div className="rounded-xl border bg-green-500 text-white shadow">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Disetujui</h3>
            <div>
              <GoIssueClosed className="text-white text-2xl" />
            </div>
          </div>

          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">{disetujui}</div>
          </div>
        </div>
        <div className="rounded-xl border bg-red-600 text-white shadow">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Ditolak</h3>
            <div>
              <RiCloseCircleLine className="text-white text-2xl" />
            </div>
          </div>

          <div className="p-6 pt-0">
            <div className="text-2xl font-bold">{ditolak}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
