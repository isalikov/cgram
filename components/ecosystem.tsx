const repos = [
  {
    name: "cgram-proto",
    path: "github.com/isalikov/cgram-proto",
    desc: "Protobuf schema definitions",
    url: "https://github.com/isalikov/cgram-proto",
  },
  {
    name: "cgram-server",
    path: "github.com/isalikov/cgram-server",
    desc: "Stateless relay server (Go)",
    url: "https://github.com/isalikov/cgram-server",
  },
  {
    name: "cgram-cli",
    path: "github.com/isalikov/cgram-cli",
    desc: "Terminal client (this repo)",
    url: "https://github.com/isalikov/cgram-cli",
  },
]

export function Ecosystem() {
  return (
    <section className="bg-black border-t border-[#333333]">
      <div className="p-6 md:p-8 lg:p-12">
        {/* Section header */}
        <div className="mb-8">
          <span className="text-[#616e88]">{'/* '}</span>
          <span className="text-[#a3be8c]">ECOSYSTEM</span>
          <span className="text-[#616e88]">{' */'}</span>
        </div>

        <div className="text-[#d8dee9] mb-6">
          cgram is fully open source. inspect the code, run your own server, contribute.
        </div>

        {/* Repos as ls output */}
        <div className="bg-[#0a0a0a] border border-[#333333] p-4 max-w-3xl">
          <div className="mb-4">
            <span className="text-[#a3be8c]">$</span>
            <span className="text-[#eceff4]"> ls -la ~/cgram/</span>
          </div>
          
          <div className="text-[#616e88] text-sm mb-2">
            total 3
          </div>
          
          {repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 py-2 border-b border-[#1a1a1a] last:border-0 hover:bg-[#1a1a1a] -mx-2 px-2 transition-colors group"
            >
              <span className="text-[#81a1c1]">drwxr-xr-x</span>
              <span className="text-[#88c0d0] group-hover:text-[#8fbcbb] flex-shrink-0">{repo.name}/</span>
              <span className="text-[#616e88] text-sm hidden md:block">{repo.desc}</span>
            </a>
          ))}
        </div>

        {/* Clone hint */}
        <div className="mt-6">
          <span className="text-[#616e88]"># clone all repos</span>
        </div>
        <div className="mt-2">
          <span className="text-[#a3be8c]">$</span>
          <span className="text-[#eceff4]"> git clone https://github.com/isalikov/cgram-cli.git</span>
        </div>
      </div>
    </section>
  )
}
