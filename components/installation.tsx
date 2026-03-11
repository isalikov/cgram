"use client"

import { useState } from "react"

const installMethods = [
  {
    id: "darwin",
    label: "macos",
    commands: [
      { prompt: true, text: "curl -Lo cgram https://github.com/isalikov/cgram-cli/releases/latest/download/cgram-darwin-arm64" },
      { prompt: true, text: "chmod +x cgram" },
      { prompt: true, text: "sudo mv cgram /usr/local/bin/" },
    ],
  },
  {
    id: "linux",
    label: "linux",
    commands: [
      { prompt: true, text: "curl -Lo cgram https://github.com/isalikov/cgram-cli/releases/latest/download/cgram-linux-amd64" },
      { prompt: true, text: "chmod +x cgram" },
      { prompt: true, text: "sudo mv cgram /usr/local/bin/" },
    ],
  },
  {
    id: "docker",
    label: "docker",
    commands: [
      { prompt: true, text: "docker run -it ghcr.io/isalikov/cgram-cli:latest" },
    ],
  },
  {
    id: "source",
    label: "source",
    commands: [
      { prompt: true, text: "git clone https://github.com/isalikov/cgram-cli.git" },
      { prompt: true, text: "cd cgram-cli" },
      { prompt: true, text: "go build -o cgram ./cmd/cgram" },
      { prompt: true, text: "./cgram" },
    ],
  },
]

export function Installation() {
  const [selected, setSelected] = useState("darwin")
  const [copied, setCopied] = useState(false)

  const current = installMethods.find((m) => m.id === selected)

  const copyCommands = async () => {
    if (current) {
      const text = current.commands.map((c) => c.text).join("\n")
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <section id="install" className="bg-black border-t border-[#333333]">
      <div className="p-6 md:p-8 lg:p-12">
        {/* Section header */}
        <div className="mb-8">
          <span className="text-[#616e88]">{'/* '}</span>
          <span className="text-[#a3be8c]">INSTALLATION</span>
          <span className="text-[#616e88]">{' */'}</span>
        </div>

        {/* Method selector */}
        <div className="mb-6">
          <span className="text-[#d8dee9]">select method: </span>
          {installMethods.map((method, i) => (
            <span key={method.id}>
              {i > 0 && <span className="text-[#4c566a]"> | </span>}
              <button
                onClick={() => setSelected(method.id)}
                className={`transition-colors ${
                  selected === method.id
                    ? "text-[#88c0d0]"
                    : "text-[#81a1c1] hover:text-[#88c0d0]"
                }`}
              >
                [{method.label}]
              </button>
            </span>
          ))}
        </div>

        {/* Commands */}
        <div className="bg-[#0a0a0a] border border-[#333333] p-4 md:p-6 max-w-3xl">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#333333]">
            <span className="text-[#616e88] text-xs">~/{selected}</span>
            <button
              onClick={copyCommands}
              className="text-xs text-[#81a1c1] hover:text-[#88c0d0] transition-colors"
            >
              [{copied ? "copied!" : "copy"}]
            </button>
          </div>
          
          {current?.commands.map((cmd, index) => (
            <div key={index} className="mb-2 last:mb-0">
              {cmd.prompt && (
                <>
                  <span className="text-[#a3be8c]">$</span>
                  <span className="text-[#d8dee9]"> </span>
                </>
              )}
              <span className="text-[#eceff4] break-all">{cmd.text}</span>
            </div>
          ))}
        </div>

        {/* Verify installation */}
        <div className="mt-6 text-[#616e88]">
          # verify installation
        </div>
        <div className="mt-2">
          <span className="text-[#a3be8c]">$</span>
          <span className="text-[#eceff4]"> cgram --version</span>
        </div>
      </div>
    </section>
  )
}
