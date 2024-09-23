import React from "react";
import { Link } from "react-router-dom";

export default function NavLinks({ to, title, setIsMobileMenuOpen }) {
  return (
    <>
      <li>
        <Link
          to={to}
          className="hover:text-blue-600"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {title}
        </Link>
      </li>
    </>
  );
}
