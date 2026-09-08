const API_URL =
  import.meta.env.BACKEND_API_URL || "http://localhost:8000";

console.log("Backend URL:", API_URL);

export const checkBackend = async () => {
  const response = await fetch(`${API_URL}/api/health`);

  if (!response.ok) {
    throw new Error(`Backend health check failed: ${response.status}`);
  }

  return await response.json();
};


export const searchResearch = async (query) => {
  if (!query || !query.trim()) {
    throw new Error("Research query cannot be empty");
  }

  const response = await fetch(
    `${API_URL}/api/research?query=${encodeURIComponent(query.trim())}`
  );

  const contentType = response.headers.get("content-type") || "";

  if (!response.ok) {
    const text = await response.text();
    throw new Error(
      `Research search failed (${response.status}): ${text.substring(0, 200)}`
    );
  }

  if (!contentType.includes("application/json")) {
    const text = await response.text();
    throw new Error(
      `Backend returned HTML instead of JSON: ${text.substring(0, 200)}`
    );
  }

  return await response.json();
};


export const askAssistant = async (question) => {
  if (!question || !question.trim()) {
    throw new Error("Question cannot be empty");
  }

  const response = await fetch(`${API_URL}/api/assistant`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      question: question.trim(),
    }),
  });

  const contentType = response.headers.get("content-type") || "";

  if (!response.ok) {
    const text = await response.text();

    throw new Error(
      `Assistant request failed (${response.status}): ${text.substring(0, 300)}`
    );
  }

  if (!contentType.includes("application/json")) {
    const text = await response.text();

    throw new Error(
      `Backend returned HTML instead of JSON: ${text.substring(0, 200)}`
    );
  }

  return await response.json();
};


export const uploadResearchPaper = async (file) => {
  if (!file) {
    throw new Error("No file selected");
  }

  const formData = new FormData();

  formData.append("file", file);

  const response = await fetch(`${API_URL}/api/upload`, {
    method: "POST",
    body: formData,
  });

  const contentType = response.headers.get("content-type") || "";

  if (!response.ok) {
    const text = await response.text();

    throw new Error(
      `Upload failed (${response.status}): ${text.substring(0, 300)}`
    );
  }

  if (!contentType.includes("application/json")) {
    const text = await response.text();

    throw new Error(
      `Backend returned HTML instead of JSON: ${text.substring(0, 200)}`
    );
  }

  return await response.json();
};


export const getPapers = async () => {
  const response = await fetch(`${API_URL}/api/papers`);

  if (!response.ok) {
    const text = await response.text();

    throw new Error(
      `Failed to get papers (${response.status}): ${text.substring(0, 300)}`
    );
  }

  return await response.json();
};


export default {
  checkBackend,
  searchResearch,
  askAssistant,
  uploadResearchPaper,
  getPapers,
};