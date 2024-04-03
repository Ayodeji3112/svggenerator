// lib/shapes.js
export class Shape {
    constructor(color) {
      this.color = color;
    }
  }
  
  export class Circle extends Shape {
    render() {
        return `<circle cx="200" cy="200" r="80" fill="${this.color}" />`; 
    }
  }
  
  export class Rectangle extends Shape {
    render() {
        return `<rect x="100" y="150" width="200" height="100" fill="${this.color}" />`;
    }
  }
  
  export class Square extends Shape {
    render() {
        return `<rect x="120" y="120" width="160" height="160" fill="${this.color}" />`;
    }
  }
  
  export class Triangle extends Shape {
    render() {
        return `<polygon points="200,120 280,280 120,280" fill="${this.color}" />`;
    }
  }
  