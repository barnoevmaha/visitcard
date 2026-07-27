import { FiShare2 } from "react-icons/fi";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { useToast } from "../context/ToastContext";

export default function ShareCard({ config }) {
  const [ref, visible] = useScrollAnimation();
  const { addToast } = useToast();

  const share = async () => {
    const data = {
      title: config.name,
      text: `${config.name} — ${config.title}\n${config.description}`,
      url: config.website,
    };

    if (navigator.share) {
      try {
        await navigator.share(data);
      } catch {
        // user cancelled
      }
    } else {
      try {
        await navigator.clipboard.writeText(config.website);
        addToast("Link copied to clipboard!");
      } catch {
        addToast("Failed to copy", "error");
      }
    }
  };

  return (
    <section ref={ref} className={`section ${visible ? "visible" : ""}`}>
      <h2 className="section-title">Share</h2>
      <button className="action-card" onClick={share}>
        <span className="action-card-icon">
          <FiShare2 />
        </span>
        <span>
          Share Contact
          <div className="contact-btn-sub">Share my digital business card</div>
        </span>
      </button>
    </section>
  );
}
