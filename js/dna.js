function DNA(genes){
    if(genes){
        this.genes = genes;
    }else {
        this.genes = [];

        for (var i = 0; i < config.lifeSpan; ++i) {
            this.genes[i] = p5.Vector.random2D();
            this.genes[i].setMag(config.maxForce);
        }
    }

    this.crossover = function(partner){
        var newGenes = [];
        var mid = floor(random(this.genes.length));

        for (var i = 0; i < this.genes.length; ++i) {
            if(i > mid){
                newGenes[i] = this.genes[i];
            }else{
                newGenes[i] = partner.genes[i];
            }
        }

        return new DNA(newGenes);

    }

    this.mutation = function(){
        for (var i = 0; i < this.genes.length; ++i) {
            if(random(1) < config.mutation){
                this.genes[i] = p5.Vector.random2D();
                this.genes[i].setMag(config.maxForce);
            }
        }

    }
}
