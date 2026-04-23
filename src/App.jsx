import { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import HomePage from "./pages/HomePage.jsx";
import "./App.css";

const PRODUCTS = [
  {
    id: 1,
    name: "Fresh Basket",
    description: "Seasonal fruits, vegetables, and pantry basics for the week.",
    price: 850,
    category: "Groceries",
  },
  {
    id: 2,
    name: "Kitchen Essentials",
    description: "Storage, cleaning tools, and cookware for everyday meals.",
    price: 1450,
    category: "Home",
  },
  {
    id: 3,
    name: "Smart Picks",
    description: "Headphones, chargers, and small gadgets for busy days.",
    price: 12500,
    category: "Electronics",
  },
  {
    id: 4,
    name: "Family Care Pack",
    description: "Household and personal care items in one value bundle.",
    price: 2200,
    category: "Care",
  },
];

const PAGES = [
  { id: "home", label: "Home" },
  { id: "shop", label: "Shop" },
  { id: "deals", label: "Deals" },
  { id: "cart", label: "Cart" },
];

function Welcome({ name, activePage }) {
  return (
    <div className="welcome-banner">
      <p>Welcome back, {name}</p>
      <span>Currently viewing: {activePage}</span>
    </div>
  );
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
  activePage: PropTypes.string.isRequired,
};

function ProductItem({ product, onAdd }) {
  return (
    <article className="card">
      <span className="tag">{product.category}</span>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <strong>Ksh {product.price.toLocaleString()}</strong>
      <button className="card-button" onClick={() => onAdd(product)}>
        Add to Cart
      </button>
    </article>
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  onAdd: PropTypes.func.isRequired,
};

function App() {
  const [activePage, setActivePage] = useState("home");
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [featuredDeal, setFeaturedDeal] = useState(PRODUCTS[0]);
  const searchInputRef = useRef(null);

  useEffect(() => {
    document.title = `${PAGES.find((page) => page.id === activePage)?.label} | Carrefour`;
  }, [activePage]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setFeaturedDeal((currentDeal) => {
        const currentIndex = PRODUCTS.findIndex((product) => product.id === currentDeal.id);
        const nextIndex = (currentIndex + 1) % PRODUCTS.length;
        return PRODUCTS[nextIndex];
      });
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (activePage === "shop") {
      searchInputRef.current?.focus();
    }
  }, [activePage]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) =>
      `${product.name} ${product.category}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  const handleAddToCart = (product) => {
    setCartItems((currentItems) => [...currentItems, product]);
  };

  const renderPage = () => {
    if (activePage === "home") {
      return (
        <HomePage
          featuredDeal={featuredDeal}
          onGoToShop={() => setActivePage("shop")}
          onGoToDeals={() => setActivePage("deals")}
        />
      );
    }

    if (activePage === "shop") {
      return (
        <>
          <section className="filters panel">
            <div>
              <p className="eyebrow">Shop inventory</p>
              <h2>Browse products</h2>
            </div>
            <input
              ref={searchInputRef}
              type="text"
              value={searchTerm}
              placeholder="Search by name or category"
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <button onClick={() => searchInputRef.current?.focus()}>
              Focus search
            </button>
          </section>

          <section className="cards">
            {filteredProducts.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                onAdd={handleAddToCart}
              />
            ))}
          </section>
        </>
      );
    }

    if (activePage === "deals") {
      return (
        <section className="page-grid">
          <article className="panel deal-panel">
            <p className="eyebrow">Best current offer</p>
            <h2>{featuredDeal.name}</h2>
            <p>{featuredDeal.description}</p>
            <strong>Ksh {featuredDeal.price.toLocaleString()}</strong>
            <button onClick={() => handleAddToCart(featuredDeal)}>
              Add featured deal
            </button>
          </article>

          <article className="panel info-panel">
            <p className="eyebrow">Why this page matters</p>
            <ul className="info-list">
              <li>`useState` switches between pages without extra packages.</li>
              <li>`useEffect` rotates the featured offer every few seconds.</li>
              <li>The cart updates instantly across all pages.</li>
            </ul>
          </article>
        </section>
      );
    }

    return (
      <section className="panel cart-panel">
        <div className="cart-header">
          <div>
            <p className="eyebrow">Cart summary</p>
            <h2>{cartItems.length} item(s) in your cart</h2>
          </div>
          <strong>Ksh {cartTotal.toLocaleString()}</strong>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty-state">
            Your cart is empty. Open the shop page and add a few items.
          </p>
        ) : (
          <div className="cart-list">
            {cartItems.map((item, index) => (
              <div className="cart-row" key={`${item.id}-${index}`}>
                <span>{item.name}</span>
                <span>Ksh {item.price.toLocaleString()}</span>
              </div>
            ))}
          </div>
        )}
      </section>
    );
  };

  return (
    <div className="app-shell">
      <header className="navbar">
        <div>
          <p className="brand-kicker">Carrefour demo</p>
          <h1>Shopping pages with React hooks</h1>
        </div>

        <div className="nav-actions">
          <nav className="nav-pills" aria-label="Main navigation">
            {PAGES.map((page) => (
              <button
                key={page.id}
                className={page.id === activePage ? "active" : ""}
                onClick={() => setActivePage(page.id)}
              >
                {page.label}
              </button>
            ))}
          </nav>
          <button className="cart-badge" onClick={() => setActivePage("cart")}>
            Cart {cartItems.length}
          </button>
        </div>
      </header>

      <Welcome name="Stevens Park" activePage={activePage} />

      <main>{renderPage()}</main>
    </div>
  );
}

export default App;
