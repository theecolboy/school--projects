import PropTypes from "prop-types";

function HomePage({ featuredDeal, onGoToShop, onGoToDeals }) {
  return (
    <section className="page-grid">
      <article className="panel hero-panel">
        <p className="eyebrow">Everyday shopping made easier</p>
        <h2>Build a small shopping app with hooks and multiple pages</h2>
        <p className="hero-copy">
          This page now uses <code>useState</code> for navigation, search, and
          cart items, plus <code>useEffect</code> for the title, rotating
          deals, and auto-focus behavior.
        </p>
        <div className="hero-actions">
          <button onClick={onGoToShop}>Start shopping</button>
          <button className="ghost-button" onClick={onGoToDeals}>
            View deals
          </button>
        </div>
      </article>

      <article className="panel spotlight-panel">
        <p className="eyebrow">Live featured deal</p>
        <h3>{featuredDeal.name}</h3>
        <p>{featuredDeal.description}</p>
        <strong>Ksh {featuredDeal.price.toLocaleString()}</strong>
      </article>
    </section>
  );
}

HomePage.propTypes = {
  featuredDeal: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onGoToShop: PropTypes.func.isRequired,
  onGoToDeals: PropTypes.func.isRequired,
};

export default HomePage;
