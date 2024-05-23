"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col justify-between border-e bg-white">
      <div className="px-4">
        <ul className="space-y-1">
          <li>
            <Link
              href="/dashboard"
              className={`block rounded-lg ${
                pathname == "/dashboard" && "bg-gray-100 text-gray-700"
              } px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700`}
            >
              Profile
            </Link>
          </li>

          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden" open={true}>
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <span className="text-sm font-medium">Permohonan Saya</span>

                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <Link
                    href="/dashboard/buat-permohonan"
                    className={`block rounded-lg px-4 py-2 text-sm font-medium ${
                      pathname == "/dashboard/buat-permohonan" && "bg-gray-100 text-gray-700"
                    } text-gray-500 hover:bg-gray-100 hover:text-gray-700`}
                  >
                    Buat Permohonan
                  </Link>
                </li>

                <li>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Diproses
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Selesai
                  </a>
                </li>
              </ul>
            </details>
          </li>

          {/* <li>
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  >
                    Billing
                  </a>
                </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
