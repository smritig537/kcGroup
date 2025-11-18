import '../styles/global.css';
import '../styles/welcome.css';

export default function Welcome() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Welcome</h2>
        <p className="welcome-text">
          You’ve found a space dedicated to timeless design, thoughtful creativity,<br/>
          and meaningful collaboration.
          <br/><br/>
          Take your time. Explore the work.<br/>
          Let’s create something beautiful together.
        </p>
      </div>
    </section>
  );
}