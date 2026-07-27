import {
  FiPhone,
  FiMail,
  FiInstagram,
  FiSend,
  FiMessageCircle,
  FiGithub,
  FiCopy,
} from "react-icons/fi";
import { useToast } from "../context/ToastContext";

function RippleButton({ icon: Icon, label, sub, action, onClick, color }) {
  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ripple = document.createElement("span");
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    ripple.className = "ripple";
    ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px`;
    e.currentTarget.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
    onClick?.(e);
  };

  return (
    <button className="contact-btn" onClick={handleClick}>
      <span className="contact-btn-icon" style={color ? { background: `${color}22`, color } : undefined}>
        <Icon />
      </span>
      <span className="contact-btn-label">
        {label}
        <div className="contact-btn-sub">{sub}</div>
      </span>
      <span className="contact-btn-action">{action}</span>
    </button>
  );
}

export default function ContactButtons({ config }) {
  const { addToast } = useToast();

  const copy = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text);
      addToast(`${label} copied!`);
    } catch {
      addToast("Failed to copy", "error");
    }
  };

  const buttons = [
    {
      icon: FiPhone,
      label: "Call",
      sub: config.phone,
      action: "Call Now",
      onClick: () => (window.location.href = `tel:${config.phone}`),
    },
    {
      icon: FiCopy,
      label: "Copy Phone",
      sub: config.phone,
      action: "Copy",
      onClick: () => copy(config.phone, "Phone"),
    },
    {
      icon: FiMail,
      label: "Email",
      sub: config.email,
      action: "Send",
      onClick: () => (window.location.href = `mailto:${config.email}`),
    },
    {
      icon: FiCopy,
      label: "Copy Email",
      sub: config.email,
      action: "Copy",
      onClick: () => copy(config.email, "Email"),
      color: "#ec4899",
    },
    {
      icon: FiInstagram,
      label: "Instagram",
      sub: `@${config.instagram}`,
      action: "Open",
      onClick: () =>
        window.open(`https://instagram.com/${config.instagram}`, "_blank"),
      color: "#e4405f",
    },
    {
      icon: FiSend,
      label: "Telegram",
      sub: `@${config.telegram}`,
      action: "Message",
      onClick: () =>
        window.open(`https://t.me/${config.telegram}`, "_blank"),
      color: "#0088cc",
    },
    {
      icon: FiMessageCircle,
      label: "WhatsApp",
      sub: config.whatsapp,
      action: "Chat",
      onClick: () =>
        window.open(`https://wa.me/${config.whatsapp}`, "_blank"),
      color: "#25D366",
    },
    {
      icon: FiGithub,
      label: "GitHub",
      sub: `@${config.github}`,
      action: "View",
      onClick: () =>
        window.open(`https://github.com/${config.github}`, "_blank"),
    },
    {
      icon: FiCopy,
      label: "Copy Telegram",
      sub: `@${config.telegram}`,
      action: "Copy",
      onClick: () => copy(`@${config.telegram}`, "Telegram"),
      color: "#0088cc",
    },
  ];

  return (
    <section className="section visible">
      <h2 className="section-title">Contact</h2>
      <div className="contact-grid">
        {buttons.map((btn, i) => (
          <RippleButton key={i} {...btn} />
        ))}
      </div>
    </section>
  );
}
