export interface CGPoint {
  x: number;
  y: number;
};

export const CGPointZero: CGPoint = {
  x: 0,
  y: 0,
};

export type CGSize = {
  width: number;
  height: number;
};

export const CGSizeZero: CGSize = {
  width: 0,
  height: 0,
};

export type CGRect = {
  point: CGPoint;
  size: CGSize;
};

export const CGRectZero: CGRect = {
  point: CGPointZero,
  size: CGSizeZero,
};