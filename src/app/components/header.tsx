import Link from "next/link";

const menuItems = [
  {name: "Home", path: "/"},
  {name: "About", path: "/about"},
];
const Header = () => {
  return (
    <nav className="sticky top-0 left-0 ">
      <ul className="flex justify-between p-8 bg-fuchsia-400/30">
        {menuItems.map(({path, name}, i) => (
          <li key={i}>
            <Link href={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
