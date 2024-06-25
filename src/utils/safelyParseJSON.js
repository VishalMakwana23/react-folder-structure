function safelyParseJSON(json) {
  try {
    return JSON.parse(json);
  } catch (error) {
    console.log("Failed to parse JSON", error);
  }
}

export default safelyParseJSON;
