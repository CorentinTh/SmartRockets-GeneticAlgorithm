# SmartRockets-GeneticAlgorithm

![image smart rockets](http://divers.corentin-thomasset.fr/public/images/smart-rockets-screenshot.png "Smart rockets")

Try it: [live demo](http://divers.corentin-thomasset.fr/smart-rockets/).

## Description
A population of rectangle learn to reach a goal (the circle at the top) over time. A basic Genetic algorithm is used to make the population evoluate. The best performing rectangles have more chance to see their "genes" in the next generation.

If a rectangle reach the goal, it has 10 times more chance to be in the next generation. In the rectangles that have reached their goals, the quicker ones has also 10 times more chances to be in the newt generation. On the other hand, a rectangles that dies on an obstacle has 10 less chance to be part of the next genration than one that dies due to timeout.

Rectangles have a chance of mutating, which causes them to acquire a new, completely random set of genes. That why they will always be some rectangles that deviate from the trajectoire. It permits to optimize the path to reach the goal.

## Credit
Made with [p5.js](https://p5js.org/) and inspired by [The Coding Train](https://github.com/CodingTrain/Rainbow-Code) lesson.
