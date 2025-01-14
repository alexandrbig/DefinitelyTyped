import polylabel from 'polylabel';

const polygon = [[[3116, 3071], [3118, 3068], [3108, 3102], [3751, 927]]];
polylabel(polygon);
polylabel(polygon, 1.0);
polylabel(polygon, 1.0, true);
polylabel(polygon, 1.0, false);

// $ExpectType number
polylabel(polygon)[0];
// $ExpectType number
polylabel(polygon)[1];
// $ExpectType number
polylabel(polygon).distance;

const [x, y] = polylabel(polygon);
// $ExpectType number
x;
// $ExpectType number
y;
