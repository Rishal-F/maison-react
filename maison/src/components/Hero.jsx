import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleExplore = () => {
    const section = document.querySelector(".featured");

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <section className="hero">
      <div className="hero-text">
        <p>SPRING / SUMMER 2026</p>
        <h1>Curated for Living Well</h1>

        <button onClick={handleExplore}>
          EXPLORE COLLECTION
        </button>
      </div>
    </section>
  );
}

export default Hero;