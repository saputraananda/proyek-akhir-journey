import {
  FaLinkedin, FaWhatsapp, FaInstagram, FaTiktok, FaTelegram, FaEnvelope
} from "react-icons/fa"

function SocialMedia() {
    return (
        <div className="flex gap-6 mt-4 text-2xl text-black">
        <a href="https://linkedin.com/in/username" target="_blank"><FaLinkedin /></a>
        <a href="https://wa.me/6281234567890" target="_blank"><FaWhatsapp /></a>
        <a href="https://instagram.com/username" target="_blank"><FaInstagram /></a>
        <a href="https://tiktok.com/@username" target="_blank"><FaTiktok /></a>
        <a href="https://t.me/username" target="_blank"><FaTelegram /></a>
        <a href="mailto:username@email.com" target="_blank"><FaEnvelope /></a>
      </div>
    )
}

export default SocialMedia
