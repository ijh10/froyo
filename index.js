const flavorString = prompt(
  "enter flavors",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const froyoflavors = flavorString.split(",");

console.log(froyoflavors);

const flavors = flavorString.split(",");
function createFroyoObject(array) {
  const obj = {};
  for (let i = 0; i < flavors.length; i++) {
    // if obj contains a property matching the currently element in the array. then we will incrument the vaule of the property by 1 if the obj does not coantain the current property set the vaule to 1
    const currentFlavor = flavors[i];
    // if this current flavor is a property in obj
    if (obj[currentFlavor]) {
      obj[currentFlavor] += 1;
    } else {
      obj[currentFlavor] = 1;
    }
  }
  return obj;
}
console.log(createFroyoObject(flavors));
