"use client";
import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function Hero() {
  const router = useRouter();

  return (
    <>
      <section id="hero">
        <div className="mx-auto max-w-screen-xl px-4 pt-6 pb-20 sm:px-6 lg:px-8 lg:pt-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-full overflow-hidden rounded-lg sm:h-full lg:order-last lg:h-full">
              <div class="grid grid-cols-3 gap-4">
                <div class="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Dapatkan Layanan <span className="text-primary">Pertimbangan Hukum</span>
              </h2>

              <p className="mt-4 text-gray-600">
                Kantor Pengacara Negara pada Kejaksaan Negeri Tana Toraja menyediakan layananan
                Pertimbangan Hukum kepada Negara atau Pemerintah, dalam bentuk Pendapat Hukum (legal
                opinion atau LO) dan/ atau Pendampingan Hukum (legal assistance atau LA) di hidang
                perdata dan tata usaha negara dan/ atau Audit Hukum (Legal audit) di bidang perdata.
              </p>

              <button
                onClick={() => {
                  router.push("/dashboard/buat-permohonan");
                }}
                className="mt-8 inline-block rounded bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Ajukan Permohonan Sekarang
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[url('/corak.jpg')] bg-repeat h-10 bg-contain"></div>
    </>
  );
}

export default Hero;
