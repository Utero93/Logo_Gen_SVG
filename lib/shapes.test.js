// Import shapes modules
const {Triangle, Circle, Square} = require('./shapes');


// Triangle test
describe('Triangle', () => {
  it('should render a triangle in the correct color', () => {
    const shape = new Triangle();
    var color =('red')
    shape.setColor(color);
    expect(shape.render()).toEqual(`<polygon points="150,50 250,150 50,150" fill="${color}" />`);
  });
});


// Circle test
describe('Circle', () => {
    it('should render a circle in the correct color', () => {
      const shape = new Circle();
      var color =('green')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="100" fill="${color}" />`);
    });
  });


// Square test
describe('Square', () => {
    it('should render a square in the correct color', () => {
      const shape = new Square();
      var color =('black')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<rect x="50" y="50" width="200" height="200" fill="${color}" />`);
    });
  });