import React from "react";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo / Title */}

        <div className="flex items-center gap-3">

          <div className="bg-white text-blue-800 font-bold px-3 py-1 rounded">
            NC
          </div>

          <h1 className="text-xl font-bold tracking-wide">
            Nandha College of Technology
          </h1>

        </div>

        {/* Navigation */}

        <ul className="hidden md:flex items-center gap-8 font-medium">

          <li>
            <a
              href="/"
              className="hover:text-yellow-300 transition duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="/about"
              className="hover:text-yellow-300 transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="/courses"
              className="hover:text-yellow-300 transition duration-300"
            >
              Courses
            </a>
          </li>

          <li>
            <a
              href="/facilities"
              className="hover:text-yellow-300 transition duration-300"
            >
              Facilities
            </a>
          </li>

          <li>
            <a
              href="/contact"
              className="hover:text-yellow-300 transition duration-300"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Admission Button */}

       <a 
  href="/admistion" 
  className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition inline-block"
>
  Apply Now
</a>

      </div>

    </nav>
  );
}

export default Navbar;