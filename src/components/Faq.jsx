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

export default FAQ
