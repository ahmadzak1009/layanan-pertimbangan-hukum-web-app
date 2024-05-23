import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <>
      <section id="hero">
        <div className="mx-auto max-w-screen-xl px-4 pt-6 pb-20 sm:px-6 lg:px-8 lg:pt-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image
                alt="law"
                src="/law.jpg"
                width={800}
                height={800}
                className="absolute inset-0 h-full w-full object-cover rounded-3xl"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Dapatkan Layanan <span className="text-primary">Pertimbangan Hukum</span>
              </h2>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur
                quis eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt?
                Molestiae eius quidem quam repellat.
              </p>

              <Button
                href="#"
                className="mt-8 inline-block rounded bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Konsultasi Sekarang
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
