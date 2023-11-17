'use client'

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { NAV_LINKS } from "../../constants";
import Button from "@/components/button";
const navbar = () => {
  const [showMenu,setShowMenu]=useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="border-2  flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className={` h-full  gap-12 lg:flex ${showMenu? '':'hidden'}`}>
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden ">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        ></Button>
      </div>
      <Image 
       src='/menu.svg'
       alt="menu"
       width={32}
       height={32}
       className="inline-block cursor-pointer lg:hidden"
       onClick={toggleMenu}
      />
    </nav>
  );
};

export default navbar;
