import React from "react";
import Link from "next/link";

const NavLinks = () => {
  return (
    <div>
      <ul className="flex text-right flex-col gap-6 text-white text-2xl font-medium mt-10 px-6">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    
    </div>
  );
};

export default NavLinks;
