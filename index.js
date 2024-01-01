
// Import packages needed for this application:

// Import Inquirer using npm install --save inquirer@^8.0.0 in terminal to access common js syntax like require('inquirer') and module.exports 
const inquirer = require('inquirer');

// Import File System(fs)
const fs = require('fs').promises; // Using fs.promises to ensure the files oeprate as promise-based

// Import shapes modules created for the logos 
const {Triangle, Circle, Square} = require('./lib/shapes');

//-------------------------------------------------------------------------------\\

// Inquirer questions saved in an array of objects:
const questions = [

// Enter text for the logo (Must not be more than 3 characters long).
  {
    type: 'input',
    name: 'text',
    message: 'Enter text for the logo (Cant extend past the length of 3 characters).'
  },

// Enter a text color for the logo
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter a text color.'
  },

// Select a shape to design a logo
  {
    type: 'list',
    name: 'shape',
    message: 'Select a shape for your logo.',
    choices: ['triangle', 'circle', 'square']
  },

// Enter a shape color for the logo
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a shape color.'
  },
];

//-------------------------------------------------------------------------------\\

// Svg class w/constructor w/methods for setting text and shape elements and returning a working svg file
class Svg {

  constructor(){
    this.textEl = ''; // initializes text element
    this.shapeEl = ''; // initializes shape element
  }

  render(){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`
  }

  setText(shape, text, textColor){

    // checks changes made to the shape and modifies the text y-coordinate so it fits better

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

//-------------------------------------------------------------------------------\\

// Async function to initialize app
async function init() {
  try {

    // pass prompt questions here
    const data = await inquirer.prompt(questions);

    // ensuring user only enters up to 3 characters of text
    let text = '';

    if (data.text.length > 0 && data.text.length < 4){

      text = data.text; // outputs the valid character length

    } else { // outputs the invalid character length

      console.log('Invalid character length. Text for logo cannot extend the length of 3 characters.'); // error message when the requirements havent been satisified 
      
      return; // ends the function
    }

    let shapeElement;

    // Create the appropriate shape element based on user selection
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
    
    shapeElement.setColor(data.shapeColor); // sets shapeColor based on user input

    // console.log(shapeElement);

    const svgFile = new Svg ();

    svgFile.setText(data.shape, text, data.textColor);
    svgFile.setShape(shapeElement);

    const svgContent = svgFile.render();

    // console.log(svgContent);
    

    // Writes SVG file using fs.promises.writeFile
    await fs.writeFile('logo.svg', svgContent);

    console.log('A logo.svg file has successfully been generated!');
  } catch (error) {
    console.error('Error:', error);
  }
}

// Function call to initialize app
init();