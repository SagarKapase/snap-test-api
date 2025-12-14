export default function JsonView() {
  const getAllUserResp = `[
    {
        "userId": 101,
        "name": "Michael Thompson",
        "email": "michael.thompson@company.com",
        "job": "Senior Software Engineer",
        "city": "New York"
    },
    {
        "userId": 102,
        "name": "Emma Johnson",
        "email": "emma.johnson@company.com",
        "job": "Product Manager",
        "city": "San Francisco"
    },
    {
        "userId": 103,
        "name": "Liam Brown",
        "email": "liam.brown@company.com",
        "job": "DevOps Engineer",
        "city": "Toronto"
    },
    {
        "userId": 104,
        "name": "Olivia Martinez",
        "email": "olivia.martinez@company.com",
        "job": "UI/UX Designer",
        "city": "Barcelona"
    },
    {
        "userId": 105,
        "name": "Noah Wilson",
        "email": "noah.wilson@company.com",
        "job": "Backend Developer",
        "city": "London"
    },
    {
        "userId": 106,
        "name": "Sophia Miller",
        "email": "sophia.miller@company.com",
        "job": "Quality Assurance Engineer",
        "city": "Berlin"
    },
    {
        "userId": 107,
        "name": "James Anderson",
        "email": "james.anderson@company.com",
        "job": "Cloud Architect",
        "city": "Seattle"
    },
    {
        "userId": 108,
        "name": "Ava Davis",
        "email": "ava.davis@company.com",
        "job": "Data Analyst",
        "city": "Sydney"
    },
    {
        "userId": 109,
        "name": "Benjamin Harris",
        "email": "benjamin.harris@company.com",
        "job": "Cybersecurity Specialist",
        "city": "Amsterdam"
    },
    {
        "userId": 110,
        "name": "Mia Robinson",
        "email": "mia.robinson@company.com",
        "job": "Business Analyst",
        "city": "Dublin"
    }
]`;

  const addUserReq = `{
    "name": "Tony Thompson",
    "email": "tony.thompson@company.com",
    "job": "Senior Software Engineer",
    "city": "New York"
}`;
  const addUserResp = `{
    "message": "User created successfully",
    "data": {
        "userId": 723,
        "name": "Tony Thompson",
        "email": "tony.thompson@company.com",
        "job": "Senior Software Engineer",
        "city": "New York"
    }
}`;

  const updateUserReq = `{
    "name": "John Doe",
    "email": "John.Doe@company.com",
    "job": "Software Engineer",
    "city": "New York"
}`;
  const updateUserResp = `{
    "message": "User updated successfully",
    "data": {
        "userId": 101,
        "name": "John Doe",
        "email": "John.Doe@company.com",
        "job": "Software Engineer",
        "city": "New York"
    }
}`;

  const getSingleUserResp = `{
    "userId": 101,
    "name": "Michael Thompson",
    "email": "michael.thompson@company.com",
    "job": "Senior Software Engineer",
    "city": "New York"
}`;

  const deleteUserResp = `{
    "message": "User deleted successfully"
}`;
  const jsonAPIs = [
    {
      id: "get-users",
      method: "GET",
      title: "Get all users",
      url: "https://snap-test.in/api/user/getAllUsers",
      description: "Retrieve all users from the database",
      response: getAllUserResp,
    },
    {
      id: "add-user",
      method: "POST",
      title: "Add a new user",
      url: "https://snap-test.in/api/user/addUser/",
      request: addUserReq,
      response: addUserResp,
      description: "Create a new user in the system",
    },
    {
      id: "get-single-user",
      method: "GET",
      title: "Get Single User",
      url: "https://snap-test.in/api/user/user/101",
      description: "Get details of a specific user by ID",
      response: getSingleUserResp,
    },
    {
      id: "update-user",
      method: "PUT",
      title: "Update a user",
      url: "https://snap-test.in/api/user/update/101",
      request: updateUserReq,
      response: updateUserResp,
      description: "Update user information",
    },
    {
      id: "delete-user",
      method: "DELETE",
      title: "Delete a user",
      url: "https://snap-test.in/api/user/delete/101",
      response: deleteUserResp,
      description: "Remove a user from the system",
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
                data_object
              </span>
            </div>
            <h1 className="text-3xl font-bold text-white">JSON</h1>
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
