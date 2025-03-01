// Use Script & Debug – Unit Conversion

// a. 1ft = 12 in then 42 in = ? ft
// b. Rectangular Plot of 60 feet x 40 feet in meters
// c. Calculate area of 25 such plots in acres

let inches = 42;
let feet = inches / 12;
console.log(`${inches} inches = ${feet.toFixed(2)} feet`);

// b. Convert rectangular plot (60ft x 40ft) to meters (1 ft = 0.3048 meters)
let lengthFt = 60;
let widthFt = 40;
let lengthM = lengthFt * 0.3048;
let widthM = widthFt * 0.3048;
console.log(`Plot Size: ${lengthM.toFixed(2)}m x ${widthM.toFixed(2)}m`);

// c. Calculate area of 25 such plots in acres (1 acre = 4046.86 sq meters)
let areaOfOnePlot = lengthM * widthM;
let totalAreaMeters = areaOfOnePlot * 25;
let totalAreaAcres = totalAreaMeters / 4046.86;
console.log(`Total area of 25 plots in acres: ${totalAreaAcres.toFixed(4)} acres`);
