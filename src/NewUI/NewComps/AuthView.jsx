export default function AuthView() {
  const authrized_resp = `Hi, I’m the Admin — how can I help you today?`;

  const tokenReq = `{
    "username":"Michael",
    "password":"Thompson"
}
`;
  const token = `{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6Ik1pY2hhZWwiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTc2NTUwOTg1NywiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MjUxIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo1MjUxIn0.N5lB5C85POWsuJYbCnUMb8rRVMjdPHGx0s0DxFX1pfw",
    "loginTime": "2025-12-12 03:09:18"
}`;
  const jsonAPIs = [
    {
      id: "getToken",
      method: "POST",
      title: "Get Token",
      url: "https://snap-test.in/api/user/Login",
      request: tokenReq,
      response: token,
      description: "Get Auth Token",
    },
    {
      id: "authrize-api",
      method: "GET",
      title: "Authorize User",
      url: "https://snap-test.in/api/admin/authorize",
      description: "Authorize the user",
      response: authrized_resp,
    },
  ];

  const getMethodColor = (method) => {
    const colors = {
      GET: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
      POST: "text-blue-500 bg-blue-500/10 border-blue-500/20",
      PUT: "text-purple-500 bg-purple-500/10 border-purple-500/20",
      DELETE: "text-red-500 bg-red-500/10 border-red-500/20",
      PATCH: "text-yellow-500 bg-yellow-500/10 border-yellow-500/20",
    };
    return colors[method] || colors.GET;
  };
  return (
    <div className="flex-1 overflow-y-auto p-6 z-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 text-slate-950">
              <span className="material-symbols-outlined text-[24px]">
                lock
              </span>
            </div>
            <h1 className="text-3xl font-bold text-white">Authorization</h1>
          </div>
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
            <p className="text-sm text-red-200">
              <span className="font-bold">Note :</span> "We're still building a
              few features. The site is under development — sorry for the
              inconvenience and thanks for sticking with us!"
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {jsonAPIs.map((api, index) => (
            <div
              key={api.id}
              className="bg-slate-900 border border-white/10 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="border-b border-white/5 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-white mb-2">
                      {index + 1}.{" "}
                      {api.title.charAt(0).toUpperCase() + api.title.slice(1)}
                    </h2>
                    <p className="text-sm text-slate-400 mb-4">
                      {api.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-slate-950 border border-white/10 rounded-lg p-3">
                  <span
                    className={`px-3 py-1 rounded text-xs font-bold ${getMethodColor(api.method)}`}
                  >
                    {api.method}
                  </span>
                  <code className="flex-1 text-sm text-slate-300 font-mono">
                    {api.url}
                  </code>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(api.url);
                    }}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                    title="Copy URL"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      content_copy
                    </span>
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Request Samples
                </h3>

                {/* <div className="space-y-2">
                  <button className="w-full flex items-center justify-between px-4 py-3 bg-slate-800/50 hover:bg-slate-800 border border-white/5 rounded-lg text-sm font-medium text-slate-50 transition-colors text-left group">
                    <span>JavaScript (Browser)</span>
                    <span className="material-symbols-outlined text-slate-400 text-[20px] group-hover:rotate-180 transition-transform">
                      expand_more
                    </span>
                  </button>
                </div> */}
                {/* Show request body section only for POST and PUT methods */}
                {(api.method === "POST" || api.method === "PUT") && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-slate-300">
                      Request :
                    </h4>
                    <div className="flex items-start gap-3 bg-slate-950 border border-white/10 rounded-lg p-3">
                      <pre className="flex-1 text-sm text-slate-300 font-mono overflow-x-auto">
                        {api.request}
                      </pre>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(api.request);
                        }}
                        className="text-slate-400 hover:text-cyan-400 transition-colors"
                        title="Copy Request Body"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          content_copy
                        </span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Response section - always visible */}
                {api.response && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-slate-300">
                      Response :
                    </h4>
                    <div className="flex items-start gap-3 bg-slate-950 border border-white/10 rounded-lg p-3">
                      <pre className="flex-1 text-sm text-slate-300 font-mono overflow-x-auto whitespace-pre-wrap break-words max-h-96 overflow-y-auto">
                        {api.response}
                      </pre>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(api.response);
                        }}
                        className="text-slate-400 hover:text-cyan-400 transition-colors"
                        title="Copy Json Response"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          content_copy
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
