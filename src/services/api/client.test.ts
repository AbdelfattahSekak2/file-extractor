import client from "./client";

describe("Custom axios client", () => {
  const clientInstance = client;
  it("should have a custom baseUrl", () => {
    expect(clientInstance.defaults.baseURL).toBe(process.env.REACT_APP_API_BASE_URL);
  });

  it("should have a custom header", () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // @ts-ignore
    expect(client.interceptors.request.handlers[0].fulfilled(config)).toEqual({
      headers: {
        ...config.headers,
        "X-Inferuser-Token": process.env.REACT_APP_TOKEN,
      },
    });
  });

  it("should correctly reject a Promise if an error happens", () => {
    const error = {
      message: "Error",
    };
    // @ts-ignore
    expect(client.interceptors.request.handlers[0].rejected(error)).rejects.toMatchObject(error);
  });
});
