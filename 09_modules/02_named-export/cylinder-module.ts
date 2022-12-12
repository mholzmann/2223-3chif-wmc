// export of primitive value
export const MAX_HEIGHT: number = 50;

// export of interface
export interface Cylinder {
    radius: number;
    height: number;
    colour: string;
};

// export of object
export const yellowCylinder: Cylinder = { radius: 2, height: 6, colour: 'yellow'};

// export of array
export const cylinders: Cylinder[] = [
    { radius: 3, height: 5, colour: 'blue'},
    { radius: 10, height: 10, colour: 'green'}
];

// export of function
export function printVolume(cylinder: Cylinder): void {
    const volume: number = cylinder.radius**2 * Math.PI * cylinder.height;
    console.log(`the ${cylinder.colour} cylinder has a volume of ${volume}`);
}

// as you can see, more than one named export per module is possible