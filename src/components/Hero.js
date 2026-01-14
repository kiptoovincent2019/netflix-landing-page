function Hero() {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1>Unlimited movies, TV shows, and more</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="email-form">
          <input type="email" placeholder="Email address" />
          <button>Get Started &gt;</button>
        </div>
      </div>
    </header>
  );
}

export default Hero;

