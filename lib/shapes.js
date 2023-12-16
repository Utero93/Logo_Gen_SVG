// Defines a "Shapes" class 
class Shapes {

    constructor(){
        // constructor initializing the color property as an empty string
        this.color = '';
    }

    setColor(color){
        //  method for class "Shapes" which retrieves a parameter for a color and places the property of that color to the value. 
        this.color = color;
    }

    render() {
        // The render method for the base class 
        return '';
    }
}

    // Renders a triangle, circle, and square class using inheritance:

    // Class: Triangle
    class Triangle extends Shapes {
        render(){
            return `<polygon points="150,50 250, 150 50,150" fill="${this.color}" />`;
        }
    }

    // Class: Circle 
    class Circle extends Shapes {
        render(){
            return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
        }
    }

    // Class: Square
    class Square extends Shapes {
        render(){
            return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
        }
    }

    module.exports = {Triangle, Circle, Square};