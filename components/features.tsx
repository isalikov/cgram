const features = [
  {
    flag: "--encrypt",
    title: "E2E Encryption",
    description: "X3DH key exchange + NaCl secretbox (XSalsa20 + Poly1305)",
  },
  {
    flag: "--websocket",
    title: "Real-time",
    description: "WebSocket + Protobuf binary protocol for minimal overhead",
  },
  {
    flag: "--local",
    title: "Local Storage",
    description: "SQLite-backed message history. Data stays on your machine.",
  },
  {
    flag: "--notify",
    title: "Notifications",
    description: "Native OS notifications on macOS, Linux, and Windows",
  },
  {
    flag: "--vim",
    title: "Vim Mode",
    description: "Command mode with :add, :rename, :delete, j/k navigation",
  },
  {
    flag: "--reconnect",
    title: "Auto-reconnect",
    description: "Seamless reconnection on network interruption",
  },
]

export function Features() {
  return (
    <section id="features" className="bg-black border-t border-[#333333]">
      <div className="p-6 md:p-8 lg:p-12">
        {/* Section header */}
        <div className="mb-8">
          <span className="text-[#616e88]">{'/* '}</span>
          <span className="text-[#a3be8c]">FEATURES</span>
          <span className="text-[#616e88]">{' */'}</span>
        </div>

        {/* Features as command flags */}
        <div className="grid gap-1 max-w-4xl">
          <div className="text-[#d8dee9] mb-4">
            <span className="text-[#a3be8c]">$</span> cgram --help
          </div>
          
          <div className="pl-4 md:pl-8">
            <div className="text-[#88c0d0] mb-4">Usage: cgram [options]</div>
            <div className="text-[#d8dee9] mb-6">Options:</div>
            
            {features.map((feature) => (
              <div key={feature.flag} className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-1 md:gap-4 mb-4">
                <span className="text-[#81a1c1]">{feature.flag}</span>
                <div>
                  <span className="text-[#eceff4]">{feature.title}</span>
                  <span className="text-[#4c566a]"> - </span>
                  <span className="text-[#d8dee9]">{feature.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
