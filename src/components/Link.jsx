function Link({ text, href }) {
  return (
    <div className="w-full max-w-md mt-6">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
       className="block w-full border border-[#ce2881] text-center py-3 rounded-lg text-gray-800 font-medium hover:bg-pink-50 transition"
      >
        {text}
      </a>
    </div>
  )
}

export default Link
