import Stack from "@mui/material/Stack";
import TextareaAutosize from "@mui/material/TextareaAutosize";

export default function RequestBody({
  requestBody,
  setRequestBody,
  responseBody,
}) {
  return (
    <Stack sx={{ width: "100%" }} spacing={2} direction={"column"}>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <TextareaAutosize
          aria-label="request body"
          minRows={13}
          onChange={(e) => setRequestBody(e.target.value)}
          placeholder="Request Body"
          style={{
            width: "100%",
            fontSize: "14px",
            padding: "10px",
            backgroundColor: "#121212",
            color: "#00e676",
            fontFamily: "monospace",
            borderRadius: "8px",
            border: "1px solid #333",
            maxHeight: "250px", // ← Limit height
            overflow: "auto", // ← Enables scrolling
            whiteSpace: "pre-wrap", // ← Keeps formatting
            lineHeight: "1.4",
          }}
        />
      </Stack>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <TextareaAutosize
          aria-label="response body"
          minRows={13}
          value={responseBody}
          placeholder="Response Body"
          style={{
            width: "100%",
            fontSize: "14px",
            padding: "10px",
            backgroundColor: "#121212",
            color: "#00e676",
            fontFamily: "monospace",
            borderRadius: "8px",
            border: "1px solid #333",
            maxHeight: "250px", // ← Limit height
            overflowY: "scroll", // ← Enables scrolling
            whiteSpace: "pre-wrap", // ← Keeps formatting
            lineHeight: "1.4",
          }}
        />
      </Stack>
    </Stack>
  );
}
