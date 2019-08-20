import Canvas, { handleCanvas } from "./helpers";

import { extraction } from "../../../mocks/extraction";

import file from "../../../../public/images/upload-to-cloud.png";

describe("Canvas class", () => {
  const context = {
    drawImage: jest.fn(),
    strokeRect: jest.fn(),
  };
  // @ts-ignore
  HTMLCanvasElement.prototype.getContext = jest.fn(() => context);
  const canvasElement: HTMLCanvasElement = document.createElement("canvas");
  const canvas = new Canvas(canvasElement);

  const image = new Image();
  it("should constructs arguments correctly", () => {
    expect(canvas.canvasElement).toEqual(canvasElement);
    expect(canvas.image).toEqual(image);
    expect(canvas.shapes).toEqual([]);
  });

  it("should load image correctly", (done: () => void) => {
    let result = canvas.loadImage(file);
    expect(canvas.image.src).toContain(file);
    // @ts-ignore
    canvas.image.onload();
    result.then((success: boolean) => {
      expect(success).toBeTruthy();
      done();
    });

    result = canvas.loadImage(file);
    expect(canvas.image.src).toContain(file);
    // @ts-ignore
    canvas.image.onerror();
    result.then((success: boolean) => {
      expect(success).toBeFalsy();
      done();
    });
  });

  it("should setup canvas correctly", () => {
    canvas.setupCanvas();
    const width = canvas.image.width;
    const height = canvas.image.height;
    expect(canvas.canvasElement.height).toEqual(height);
    expect(canvas.canvasElement.width).toEqual(width);
    expect(canvas.context!.drawImage).toHaveBeenCalled();
  });

  it("should extract shapes correctly", () => {
    canvas.extractShapes(extraction);
    expect(canvas.shapes).toEqual([
      {
        coord_x1: 0.865,
        coord_x2: 0.18,
        coord_y1: 0.249,
        coord_y2: 0.818,
        strokeStyle: "red",
      },
      {
        coord_x1: 0.216,
        coord_x2: 0.256,
        coord_y1: 0.16,
        coord_y2: 0.145,
        strokeStyle: "red",
      },
      {
        coord_x1: 0.255,
        coord_x2: 0.2,
        coord_y1: 0.461,
        coord_y2: 0.927,
        strokeStyle: "red",
      },
    ]);
  });

  it("should create shapes correctly", () => {
    canvas.createShapes();
    expect(canvas.context!.strokeRect).toHaveBeenCalledTimes(canvas.shapes.length);
    canvas.createShapes();
    expect(canvas.context!.strokeStyle).toEqual("red");
  });
});

describe("handleCanvas function", () => {
  let canvas: any;
  const setError = jest.fn();
  const newFile = new File([""], "filename", { type: "text/html" });
  window.URL.createObjectURL = jest.fn(() => "url");
  beforeEach(() => {
    const canvasElement: HTMLCanvasElement = document.createElement("canvas");
    canvas = new Canvas(canvasElement);
    canvas.loadImage = jest.fn(() => ({ then: jest.fn() }));
  });
  it("should load image to canvas correctly", () => {
    handleCanvas(canvas, extraction, newFile, setError);
    expect(canvas.loadImage).toHaveBeenCalled();
  });
});
