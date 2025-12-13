import React, { useState } from "react";

const NewPlayground = () => {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("https://api.snap-test.dev/v1/users");
  const [requestBody, setRequestBody] = useState(`{
  "limit": 10,
  "sort": "desc",
  "filter": {
    "role": "admin"
  }
}`);
  const [activeRequestTab, setActiveRequestTab] = useState("body");
  const [activeResponseTab, setActiveResponseTab] = useState("response");
  const [responseFormat, setResponseFormat] = useState("json");

  const mockResponse = `"data": [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
]`;

  const handleSend = () => {
    console.log("Sending request:", { method, url, body: requestBody });
  };

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(requestBody);
      setRequestBody(JSON.stringify(parsed, null, 2));
    } catch (e) {
      console.error("Invalid JSON");
    }
  };

  const clearBody = () => {
    setRequestBody("");
  };

  const copyResponse = () => {
    navigator.clipboard.writeText(mockResponse);
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-slate-950 text-slate-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .token-key { color: #c084fc; }
        .token-string { color: #4ade80; }
        .token-number { color: #60a5fa; }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #1e293b 1px, transparent 1px),
                            linear-gradient(to bottom, #1e293b 1px, transparent 1px);
          background-size: 40px 40px;
          mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
        }
      `}</style>

      {/* Header */}
      <header className="flex-none h-16 border-b border-white/5 bg-slate-950/80 backdrop-blur-md px-4 lg:px-6 flex items-center justify-between z-50">
        <div className="flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 text-slate-950 shadow-lg">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h1 className="text-lg font-bold tracking-tight">
            Snap-Test{" "}
            <span className="text-slate-400 font-normal text-sm ml-2 hidden sm:inline-block">
              / API Playground
            </span>
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 bg-slate-800/50 rounded-lg p-1">
            <button className="px-3 py-1 rounded text-xs font-medium bg-slate-950 text-cyan-400 shadow-sm">
              Light
            </button>
            <button className="px-3 py-1 rounded text-xs font-medium text-slate-400 hover:text-slate-50">
              Dark
            </button>
          </div>
          <a
            className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1 text-sm font-medium"
            href="#"
          >
            ← Back to Home
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col md:flex-row h-[calc(100vh-64px)] overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0"></div>

        {/* Request Section */}
        <section className="w-full md:w-1/2 flex flex-col border-r border-white/5 bg-slate-950/50 backdrop-blur-sm z-10 relative">
          {/* Request Input */}
          <div className="p-4 border-b border-white/5 space-y-4">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative min-w-[100px]">
                <select
                  value={method}
                  onChange={(e) => setMethod(e.target.value)}
                  className="w-full appearance-none rounded-lg bg-slate-800 border border-white/10 px-3 py-2.5 font-mono text-sm font-bold text-cyan-400 focus:border-cyan-400 focus:ring-0 cursor-pointer"
                >
                  <option value="GET">GET</option>
                  <option value="POST">POST</option>
                  <option value="PUT">PUT</option>
                  <option value="PATCH">PATCH</option>
                  <option value="DELETE">DELETE</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-grow rounded-lg bg-slate-900 border border-white/10 px-4 py-2.5 font-mono text-sm text-slate-50 placeholder-slate-400/50 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                placeholder="Enter request URL here..."
              />
              <button
                onClick={handleSend}
                className="flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-6 py-2.5 text-sm font-bold text-slate-950 shadow-lg hover:bg-cyan-500 active:scale-95 transition-all"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
                <span className="hidden sm:inline">Send</span>
              </button>
            </div>
          </div>

          {/* Request Tabs */}
          <div className="flex items-center gap-6 px-4 border-b border-white/5 text-sm font-medium overflow-x-auto no-scrollbar">
            {["body", "headers", "params", "auth"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveRequestTab(tab)}
                className={`border-b-2 py-3 transition-colors ${
                  activeRequestTab === tab
                    ? "border-cyan-400 text-cyan-400"
                    : "border-transparent text-slate-400 hover:text-slate-50"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {tab === "headers" && (
                  <span className="ml-1 text-[10px] bg-slate-800 px-1.5 rounded-full text-slate-400">
                    0
                  </span>
                )}
                {tab === "params" && (
                  <span className="ml-1 text-[10px] bg-slate-800 px-1.5 rounded-full text-slate-400">
                    1
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Request Body Editor */}
          <div className="flex-grow flex flex-col relative bg-[#0b1120]">
            <div className="absolute top-2 right-4 flex gap-2 z-20">
              <button
                onClick={formatJSON}
                className="text-xs text-slate-400 hover:text-cyan-400 flex items-center gap-1 bg-slate-800/30 px-2 py-1 rounded hover:bg-slate-800/50 transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
                Format
              </button>
              <button
                onClick={clearBody}
                className="text-xs text-slate-400 hover:text-red-400 flex items-center gap-1 bg-slate-800/30 px-2 py-1 rounded hover:bg-slate-800/50 transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                Clear
              </button>
            </div>
            <textarea
              value={requestBody}
              onChange={(e) => setRequestBody(e.target.value)}
              className="w-full h-full bg-transparent resize-none border-none outline-none focus:ring-0 p-4 text-slate-50 font-mono text-sm leading-relaxed"
              spellCheck="false"
            />
          </div>
        </section>

        {/* Response Section */}
        <section className="w-full md:w-1/2 flex flex-col bg-slate-900 z-10 relative">
          {/* Response Header */}
          <div className="h-[69px] border-b border-white/5 flex items-center justify-between px-4 bg-slate-900/95 backdrop-blur">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                  Status:
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 border border-green-500/20 px-2.5 py-0.5 text-xs font-bold text-green-400">
                  <span className="size-1.5 rounded-full bg-green-500"></span>{" "}
                  200 OK
                </span>
              </div>
              <div className="h-4 w-px bg-white/10"></div>
              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span>
                  <span className="font-bold text-slate-50">145</span> ms
                </span>
                <span>
                  <span className="font-bold text-slate-50">1.42</span> KB
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={copyResponse}
                className="text-xs text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1 px-2 py-1 rounded hover:bg-white/5"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <span className="hidden sm:inline">Copy</span>
              </button>
              <div className="flex bg-slate-800/50 p-0.5 rounded-lg border border-white/5">
                <button
                  onClick={() => setResponseFormat("json")}
                  className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                    responseFormat === "json"
                      ? "bg-slate-950 text-cyan-400 shadow-sm"
                      : "text-slate-400 hover:text-slate-50"
                  }`}
                >
                  JSON
                </button>
                <button
                  onClick={() => setResponseFormat("raw")}
                  className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                    responseFormat === "raw"
                      ? "bg-slate-950 text-cyan-400 shadow-sm"
                      : "text-slate-400 hover:text-slate-50"
                  }`}
                >
                  RAW
                </button>
              </div>
            </div>
          </div>

          {/* Response Tabs */}
          <div className="flex items-center gap-6 px-4 border-b border-white/5 text-sm font-medium bg-slate-900">
            {["response", "headers"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveResponseTab(tab)}
                className={`border-b-2 py-3 transition-colors ${
                  activeResponseTab === tab
                    ? "border-cyan-400 text-cyan-400"
                    : "border-transparent text-slate-400 hover:text-slate-50"
                }`}
              >
                {tab === "response" ? "Response Body" : "Headers"}
              </button>
            ))}
          </div>

          {/* Response Body */}
          <div className="flex-grow bg-slate-900 p-4 font-mono text-sm overflow-auto">
            <pre className="leading-relaxed">
              <code className="text-slate-400">
                <span className="token-key">"data"</span>: [{"\n  "}&#123;
                {"\n    "}
                <span className="token-key">"id"</span>:{" "}
                <span className="token-number">1</span>,{"\n    "}
                <span className="token-key">"name"</span>:{" "}
                <span className="token-string">"Leanne Graham"</span>,{"\n    "}
                <span className="token-key">"username"</span>:{" "}
                <span className="token-string">"Bret"</span>,{"\n    "}
                <span className="token-key">"email"</span>:{" "}
                <span className="token-string">"Sincere@april.biz"</span>,
                {"\n    "}
                <span className="token-key">"address"</span>: &#123;
                {"\n      "}
                <span className="token-key">"street"</span>:{" "}
                <span className="token-string">"Kulas Light"</span>,{"\n      "}
                <span className="token-key">"suite"</span>:{" "}
                <span className="token-string">"Apt. 556"</span>,{"\n      "}
                <span className="token-key">"city"</span>:{" "}
                <span className="token-string">"Gwenborough"</span>,{"\n      "}
                <span className="token-key">"zipcode"</span>:{" "}
                <span className="token-string">"92998-3874"</span>
                {"\n    "}&#125;,
                {"\n    "}
                <span className="token-key">"phone"</span>:{" "}
                <span className="token-string">"1-770-736-8031 x56442"</span>,
                {"\n    "}
                <span className="token-key">"company"</span>: &#123;
                {"\n      "}
                <span className="token-key">"name"</span>:{" "}
                <span className="token-string">"Romaguera-Crona"</span>
                {"\n    "}&#125;
                {"\n  "}&#125;
                {"\n"}]
              </code>
            </pre>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 h-8 bg-slate-950 border-t border-white/5 flex items-center justify-between px-4 z-50 text-[11px] text-slate-400">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 hover:text-cyan-400 cursor-pointer transition-colors">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
              />
            </svg>
            Connected
          </span>
          <span className="flex items-center gap-1.5 hover:text-cyan-400 cursor-pointer transition-colors">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            History
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">
            Press{" "}
            <kbd className="bg-slate-800 px-1 py-0.5 rounded border border-white/10 text-slate-50 font-mono">
              Ctrl
            </kbd>{" "}
            +{" "}
            <kbd className="bg-slate-800 px-1 py-0.5 rounded border border-white/10 text-slate-50 font-mono">
              Enter
            </kbd>{" "}
            to send
          </span>
          <a className="hover:text-slate-50 transition-colors" href="#">
            Report Issue
          </a>
        </div>
      </footer>
    </div>
  );
};

export default NewPlayground;
