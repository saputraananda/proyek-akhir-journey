import { useState } from "react"
import { FaChevronDown } from "react-icons/fa"

function FAQ({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="w-full max-w-md border-b border-gray-200 py-3">
      <button 
        onClick={() => setOpen(!open)} 
        className="w-full flex justify-between items-center text-left font-medium text-gray-800"
      >
        {question}
        <FaChevronDown 
          className={`transition-transform ${open ? "rotate-180" : ""}`} 
        />
      </button>
      {open && (
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  )
}

export default function Faq() {
  return (
    <div className="mt-6 w-full max-w-md">
      <FAQ
        question="Bang, trusted kaga lu?"
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
        question="Kolokium tuh apaansih?"
        answer="Kolo tuh pemaparan rencana penelitian, BAB 1-3."
      />
      <FAQ
        question="Kolokium tuh berapa lama?"
        answer="Cepet, cuma 50 menit (1sks), presentasi, tanya jawab, penutup dari dospem"
      />
      <FAQ
        question="Gw bisa liat referensi judul dimana bang?"
        answer="Di Repository IPB yaa, disana ada judul2 TA 58 dan angkatan sebelum2nya"
      />
      <FAQ
        question="Gw magang berdua, gw udah siap kolo, tapi teman gw belum siap, boleh ga gw maju sendiri?"
        answer="Boleh kok, bebas, asal dospem lu ACC yaudah gas aja gausah nunggu temen lu, terkadang temenlu lah yang buat lu lama"
      />
      <FAQ
        question="Boleh ga lewat batas tanggal kolokium yang dikasih prodi?"
        answer="Boleh, gacuma kolo, semhas dan sidang juga boleh boleh aja, tapi semakin lama semakin hilang euforianya, dan bisa mundur timeline kalian. Dampaknya bisa bahaya kalau sidang kalian telat juga"
      />
      <FAQ
        question="Ditest ga pas kolo?"
        answer="Pada umumnya ngga, tapi siap siap aja kalau dosen moderator kalian kepo sama rencana penelitian kalian"
      />
      <FAQ
        question="Judul TA tuh harus dari magang sekarang? kalau magang gw kaga IT gimana?"
        answer="Ngga harus dari tempat magang lu kok, tapi ada baiknya diomongin ke dosen pembimbing kalian yaa"
      />
      <FAQ
        question="Boleh ubah judul ga bang kalau udah kolokium?"
        answer="Hmm, boleh atau ngga nya silahkan dikonsultasikan ke Dospem, tapi kalau ubah metode atau penambahan metode sih boleh boleh aja, seperti gw di kolo pakai metode least square, tapi pas di TA gw ubah jadi LSTM"
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
  )
}
