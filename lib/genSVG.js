
const {Triangle, Square, Circle} = require('./lib/shapes');

function generateSVG(data) {
  const { text, textColor, shape, shapeColor } = data;

  let shapeEl;

  // Create the appropriate shape element based on user selection
  switch (shape.toLowerCase()) {
    
    case 'triangle':
      shapeEl = new Triangle();
      break;

    case 'square':
        shapeEl = new Square();
        break;

    case 'circle':
      shapeEl = new Circle();
      break;

    default:
      throw new Error('Invalid shape selected.');
  }

  // Set colors and text when designing the shapes for the logo 
  shapeEl.setColor(shapeColor);
  shapeEl.setText(text, textColor);

  // Renders the shape as SVG content
  const svgContent = shapeElement.render();

  return svgContent;
}


// export module
module.exports = generateSVG;