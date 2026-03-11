const shortcuts = [
  { key: "Tab", action: "switch between contacts and chat" },
  { key: "j/k", action: "navigate contacts / scroll messages" },
  { key: "Enter", action: "open chat / send message" },
  { key: "Shift+Enter", action: "new line in message" },
  { key: ":", action: "enter command mode" },
  { key: "?", action: "show help overlay" },
  { key: "Esc", action: "close overlay" },
  { key: "Ctrl+C", action: "quit application" },
]

const commands = [
  { cmd: ":add <user>", desc: "add a contact by username" },
  { cmd: ":rename <name>", desc: "rename selected contact" },
  { cmd: ":delete", desc: "delete selected contact" },
  { cmd: ":id", desc: "display your user ID" },
  { cmd: ":help", desc: "show all commands" },
  { cmd: ":quit", desc: "exit cgram" },
]

export function Shortcuts() {
  return (
    <section id="shortcuts" className="bg-black border-t border-[#333333]">
      <div className="p-6 md:p-8 lg:p-12">
        {/* Section header */}
        <div className="mb-8">
          <span className="text-[#616e88]">{'/* '}</span>
          <span className="text-[#a3be8c]">KEYBOARD SHORTCUTS</span>
          <span className="text-[#616e88]">{' */'}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          {/* Shortcuts */}
          <div>
            <div className="text-[#88c0d0] mb-4">keybindings:</div>
            <div className="bg-[#0a0a0a] border border-[#333333] p-4">
              {shortcuts.map((item) => (
                <div key={item.key} className="flex justify-between py-1 border-b border-[#1a1a1a] last:border-0">
                  <span className="text-[#ebcb8b]">{`<${item.key}>`}</span>
                  <span className="text-[#d8dee9]">{item.action}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Commands */}
          <div>
            <div className="text-[#88c0d0] mb-4">commands:</div>
            <div className="bg-[#0a0a0a] border border-[#333333] p-4">
              {commands.map((item) => (
                <div key={item.cmd} className="flex justify-between py-1 border-b border-[#3b4252] last:border-0">
                  <span className="text-[#a3be8c]">{item.cmd}</span>
                  <span className="text-[#d8dee9]">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vim-style hint */}
        <div className="mt-8 text-[#616e88]">
          # tip: use vim-style navigation for a seamless terminal experience
        </div>
      </div>
    </section>
  )
}
