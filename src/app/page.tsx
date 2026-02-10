export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <OshuLogo />
            <span className="text-lg font-semibold tracking-tight">oshu</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm text-muted hover:text-foreground transition-colors hidden sm:block">Features</a>
            <a href="#integration" className="text-sm text-muted hover:text-foreground transition-colors hidden sm:block">Integration</a>
            <a
              href="mailto:hello@oshu.dev"
              className="text-sm font-medium bg-foreground text-white px-4 py-2 rounded-full hover:bg-foreground/90 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-in-up opacity-0">
            <div className="flex justify-center mb-8">
              <OshuMark />
            </div>
            <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.1]">
              Introducing Oshu
            </h1>
          </div>
          <p className="animate-fade-in-up opacity-0 delay-100 text-xl text-muted mt-6 max-w-xl mx-auto leading-relaxed">
            Give every user of your SaaS an agent.
          </p>
          <div className="animate-fade-in opacity-0 delay-200 mt-10">
            <div className="w-12 mx-auto border-t border-foreground/20" />
          </div>
        </div>
      </section>

      {/* What is Oshu */}
      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto animate-fade-in-up opacity-0 delay-300">
          <h2 className="text-2xl font-semibold tracking-tight mb-6">
            What is Oshu?
          </h2>
          <p className="text-base leading-7 text-muted max-w-2xl">
            Oshu is an API that lets SaaS companies embed agentic functionality
            into their products. Think: ACME Cloud gives their enterprise customers
            an AI agent that feels native to their platform&mdash;customizable per
            customer with MCP, skills repos, and more. Under the hood it&rsquo;s a
            full Claude Code / Codex / OpenCode harness running in secure sandboxes
            with file access and persistence. Integration via SDK or hosted portal
            for zero-code deployment. Like Stripe for payments or WorkOS for
            auth&mdash;but for AI agents.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="pb-28 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight mb-14">
            Our platform & capabilities
          </h2>
          <div className="grid sm:grid-cols-2 gap-x-16 gap-y-14">
            <Feature
              title="Secure Credential Management"
              description="Securely store and inject API keys, tokens, and secrets into agent sandboxes. Per-customer credential vaults with automatic rotation, encryption at rest, and zero exposure to end users or agent code."
            />
            <Feature
              title="Network Firewalls"
              description="Fine-grained egress controls for every sandbox. Whitelist domains, restrict ports, and enforce network policies per customer. Agents can only reach the services you explicitly allow."
            />
            <Feature
              title="Skills & Customization"
              description="Ship agents with pre-built skills or let customers bring their own via skills repos. Define tool permissions, prompt templates, and behavioral guardrails per deployment."
            />
            <Feature
              title="MCP Support"
              description="Full Model Context Protocol support out of the box. Connect agents to any MCP-compatible server—databases, APIs, file systems—and let them reason across your customer's entire toolchain."
            />
            <Feature
              title="Claude Code / OpenCode / AMP / Codex"
              description="Choose your agent runtime. Oshu supports Claude Code, OpenCode, AMP, and Codex as first-class harnesses. Switch between them per customer or per use case with zero config changes."
            />
            <Feature
              title="SDK & Hosted Portal"
              description="Integrate via a lightweight SDK for full control, or use our hosted portal for zero-code deployment. Embed agent UIs directly into your product or give customers a standalone dashboard."
            />
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section id="integration" className="pb-28 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">
            Integrate in minutes
          </h2>
          <p className="text-base text-muted mb-8 max-w-xl">
            A few lines of code to give your customers a fully sandboxed AI agent.
          </p>
          <CodeBlock />
        </div>
      </section>

      {/* How it works */}
      <section className="pb-28 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight mb-14">
            How it works
          </h2>
          <div className="grid sm:grid-cols-3 gap-10">
            <Step
              number="1"
              title="Connect"
              description="Add your API key and configure agent settings—runtime, skills, MCP servers, and firewall rules."
            />
            <Step
              number="2"
              title="Deploy"
              description="Spin up sandboxed agents per customer via SDK or use our hosted portal with zero code."
            />
            <Step
              number="3"
              title="Scale"
              description="Each customer gets their own isolated agent with persistent file access, credentials, and custom tooling."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">
            Start building with Oshu today.
          </h2>
          <p className="text-base text-muted">
            We&rsquo;d love to learn more about your product. Send us a note at{" "}
            <a
              href="mailto:hello@oshu.dev"
              className="text-foreground underline underline-offset-4 hover:text-accent transition-colors"
            >
              hello@oshu.dev
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <OshuLogo />
            <span className="text-sm font-medium">oshu</span>
          </div>
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Oshu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <h3 className="text-base font-semibold mb-3">{title}</h3>
      <p className="text-sm leading-6 text-muted">{description}</p>
    </div>
  );
}

