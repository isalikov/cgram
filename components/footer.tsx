export function Footer() {
  return (
    <footer className="bg-black border-t border-[#333333]">
      <div className="p-6 md:p-8 lg:p-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Logo and tagline */}
          <div>
            <span className="text-[#88c0d0]">cgram</span>
            <span className="text-[#4c566a]"> :: </span>
            <span className="text-[#d8dee9]">anonymous e2e encrypted terminal messenger</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/isalikov/cgram-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#81a1c1] hover:text-[#88c0d0] transition-colors"
            >
              [github]
            </a>
            <a
              href="https://github.com/isalikov/cgram-cli/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#81a1c1] hover:text-[#88c0d0] transition-colors"
            >
              [releases]
            </a>
            <span className="text-[#616e88]">MIT</span>
          </div>
        </div>

        {/* Exit prompt */}
        <div className="mt-8 pt-4 border-t border-[#1a1a1a]">
          <span className="text-[#a3be8c]">user@cgram</span>
          <span className="text-[#d8dee9]">:</span>
          <span className="text-[#81a1c1]">~</span>
          <span className="text-[#d8dee9]">$ </span>
          <span className="text-[#eceff4]">exit</span>
        </div>
        <div className="text-[#616e88] mt-1">
          logout
        </div>
      </div>
    </footer>
  )
}
