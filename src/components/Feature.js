function Feature({ title, text, img, reverse }) {
  return (
    <section className={`feature ${reverse ? "reverse" : ""}`}>
      <div className="text">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <div className="image">
        <img src={img} alt={title} />
      </div>
    </section>
  );
}

export default Feature;
