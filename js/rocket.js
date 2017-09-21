function Rocket(dna) {
    this.position = createVector(width / 2, height);
    this.velocity = createVector(0, -1);
    this.acceleration = createVector();
    this.dna = dna ? dna : new DNA();

    this.reached = false;
    this.crashed = false;
    this.countToReach;
    this.fitness;

    this.applyForce = function(force) {
        this.acceleration.add(force);
    }

    this.update = function() {
        var d = dist(this.position.x, this.position.y, aime.x, aime.y);

        if (d < 15) {
            this.reached = true;
            this.position = aime.copy();
        }


        if (obstacleManager.isCollision(this)) {
            this.crashed = true;
        }

        if (!this.reached && !this.crashed) {

            this.countToReach = count;
            this.applyForce(this.dna.genes[count]);
            this.velocity.add(this.acceleration);
            this.position.add(this.velocity);
            this.acceleration.mult(0);
            this.velocity.limit(6);
        }
    }

    this.computeFiteness = function() {
        var d = dist(this.position.x, this.position.y, aime.x, aime.y);

        this.fitness = map(d, 0, width, width, 0);

        if (this.reached) {
            this.fitness *= 10;
        }

        if (this.crashed) {
            this.fitness /= 10;
        }
    }

    this.show = function() {
        push();
        translate(this.position.x, this.position.y);
        rotate(this.velocity.heading());
        rectMode(CENTER);
        fill(255, 80);
        rect(0, 0, 25, 8);
        pop();
    }
}
