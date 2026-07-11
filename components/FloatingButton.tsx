import Image from "next/image";

export default function FloatingButton() {
  return (
    <div className="fixed right-8 top-1/2 z-50 -translate-y-1/2 bg-tertiary py-3 px-1.5 rounded-full flex-col items-center gap-2 shadow-2xl border border-r-0 border-white/10 hidden md:flex">
      <a
        href="#"
        className="text-white hover:scale-110 transition-transform bg-white p-0.5 rounded-full"
        title="Download Profile"
      >
        <Image
          width={25}
          height={25}
          alt=""
          src="/assets/images/download-prof.png"
        />
      </a>
      <a
        href="mailto:sales@maifultradelink.com"
        className="text-white hover:scale-110 transition-transform bg-white p-0.5 rounded-full"
        title="Email Us"
      >
        <Image width={25} height={25} alt="" src="/assets/images/envelop.png" />
      </a>
      <a
        href="https://wa.me/8801711706366"
        target="_blank"
        rel="noreferrer"
        className="text-white hover:scale-110 transition-transform bg-white rounded-full"
        title="WhatsApp Chat"
      >
        <Image
          width={28}
          height={28}
          alt=""
          src="/assets/images/whatsapp.png"
        />
      </a>
      <a
        href="#"
        className="text-white hover:scale-110 transition-transform bg-white p-0.5 rounded-full"
        title="Scan QR Code"
      >
        <Image width={25} height={25} alt="" src="/assets/images/qr-icon.png" />
      </a>
    </div>
  );
}
