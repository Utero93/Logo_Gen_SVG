const inquirer = require('inquirer');
const fs = require('fs').promises; 
const {Triangle, Circle, Square} = require('./lib/shapes');


const questions = [


  {
    type: 'input',
    name: 'text',
    message: 'Enter text for the logo, it must be longer than 3 characters.'
  },

  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the color for your text.'
  },

  {
    type: 'list',
    name: 'shape',
    message: 'Select a shape for your specific logo.',
    choices: ['triangle', 'circle', 'square']
  },


  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a color for the shape.'
  },
];


class Svg {

  constructor(){

    this.textEl = ''; 
    this.shapeEl = ''; 

  }

  render(){

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`

  }

  setText(shape, text, textColor){


    if(shape === "triangle"){

      this.textEl = `<text x="150" y="133" font-size="55" text-anchor="middle" fill="${textColor}">${text}</text>`;

    } else if (shape === "circle"){

      this.textEl = `<text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;

    } else {

      this.textEl = `<text x="150" y="140" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;

    }
    
  }

  setShape(shape){

    this.shapeEl = shape.render();
  
  }
}




async function init() {

  try {

    const data = await prompt(questions);

    let text = '';

    if (data.text.length > 0 && data.text.length < 4){

      text = data.text;

    } else {

      console.log('Invalid character length. Text for logo cannot be any more than 3 characters long.'); // error message
      
      return;
    }

    let shapeElement;


    switch (data.shape.toLowerCase()) {
      case 'triangle':
        shapeElement = new Triangle();
        break;
      case 'circle':
        shapeElement = new Circle();
        break;
      case 'square':
        shapeElement = new Square();
        break;
    }
    
    shapeElement.setColor(data.shapeColor); 



    const svgFile = new Svg ();

    svgFile.setText(data.shape, text, data.textColor);
    svgFile.setShape(shapeElement);

    const svgContent = svgFile.render();


    

    await fs.writeFile('logo.svg', svgContent);

    console.log('Created a logo.svg file.');
  } catch (error) {
    console.error('Error:', error);
  }
}

init();