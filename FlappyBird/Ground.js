function Ground() {
    this.height = 30;
    this.topPixelCoord = height - this.height;
    this.pixelOffset = 0;

    this.show = function () {
        fill(0);
        rect(0, this.topPixelCoord, width, height);
        for (var i = this.pixelOffset; i < width; i += groundSprite.width) {
            image(groundSprite, i, this.topPixelCoord);
        }
    }

    this.update = function() {
        this.pixelOffset -= panSpeed;
        if(this.pixelOffset <= -groundSprite.width) {
            this.pixelOffset += groundSprite.width;
        }
    }

    this.hitsGround = function(bird) {
        return (bird.y + birdSprite.height > height - this.height)
    }
}