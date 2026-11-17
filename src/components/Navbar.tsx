"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const enlaces = [
  { href: "/", texto: "Inicio" },
  { href: "/beneficios", texto: "Beneficios" },
  { href: "/cultivos", texto: "Cultivos" },
  { href: "/sistemas", texto: "Sistemas" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-green-200 bg-white">
      <nav className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-xl font-bold text-green-700">
          🌱 HidroHuerto
        </Link>
        <ul className="flex flex-wrap gap-2">
          {enlaces.map((enlace) => {
            const activo =
              enlace.href === "/"
                ? pathname === "/"
                : pathname.startsWith(enlace.href);
            return (
              <li key={enlace.href}>
                <Link
                  href={enlace.href}
                  className={`rounded-full px-3 py-1 text-sm font-medium transition ${
                    activo
                      ? "bg-green-600 text-white"
                      : "text-green-800 hover:bg-green-100"
                  }`}
                >
                  {enlace.texto}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}