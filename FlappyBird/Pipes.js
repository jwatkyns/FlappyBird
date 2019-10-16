function Pipes() {
    this.gap = 160;
    this.x = width;
    this.y = random(height-150, 200);
    this.scoreAssigned = false;

    this.show = function() {
        image(topPipeSprite, this.x, 0 + this.y - 800 - this.gap);
        image(bottomPipeSprite, this.x, this.y);
    }

    this.update = function() {
        this.x -= panSpeed;
    }

    this.offscreen = function() {
        return (this.x < -topPipeSprite.width);
    }

    this.hits = function(bird) {
        if (bird.y < this.y - 160 || bird.y >this.y) {
            if (bird.x + birdSprite.width/2-5 > this.x + 1 && bird.x - birdSprite.width/2-5 < this.x - 1 + topPipeSprite.width) {
                return true;
            }
        }
        return false;
    }

    this.score = function() {
        if (!this.scoreAssigned && this.x + topPipeSprite.width < width/3) {
            console.log("Scored a point");
            this.scoreAssigned = true;
            playerScore++;
        }
    }
}