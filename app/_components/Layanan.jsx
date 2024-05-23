import Link from "next/link";
import React from "react";

function Layanan() {
  const listLayanan = [
    {
      id: 1,
      name: "Pendapat Hukum",
      path: "/layanan/pendapat-hukum",
    },
    {
      id: 2,
      name: "Pendampingan Hukum",
      path: "/layanan/pendampingan-hukum",
    },
    {
      id: 3,
      name: "Audit Hukum",
      path: "/layanan/audit-hukum",
    },
  ];

  return (
    <section id="layanan">
      <div className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl text-primary">Layanan Kami</h2>

            <p className="mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam
              doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe laborum.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {listLayanan.map((item) => (
              <Link
                className="block rounded-xl border border-primary p-8 shadow-xl transition hover:border-black hover:shadow-blue-500/10"
                href={item.path}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-10 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>

                <h2 className="mt-4 text-xl font-bold text-primary">{item.name}</h2>

                <p className="mt-1 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus
                  adipisci distinctio alias voluptatum blanditiis laudantium.
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-block rounded bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Dapatkan Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Layanan;
