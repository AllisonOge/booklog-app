import "./Products.scss";
import { Link } from "react-router-dom";

const productsData = [
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    nReviews: 500,
    rating: 4.9,
    likes: 700,
    orders: 1500,
    price: 22.99,
    "Last Price": 23.99,
  },
  {
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    nReviews: 300,
    rating: 4.8,
    likes: 600,
    orders: 1300,
    price: 20.99,
    "Last Price": 20.99,
  },
  {
    title: "The Richest Man in Babylon",
    author: "George S. Clason",
    nReviews: 150,
    rating: 4.5,
    likes: 350,
    orders: 700,
    price: 19.99,
    "Last Price": 18.99,
  },
  {
    title: "Good to Great",
    author: "Jim Collins",
    nReviews: 250,
    rating: 4.7,
    likes: 500,
    orders: 1000,
    price: 23.99,
    "Last Price": 20.99,
  },
  {
    title: "The Magic of Thinking Big",
    author: "David J. Schwartz",
    nReviews: 200,
    rating: 4.6,
    likes: 400,
    orders: 800,
    price: 21.99,
    "Last Price": 25.99,
  },
  {
    title: "The Purpose Driven Life",
    author: "Rick Warren",
    nReviews: 300,
    rating: 4.8,
    likes: 550,
    orders: 1100,
    price: 24.99,
    "Last Price": 24.99,
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    nReviews: 250,
    rating: 4.9,
    likes: 600,
    orders: 1300,
    price: 19.99,
    "Last Price": 8.99,
  },
  {
    title: "The Chimp Paradox",
    author: "Steve Peters",
    nReviews: 100,
    rating: 4.5,
    likes: 350,
    orders: 700,
    price: 22.99,
    "Last Price": 22.99,
  },
  {
    title: "Mindset",
    author: "Carol S. Dweck",
    nReviews: 400,
    rating: 4.8,
    likes: 550,
    orders: 1300,
    price: 19.99,
    "Last Price": 29.99,
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    nReviews: 450,
    rating: 4.7,
    likes: 600,
    orders: 1300,
    price: 25.99,
    "Last Price": 26.99,
  },
  {
    title: "The Power of Now",
    author: "Eckhart Tolle",
    nReviews: 300,
    rating: 4.8,
    likes: 550,
    orders: 1100,
    price: 24.99,
    "Last Price": 24.99,
  },
  {
    title: "The 4-Hour Work Week",
    author: "Tim Ferriss",
    nReviews: 350,
    rating: 4.6,
    likes: 500,
    orders: 1200,
    price: 22.99,
    "Last Price": 2.99,
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    nReviews: 200,
    rating: 4.9,
    likes: 550,
    orders: 1300,
    price: 26.99,
    "Last Price": 16.99,
  },
  {
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    nReviews: 250,
    rating: 4.7,
    likes: 500,
    orders: 1100,
    price: 23.99,
    "Last Price": 26.99,
  },
  {
    title: "The Five Love Languages",
    author: "Gary Chapman",
    nReviews: 200,
    rating: 4.6,
    likes: 400,
    orders: 800,
    price: 21.99,
    "Last Price": 20.99,
  },
  {
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    nReviews: 150,
    rating: 4.5,
    likes: 350,
    orders: 700,
    price: 20.99,
    "Last Price": 20.99,
  },
  {
    title: "The Art of War",
    author: "Sun Tzu",
    nReviews: 200,
    rating: 4.6,
    likes: 400,
    orders: 800,
    price: 21.99,
    "Last Price": 20.99,
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    nReviews: 250,
    rating: 4.7,
    likes: 450,
    orders: 900,
    price: 19.99,
    "Last Price": 10.99,
  },
];

const Article = (props) => {
  return (
    <article className="d-flex flex-column me-3 product" key={props.title}>
      <div className="img-container">
        <img
          src={`https://source.unsplash.com/featured/?book,${
            props.tag || "love"
          }`}
          alt="product"
          className="img-fluid"
        />
      </div>
      <div className="products-details">
        <small>
          <strong>
            <Link
              to=""
              className="link-primary d-inline-block text-truncate"
              style={{ maxWidth: "150px" }}
            >
              {props.title}
            </Link>
          </strong>
          <div>
            by &nbsp;
            <em>
              <Link to="" className="link-primary">
                {props.author}
              </Link>
            </em>
          </div>
          <div className="ratings">
            <span className="rating">⭐</span>
            <span className="rating">⭐</span>
            <span className="rating">⭐</span>
            <span className="rating">⭐</span>
            <span className="rating">⭐</span>
            <Link to="" className="link-primary">
              ({props.nReviews})
            </Link>
          </div>
          <div className="price">
            <em>Price:</em>
            &nbsp;
            <strong>{`$${props.price}`}</strong>
          </div>
        </small>
      </div>
    </article>
  );
};

