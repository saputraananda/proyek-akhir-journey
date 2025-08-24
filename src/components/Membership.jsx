import React from "react";

export default function Membership({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6 relative">
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>

        <h2 className="text-xl font-bold mb-4">Apa aja spesial member?</h2>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
          <li>🎙️ Video podcast dengan para mahasiswa bimbingan</li>
          <li>📑 Strategi kolokium</li>
          <li>📑 Strategi semhas</li>
          <li>📑 Strategi sidang</li>
          <li>😱 Bahas dosen killer (?)</li>
          <li>❓ Pertanyaan umum dosen pas kolokium</li>
          <li>💡 Seni merayu dosen</li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">
          Exclusive (special price)
        </h3>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
          <li>🔍 Review judul sidang kalian</li>
          <li>📝 Konsultasi penulisan</li>
          <li>
            💻 Konsultasi pembuatan sistem{" "}
            <span className="italic">(bukan joki, tapi dibantu)</span>
          </li>
        </ul>

        {/* Tombol Aksi */}
        <div className="flex gap-3 mt-6">
          <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition">
            Gabung Member
          </button>
          <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition">
            Gabung Exclusive
          </button>
        </div>
      </div>
    </div>
  );
}
