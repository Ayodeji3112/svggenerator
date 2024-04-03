const { Circle } = require('./shapes');

describe('Circle', () => {
  test('renders correct SVG for a circle', () => {
    const color = 'red';
    const circle = new Circle(color);
    const expectedSVG = `<circle cx="100" cy="100" r="50" fill="${color}" />`;

    expect(circle.render()).toBe(expectedSVG);
  });
});
