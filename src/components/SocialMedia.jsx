import {
  FaLinkedin, FaWhatsapp, FaInstagram, FaTiktok, FaTelegram, FaEnvelope
} from "react-icons/fa"

function SocialMedia() {
    return (
        <div className="flex gap-6 mt-4 text-2xl text-black">
        <a href="https://linkedin.com/in/ananda-saputra/" target="_blank"><FaLinkedin /></a>
        <a href="https://wa.me/6287770597000" target="_blank"><FaWhatsapp /></a>
        <a href="https://instagram.com/annnandda" target="_blank"><FaInstagram /></a>
        <a href="https://tiktok.com/@annnandda" target="_blank"><FaTiktok /></a>
        <a href="mailto:saputraananda70@gmail.com" target="_blank"><FaEnvelope /></a>
      </div>
    )
}

export default SocialMedia
