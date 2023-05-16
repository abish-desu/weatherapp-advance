import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <Link  className="nav-link" href="/contact">CONTACT</Link>
        <Link   className="nav-link" href="/about">ABOUT ME</Link>

        <Link href="/">
        <img  className='w-16' src='./logo.svg' alt="SVG Image" />

        </Link>
        <Link className="nav-link" href="/projects">PROJECTS</Link>
        <Link className="nav-link" href="/blogs">BLOGS</Link>
      </nav>
    </div>
  );
};

export default Navbar;
