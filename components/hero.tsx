"use client"

import { useEffect, useState, useRef } from "react"

const terminalLines = [
  { type: "comment", text: "# Anonymous E2E encrypted terminal messenger" },
  { type: "comment", text: "# X3DH + NaCl | WebSocket + Protobuf | Nord theme" },
  { type: "empty", text: "" },
  { type: "prompt", text: "curl -Lo cgram https://github.com/isalikov/cgram-cli/releases/latest/download/cgram-darwin-arm64" },
  { type: "output", text: "Downloading cgram-cli..." },
  { type: "prompt", text: "chmod +x cgram && sudo mv cgram /usr/local/bin/" },
  { type: "success", text: "cgram installed successfully" },
  { type: "empty", text: "" },
  { type: "prompt", text: "cgram" },
  { type: "output", text: "Connecting to relay server..." },
  { type: "success", text: "Connected. You are anonymous." },
]

export function Hero() {
  const [visibleLines, setVisibleLines] = useState<number>(0)
  const [cursorVisible, setCursorVisible] = useState(true)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const lineTimer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev < terminalLines.length) {
          return prev + 1
        }
        clearInterval(lineTimer)
        return prev
      })
    }, 400)

    const cursorTimer = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 530)

    return () => {
      clearInterval(lineTimer)
      clearInterval(cursorTimer)
    }
  }, [])

  const renderLine = (line: typeof terminalLines[0], index: number) => {
    const isLastVisible = index === visibleLines - 1

    switch (line.type) {
      case "comment":
        return (
          <div key={index} className="text-[#616e88]">
            {line.text}
            {isLastVisible && cursorVisible && <span className="bg-[#88c0d0] text-black">&nbsp;</span>}
          </div>
        )
      case "prompt":
        return (
          <div key={index} className="flex">
            <span className="text-[#a3be8c]">user@cgram</span>
            <span className="text-[#d8dee9]">:</span>
            <span className="text-[#81a1c1]">~</span>
            <span className="text-[#d8dee9]">$ </span>
            <span className="text-[#eceff4]">{line.text}</span>
            {isLastVisible && cursorVisible && <span className="bg-[#88c0d0] text-black">&nbsp;</span>}
          </div>
        )
      case "output":
        return (
          <div key={index} className="text-[#d8dee9]">
            {line.text}
            {isLastVisible && cursorVisible && <span className="bg-[#88c0d0] text-black">&nbsp;</span>}
          </div>
        )
      case "success":
        return (
          <div key={index} className="text-[#a3be8c]">
            {line.text}
            {isLastVisible && cursorVisible && <span className="bg-[#88c0d0] text-black">&nbsp;</span>}
          </div>
        )
      case "empty":
        return <div key={index} className="h-5">&nbsp;</div>
      default:
        return null
    }
  }

  return (
      <section className="min-h-screen flex flex-col bg-black">
      {/* Terminal window */}
      <div className="flex-1 flex flex-col">
        {/* Terminal header bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#1a1a1a] border-b border-[#333333]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#bf616a]" />
            <div className="w-3 h-3 rounded-full bg-[#ebcb8b]" />
            <div className="w-3 h-3 rounded-full bg-[#a3be8c]" />
          </div>
          <span className="text-[#d8dee9] text-xs">cgram@terminal: ~</span>
          <div className="w-16" />
        </div>

        {/* Terminal content */}
        <div 
          ref={terminalRef}
          className="flex-1 p-6 md:p-8 lg:p-12 overflow-auto text-sm md:text-base leading-relaxed"
        >
          {/* ASCII Logo with gradient - exact copy from cgram-cli source */}
          <div className="mb-8 overflow-x-auto font-mono select-none flex flex-col md:flex-row md:items-start md:gap-8">
            <div>
              <pre className="text-xs md:text-sm lg:text-base leading-[1.15]" style={{ color: "#5E81AC" }}>{` ██████╗██████╗ ██████╗ █████╗ ███╗   ███╗`}</pre>
              <pre className="text-xs md:text-sm lg:text-base leading-[1.15]" style={{ color: "#81A1C1" }}>{`██╔════╝██╔═══╝ ██╔══██╗██╔══██╗████╗ ████║`}</pre>
              <pre className="text-xs md:text-sm lg:text-base leading-[1.15]" style={{ color: "#88C0D0" }}>{`██║     ██║ ██╗ ██████╔╝███████║██╔████╔██║`}</pre>
              <pre className="text-xs md:text-sm lg:text-base leading-[1.15]" style={{ color: "#A3BE8C" }}>{`██║     ██║ ██║██╔══██╗██╔══██║██║╚██╔╝██║`}</pre>
              <pre className="text-xs md:text-sm lg:text-base leading-[1.15]" style={{ color: "#EBCB8B" }}>{`╚██████╗╚█████╔╝██║  ██║██║  ██║██║ ╚═╝ ██║`}</pre>
              <pre className="text-xs md:text-sm lg:text-base leading-[1.15]" style={{ color: "#D08770" }}>{` ╚═════╝ ╚════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝`}</pre>
            </div>
            
            {/* Status panel - neofetch style */}
            <div className="mt-4 md:mt-0 text-xs md:text-sm">
              <div className="text-[#eceff4] font-bold">user@cgram</div>
              <div className="text-[#4c566a]">──────────</div>
              <div className="flex gap-2">
                <span className="text-[#4c566a]">server:</span>
                <span className="text-[#eceff4]">server.cgram.live</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#4c566a]">status:</span>
                <span className="text-[#a3be8c]">connected</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[#4c566a]">e2e:</span>
                <span className="text-[#eceff4]">   enabled</span>
              </div>
            </div>
          </div>
          


          {/* Terminal lines */}
          <div className="max-w-3xl">
            {terminalLines.slice(0, visibleLines).map((line, index) => renderLine(line, index))}
          </div>

          {/* Navigation hint */}
          <div className="mt-12 pt-8 border-t border-[#333333]">
            <div className="text-[#616e88] mb-4"># Quick navigation</div>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#features" 
                className="text-[#81a1c1] hover:text-[#88c0d0] transition-colors"
              >
                [1] features
              </a>
              <a 
                href="#install" 
                className="text-[#81a1c1] hover:text-[#88c0d0] transition-colors"
              >
                [2] install
              </a>
              <a 
                href="#shortcuts" 
                className="text-[#81a1c1] hover:text-[#88c0d0] transition-colors"
              >
                [3] shortcuts
              </a>
              <a 
                href="#architecture" 
                className="text-[#81a1c1] hover:text-[#88c0d0] transition-colors"
              >
                [4] architecture
              </a>
              <a 
                href="https://github.com/isalikov/cgram-cli" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#81a1c1] hover:text-[#88c0d0] transition-colors"
              >
                [g] github
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
