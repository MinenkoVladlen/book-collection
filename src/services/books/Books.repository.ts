import ApiGateway from "../ApiGateway.ts";

class BooksRepository {
  private httpGateway: ApiGateway;

  constructor() {
    this.httpGateway = new ApiGateway();
  }

  getBooks = async () => {
    const booksDto = await this.httpGateway.get("/");
    return booksDto;
  };

  getPrivateBooks = async () => {
    const booksDto = await this.httpGateway.get("/private");
    return booksDto;
  }

  addBook = async ({ name, author }) => {
    const bookAddDto = await this.httpGateway.post("/", { name, author });
    return bookAddDto && bookAddDto.status === "ok";
  };
}

const booksRepository = new BooksRepository();
export default booksRepository;
