import { MessageCircle } from "lucide-react";

const WhatsAppFloatingButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "447398254685";
    const message = encodeURIComponent("Hi, I'd like to inquire about your document editing services.");

    const appUrl = `whatsapp://send?phone=${phoneNumber}&text=${message}`;
    const webUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    let opened = false;
    const onVisibilityChange = () => {
      if (document.hidden) {
        opened = true;
        clearTimeout(fallback);
        document.removeEventListener("visibilitychange", onVisibilityChange);
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    window.location.href = appUrl;

    const fallback = window.setTimeout(() => {
      if (!opened) {
        window.open(webUrl, "_blank", "noopener,noreferrer");
      }
      document.removeEventListener("visibilitychange", onVisibilityChange);
    }, 1200);
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-green-800 to-green-900 text-white rounded-full p-4 shadow-[var(--shadow-accent)] hover:shadow-[var(--shadow-hover)] transition-all hover:scale-110 group animate-fade-in"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 transition-transform group-hover:rotate-12" />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
      </span>
    </button>
  );
};

export default WhatsAppFloatingButton;
