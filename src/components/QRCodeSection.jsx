import { QRCodeCanvas } from "qrcode.react";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function QRCodeSection({ config }) {
  const [ref, visible] = useScrollAnimation();

  return (
    <section ref={ref} className={`section ${visible ? "visible" : ""}`}>
      <h2 className="section-title">QR Code</h2>
      <div className="qr-container">
        <QRCodeCanvas
          value={config.website}
          size={180}
          fgColor="#1d1d1f"
          level="M"
        />
        <p className="qr-label">Scan to visit my website</p>
        <p className="qr-hint">{config.website}</p>
      </div>
    </section>
  );
}
