import {API} from "@/app/api";

interface IBookBuyLink {
  name: string;
  url: string;
}

interface IBookList {
  title: string;
  author: string;
  book_image: string;
  buy_links: IBookBuyLink[];
}

interface IResults {
  display_name: string;
  books: IBookList[];
}

type IParams = Promise<{
  id: string;
}>;

export async function generateMetadata(props: {params: IParams}) {
  const params = await props.params;
  const id = params.id;
  const results: IResults = await getBookList(id);
  return {
    title: results.display_name,
  };
}

async function getBookList(id: string) {
  const response = await fetch(`${API}/list?name=${id}`);
  const json = await response.json();
  return json.results;
}

export default async function DetailPage(props: {params: IParams}) {
  const params = await props.params;
  const id = params.id;
  const results: IResults = await getBookList(id);
  const bookList: IBookList[] = results.books;
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">{results.display_name} Books</h1>
      <ul className="grid grid-cols-2 gap-5 py-6 sm:grid-cols-3 lg:grid-cols-4 justify-between">
        {bookList.map((book) => (
          <li key={book.title} className="border border-amber-200/20">
            <img className="w-full" src={book.book_image} alt={book.title} />
            <div className="p-3 space-y-1.5">
              <h2 className="">{book.title}</h2>
              <p className="text-amber-400">
                <a className="hover:text-amber-600" href={`https://www.google.com/search?q=${book.author}`} target="_blank">
                  {book.author}
                </a>
              </p>
              {book.buy_links[0].url && (
                <a className="hover:text-orange-300" href={book.buy_links[0].url} target="_blank">
                  Buy Now &rarr;
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
