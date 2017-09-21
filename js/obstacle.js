function ObstacleManager(){
    this.obstacles = []

    this.isCollision = function(o){

        if (o.position.x > width || o.position.x < 0 || o.position.y > height || o.position.y < 0) {
            return true;
        }

        for (var i = 0; i < this.obstacles.length; i++) {
            if(this.obstacles[i].isCollision(o)){
                return true;
            }
        }

        return false;
    }

    this.draw = function(){
        for (var i = 0; i < this.obstacles.length; i++) {
            this.obstacles[i].draw();
        }

    }
}

function Obstacle(x, y, w, h) {
    this.position = createVector(x, y);
    this.width = w;
    this.height = h;

    this.isCollision = function(o) {
        if (o.position.x > this.position.x &&
            o.position.x < this.position.x + this.width &&
            o.position.y > this.position.y &&
            o.position.y < this.position.y + this.height) {
                return true;
        }

        return false;
    }

    this.draw = function(){
        rect(this.position.x,this.position.y,this.width,this.height);
    }
}
