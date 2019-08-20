import Extraction, { Prediction, Coordinates } from "../../../interfaces/extraction";

interface Shape extends Coordinates {
  strokeStyle: string;
}

const strokeStyles = ["red", "green", "blue"];


export const handleCanvas = (canvas: any, extraction: Extraction, file: File, setError: (error: string) => void) => {
  const image = canvas.loadImage(URL.createObjectURL(file));
  image.then((success: boolean) => {
    if (success) {
      canvas.setupCanvas();
      canvas.extractShapes(extraction);
      canvas.createShapes();
    } else {
      setError("Something went wrong loading the image");
    }
  });
}

export default class Canvas {
  canvasElement: HTMLCanvasElement;
  image: HTMLImageElement;
  context: CanvasRenderingContext2D | null;
  shapes: Shape[];

  constructor(canvasElement: HTMLCanvasElement) {
    this.canvasElement = canvasElement;
    this.image = new Image();
    this.context = canvasElement.getContext("2d");
    this.shapes = [];
  }

  public loadImage = async (file: string) => {
    return new Promise((resolve: (success: boolean) => void) => {
      this.image.onload = () => resolve(true);
      this.image.onerror = () => resolve(false);
      this.image.src = file;
    })
  };

  public setupCanvas = () => {
    const { width, height } = this.image;
    this.canvasElement.width = width;
    this.canvasElement.height = height;
    this.context!.drawImage(this.image, 0, 0, width, height);
  };

  public extractShapes = (extraction: Extraction) => {
    extraction.predictions.forEach((prediction: Prediction, index: number) => {
      Object.values(prediction).forEach((element: any | any[]) => {
        if (Array.isArray(element)) {
          element.forEach((attribute: any) => {
            if (attribute.hasOwnProperty("coord_x1")) {
              const { coord_x2, coord_x1, coord_y1, coord_y2 }: Coordinates = attribute;
              this.shapes.push({
                coord_x2,
                coord_x1,
                coord_y1,
                coord_y2,
                strokeStyle: strokeStyles[index],
              });
            };
          });
        } else {
          if (element.hasOwnProperty("coord_x1")) {
            const { coord_x2, coord_x1, coord_y1, coord_y2 }: Coordinates = element;
            this.shapes.push({
              coord_x2,
              coord_x1,
              coord_y1,
              coord_y2,
              strokeStyle: strokeStyles[index],
            });
          };
        };
      });
    });
  };

  public createShapes = () => this.shapes.forEach((shape: Shape) => {
    const { coord_x1, coord_x2, coord_y1, coord_y2, strokeStyle } = shape;
    const { width, height } = this.image;
    const x = width * coord_x1;
    const y = height * coord_y1;
    const rectWidth = (coord_x2 - coord_x1) * width;
    const rectHeight = (coord_y2 - coord_y1) * height
    this.context!.strokeStyle = strokeStyle;
    this.context!.strokeRect(x, y, rectWidth, rectHeight);
  })
}


