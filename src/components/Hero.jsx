import { FiLinkedin, FiGithub } from "react-icons/fi";

export default function Hero({ config }) {
  return (
    <section className="hero">
      <div className="hero-gradient" aria-hidden="true" />
      <div className="avatar-wrapper">
        <img
          className="avatar"
          src={config.avatar}
          alt={config.name}
          loading="eager"
        />
        <div className="avatar-ring" aria-hidden="true" />
      </div>
      <h1 className="hero-name">{config.name}</h1>
      <p className="hero-title">{config.title}</p>
      <p className="hero-description">{config.description}</p>
    </section>
  );
}
