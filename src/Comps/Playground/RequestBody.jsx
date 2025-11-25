import Stack from "@mui/material/Stack";
import TextareaAutosize from "@mui/material/TextareaAutosize";

export default function RequestBody({
  requestBody,
  setRequestBody,
  responseBody,
  setResponseBody,
}) {
  return (
    <Stack sx={{ width: "100%" }} spacing={2} direction={"column"}>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <TextareaAutosize
          aria-label="request body"
          minRows={13}
          placeholder="Request Body"
          value={requestBody}
          onChange={(e) => setRequestBody(e.target.value)}
          style={{ width: "100%", fontSize: "14px", padding: "10px" }}
        />
      </Stack>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <TextareaAutosize
          aria-label="response body"
          minRows={13}
          placeholder="Response Body"
          value={responseBody}
          onChange={(e) => setResponseBody(e.target.value)}
          style={{ width: "100%", fontSize: "14px", padding: "10px" }}
        />
      </Stack>
    </Stack>
  );
}
