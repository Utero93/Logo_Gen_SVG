
// Defines a "Shapes" class for the logo
class Shapes {

    constructor(){ // constructor initializing the color property as an empty string
      this.color = ''; 
    }
  
    setColor(color){ // method for class "Shapes" that takes a parameter for a color and sets the color property to that value. 
      this.color = color;
    }
  
    render() {
      // The base class render method
      return '';
    }
  
  }
  
  // Creating triangle, circle, and square classes using inheritance:
  
  // Triangle class
  class Triangle extends Shapes {
    render(){ // SVG code generated w/assistance from GPT-3
      return `<polygon points="150,50 250,150 50,150" fill="${this.color}" />`;
    }
  }
  
 // Square class
 class Square extends Shapes {
    render(){ // SVG code generated w/assistance from GPT-3
      return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
  }

  // Circle class
  class Circle extends Shapes {
    render(){ // SVG code generated w/assistance from GPT-3
      return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
    }
  }
  
 
  
  module.exports = {Triangle, Square, Circle};