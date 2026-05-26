import whatsappIcon from '../assets/whatsapp.png'

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918652119165"
      target="_blank"
      rel="noreferrer"
      className="fixed right-5 bottom-20 z-40 inline-flex items-center justify-center rounded-full bg-emerald-600 p-3 text-white shadow-2xl shadow-emerald-900/30 transition hover:bg-emerald-500"
      aria-label="Contact us on WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="h-8 w-8 object-contain" />
    </a>
  )
}

export default WhatsAppButton
