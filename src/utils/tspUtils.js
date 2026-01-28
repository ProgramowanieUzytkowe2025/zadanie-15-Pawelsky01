export const distance = (a, b) =>
  Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);

export const pathLength = (points, order) => {
  let sum = 0;
  for (let i = 0; i < order.length - 1; i++) {
    sum += distance(points[order[i]], points[order[i + 1]]);
  }
  sum += distance(points[order.at(-1)], points[order[0]]);
  return sum;
};

export const randomOrder = (n) =>
  [...Array(n).keys()].sort(() => Math.random() - 0.5);
