function Footer() {
  return (
    <footer className="w-full mt-12 py-6 border-t border-gray-200 text-center text-sm text-gray-500">
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="font-medium">Ananda Saputra</span> — Contributors:{" "}
        <span className="font-medium">Aria Wardana</span> &{" "}
        <span className="font-medium">Galih Ario Prayudo</span> 
      </p>
      <p className="mt-2">
        (Punya saran atau kontribusi?{" "}
        <a
          href="https://wa.me/6287770597000"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 font-medium hover:underline"
        >
          WA Saya 
        </a>
        )
        #Salam Syntax Error
      </p>
    </footer>
  )
}

export default Footer
