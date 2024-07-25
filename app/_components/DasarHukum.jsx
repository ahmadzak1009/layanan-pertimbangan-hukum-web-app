import React from "react";

function DasarHukum() {
  return (
    <>
      <section id="dasar-hukum">
        <div className="mx-auto max-w-screen-xl px-4 pt-6 pb-8 sm:px-6 lg:px-8 lg:pt-16">
          <article className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
            <div className="flex items-center sm:gap-8">
              <div
                className="hidden sm:grid sm:size-60 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
                aria-hidden="true"
              >
                <div className="flex items-center gap-1">
                  <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                  <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                  <span className="h-4 w-0.5 rounded-full bg-indigo-500"></span>
                  <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                  <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center">
                <h1>
                  <strong className="rounded border border-primary bg-primary px-3 py-1.5 text-lg font-medium text-white">
                    Dasar Hukum
                  </strong>
                </h1>

                <h3 className="mt-4 text-lg font-medium sm:text-xl">
                  <div className="text-center">
                    PERATURAN KEJAKSAAN REPUBLIK INDONESIA NOMOR 7 TAHUN 2021 <br /> TENTANG <br />{" "}
                    PEDOMAN PELAKSANAAN PENEGAKAN HUKUM, BANTUAN HUKUM, PERTIMBANGAN HUKUM, TINDAKAN
                    HUKUM LAIN, DAN PELAYANAN HUKUM DI BIDANG PERDATA DAN TATA USAHA NEGARA
                  </div>
                </h3>

                <div className="mt-1 text-sm text-gray-700 px-2 sm:px-9">
                  <ul className="list-disc text-justify">
                    <li>
                      Undang-Undang Nomor 16 Tahun 2004 tentang Kejaksaan Republik Indonesia
                      (Lembaran Negara Republik Indonesia Tahun 2004 Nomor 67, Tambahan Lembaran
                      Negara Republik Indonesia Nomor 4401);
                    </li>
                    <li>
                      Peraturan Presiden Nomor 38 Tahun 2010 tentang Organisasi dan Tata Kerja
                      Kejaksaan Republik Indonesia sebagaimana telah beberapa kali diubah terakhir
                      dengan Peraturan Presiden Nomor 15 Tahun 2021 tentang Perubahan Kedua atas
                      Peraturan Presiden Nomor 38 Tahun 2010 tentang Organisasi dan Tata Kerja
                      Kejaksaan Republik Indonesia (Lembaran Negara Republik Indonesia Tahun 2021
                      Nomor 67);
                    </li>
                    <li>
                      Peraturan Jaksa Agung Nomor PER-006/A/JA/07/2017 tentang Organisasi dan Tata
                      Kerja Kejaksaan Republik Indonesia sebagaimana telah beberapa kali diubah
                      terakhir dengan Peraturan Kejaksaan Nomor 1 Tahun 2021 tentang Perubahan Kedua
                      atas Peraturan Jaksa Agung Nomor PER-006/A/JA/07/2017 tentang Organisasi dan
                      Tata Kerja Kejaksaan Republik Indonesia (Berita Negara Republik Indonesia
                      Tahun 2021 Nomor 443);
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default DasarHukum;
