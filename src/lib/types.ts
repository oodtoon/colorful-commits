export type letter = {
  width: number;
  trueCount: number;
  layout: boolean[];
};

export type letters = {
  [key: string | number]: letter;
};

export type wordData = {
  [key: string | symbol]: letterData;
};

type letterData = {
  width: number | null;
  lastSquare: number | null;
};
