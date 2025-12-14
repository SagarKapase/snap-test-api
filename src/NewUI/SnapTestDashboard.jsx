import React, { useState } from "react";
import JsonView from "./NewComps/JsonView";
import AuthView from "./NewComps/AuthView";

const SnapTestDashboard = () => {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState(
    "https://api.snap-test.dev/v1/users/getAllUsers"
  );
  const [activeTab, setActiveTab] = useState("Params");
  const [params, setParams] = useState([
    { checked: true, key: "limit", value: "20" },
    { checked: true, key: "sort", value: "desc" },
    { checked: false, key: "", value: "" },
  ]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedCode, setExpandedCode] = useState(null);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [currentView, setCurrentView] = useState("json-tools");

  const sampleResponse = [
    {
      userId: 101,
      name: "Michael Thompson",
      email: "michael.thompson@company.com",
      job: "Senior Software Engineer",
      city: "New York",
      isActive: true,
      skills: ["React", "Node.js", "GraphQL"],
    },
    {
      userId: 102,
      name: "Emma Johnson",
      email: "emma.johnson@company.com",
      job: "Product Manager",
      city: "San Francisco",
      isActive: true,
      skills: ["Agile", "Roadmapping"],
    },
    {
      userId: 103,
      name: "David Chen",
      email: "david.chen@company.com",
      job: "UX Designer",
      city: "Austin",
      isActive: false,
      skills: ["Figma", "Prototyping"],
    },
  ];

  const updateParam = (index, field, value) => {
    const newParams = [...params];
    newParams[index][field] = value;
    setParams(newParams);
  };

  const deleteParam = (index) => {
    setParams(params.filter((_, i) => i !== index));
  };

  const addParam = () => {
    setParams([...params, { checked: false, key: "", value: "" }]);
  };

  const formatJSON = (obj) => {
    return JSON.stringify(obj, null, 2);
  };

  const toggleMenu = (menuName) => {
    setExpandedMenu(expandedMenu === menuName ? null : menuName);
  };

  const selectAPI = (api, view) => {
    setCurrentView(view);
    setMethod(api.method);
    setUrl(api.url);
    setExpandedMenu(null);
  };

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

  const NavItem = ({ icon, label, active, chevron, onClick }) => (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg transition-colors group ${
        active
          ? "text-cyan-400 bg-cyan-400/10 border-r-2 border-cyan-400"
          : "text-slate-400 hover:bg-white/5 hover:text-slate-50"
      }`}
    >
      <span className="material-symbols-outlined text-[20px] group-hover:text-cyan-400 transition-colors">
        {icon}
      </span>
      {label}
      {chevron && (
        <span
          className={`ml-auto material-symbols-outlined text-[16px] transition-transform ${
            expandedMenu === label ? "rotate-90" : ""
          }`}
        >
          chevron_right
        </span>
      )}
    </button>
  );

  const JSONToolsView = () => <JsonView />;
  const jsonAPIs = [
    {
      id: "get-users",
      method: "GET",
      title: "Get all users",
      url: "https://snap-test.in/api/user/getAllUsers",
      description: "Retrieve all users from the database",
    },
    {
      id: "add-user",
      method: "POST",
      title: "Add a new user",
      url: "https://snap-test.in/api/user/addUser/",
      description: "Create a new user in the system",
    },
    {
      id: "get-single-user",
      method: "GET",
      title: "Get Single User",
      url: "https://snap-test.in/api/user/user/101",
      description: "Get details of a specific user by ID",
    },
    {
      id: "update-user",
      method: "PUT",
      title: "Update a user",
      url: "https://snap-test.in/api/user/update/101",
      description: "Update user information",
    },
    {
      id: "delete-user",
      method: "DELETE",
      title: "Delete a user",
      url: "https://snap-test.in/api/user/delete/101",
      description: "Remove a user from the system",
    },
  ];

  const authApis = [
    {
      id: "get-token",
      method: "POST",
      title: "Get Token",
    },
    {
      id: "authorize-user",
      method: "GET",
      title: "Authorize User",
    },
  ];
  return (
    <div className="bg-slate-950 text-slate-50 h-screen overflow-hidden flex flex-col font-sans">
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />

      <header className="flex h-16 shrink-0 items-center justify-between border-b border-white/5 bg-slate-950 px-6 z-20">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-slate-400 hover:text-white lg:hidden"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
          <div className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 text-slate-950 shadow-[0_0_25px_-5px_rgba(34,211,238,0.2)]">
              <span className="material-symbols-outlined text-[20px]">
                terminal
              </span>
            </div>
            <h2 className="text-lg font-bold tracking-tight text-slate-50 hidden sm:block">
              Snap-Test{" "}
              <span className="text-xs font-normal text-slate-400 ml-2 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                v2.1.0
              </span>
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-slate-800/50 border border-white/5 rounded-full px-3 py-1.5 w-64">
            <span className="material-symbols-outlined text-slate-400 text-[18px]">
              search
            </span>
            <input
              className="bg-transparent border-none text-sm text-slate-50 placeholder-slate-400/50 focus:ring-0 w-full ml-2 h-6 p-0 outline-none"
              placeholder="Search projects or APIs..."
              type="text"
            />
            <div className="text-[10px] text-slate-400 border border-white/10 px-1.5 rounded bg-black/20">
              ⌘K
            </div>
          </div>

          <div className="h-6 w-px bg-white/10 mx-1"></div>

          <button className="relative text-slate-400 hover:text-cyan-400 transition-colors">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-0 right-0 size-2 bg-red-500 rounded-full border border-slate-950"></span>
          </button>

          <div className="flex items-center gap-3 pl-2 cursor-pointer hover:opacity-80 transition-opacity">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-slate-50">Dev User</p>
              <p className="text-[10px] text-slate-400">Pro Plan</p>
            </div>
            <div className="size-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-xs font-bold text-white shadow-lg">
              DU
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside
          className={`${
            sidebarOpen ? "flex" : "hidden"
          } lg:flex flex-col w-64 bg-slate-950 border-r border-white/5 overflow-y-auto pb-6`}
        >
          <div className="px-4 py-6 space-y-1">
            <p className="px-4 text-xs font-bold text-slate-400/50 uppercase tracking-wider mb-2">
              Dummay APIs
            </p>

            <div>
              <NavItem
                icon="data_object"
                label="JSON"
                chevron
                onClick={() => toggleMenu("JSON")}
              />
              {expandedMenu === "JSON" && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-slate-800 pl-2">
                  {jsonAPIs.map((api) => (
                    <button
                      key={api.id}
                      onClick={() => selectAPI(api, "json-tools")}
                      className="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-400 hover:text-cyan-400 hover:bg-white/5 rounded transition-colors text-left group"
                    >
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${getMethodColor(api.method)}`}
                      >
                        {api.method}
                      </span>
                      <span className="truncate">{api.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <NavItem
                icon="lock"
                label="Auth"
                chevron
                onClick={() => toggleMenu("Auth")}
                // onClick={() => setCurrentView("auth-view")}
              />
              {expandedMenu === "Auth" && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-slate-800 pl-2">
                  {authApis.map((api) => (
                    <button
                      key={api.id}
                      onClick={() => selectAPI(api, "auth-view")}
                      className="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-400 hover:text-cyan-400 hover:bg-white/5 rounded transition-colors text-left group"
                    >
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${getMethodColor(api.method)}`}
                      >
                        {api.method}
                      </span>
                      <span className="truncate">{api.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <NavItem
              icon="code"
              label="XML Formatter"
              onClick={() => setCurrentView("api-builder")}
            />
            <NavItem
              icon="hub"
              label="GraphQL Explorer"
              onClick={() => setCurrentView("api-builder")}
            />

            <div className="my-4 border-t border-white/5 mx-4"></div>

            <p className="px-4 text-xs font-bold text-slate-400/50 uppercase tracking-wider mb-2">
              Development
            </p>
            <NavItem
              icon="psychology"
              label="API Builder (AI)"
              active={currentView === "api-builder"}
              onClick={() => setCurrentView("api-builder")}
            />
            <NavItem
              icon="science"
              label="Playground"
              onClick={() => setCurrentView("api-builder")}
            />
            <NavItem
              icon="cloud_upload"
              label="File Attachment"
              onClick={() => setCurrentView("api-builder")}
            />

            <div className="my-4 border-t border-white/5 mx-4"></div>

            <p className="px-4 text-xs font-bold text-slate-400/50 uppercase tracking-wider mb-2">
              Resources
            </p>
            <NavItem
              icon="article"
              label="Blogs"
              onClick={() => setCurrentView("api-builder")}
            />
            <NavItem
              icon="menu_book"
              label="Documentation"
              onClick={() => setCurrentView("api-builder")}
            />
            <NavItem
              icon="info"
              label="About"
              onClick={() => setCurrentView("api-builder")}
            />
          </div>

          <div className="mt-auto px-6">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-4 border border-white/5">
              <p className="text-xs font-bold text-white mb-1">Upgrade Plan</p>
              <p className="text-[10px] text-slate-400 mb-3">
                Get unlimited mock requests and team collaboration.
              </p>
              <button className="w-full py-1.5 rounded-lg bg-cyan-400 text-slate-950 text-xs font-bold shadow-[0_0_25px_-5px_rgba(34,211,238,0.2)] hover:bg-white transition-colors">
                Upgrade Now
              </button>
            </div>
          </div>
        </aside>

        <main className="flex-1 flex flex-col bg-slate-950 overflow-hidden relative">
          {currentView === "json-tools" ? (
            <JSONToolsView />
          ) : currentView === "auth-view" ? (
            <AuthView />
          ) : (
            <div className="flex-1 overflow-y-auto p-6 z-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                <div>
                  <h1 className="text-2xl font-bold text-white mb-1">
                    API Builder Workspace
                  </h1>
                  <p className="text-sm text-slate-400">
                    Generate endpoints instantly or test existing ones.
                  </p>
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 border border-white/10 rounded-lg text-sm font-medium text-slate-50 hover:bg-slate-800/80 transition-colors">
                    <span className="material-symbols-outlined text-[18px]">
                      history
                    </span>
                    History
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-cyan-400 text-slate-950 rounded-lg text-sm font-bold shadow-[0_0_25px_-5px_rgba(34,211,238,0.2)] hover:bg-cyan-500 transition-colors">
                    <span className="material-symbols-outlined text-[18px]">
                      add
                    </span>
                    New Endpoint
                  </button>
                </div>
              </div>

              <div className="mb-8 p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3">
                <span className="material-symbols-outlined text-red-400 text-[20px]">
                  warning
                </span>
                <p className="text-xs md:text-sm text-red-200">
                  <span className="font-bold">Note:</span> We're still rolling
                  out features. Some AI generation tools might be slower than
                  usual during peak hours.
                </p>
              </div>

              <div className="flex flex-col xl:flex-row gap-6 h-full min-h-[600px]">
                <div className="flex-1 flex flex-col gap-6">
                  <div className="bg-slate-900 border border-white/10 rounded-xl p-1 shadow-lg">
                    <div className="flex flex-col sm:flex-row items-center gap-2 p-1">
                      <div className="relative group w-full sm:w-28">
                        <select
                          value={method}
                          onChange={(e) => setMethod(e.target.value)}
                          className="w-full appearance-none bg-slate-800 text-emerald-500 font-bold text-sm border border-white/5 rounded-lg py-2.5 pl-4 pr-8 focus:ring-1 focus:ring-cyan-400 cursor-pointer hover:bg-slate-800/80 transition-colors outline-none"
                        >
                          <option>GET</option>
                          <option>POST</option>
                          <option>PUT</option>
                          <option>DELETE</option>
                          <option>PATCH</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[18px]">
                          expand_more
                        </span>
                      </div>
                      <div className="flex-1 w-full relative">
                        <input
                          className="w-full bg-slate-950 text-slate-50 text-sm font-mono border border-white/5 rounded-lg py-2.5 px-4 focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400/50 placeholder-slate-400/30 outline-none"
                          type="text"
                          value={url}
                          onChange={(e) => setUrl(e.target.value)}
                        />
                      </div>
                      <button className="w-full sm:w-auto px-6 py-2.5 bg-cyan-400 text-slate-950 font-bold text-sm rounded-lg hover:bg-white transition-colors shadow-[0_0_25px_-5px_rgba(34,211,238,0.2)] flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">
                          send
                        </span>
                        Send
                      </button>
                    </div>
                  </div>

                  <div className="bg-slate-900 border border-white/10 rounded-xl flex-1 flex flex-col overflow-hidden shadow-lg">
                    <div className="flex items-center border-b border-white/5 px-2 bg-slate-950/50">
                      {["Params", "Authorization", "Headers", "Body"].map(
                        (tab) => (
                          <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-3 text-sm font-medium transition-colors ${
                              activeTab === tab
                                ? "text-cyan-400 border-b-2 border-cyan-400"
                                : "text-slate-400 hover:text-slate-50"
                            }`}
                          >
                            {tab}
                          </button>
                        )
                      )}
                      <div className="ml-auto flex items-center gap-2 px-2">
                        <span className="text-xs text-slate-400">
                          Save as preset
                        </span>
                        <button className="text-slate-400 hover:text-cyan-400">
                          <span className="material-symbols-outlined text-[18px]">
                            bookmark_add
                          </span>
                        </button>
                      </div>
                    </div>

                    <div className="p-0 flex-1 overflow-y-auto font-mono text-sm">
                      <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-800/30 text-slate-400 text-xs uppercase">
                          <tr>
                            <th className="py-2 px-4 border-b border-white/5 font-medium w-8"></th>
                            <th className="py-2 px-4 border-b border-white/5 font-medium w-1/3">
                              Key
                            </th>
                            <th className="py-2 px-4 border-b border-white/5 font-medium">
                              Value
                            </th>
                            <th className="py-2 px-4 border-b border-white/5 font-medium w-16"></th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {params.map((param, index) => (
                            <tr
                              key={index}
                              className="group hover:bg-white/5 transition-colors"
                            >
                              <td className="py-2 px-4 text-center">
                                <input
                                  checked={param.checked}
                                  onChange={(e) =>
                                    updateParam(
                                      index,
                                      "checked",
                                      e.target.checked
                                    )
                                  }
                                  className="rounded border-white/20 bg-slate-950 text-cyan-400 focus:ring-0 cursor-pointer"
                                  type="checkbox"
                                />
                              </td>
                              <td className="py-2 px-4">
                                <input
                                  className="w-full bg-transparent border-none p-0 text-slate-50 focus:ring-0 placeholder-slate-400/30 outline-none"
                                  placeholder="Key"
                                  type="text"
                                  value={param.key}
                                  onChange={(e) =>
                                    updateParam(index, "key", e.target.value)
                                  }
                                />
                              </td>
                              <td className="py-2 px-4">
                                <input
                                  className="w-full bg-transparent border-none p-0 text-cyan-400 focus:ring-0 placeholder-slate-400/30 outline-none"
                                  placeholder="Value"
                                  type="text"
                                  value={param.value}
                                  onChange={(e) =>
                                    updateParam(index, "value", e.target.value)
                                  }
                                />
                              </td>
                              <td className="py-2 px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                  onClick={() => deleteParam(index)}
                                  className="text-slate-400 hover:text-red-400"
                                >
                                  <span className="material-symbols-outlined text-[18px]">
                                    delete
                                  </span>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <button
                        onClick={addParam}
                        className="w-full py-2 text-sm text-slate-400 hover:text-cyan-400 hover:bg-white/5 transition-colors"
                      >
                        + Add Parameter
                      </button>
                    </div>
                  </div>

                  <div className="bg-slate-900 border border-white/10 rounded-xl overflow-hidden shadow-lg">
                    <div className="flex items-center justify-between border-b border-white/5 px-4 py-2 bg-slate-950/50">
                      <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                        Request Code Samples
                      </h3>
                    </div>
                    <div className="divide-y divide-white/5">
                      {[
                        "JavaScript (Fetch)",
                        "Node.js (Axios)",
                        "Python (Requests)",
                        "cURL",
                      ].map((lang) => (
                        <div key={lang} className="group">
                          <button
                            onClick={() =>
                              setExpandedCode(
                                expandedCode === lang ? null : lang
                              )
                            }
                            className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-slate-50 hover:bg-white/5 transition-colors text-left"
                          >
                            <span>{lang}</span>
                            <span
                              className={`material-symbols-outlined text-slate-400 text-[20px] transition-transform ${
                                expandedCode === lang ? "rotate-180" : ""
                              }`}
                            >
                              expand_more
                            </span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="xl:w-[45%] flex flex-col gap-4">
                  <div className="bg-slate-900 border border-white/10 rounded-xl flex-1 flex flex-col overflow-hidden shadow-lg h-full">
                    <div className="flex items-center justify-between border-b border-white/5 px-4 py-2 bg-slate-950/50">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                          Response Body
                        </h3>
                        <span className="bg-green-500/10 text-green-400 text-[10px] px-1.5 py-0.5 rounded border border-green-500/20">
                          200 OK
                        </span>
                        <span className="text-[10px] text-slate-400">1.4s</span>
                        <span className="text-[10px] text-slate-400">
                          2.1KB
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          className="text-slate-400 hover:text-white"
                          title="Copy"
                        >
                          <span className="material-symbols-outlined text-[16px]">
                            content_copy
                          </span>
                        </button>
                        <button
                          className="text-slate-400 hover:text-white"
                          title="Download"
                        >
                          <span className="material-symbols-outlined text-[16px]">
                            download
                          </span>
                        </button>
                        <button
                          className="text-slate-400 hover:text-white"
                          title="Expand"
                        >
                          <span className="material-symbols-outlined text-[16px]">
                            open_in_full
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="relative flex-1 bg-[#0b1120] p-4 overflow-y-auto font-mono text-sm leading-relaxed">
                      <pre className="text-yellow-500">
                        {formatJSON(sampleResponse)}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default SnapTestDashboard;
