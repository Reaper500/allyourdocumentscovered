import whatappImage from "@/assets/whatapp.png";

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
      className="fixed bottom-6 right-6 z-50 rounded-full p-0 shadow-[var(--shadow-accent)] hover:shadow-[var(--shadow-hover)] transition-all hover:scale-110 group animate-fade-in overflow-hidden"
      aria-label="Contact us on WhatsApp"
    >
      <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
        <img 
          src={whatappImage} 
          alt="WhatsApp" 
          className="w-full h-full object-cover rounded-full transition-transform group-hover:rotate-12"
        />
      </div>
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-accent"></span>
      </span>
    </button>
  );
};

export default WhatsAppFloatingButton;
