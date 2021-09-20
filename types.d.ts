type Book = {
  id: number;
  title: string;
  book_covers: Array<Cover>;
};

type Cover = {
  id: number;
  country: string;
  edition: string;
  artist: string;
  URL: string;
};
