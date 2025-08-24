import { useState } from "react"
import Profile from "./components/Profile"
import SocialMedia from "./components/SocialMedia"
import Paragraph from "./components/Paragraph"
import Link from "./components/Link"
import YouTubeEmbed from "./components/Video"
import Title from "./components/Title"
import Footer from "./components/Footer"
import FAQ from "./components/Faq"
import Membership from "./components/Membership"

function App() {
  const [mode, setMode] = useState("full") // default full
  const [isMemberOpen, setIsMemberOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-black px-6 py-10 font-sans">

      {/* Toggle Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-6 w-full">
        <button
          onClick={() => setMode("full")}
          className={`px-3 py-1.5 text-sm rounded-full border transition ${mode === "full"
            ? "border-green-500 text-green-600 bg-green-50"
            : "border-gray-300 text-gray-500 hover:bg-gray-100"
            }`}
        >
          Full
        </button>
        <button
          onClick={() => setMode("link")}
          className={`px-3 py-1.5 text-sm rounded-full border transition ${mode === "link"
            ? "border-green-500 text-green-600 bg-green-50"
            : "border-gray-300 text-gray-500 hover:bg-gray-100"
            }`}
        >
          Links
        </button>
        <button
          onClick={() => setMode("video")}
          className={`px-3 py-1.5 text-sm rounded-full border transition ${mode === "video"
            ? "border-green-500 text-green-600 bg-green-50"
            : "border-gray-300 text-gray-500 hover:bg-gray-100"
            }`}
        >
          Videos
        </button>
        {/* FAQ */}
        <button
          onClick={() => setMode("faq")}
          className={`px-3 py-1.5 text-sm rounded-full border transition ${mode === "faq"
            ? "border-green-500 text-green-600 bg-green-50"
            : "border-gray-300 text-gray-500 hover:bg-gray-100"
            }`}
        >
          FAQ
        </button>
        {/* Locked Member Button */}
        <button
          onClick={() => setIsMemberOpen(true)}
          className="px-3 py-1.5 text-sm rounded-full border border-red-500 text-red-500 bg-red-50 hover:bg-red-100 transition"
        >
          Member 🔒
        </button>
      </div>

      {/* Profile selalu tampil */}
      <Profile />
      <SocialMedia />

      {mode === "full" && (
        <>
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
          <Link text="Laporan Magang" href="https://drive.google.com/file/d/1VVDyBj-eDRYn91PDlcQ-aXE-iQ1mk5rp/view?usp=sharing" />
          <Link text="Deck Presentasi Magang" href="https://drive.google.com/file/d/1-kHB_VPu5ST0wi1R-yqWh254Ug2imY-u/view?usp=sharing" />

          <Title title="Seminar Proposal" />
          <Paragraph>
            <span className="font-bold">Kolokium atau Sempro</span> itu adalah presentasi Bab 1-3 aja, 1 sks, 50 menit.
            Idealnya dilakukan sebelum ujian magang. Jadi kisaran oktober-november itu udah sempro biar tepat waktu.
            Dosen moderator (penguji) bakal dibagiin nanti setelah jalan beberapa bulan magang, Dosen Moderator di Kolokium berbeda dengan
            Dosen Penguji di Semhas-Sidang.{" "}
            <span className="font-bold">
              Umumnya tidak ada tes coding pada sempro ini, karena hanya memaparkan rencana penelitian saja.
            </span>
          </Paragraph>
          <Link text="Laporan Kolokium" href="https://drive.google.com/file/d/1046KVeK_8J0uV8zR8Bnc9Kfdes4f0KLY/view?usp=sharing" />
          <Link text="Deck Presentasi Kolokium" href="https://drive.google.com/file/d/1sh-vhhpvNpv2vwDsfAo4InaWVs3OghX1/view?usp=sharing" />
          <YouTubeEmbed videoId="PdXBWOFe9yk" />

          <Title title="Seminar Hasil" />
          <Paragraph>
            <span className="font-bold">Seminar Hasil atau Semhas</span> adalah presentasi Bab 4-5, 1 sks, 50 menit.
            Idealnya dilakukan setelah 1-3 bulan setelah Sempro. Dosen penguji semhas ini bakal dibagiin nanti mendekati masa2 semhas dan
            Dosji Semhas juga menjadi Dosji Sidang. Seminar Hasil ini jarang ada test coding sih, tapi kalau dosen penguji kalian penasaran,{" "}
            <span className="font-bold">
              mungkin possible untuk test coding, tapi jarang sih, karena hanya 50 menit aja.
            </span>
          </Paragraph>
          <Link text="Laporan Seminar Hasil" href="https://drive.google.com/file/d/1WvA2j2tWh1ChmsxxF9XWL8zMjWGA1o-a/view?usp=sharing" />
          <Link text="Deck Presentasi Seminar" href="https://drive.google.com/file/d/1gg2b4nB7U2_aHxvBdSyIIHfD1Ijy6mq2/view?usp=sharing" />
          <YouTubeEmbed videoId="fhL6PMkG-w8" />

          <Title title="Sidang" />
          <Paragraph>
            <span className="font-bold">Sidang</span> itu adalah presentasi keseluruhan, baik dari penulisan, code,
            aplikasi, dan lainnya. Idealnya dilakukan setelah 1 bulan setelah Semhas, karena revisi semhas seharusnya ga lama.
            Dosen penguji sidang ini sama seperti Semhas. Harus siap test coding, minimal tes SQL, tapi ga semua Dosen test coding,
            karena banyak juga Dosen yang fokus ke{" "}
            <span className="font-bold">
              alur bisnis dan alur aplikasi.</span> Gw ada sih videonya, tapi masih dalam proses izin publikasi dari Dosen, karena sidang itu sifatnya tertutup.
          </Paragraph>
          <Link text="Laporan Proyek Ahkir" href="https://drive.google.com/file/d/180QCMpcsYROcV8v8wAFINERd9gs-2IWQ/view?usp=sharing" />
          <Link text="Deck Sidang" href="https://drive.google.com/file/d/13K_rJkiWOwHhd5JROlFfIRVvldLljqvP/view?usp=sharing" />
        </>
      )}

      {mode === "link" && (
        <>
          <Link text="Pembagian Dospem TPL 58" href="https://drive.google.com/file/d/1BtOiIOsDz0zNSz6lHpPe1pQlP7DyBMVK/view?usp=sharing" />
          <Link text="Laporan Magang" href="https://drive.google.com/file/d/1VVDyBj-eDRYn91PDlcQ-aXE-iQ1mk5rp/view?usp=sharing" />
          <Link text="Deck Presentasi Magang" href="https://drive.google.com/file/d/1-kHB_VPu5ST0wi1R-yqWh254Ug2imY-u/view?usp=sharing" />
          <Link text="Laporan Kolokium" href="https://drive.google.com/file/d/1046KVeK_8J0uV8zR8Bnc9Kfdes4f0KLY/view?usp=sharing" />
          <Link text="Deck Presentasi Kolokium" href="https://drive.google.com/file/d/1sh-vhhpvNpv2vwDsfAo4InaWVs3OghX1/view?usp=sharing" />
          <Link text="Laporan Semhas" href="https://drive.google.com/file/d/1WvA2j2tWh1ChmsxxF9XWL8zMjWGA1o-a/view?usp=sharing" />
          <Link text="Deck Presentasi Seminar" href="https://drive.google.com/file/d/1gg2b4nB7U2_aHxvBdSyIIHfD1Ijy6mq2/view?usp=sharing" />
          <Link text="Laporan Proyek Ahkir" href="https://drive.google.com/file/d/180QCMpcsYROcV8v8wAFINERd9gs-2IWQ/view?usp=sharing" />
          <Link text="Deck Sidang" href="https://drive.google.com/file/d/13K_rJkiWOwHhd5JROlFfIRVvldLljqvP/view?usp=sharing" />
          <Link text="PPKI Versi 4" href="https://drive.google.com/file/d/1zcJtHAF5dl8zjIenB-4kyxESWv5eAl6_/view?usp=sharing" />
        </>
      )}

      {mode === "video" && (
        <>
          <Title title="Prolog" />
          <YouTubeEmbed videoId="PdXBWOFe9yk" />
          <Title title="Kolokium" />
          <YouTubeEmbed videoId="PdXBWOFe9yk" />
          <Title title="Seminar Hasil" />
          <YouTubeEmbed videoId="fhL6PMkG-w8" />
        </>
      )}

      {/* Mode FAQ */}
      {mode === "faq" && <FAQ />}

      {/* Footer */}
      <Footer />

      {/* Modal Member */}
      <Membership isOpen={isMemberOpen} onClose={() => setIsMemberOpen(false)} />

    </div>
  )
}

export default App
