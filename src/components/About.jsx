import useScrollAnimation from "../hooks/useScrollAnimation";

export default function About({ config }) {
  const [ref, visible] = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`section ${visible ? "visible" : ""}`}
    >
      <h2 className="section-title">About Me</h2>
      <div className="about-card">{config.about}</div>
    </section>
  );
}
