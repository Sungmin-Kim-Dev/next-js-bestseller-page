"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];
const Header = () => {
  const currentPath = usePathname();
  return (
    <nav className="sticky top-0 left-0 bg-zinc-800">
      <ul className="flex justify-between px-8 py-4">
        {menuItems.map(({ path, name }, i) => (
          <li
            key={i}
            className={`text-xl ${path === currentPath && "text-amber-200 underline underline-offset-6"}`}
          >
            <Link href={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
