import { FiDownload } from "react-icons/fi";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { useToast } from "../context/ToastContext";

function generateVCard(config) {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${config.name}`,
    `TEL:${config.phone}`,
    `EMAIL:${config.email}`,
    `URL:${config.website}`,
    `NOTE:Instagram: @${config.instagram} | Telegram: @${config.telegram}`,
    "END:VCARD",
  ];
  return lines.join("\n");
}

export default function DownloadContact({ config }) {
  const [ref, visible] = useScrollAnimation();
  const { addToast } = useToast();

  const download = () => {
    const vcard = generateVCard(config);
    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${config.name.replace(/\s+/g, "_")}_contact.vcf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    addToast("Contact saved!");
  };

  return (
    <section ref={ref} className={`section ${visible ? "visible" : ""}`}>
      <h2 className="section-title">Save Contact</h2>
      <button className="action-card" onClick={download}>
        <span className="action-card-icon">
          <FiDownload />
        </span>
        <span>
          Save Contact
          <div className="contact-btn-sub">Download vCard (.vcf)</div>
        </span>
      </button>
    </section>
  );
}
