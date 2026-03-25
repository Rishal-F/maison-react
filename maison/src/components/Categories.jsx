function Categories() {
  const categories = [
    {
      name: "Clothing",
      img: "https://i.pinimg.com/originals/0c/28/c8/0c28c82a72429003814919ea6794fd26.jpg"
    },
    {
      name: "Accessories",
      img: "https://rangraze.in/cdn/shop/articles/02.jpg"
    },
    {
      name: "Home",
      img: "https://i.pinimg.com/564x/e1/3b/bb/e13bbba0d1206717f680e40d65361c72.jpg"
    }
  ];

  return (
    <section className="categories">
      <h2>Categories</h2>

      <div className="category-grid">
        {categories.map((cat, index) => (
          <div
            className="category-card"
            key={index}
            onClick={() => alert(`${cat.name} coming soon`)}
          >
            <img src={cat.img} alt={cat.name} />
            <div className="overlay"></div>
            <span>{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;