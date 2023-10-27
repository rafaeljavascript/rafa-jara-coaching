"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {}

const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Me" },
  { path: "/advising", label: "Advising" },
  { path: "/leadership-coaching", label: "Leadership Coaching" },
  { path: "/career-coaching", label: "Career Coaching" },
  { path: "/testimonials", label: "Testimonials" },
  { path: "/contact", label: "Contact" },
];

const Links = () => {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.path}
          className={twMerge(
            "py-1 border-b-[2px] border-transparent",
            pathname === link.path && "border-b-primary",
          )}
          prefetch
          href={link.path}
        >
          <p>{link.label}</p>
        </Link>
      ))}
    </>
  );
};

const MenuLinks = () => {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => (
        <li key={link.path}>
          <Link
            prefetch
            href={link.path}
            className={twMerge(pathname === link.path && "active")}
          >
            <p>{link.label}</p>
          </Link>
        </li>
      ))}
    </>
  );
};

export const Nav = ({}) => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-row w-full h-20 items-center justify-between p-8 navbar sm:text-lg text-xs whitespace-nowrap text-base-content border-b border-b-base-300">
      <div className="avatar flex items-center justify-center">
        <Link href="/" prefetch>
          <Image
            src="/logo.png"
            alt="Logo"
            className="rounded-full"
            width={64}
            height={64}
            priority
          />
        </Link>
      </div>
      <div className="flex items-center justify-center sm:gap-4 gap-2 lowercase font-semibold sm:text-[14px] md:flex hidden">
        <Links />
      </div>
      <div className="dropdown md:hidden block">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 -ml-40"
        >
          <MenuLinks />
        </ul>
      </div>
    </nav>
  );
};
