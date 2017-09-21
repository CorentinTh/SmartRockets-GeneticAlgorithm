function Generation() {
    this.populationSize = 25;
    this.rockets = [];
    this.matingPool = [];
    this.nbGeneration = 1;

    for (var i = 0; i < this.populationSize; ++i) {
        this.rockets[i] = new Rocket();
    }

    this.evaluate = function() {
        var maxFit = 0;
        var lowestCount = config.lifeSpan;
        var fastestRocket;
        ++this.nbGeneration;

        for (var i = 0; i < this.populationSize; ++i) {
            var r = this.rockets[i];
            r.computeFiteness();
            if (r.reached) {
                if (r.countToReach < lowestCount) {
                    lowestCount = r.countToReach;
                    fastestRocket = r;
                }
            }

            if (r.fitness > maxFit) {
                maxFit = r.fitness;
            }
        }

        if (fastestRocket) {
            fastestRocket.fitness *= 5;
        }

        this.matingPool = [];

        for (var i = 0; i < this.populationSize; ++i) {
            this.rockets[i].fitness /= maxFit;

            var n = this.rockets[i].fitness * 100;

            for (var j = 0; j < n; ++j) {
                this.matingPool.push(this.rockets[i]);
            }
        }
    }

    this.selection = function() {
        var newRockets = [];

        for (var i = 0; i < this.rockets.length; i++) {
            var dnaA = random(this.matingPool).dna;
            var dnaB = random(this.matingPool).dna;

            var child = dnaA.crossover(dnaB);
            child.mutation();

            newRockets[i] = new Rocket(child);
        }

        this.rockets = newRockets;
    }

    this.run = function() {
        if (this.genrated) {
            var oldNbGeneration = this.nbGeneration;
            while (this.nbGeneration < oldNbGeneration + config.generationStep - 1) {
                this.engine(false);
            }
        }

        this.genrated = false;
        this.engine(true);
    }

    this.engine = function(draw) {
        for (var i = 0; i < this.populationSize; ++i) {
            this.rockets[i].update();
            if (draw) {
                this.rockets[i].show();
            }
        }

        if (++count >= config.lifeSpan) {
            this.evaluate();
            this.selection();
            count = 0;
            this.genrated = true;
        }
    }
}
