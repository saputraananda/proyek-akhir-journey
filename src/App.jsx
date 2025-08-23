import Profile from "./components/Profile"
import SocialMedia from "./components/SocialMedia"
import Paragraph from "./components/Paragraph"
import Link from "./components/Link"
import YouTubeEmbed from "./components/Video"
import Title from "./components/Title"

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-black px-6 py-10 font-sans">

      {/* Profile Section */}
      <Profile />

      {/* Social Icons */}
      <SocialMedia />

      {/* Paragraph Block */}
      <Title title="Magang Merdeka" />

      <Paragraph>
        <span className="font-bold">Laporan Magang</span> lu buat selama periode magang.
        Laporan ini sebagai dasar untuk ujian magang (presentasi). Idealnya presentasi itu ketika
        periode magang selesai, tapi kalau belum selesai juga gapapa sih, misal November-Desember.
        Pokoknya sebelum nilai di-input ke SIMAK.{" "}
        <span className="font-bold">
          "Bang, gw magang berdua, kita berdua ngerjain satu web, berarti isi laporan kita sama?"
        </span>{" "}
        jangan 100% sama kocak, kan kalian berdua pasti ngerjain part yang beda, misalnya yang satu
        ngerjain frontend, yang satu backend, dll. Intinya gapapa banyak yang sama, tapi fokus
        pengerjaannya harus beda.{" "}
        <span className="font-bold">
          Untuk dosen penguji nya berbeda dengan dosen moderator kolokium.
        </span>
      </Paragraph>

      {/* Button Block */}
      <Link text="Laporan Magang" href="https://example.com/laporan" />

      <Title title="Seminar Proposal" />

      {/* Paragraph Block */}
      <Paragraph>
        <span className="font-bold">Kolokium atau Sempro</span> itu adalah presentasi Bab 1-3 aja, 1 sks, 50 menit.
        Idealnya dilakukan sebelum ujian magang. Jadi kisaran oktober-november itu udah sempro biar tepat waktu.
        Dosen moderator (penguji) bakal dibagiin nanti setelah jalan beberapa bulan magang.{" "}
        <span className="font-bold">
          Umumnya tidak ada tes coding pada sempro ini, karena hanya memaparkan rencana penelitian saja.
        </span>
      </Paragraph>

      {/* Button Block */}
      <Link text="Laporan Kolokium" href="https://example.com/laporan" />

      {/* Button Block */}
      <YouTubeEmbed videoId="dQw4w9WgXcQ" />

      <Title title="Seminar Hasil" />


    </div>
  )
}

export default App
