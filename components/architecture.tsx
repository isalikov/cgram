const asciiDiagram = `
┌─────────────────┐                           ┌─────────────────┐
│                 │                           │                 │
│   YOUR DEVICE   │                           │  THEIR DEVICE   │
│                 │                           │                 │
│  ┌───────────┐  │     ┌───────────────┐     │  ┌───────────┐  │
│  │ encrypt() │──┼────►│  RELAY SERVER │────►┼──│ decrypt() │  │
│  └───────────┘  │     │               │     │  └───────────┘  │
│                 │     │ ░░░░░░░░░░░░░ │     │                 │
│  private key    │     │ encrypted blob│     │  private key    │
│  ████████████   │     │ ░░░░░░░░░░░░░ │     │  ████████████   │
│                 │     └───────────────┘     │                 │
└─────────────────┘                           └─────────────────┘
`

export function Architecture() {
  return (
    <section id="architecture" className="bg-black border-t border-[#333333]">
      <div className="p-6 md:p-8 lg:p-12">
        {/* Section header */}
        <div className="mb-8">
          <span className="text-[#616e88]">{'/* '}</span>
          <span className="text-[#a3be8c]">ARCHITECTURE</span>
          <span className="text-[#616e88]">{' */'}</span>
        </div>

        {/* Description */}
        <div className="mb-8 max-w-3xl">
          <div className="text-[#88c0d0] mb-2">zero-knowledge design</div>
          <div className="text-[#d8dee9]">
            The server is a stateless relay. It never sees your message content,
            only encrypted blobs. All encryption and decryption happens client-side.
          </div>
        </div>

        {/* ASCII diagram */}
        <div className="bg-[#0a0a0a] border border-[#333333] p-4 overflow-x-auto">
          <pre className="text-[#88c0d0] text-xs md:text-sm whitespace-pre">
            {asciiDiagram}
          </pre>
        </div>

        {/* Crypto specs */}
        <div className="mt-8 grid md:grid-cols-3 gap-4 max-w-4xl">
          <div className="bg-[#0a0a0a] border border-[#333333] p-4">
            <div className="text-[#616e88] text-xs mb-2"># key exchange</div>
            <div className="text-[#a3be8c]">X3DH</div>
            <div className="text-[#d8dee9] text-sm">Extended Triple Diffie-Hellman</div>
          </div>
          <div className="bg-[#0a0a0a] border border-[#333333] p-4">
            <div className="text-[#616e88] text-xs mb-2"># encryption</div>
            <div className="text-[#a3be8c]">NaCl secretbox</div>
            <div className="text-[#d8dee9] text-sm">XSalsa20 + Poly1305 MAC</div>
          </div>
          <div className="bg-[#0a0a0a] border border-[#333333] p-4">
            <div className="text-[#616e88] text-xs mb-2"># transport</div>
            <div className="text-[#a3be8c]">WebSocket + Protobuf</div>
            <div className="text-[#d8dee9] text-sm">Binary protocol, minimal overhead</div>
          </div>
        </div>
      </div>
    </section>
  )
}
