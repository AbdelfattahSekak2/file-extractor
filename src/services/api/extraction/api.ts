import client from "../client";

export function getExtraction(file: FormData) {
  return client.post(`/main/ocr_receipts/predict`, file);
}