const Products = () => {
  const titles = [
    "Continue Reading",
    "Previously Read",
    "Recommended",
    "Page Turner",
    "Trending",
    "New",
  ];

  return (
    <main className="container-fluid">
      <section className="row">
        <header className="d-flex flex-column justify-content-center">
          <div className="d-flex justify-content-between align-items-baseline">
            <h1 className="h1">Continue Reading</h1>
            <div className="actions">
              <a href="#" className="link-primary">
                see more
              </a>
            </div>
          </div>
          <hr />
        </header>
        <main className="d-flex align-items-baseline contents">
          {productsData.slice(0, 3).map((product) => (
            <Article
              title={product.title}
              author={product.author}
              price={product.price}
              tag={product.title.split(" ")[1]}
              nReviews={product.nReviews}
            />
          ))}
        </main>
      </section>
      <section className="row">
        <header className="d-flex flex-column justify-content-center">
          <div className="d-flex justify-content-between align-items-baseline">
            <h1 className="h1">Previously Read</h1>
            <div className="actions">
              <a href="#" className="link-primary">
                see more
              </a>
            </div>
          </div>
          <hr />
        </header>
        <main className="d-flex align-items-baseline contents">
          {productsData.slice(3, 6).map((product) => (
            <Article
              title={product.title}
              author={product.author}
              price={product.price}
              tag={product.title.split(" ")[1]}
              nReviews={product.nReviews}
            />
          ))}
        </main>
      </section>
      <section className="row">
        <header className="d-flex flex-column justify-content-center">
          <div className="d-flex justify-content-between align-items-baseline">
            <h1 className="h1">Recommended</h1>
            <div className="actions">
              <a href="#" className="link-primary">
                see more
              </a>
            </div>
          </div>
          <hr />
        </header>
        <main className="d-flex align-items-baseline contents">
          {productsData.slice(6, 12).map((product) => (
            <Article
              title={product.title}
              author={product.author}
              price={product.price}
              tag={product.title.split(" ")[1]}
              nReviews={product.nReviews}
            />
          ))}
        </main>
      </section>
      <section className="row">
        <header className="d-flex flex-column justify-content-center">
          <div className="d-flex justify-content-between align-items-baseline">
            <h1 className="h1">Page Turner</h1>
            <div className="actions">
              <a href="#" className="link-primary">
                see more
              </a>
            </div>
          </div>
          <hr />
        </header>
        <main className="d-flex align-items-baseline contents">
          {productsData.slice(12, 15).map((product) => (
            <Article
              title={product.title}
              author={product.author}
              price={product.price}
              tag={product.title.split(" ")[1]}
              nReviews={product.nReviews}
            />
          ))}
        </main>
      </section>
      <section className="row">
        <header className="d-flex flex-column justify-content-center">
          <div className="d-flex justify-content-between align-items-baseline">
            <h1 className="h1">Trending</h1>
            <div className="actions">
              <a href="#" className="link-primary">
                see more
              </a>
            </div>
          </div>
          <hr />
        </header>
        <main className="d-flex align-items-baseline contents">
          {productsData.slice(15, -1).map((product) => (
            <Article
              title={product.title}
              author={product.author}
              price={product.price}
              tag={product.title.split(" ")[1]}
              nReviews={product.nReviews}
            />
          ))}
        </main>
      </section>
      <section className="row">
        <header className="d-flex flex-column justify-content-center">
          <div className="d-flex justify-content-between align-items-baseline">
            <h1 className="h1">New</h1>
            <div className="actions">
              <a href="#" className="link-primary">
                see more
              </a>
            </div>
          </div>
          <hr />
        </header>
        <main className="d-flex align-items-baseline contents"></main>
      </section>
    </main>
  );
};

export default Products;
