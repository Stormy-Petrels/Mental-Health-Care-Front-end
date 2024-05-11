import React from "react";
import { Link } from "react-router-dom";

interface Page {
  path: string;
  title: string;
}

const pages: Page[] = [
  { path: "/", title: "Trang chủ" },
  { path: "/about", title: "Giới thiệu" },
  { path: "/contact", title: "Liên hệ" },
];

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          {pages.map((page, index) => (
            <li key={index}>
              <Link to={page.path}>{page.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}