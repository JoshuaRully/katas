const PI = 3.14159 ;

const sphereVolume = function (radius) {
  let r = radius;
  return (4 / 3) * PI * (r * r * r);
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  let r = radius;
  let h = height;
  return (1 / 3) * PI * (r * r) * h;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  let h = height;
  let w = width;
  let d = depth;
  return (d * w) * h;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let total = 0;

  for (solid of solids) {
    if (solid.type === 'sphere') {
      total += sphereVolume(solid.radius);
    } else if (solid.type === 'cone') {
      total += coneVolume(solid.radius, solid.height);
    } else if (solid.type ==='prism') {
      total += prismVolume(solid.height, solid.width, solid.depth);
    }
  }
  return total;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);