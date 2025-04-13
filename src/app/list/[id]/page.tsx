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

async function getBookList(id: string) {
  const response = await fetch(`${API}/list?name=${id}`);
  const json = await response.json();
  return json.results;
}
export async function generateMetadata(props: {params: IParams}) {
  const params = await props.params;
  const id = params.id;
  const results: IResults = await getBookList(id);
  return {
    title: results.display_name,
  };
}

export default async function DetailPage(props: {params: IParams}) {
  const params = await props.params;
  const id = params.id;
  const results: IResults = await getBookList(id);
  const bookList: IBookList[] = results.books;
  return (
    <div>
      <h1 className="text-3xl text-center">{results.display_name} Books</h1>
      <ul className="flex flex-wrap">
        {bookList.map((book) => (
          <li key={book.title}>
            <img src={book.book_image} alt={book.title} />
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            {book.buy_links[0].url && (
              <a href={book.buy_links[0].url} target="_blank">
                Buy Now &rarr;
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
