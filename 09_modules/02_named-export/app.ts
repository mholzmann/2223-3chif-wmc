// the exports can be imported by using their names or rename them with 'as'
import { yellowCylinder, Cylinder, MAX_HEIGHT as MAX, cylinders, printVolume } from './cylinder-module';

// you can import all into one object with following statement
import * as cylinderModule from './cylinder-module';

const redCylinder: Cylinder = { radius: 2, height: MAX, colour: 'red' };
cylinders.push(redCylinder);

for (const cylinder of cylinders) {
    printVolume(cylinder);
}

console.log(cylinderModule.MAX_HEIGHT);