import React, { useState } from "react";
import {
  Terminal,
  Code,
  Database,
  Zap,
  Lock,
  Sparkles,
  Smartphone,
  CheckCircle,
  Play,
  Folder,
  History,
  Settings,
  CloudUpload,
  Network,
  Server,
  Brain,
  Beaker,
  Check,
  Star,
  Mail,
  Monitor,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SnapTestLanding() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 overflow-x-hidden">
      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none z-0 h-[800px]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
        }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-white/5 bg-slate-950/80 backdrop-blur-md px-6 py-4 lg:px-12">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-slate-950 shadow-[0_0_25px_-5px_rgba(34,211,238,0.4)]">
            <Terminal size={24} />
          </div>
          <h2 className="text-xl font-bold tracking-tight">Snap-Test.in</h2>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors"
            href="#docs"
          >
            Docs
          </a>
          <a
            className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors"
            href="#tools"
          >
            Tools
          </a>
          <a
            className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors"
            href="#playground"
          >
            Playground
          </a>
          <a
            className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors"
            href="#github"
          >
            GitHub
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            className="hidden rounded-full border border-white/10 bg-transparent px-5 py-2 text-sm font-bold transition hover:bg-white/5 md:block"
            onClick={() => navigate("/dashboard")}
          >
            Log In
          </button>
          <button className="flex items-center justify-center rounded-full bg-cyan-400 px-5 py-2 text-sm font-bold text-slate-950 shadow-[0_0_25px_-5px_rgba(34,211,238,0.4)] transition hover:scale-105 active:scale-95">
            <Play size={18} className="mr-2" />
            Start Testing
          </button>
        </div>
      </header>

      <main className="pt-20 relative z-10">
        {/* Hero Section */}
        <section className="relative px-6 py-16 lg:px-20 lg:py-24 xl:px-32">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
              {/* Left Content */}
              <div className="flex flex-1 flex-col gap-8 lg:max-w-[600px]">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 pr-4 backdrop-blur-sm">
                  <span className="flex size-2 rounded-full bg-cyan-400 shadow-[0_0_10px_2px_rgba(34,211,238,0.5)] animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-wide text-cyan-400">
                    v1.0 is live
                  </span>
                </div>

                <h1 className="text-5xl font-black leading-[1.1] tracking-tight sm:text-6xl xl:text-6xl">
                  Test, Build &{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    Mock APIs
                  </span>{" "}
                  Instantly.
                </h1>

                <p className="text-lg font-normal leading-relaxed text-slate-400 sm:text-xl">
                  Snap-Test lets you format JSON/XML, explore GraphQL, test file
                  uploads, and generate dummy APIs using AI — all in a single
                  workspace.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button className="flex h-14 min-w-[160px] items-center justify-center rounded-full bg-cyan-400 px-8 text-base font-bold text-slate-950 shadow-[0_0_25px_-5px_rgba(34,211,238,0.4)] transition hover:-translate-y-1 hover:bg-cyan-500">
                    Start Testing Free
                  </button>
                  <button className="flex h-14 min-w-[160px] items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-base font-bold transition hover:border-cyan-400/50 hover:bg-white/10">
                    <Code className="mr-2" size={20} />
                    Open Playground
                  </button>
                </div>

                <div className="flex items-center gap-4 text-sm font-medium text-slate-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle size={18} className="text-cyan-400" />
                    No login required
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle size={18} className="text-cyan-400" />
                    Open source
                  </span>
                </div>
              </div>

              {/* Right Content - Code Preview */}
              <div className="relative flex flex-1 items-center justify-center lg:justify-end">
                <div className="absolute -right-20 -top-20 size-[500px] rounded-full bg-cyan-400/20 blur-[100px] opacity-30" />
                <div className="absolute -left-10 bottom-0 size-[300px] rounded-full bg-blue-600/20 blur-[80px] opacity-30" />

                <div className="relative w-full max-w-[600px] overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl backdrop-blur-xl">
                  {/* Browser Header */}
                  <div className="flex items-center gap-2 border-b border-white/5 bg-slate-950/50 px-4 py-3">
                    <div className="flex gap-1.5">
                      <div className="size-3 rounded-full bg-red-500/80" />
                      <div className="size-3 rounded-full bg-yellow-500/80" />
                      <div className="size-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="mx-auto flex w-2/3 items-center justify-center rounded-md bg-slate-800 py-1 px-3 text-xs font-mono text-slate-400 border border-white/5">
                      api.snap-test.dev/v1/users
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="flex h-[360px]">
                    {/* Sidebar */}
                    <div className="hidden w-16 flex-col items-center gap-6 border-r border-white/5 bg-[#0b1120] py-6 md:flex">
                      <Database className="text-cyan-400" size={20} />
                      <Folder
                        className="text-slate-400/40 hover:text-slate-400 transition-colors"
                        size={20}
                      />
                      <History
                        className="text-slate-400/40 hover:text-slate-400 transition-colors"
                        size={20}
                      />
                      <Settings
                        className="mt-auto text-slate-400/40 hover:text-slate-400 transition-colors"
                        size={20}
                      />
                    </div>

                    {/* Code Display */}
                    <div className="flex-1 bg-slate-900 p-6 font-mono text-sm">
                      <div className="mb-4 flex gap-4 border-b border-white/5 pb-2">
                        <span className="font-bold text-cyan-400">GET</span>
                        <span>/users?limit=5</span>
                        <span className="ml-auto rounded bg-cyan-400/10 px-2 py-0.5 text-xs font-bold text-cyan-400">
                          200 OK
                        </span>
                      </div>

                      <div className="space-y-2 text-slate-400 text-xs">
                        <div className="pl-2 border-l-2 border-white/10">
                          <span className="text-purple-400">"data"</span>: [
                          <br />
                          &nbsp;&nbsp;{"{"}
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <span className="text-purple-400">"id"</span>:{" "}
                          <span className="text-blue-400">1</span>,<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <span className="text-purple-400">"name"</span>:{" "}
                          <span className="text-green-400">"Snap User"</span>,
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <span className="text-purple-400">"role"</span>:{" "}
                          <span className="text-green-400">"Developer"</span>
                          <br />
                          &nbsp;&nbsp;{"}"},<br />
                          &nbsp;&nbsp;
                          <span className="text-gray-600">
                            // ... more items
                          </span>
                          <br />]
                        </div>
                      </div>

                      <div className="mt-6">
                        <button className="w-full rounded bg-white/5 py-2 text-center text-xs text-slate-400 hover:bg-white/10 hover:text-white transition-all border border-white/5">
                          Generate New Mock Data
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Bar */}
        <section className="border-y border-white/5 bg-slate-900/50 px-6 py-12 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-12 gap-y-8 lg:justify-between">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                desc: "Zero setup latency",
              },
              {
                icon: Lock,
                title: "No Login Required",
                desc: "Start immediately",
              },
              {
                icon: Sparkles,
                title: "AI Powered",
                desc: "Smart mocks generation",
              },
              {
                icon: Monitor,
                title: "Cross Platform",
                desc: "Web, Mobile, Desktop",
              },
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400 shadow-sm shadow-cyan-400/20">
                  <feature.icon size={20} />
                </div>
                <div>
                  <p className="font-bold">{feature.title}</p>
                  <p className="text-sm text-slate-400">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools Grid */}
        <section className="px-6 py-20 lg:px-20 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Everything you need in one place
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
                From simple formatting to complex AI generation, Snap-Test has
                you covered with powerful, developer-friendly tools.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Database,
                  title: "JSON Formatter",
                  desc: "Validate, prettify, and minify JSON instantly with error highlighting.",
                },
                {
                  icon: Code,
                  title: "XML Formatter",
                  desc: "Clean up XML structures and convert them to JSON with one click.",
                },
                {
                  icon: Code,
                  title: "Text Utilities",
                  desc: "Diff checker, string escaping, base64 encoding/decoding tools.",
                },
                {
                  icon: CloudUpload,
                  title: "File Upload Tester",
                  desc: "Test multi-part file uploads easily without complex setups.",
                },
                {
                  icon: Network,
                  title: "GraphQL Explorer",
                  desc: "Query, visualize schemas, and debug GraphQL endpoints effortlessly.",
                },
                {
                  icon: Server,
                  title: "Dummy APIs",
                  desc: "Instant access to common mock data resources for quick prototyping.",
                },
              ].map((tool, i) => (
                <div
                  key={i}
                  className="group relative flex flex-col gap-4 rounded-xl border border-white/5 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 shadow-lg transition hover:shadow-[0px_4px_20px_0px_rgba(0,0,0,0.3)] hover:border-cyan-400/30"
                >
                  <div className="flex size-12 items-center justify-center rounded-full bg-slate-800 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-colors">
                    <tool.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{tool.title}</h3>
                    <p className="mt-2 text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                      {tool.desc}
                    </p>
                  </div>
                </div>
              ))}

              {/* AI Builder - Featured */}
              <div className="group relative col-span-1 sm:col-span-2 lg:col-span-1 flex flex-col gap-4 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-6 shadow-lg shadow-cyan-400/5 transition hover:border-cyan-400/50 hover:bg-cyan-400/10">
                <div className="absolute -right-2 -top-2 rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-slate-950 shadow-[0_0_25px_-5px_rgba(34,211,238,0.4)]">
                  NEW
                </div>
                <div className="flex size-12 items-center justify-center rounded-full bg-slate-800 text-cyan-400 shadow-inner">
                  <Brain size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">AI API Builder</h3>
                  <p className="mt-2 text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                    Describe your data needs in plain English, get a working
                    endpoint instantly.
                  </p>
                </div>
              </div>

              {/* Playground */}
              <div className="group relative col-span-1 sm:col-span-2 lg:col-span-1 flex flex-col gap-4 rounded-xl border border-white/10 bg-slate-800/30 p-6 shadow-lg transition hover:bg-slate-800/50">
                <div className="flex size-12 items-center justify-center rounded-full bg-white text-slate-950">
                  <Beaker size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">API Playground</h3>
                  <p className="mt-2 text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                    Full-featured REST & GQL client for pro-level debugging and
                    testing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Feature Section */}
        <section className="bg-[#0b1120] border-y border-white/5 px-6 py-20 lg:px-20 lg:py-24 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

          <div className="mx-auto max-w-7xl relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="flex flex-col gap-6">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-400 backdrop-blur-md">
                  <Star className="text-sm" size={16} /> AI Feature
                </div>
                <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
                  Describe your API. <br />
                  <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                    Get a live endpoint.
                  </span>
                </h2>
                <p className="text-lg text-slate-400">
                  Stop writing boilerplate JSON manually. Just tell the AI what
                  you need, and Snap-Test will generate a persistent dummy
                  endpoint for your frontend development.
                </p>

                <ul className="space-y-4">
                  {[
                    "Context-aware data generation",
                    "Instant URL to use in your app",
                    "Customizable schemas",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="flex size-6 items-center justify-center rounded-full bg-cyan-400 text-slate-950">
                        <Check size={14} />
                      </span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative rounded-2xl border border-white/10 bg-black/40 p-1 shadow-2xl backdrop-blur-sm">
                <div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20 blur-xl" />

                <div className="flex flex-col gap-4 rounded-xl bg-slate-900 p-6 font-mono text-sm border border-white/5">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Prompt
                    </span>
                    <div className="flex items-center gap-2 rounded-lg bg-slate-950 p-3 ring-1 ring-white/10 focus-within:ring-cyan-400 shadow-inner">
                      <Brain className="text-cyan-400" size={20} />
                      <input
                        className="bg-transparent w-full outline-none border-none text-white placeholder-slate-400/50 p-0"
                        readOnly
                        type="text"
                        value="Create a list of 3 users with names, emails and roles"
                      />
                      <button className="rounded bg-cyan-400 px-3 py-1 text-xs font-bold text-slate-950 hover:bg-white transition-colors shadow-[0_0_25px_-5px_rgba(34,211,238,0.4)]">
                        Generate
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 pt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Response Preview
                      </span>
                      <span className="text-[10px] text-green-400">
                        Status: 200 OK
                      </span>
                    </div>
                    <div className="rounded-lg bg-slate-950 p-4 text-slate-400 shadow-inner overflow-hidden border border-white/5">
                      <pre className="overflow-x-auto text-xs">
                        {`[
  {
    "id": 1,
    "name": "Alex Chen",
    "email": "alex@example.com",
    "role": "Admin"
  },
  {
    "id": 2,
    "name": "Sarah Jones",
    "email": "sarah@example.com",
    "role": "Editor"
  },
  ...
]`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testing Environment Section */}
        <section className="px-6 py-20 lg:px-20 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Your new favorite testing environment
              </h2>
              <p className="mt-4 max-w-xl text-slate-400">
                A clean, distraction-free interface designed for modern
                development workflows.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/5 bg-slate-950/50 px-4 py-2">
                <div className="flex gap-2">
                  <div className="flex items-center gap-2 rounded-lg bg-slate-800 px-3 py-1.5 shadow-sm border border-white/5">
                    <span className="text-xs font-bold text-cyan-400">GET</span>
                    <span className="text-xs font-mono">
                      https://api.snap-test.dev/posts
                    </span>
                  </div>
                  <button className="flex items-center justify-center rounded-lg bg-cyan-400 px-4 py-1.5 text-xs font-bold text-slate-950 hover:bg-cyan-400/80 transition-colors">
                    Send
                  </button>
                </div>
                <div className="flex gap-4 text-xs font-medium text-slate-400">
                  <span className="hover:text-white cursor-pointer">
                    Params
                  </span>
                  <span className="hover:text-white cursor-pointer">
                    Headers
                  </span>
                  <span className="hover:text-white cursor-pointer">Body</span>
                  <span className="text-cyan-400 font-bold border-b border-cyan-400 cursor-pointer">
                    Scripts
                  </span>
                </div>
              </div>

              <div className="grid h-[500px] grid-cols-1 md:grid-cols-2">
                <div className="border-r border-white/5 bg-slate-900 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <h4 className="text-xs font-bold uppercase text-slate-400/50">
                      Request Body
                    </h4>
                    <span className="text-[10px] text-slate-400/40">JSON</span>
                  </div>
                  <div className="h-full font-mono text-sm">
                    <pre>{`{
  "title": "My New Post",
  "content": "This is a test post content.",
  "author_id": 12,
  "tags": ["testing", "api"]
}`}</pre>
                  </div>
                </div>

                <div className="bg-slate-950 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <h4 className="text-xs font-bold uppercase text-slate-400/50">
                      Response
                    </h4>
                    <div className="flex gap-3 text-[10px]">
                      <span className="font-bold text-green-400">
                        201 Created
                      </span>
                      <span className="text-slate-400/40">145ms</span>
                      <span className="text-slate-400/40">1.2KB</span>
                    </div>
                  </div>
                  <div className="h-full font-mono text-sm text-slate-50/80">
                    <pre>{`{
  "success": true,
  "data": {
    "id": 8492,
    "title": "My New Post",
    "created_at": "2023-10-27T10:00:00Z"
  }
}`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="relative overflow-hidden bg-cyan-400 px-6 py-20 text-center lg:px-20 lg:py-28">
          <div className="absolute -left-20 top-0 size-64 rounded-full bg-white mix-blend-overlay blur-3xl opacity-30" />
          <div className="absolute -right-20 bottom-0 size-64 rounded-full bg-blue-500 mix-blend-overlay blur-3xl opacity-40" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Ready to speed up your workflow?
            </h2>
            <p className="mt-6 text-xl font-medium text-slate-950/80">
              Join thousands of developers using Snap-Test for rapid API
              prototyping.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="flex h-14 min-w-[200px] items-center justify-center rounded-full bg-slate-950 px-8 text-base font-bold text-white shadow-xl transition hover:scale-105 hover:bg-black">
                Start Testing Now
              </button>
              <button className="flex h-14 min-w-[200px] items-center justify-center rounded-full border-2 border-slate-950/30 bg-transparent px-8 text-base font-bold text-slate-950 transition hover:bg-white/20 hover:border-slate-950">
                View Documentation
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-slate-950 px-6 py-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-lg bg-cyan-400 text-slate-950">
                  <Terminal size={20} />
                </div>
                <h2 className="text-lg font-bold">Snap-Test</h2>
              </div>
              <p className="max-w-xs text-sm text-slate-400">
                Built for speed, simplicity, and power. The all-in-one workspace
                for API development.
              </p>
              <div className="flex gap-4">
                <a
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                  href="#"
                >
                  <Code size={20} />
                </a>
                <a
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                  href="#"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div className="flex gap-16">
              <div className="flex flex-col gap-3">
                <h4 className="text-sm font-bold uppercase tracking-wider">
                  Platform
                </h4>
                <a
                  className="text-sm text-slate-400 hover:text-cyan-400 hover:underline"
                  href="#"
                >
                  Tools
                </a>
                <a
                  className="text-sm text-slate-400 hover:text-cyan-400 hover:underline"
                  href="#"
                >
                  Playground
                </a>
                <a
                  className="text-sm text-slate-400 hover:text-cyan-400 hover:underline"
                  href="#"
                >
                  AI Builder
                </a>
                <a
                  className="text-sm text-slate-400 hover:text-cyan-400 hover:underline"
                  href="#"
                >
                  Docs
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-sm font-bold uppercase tracking-wider">
                  Company
                </h4>
                <a
                  className="text-sm text-slate-400 hover:text-cyan-400 hover:underline"
                  href="#"
                >
                  About
                </a>
                <a
                  className="text-sm text-slate-400 hover:text-cyan-400 hover:underline"
                  href="#"
                >
                  Privacy
                </a>
                <a
                  className="text-sm text-slate-400 hover:text-cyan-400 hover:underline"
                  href="#"
                >
                  Terms
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between border-t border-white/5 pt-8 sm:flex-row">
            <p className="text-sm text-slate-400/60">
              © 2025 Snap-Test. All rights reserved.
            </p>
            <div className="mt-4 flex items-center gap-2 sm:mt-0">
              <div className="size-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
              <span className="text-xs font-medium text-slate-400">
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
