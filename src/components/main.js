import "../styles/main.css";
function hero() {
  return (
    <section className="hero" id="home">
      <div className="container-box">
        <div className="hero-content">
          <h1 className="h1 hero-title">Your full-funnel growth agency</h1>

          <p className="hero-text">
            Capture and retrieve your lists across devices to help you stay
            organized at work, home, and on the go.
          </p>

          <button className="btn btn-primary">Get started</button>
        </div>

        <div className="hero-banner"></div>
      </div>
    </section>
  );
}

export default hero;
