function Bird() {
    this.y = height/2;
    this.y = constrain(this.y, 0, height - 10 - birdSprite.height);
    this.x = width/3;
    this.gravity = 1.5;
    this.velY = -20;
    this.size = 40;
    this.fallRotation = -PI / 6;

    this.show = function() {
        translate(this.x - this.size / 2 - 8 + birdSprite.width / 2, this.y - this.size / 2 + birdSprite.height / 2);
        if (this.velY < 8) {
            rotate(-PI / 6);
            this.fallRotation = -PI / 6;
        } else if (this.velY <= 15) {
            this.fallRotation += PI / 24;
            this.fallRotation = constrain(this.fallRotation, -PI / 6, PI / 2);
            rotate(this.fallRotation);
        } else {
            rotate(PI / 2);
        }
        image(birdSprite, -birdSprite.width/2, -birdSprite.height/2);
    }

    this.up = function() {
        this.velY = -20;
    }

    this.update = function() {
        this.velY += this.gravity;
        this.velY *= 0.9;
        this.y += this.velY;

        if (this.y < 0) {
            this.y = 0;
            this.velY = 0;
        }

        if (this.y > height) {
            this.y = height;
            this.velY = 0;
        }
        this.y = constrain(this.y, 0, height - 10 - birdSprite.height);
    }


}