function Step({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div>
      <div className="w-8 h-8 rounded-full bg-foreground text-white text-sm font-medium flex items-center justify-center mb-4">
        {number}
      </div>
      <h3 className="text-base font-semibold mb-2">{title}</h3>
      <p className="text-sm leading-6 text-muted">{description}</p>
    </div>
  );
}

function CodeBlock() {
  const html = `<span class="comment">// Initialize the Oshu client</span>
<span class="keyword">import</span> <span class="plain">{ Oshu }</span> <span class="keyword">from</span> <span class="string">'@oshu/sdk'</span><span class="punctuation">;</span>

<span class="keyword">const</span> <span class="plain">oshu</span> <span class="punctuation">=</span> <span class="keyword">new</span> <span class="function">Oshu</span><span class="punctuation">({</span>
  <span class="plain">apiKey</span><span class="punctuation">:</span> <span class="plain">process.env.</span><span class="variable">OSHU_API_KEY</span><span class="punctuation">,</span>
<span class="punctuation">});</span>

<span class="comment">// Spin up an agent for your customer</span>
<span class="keyword">const</span> <span class="plain">agent</span> <span class="punctuation">=</span> <span class="keyword">await</span> <span class="plain">oshu.</span><span class="function">agents.create</span><span class="punctuation">({</span>
  <span class="plain">customer</span><span class="punctuation">:</span> <span class="string">'cust_acme_corp'</span><span class="punctuation">,</span>
  <span class="plain">runtime</span><span class="punctuation">:</span> <span class="string">'claude-code'</span><span class="punctuation">,</span>
  <span class="plain">skills</span><span class="punctuation">:</span> <span class="punctuation">[</span><span class="string">'code-review'</span><span class="punctuation">,</span> <span class="string">'deploy'</span><span class="punctuation">],</span>
  <span class="plain">mcp</span><span class="punctuation">:</span> <span class="punctuation">[</span><span class="string">'github'</span><span class="punctuation">,</span> <span class="string">'linear'</span><span class="punctuation">,</span> <span class="string">'postgres'</span><span class="punctuation">],</span>
  <span class="plain">firewall</span><span class="punctuation">:</span> <span class="punctuation">{</span> <span class="plain">allow</span><span class="punctuation">:</span> <span class="punctuation">[</span><span class="string">'*.acme.com'</span><span class="punctuation">,</span> <span class="string">'api.github.com'</span><span class="punctuation">]</span> <span class="punctuation">},</span>
<span class="punctuation">});</span>

<span class="comment">// Get a session URL to embed in your product</span>
<span class="keyword">const</span> <span class="plain">session</span> <span class="punctuation">=</span> <span class="keyword">await</span> <span class="plain">agent.</span><span class="function">sessions.create</span><span class="punctuation">();</span>
<span class="plain">console.</span><span class="function">log</span><span class="punctuation">(</span><span class="plain">session.</span><span class="variable">url</span><span class="punctuation">);</span>
<span class="comment">// → https://portal.oshu.dev/s/sess_abc123</span>`;

  return (
    <div className="code-block shadow-2xl shadow-black/10">
      <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-white/40 font-mono">app.ts</span>
      </div>
      <pre>
        <code dangerouslySetInnerHTML={{ __html: html }} />
      </pre>
    </div>
  );
}

function OshuMark() {
  return (
    <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Geometric overlapping diamonds/rhombuses - like nodes in a network */}
      <rect x="35" y="8" width="30" height="30" rx="4" fill="#e85d26" opacity="0.85" transform="rotate(45 50 23)" />
      <rect x="10" y="33" width="30" height="30" rx="4" fill="#f59e0b" opacity="0.65" transform="rotate(45 25 48)" />
      <rect x="60" y="33" width="30" height="30" rx="4" fill="#3b82f6" opacity="0.65" transform="rotate(45 75 48)" />
      <rect x="22" y="52" width="30" height="30" rx="4" fill="#10b981" opacity="0.65" transform="rotate(45 37 67)" />
      <rect x="48" y="52" width="30" height="30" rx="4" fill="#8b5cf6" opacity="0.65" transform="rotate(45 63 67)" />
      <circle cx="50" cy="46" r="11" fill="white" opacity="0.95" />
    </svg>
  );
}

function OshuLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="35" y="8" width="30" height="30" rx="4" fill="#e85d26" opacity="0.85" transform="rotate(45 50 23)" />
      <rect x="10" y="33" width="30" height="30" rx="4" fill="#f59e0b" opacity="0.65" transform="rotate(45 25 48)" />
      <rect x="60" y="33" width="30" height="30" rx="4" fill="#3b82f6" opacity="0.65" transform="rotate(45 75 48)" />
      <rect x="22" y="52" width="30" height="30" rx="4" fill="#10b981" opacity="0.65" transform="rotate(45 37 67)" />
      <rect x="48" y="52" width="30" height="30" rx="4" fill="#8b5cf6" opacity="0.65" transform="rotate(45 63 67)" />
      <circle cx="50" cy="46" r="11" fill="white" opacity="0.95" />
    </svg>
  );
}
