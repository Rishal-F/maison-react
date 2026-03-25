import Hero from "../components/Hero";
import Products from "../components/Products";
import Categories from "../components/Categories";
import Footer from "../components/Footer";

function Home({ addToCart }) {
  return (
    <>
      <Hero />
      <Products addToCart={addToCart} />
      <Categories />
      <Footer />
    </>
  );
}

export default Home;