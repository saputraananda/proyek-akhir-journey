import { useState } from "react"
import Profile from "./components/Profile"
import SocialMedia from "./components/SocialMedia"
import Paragraph from "./components/Paragraph"
import Link from "./components/Link"
import YouTubeEmbed from "./components/Video"
import Title from "./components/Title"
import Footer from "./components/Footer"
import FAQ from "./components/Faq"

function App() {
  const [mode, setMode] = useState("full") // default full

  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-black px-6 py-10 font-sans">

      {/* Toggle Buttons */}
      <div className="flex gap-2 mb-6">
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
          disabled
          className="px-3 py-1.5 text-sm rounded-full border border-red-500 text-red-500 bg-red-50 opacity-70 cursor-not-allowed"
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

          <Title title="Seminar Proposal" />
          <Paragraph>
            <span className="font-bold">Kolokium atau Sempro</span> itu adalah presentasi Bab 1-3 aja, 1 sks, 50 menit.
            Idealnya dilakukan sebelum ujian magang. Jadi kisaran oktober-november itu udah sempro biar tepat waktu.
            Dosen moderator (penguji) bakal dibagiin nanti setelah jalan beberapa bulan magang, Dosen Moderator di kolokium berbeda dengan.
            Dosen Penguji di Semhas-Sidang{" "}
            <span className="font-bold">
              Umumnya tidak ada tes coding pada sempro ini, karena hanya memaparkan rencana penelitian saja.
            </span>
          </Paragraph>
          <Link text="Laporan Kolokium" href="https://drive.google.com/file/d/1046KVeK_8J0uV8zR8Bnc9Kfdes4f0KLY/view?usp=sharing" />
          <YouTubeEmbed videoId="PdXBWOFe9yk" />

          <Title title="Seminar Hasil" />
          <Paragraph>
            <span className="font-bold">Seminar Hasil atau Semihas</span> itu adalah presentasi Bab 4-5 aja, 1 sks, 50 menit.
            Idealnya dilakukan setelah 1-3 bulan setelah Sempro. Dosen penguji semhas ini bakal dibagiin nanti mendekati masa2 semhas dan
            Dosji Semhas juga menjadi Dosji Sidang. Seminar Hasil ini jarang ada test coding sih, tapi kalau dosen penguji kalian penasaran,{" "}
            <span className="font-bold">
              mungkin possible untuk test coding, tapi jarang sih, karena hanya 50 menit aja.
            </span>
          </Paragraph>
          <Link text="Laporan Semhas" href="https://drive.google.com/file/d/1WvA2j2tWh1ChmsxxF9XWL8zMjWGA1o-a/view?usp=sharing" />
          <YouTubeEmbed videoId="fhL6PMkG-w8" />

          <Title title="Sidang" />
          <Paragraph>
            <span className="font-bold">Sidang</span> itu adalah presentasi keseluruhan, baik dari penulisan, code, .
            aplikasi, dan lainnya. Idealnya dilakukan setelah 1 bulan setelah Semhas, karena revisi semhas seharusnya ga lama.
            Dosen penguji sidang ini sama seperti Semhas. Harus siap test coding, minimal tes SQL, tapi ga semua Dosen test coding,
            karena banyak juga dosen yang fokus ke{" "}
            <span className="font-bold">
              alur bisnis dan alur aplikasi.</span> Gw ada sih videonya, tapi masih dalam proses izin publikasi dari Dosen, karena sidang itu sifatnya tertutup.
          </Paragraph>
          <Link text="Laporan Proyek Ahkir" href="https://drive.google.com/file/d/180QCMpcsYROcV8v8wAFINERd9gs-2IWQ/view?usp=sharing" />
        </>
      )}

      {mode === "link" && (
        <>
          <Link text="Laporan Magang" href="https://drive.google.com/file/d/1VVDyBj-eDRYn91PDlcQ-aXE-iQ1mk5rp/view?usp=sharing" />
          <Link text="Laporan Kolokium" href="https://drive.google.com/file/d/1046KVeK_8J0uV8zR8Bnc9Kfdes4f0KLY/view?usp=sharing" />
          <Link text="Laporan Semhas" href="https://drive.google.com/file/d/1WvA2j2tWh1ChmsxxF9XWL8zMjWGA1o-a/view?usp=sharing" />
          <Link text="Laporan Proyek Ahkir" href="https://drive.google.com/file/d/180QCMpcsYROcV8v8wAFINERd9gs-2IWQ/view?usp=sharing" />
          <Link text="Pembagian Dospem TPL 58" href="https://drive.google.com/file/d/1BtOiIOsDz0zNSz6lHpPe1pQlP7DyBMVK/view?usp=sharing" />
          <Link text="PPKI Versi 4" href="https://drive.google.com/file/d/1zcJtHAF5dl8zjIenB-4kyxESWv5eAl6_/view?usp=sharing" />
        </>
      )}

      {mode === "video" && (
        <>
          <Title title="Kolokium" />
          <YouTubeEmbed videoId="PdXBWOFe9yk" />
          <Title title="Seminar Hasil" />
          <YouTubeEmbed videoId="fhL6PMkG-w8" />
        </>
      )}

      {/* Mode FAQ */}
      {mode === "faq" && (
        <div className="mt-6 w-full max-w-md">
          <FAQ
            question="Bang, trusted kaga ini link?"
            answer="Insyallah yee, ini semua laporan yang gw cantumin sudah di TTD Dospem dan Dosji, jadi sudah melewati tahap koreksi. Tapi kalau kalian menemukan kejanggalan, typo, dll, mohon dimaklumi wkwk"
          />
          <FAQ
            question="Bang, kenapa dospem gw 2 dah?"
            answer="Gatau gw juga, tapi kayaknya kalau gw karena di rencana penelitian gw itu ada proses bisnis nya, jadi ditambahin dosen MAB sebagai dosen kedua."
          />
          <FAQ
            question="Magang harus 900++ jam gasih bang? tempat magang gw banyak liburnya"
            answer="Secara logbook iya, tapi aktualnya mah pinter pinter kalian aja. Kenapa harus 900++ jam? karena biar bisa dikonversi sks nya, aktualnya kalian magang 2 jam perhari juga gpp sebenernye mah, asal jangan ketauan wkwk"
          />
          <FAQ
            question="Kolo tuh apaansih?"
            answer="Kolo tuh pemaparan rencana penelitian, BAB 1-3."
          />
          <FAQ
            question="Kolokium tuh berapa lama?"
            answer="Cepet, cuma 50 menit (1sks), presentasi, tanya jawab, penutup dari dospem"
          />
          <FAQ
            question="Judul TA tuh harus dari magang sekarang? kalau magang gw kaga IT gimana?"
            answer="Ngga harus dari tempat magang lu kok, tapi ada baiknya diomongin ke dosen pembimbing kalian yaa"
          />
          <FAQ
            question="Kenapa prodi nyuruh kita ambil judul TA dari magang?"
            answer="Karena biar kalian gacape lagi dari 0, jadi kalian tinggal lanjutin laporan magang kalian biar bisa jadi TA juga, tinggal nambahin beberapa fitur aja yang kalian bisa kembangin dari laporan magang"
          />
          <FAQ
            question="Bang, tempat magang gw kaga ada projek IT, gimana dong ini"
            answer="Gapapa, kalian obrolin dlu aja sama Dospem, dan sebenernya boleh ko kalian buat projek sendiri, tapi harus disetor atau dilaporkan ke instansi kalian, walaupun instansi kalian GAK BUTUH sistem yang kalian buat"
          />
        </div>
      )}

      <Footer />
    </div>
  )
}

export default App
