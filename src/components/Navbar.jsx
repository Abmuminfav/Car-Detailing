import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { RiMenu5Fill } from "react-icons/ri";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-50 bg-black/40 backdrop-blur-md">
      {/* TOP BAR */}
      <div className="max-w-[1280px] mx-auto p-4 flex justify-between items-center text-white">
        <h1 className="font-bold leading-tight">
          Apex <br /> Detailing
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          <li>About</li>
          <li>Service</li>
          <li>Portfolio</li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoCloseSharp /> : <RiMenu5Fill />}
        </button>
      </div>

      {/* DROPDOWN */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md text-white transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <ul className="flex flex-col gap-6 px-6 py-6">
          <li onClick={() => setOpen(false)}>Home</li>
          <li onClick={() => setOpen(false)}>Services</li>
          <li onClick={() => setOpen(false)}>About</li>
          <li onClick={() => setOpen(false)}>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
