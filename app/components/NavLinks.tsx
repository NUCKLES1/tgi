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
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/collections">Collections</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <ul className="flex flex-col gap-3 text-white text-lg font-medium mt-10 pr-6 text-right">
        <li>
          My Account <span>Comming soon</span>
        </li>
        <li>
          Track Order <span>Comming soon</span>
        </li>
        <li>
          Size Guide <span>Comming soon</span>
        </li>
        <li>
          <Link href="/">Policies</Link>
        </li>
      </ul>
      <div className="text-white pr-6 text-right mt-10">
        <a href="">twitter icon</a>
        <a href="">instagram icon</a>
      </div>
    </div>
  );
};

export default NavLinks;
