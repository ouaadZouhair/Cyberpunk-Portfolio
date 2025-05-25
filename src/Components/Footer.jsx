
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black/30 backdrop-blur-lg border-t-2 border-highlight/60">
      <div className="max-w-6xl mx-auto py-4 px-6">
        <p className="text-center text-gray-400 font-tech text-sm">
          <span className="text-highlight">&lt;</span> © {currentYear} Created with love ❤️ by Zouhair Ouaad. All rights reserved <span className="text-highlight">/&gt;</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer