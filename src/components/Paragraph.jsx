function Paragraph({ children }) {
  return (
    <div className="w-full max-w-md mt-2 text-sm leading-relaxed text-gray-800 text-justify">
      <p>{children}</p>
    </div>
  )
}

export default Paragraph
