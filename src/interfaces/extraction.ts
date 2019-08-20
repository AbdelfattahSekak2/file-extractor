export interface Coordinates {
  coord_x1: number;
  coord_x2: number;
  coord_y1: number;
  coord_y2: number;
}

export interface Tax extends Coordinates {
  rate: number;
  amount: number;
  probability: number;
}

interface Date extends Coordinates {
  date_INTL: string,
  date_US: string,
  probability: 0.972,
}

interface Total extends Coordinates {
  amount: number,
  probability: number,
}

export interface Prediction {
  orientation: {
    degrees: string;
    probability: number;
  },
  category: {
    value: string;
    probability: number;
  },
  date: Date
  total: Total;
  taxes: Tax[]
}

export default interface Extraction {
  details: {
    call_id: string;
    computation_time: number;
  };
  predictions: Prediction[];
}
