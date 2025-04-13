import Link from "next/link";

const menuItems = [
  {name: "Home", path: "/"},
  {name: "About", path: "/about"},
];
const Header = () => {
  return (
    <div>
      <nav>
        <ul className="flex justify-between p-8 bg-fuchsia-400/30">
          {menuItems.map(({path, name}, i) => (
            <li key={i}>
              <Link href={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
