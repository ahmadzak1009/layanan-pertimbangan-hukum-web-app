"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

function Header() {
  const [nav, setNav] = useState(false);

  const { user, isLoading } = useKindeBrowserClient();

  useEffect(() => {
    console.log(user);
  }, [user]);

  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Tentang",
      path: "/#tentang",
    },
    {
      id: 3,
      name: "Layanan",
      path: "/#layanan",
    },
    {
      id: 3,
      name: "Dasar Hukum",
      path: "/#dasar-hukum",
    },
    {
      id: 4,
      name: "Kontak",
      path: "/#kontak",
    },
  ];

  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link className="block text-teal-600" href="/">
                <span className="sr-only">Home</span>
                <Image src="/logo.svg" alt="logo" width={180} height={80} />
              </Link>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  {Menu.map((item, index) => (
                    <Link href={item.path} key={index}>
                      <li className="text-gray-500 transition hover:text-gray-500/75">
                        {item.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="items-center sm:flex sm:gap-4">
                  {user ? (
                    <>
                      <Popover>
                        <PopoverTrigger>
                          <Image
                            src={user?.picture}
                            alt="profile-image"
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                        </PopoverTrigger>
                        <PopoverContent className="w-44">
                          <ul className="flex flex-col">
                            <li>
                              <Link
                                className="flex cursor-pointer hover:bg-slate-100 p-2 rounded-md"
                                href={"/dashboard"}
                              >
                                Dashboard
                              </Link>
                            </li>
                            <li>
                              <LogoutLink className="flex cursor-pointer hover:bg-slate-100 p-2 rounded-md">
                                Logout
                              </LogoutLink>
                            </li>
                          </ul>
                        </PopoverContent>
                      </Popover>
                    </>
                  ) : (
                    <LoginLink className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400">
                      Login
                    </LoginLink>
                  )}

                  {/* <div className="hidden sm:flex">
                    <a
                      className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary"
                      href="#"
                    >
                      Register
                    </a>
                  </div> */}
                </div>

                <div className="block md:hidden">
                  <button
                    className="rounded bg-gray-100 p-2 text-gray-600 transition"
                    onClick={() => setNav(!nav)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            nav ? "flex" : "hidden"
          } md:hidden flex-col justify-between border-e bg-white`}
        >
          <div className="px-4 pb-6">
            <ul className="mt-6 space-y-1">
              {Menu.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="block hover:rounded-lg hover:bg-primary px-4 py-2 text-sm font-medium text-gray-700 hover:text-white"
                  onClick={() => setNav(false)}
                >
                  <li>{item.name}</li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );

  //   return (
  //     <div className="flex items-center justify-between p-4 shadow-sm">
  //       <div className="flex items-center gap-10">
  //         <Image src="logo.svg" alt="logo" width={180} height={80} />

  //         <ul className="md:flex gap-8 hidden">
  //           {Menu.map((item, index) => (
  //             <>
  //               <Link href={item.path}>
  //                 <li className="hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out">
  //                   {item.name}
  //                 </li>
  //               </Link>
  //             </>
  //           ))}
  //         </ul>
  //       </div>
  //       <Button>Login</Button>
  //     </div>
  //   );
}

export default Header;
