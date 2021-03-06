import Extraction from "../interfaces/extraction";

export const extraction: Extraction = {
  details: {
    call_id: "49ef6b42-2724-4eaf-80bf-9add06a45176",
    computation_time: 0.789,
  },
  predictions: [
    {
      category: {
        probability: 0.302,
        value: "parking",
      },
      date: {
        coord_x1: 0.865,
        coord_x2: 0.18,
        coord_y1: 0.249,
        coord_y2: 0.818,
        date_INTL: "2018-01-02",
        date_US: "2012-10-26",
        probability: 0.972,
      },
      orientation: {
        degrees: "0",
        probability: 0.723,
      },
      taxes: [
        {
          amount: 0.57,
          coord_x1: 0.216,
          coord_x2: 0.256,
          coord_y1: 0.16,
          coord_y2: 0.145,
          probability: 0.647,
          rate: 0.476,
        },
      ],
      total: {
        amount: 0.732,
        coord_x1: 0.255,
        coord_x2: 0.2,
        coord_y1: 0.461,
        coord_y2: 0.927,
        probability: 0.801,
      },
    },
  ],
};
