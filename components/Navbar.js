import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <Link href="/contact">CONTACT</Link>
        <Link href="/about">ABOUT</Link>

        <Link href="/">HOME</Link>
        <Link href="/projects">PROJECTS</Link>
        <Link href="/blogs">BLOGS</Link>
      </nav>
    </div>
  );
};

export default Navbar;
