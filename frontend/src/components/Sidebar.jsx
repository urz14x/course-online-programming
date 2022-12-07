import React from "react";
import { useState } from "react";
import "./Styles.css";
import { Link } from "react-router-dom";
export default function Sidebar(props) {
  const [chooseTab, setChooseTab] = useState(true);
  const menuNavigates = [
    { title: "Intro", href: "/articles/bahasa-python" },
    { title: "Tipe data", href: "/articles/tipe-data" },
    { title: "Percabangan", href: "/articles/percabangan" },
    { title: "Fungsi (def)", href: "/articles/fungsi" },
  ];
  const navClickHandler = () => {
    console.log("Hello world");
  };
  return (
    <>
      <div className="relative flex min-h-screen">
        <aside className="w-1/2 h-screen">
          <nav className="p-10 antialiased ">
            <ul className="grid grid-cols-1 gap-8  divide-gray-700">
              {menuNavigates.map((menu, id) => (
                <li className="" key={id}>
                  <Link
                    onClick={navClickHandler}
                    to={menu.href}
                    className={`text-green-600 font-text_primary`}
                  >
                    <b>{menu.title}</b>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <section className="py-6">{props.children}</section>
      </div>
    </>
  );
}
