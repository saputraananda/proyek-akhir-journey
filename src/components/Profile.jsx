function Profile() {
    return (
        <div className="flex flex-col items-center text-center">
            <img
                src="putra.jpeg" // pastikan ada di public/assets
                alt="avatar"
                className="w-24 h-24 rounded-full object-cover shadow-md"
            />
            <h1 className="mt-3 text-md font-bold">Penanggung Jawab Program Studi</h1>
            <p className="text-gray-600 text-sm">Ini Pure Pengalaman Gw, Bisa Berubah Seiring Waktu</p>
        </div>
    )
}

export default Profile
