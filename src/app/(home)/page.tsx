import Link from "next/link";
import {API} from "../api";

export const metadata = {
  title: "Home",
};

interface IList {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
}
interface ILists {
  status: string;
  copyright: string;
  num_results: number;
  results: IList[];
}

async function getLists() {
  const response = await fetch(`${API}/lists`);
  const json = await response.json();
  return json;
}

const HomePage = async () => {
  const lists: ILists = await getLists();
  return (
    <div className="home-container">
      <ul>
        {lists.results.map((list) => (
          <li key={list.list_name_encoded}>
            <Link href={`list/${list.list_name_encoded}`}>{list.display_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
