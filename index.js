import inquirer from 'inquirer';
import fs from 'fs';
import { Circle, Rectangle, Square, Triangle } from './lib/shapes.js';

async function promptUser() {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'shapeType',
      message: 'Choose a shape:',
      choices: ['Circle', 'Rectangle', 'Square', 'Triangle'],
    },
    {
    type: 'list',
    name: 'shapeColor',
    message: 'Choose the color for your shape:',
    choices: ['Red', 'Green', 'Blue', 'Yellow', 'Orange', 'Purple', 'Pink', 'Brown', 'Black', 'white',],
    },
    {
      type: 'input',
      name: 'text',
      message: 'What text would you like on your logo? (Up to 3 characters)',
      validate: input => input.length <= 3 ? true : 'Text can only be up to 3 characters.',
    },
    {
        type: 'list',
        name: 'textColor',
        message: 'Choose the color for your text:',
        choices: ['Black', 'White', 'Silver', 'Gray', 'Maroon', 'Navy'],
      }
  ]);
}

function generateSVG({ shapeType, shapeColor, text, textColor }) {
    let shape;
    switch (shapeType) {
      case 'Circle':
        shape = new Circle(shapeColor);
        break;
      case 'Rectangle':
        shape = new Rectangle(shapeColor);
        break;
      case 'Square':
        shape = new Square(shapeColor);
        break;
      case 'Triangle':
        shape = new Triangle(shapeColor);
        break;
    }
  
    const svgContent = `
    <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
      ${shape.render()}
      <text x="200" y="210" font-size="40" text-anchor="middle" fill="${textColor}" font-weight="bold">${text}</text>
    </svg>
  `;
  return svgContent;
}
  

async function init() {
  try {
    const answers = await promptUser();
    const svgContent = generateSVG(answers);
    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg successfully!');
  } catch (error) {
    console.error('Error generating SVG:', error);
  }
}

init();
