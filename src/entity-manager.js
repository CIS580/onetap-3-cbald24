module.exports = exports = EntityManager;

function EntityManager(width, height, cellSize)
{
    this.worldWidth = width;
    this.worldHeight = height;
    this.cellSize = cellSize;
    this.widthInCells = Math.ceil(width / cellSize);
    this.numberOfCells = this.widthInCells * Math.ceil(height / cellSize);
    this.cells = [];
    for (var i = 0; i < this.numberOfCells; i++)
    {
        this.cells[i] = [];
    }
}

EntityManager.prototype.addEntity = function(entity){
    var left = Math.floor(entity.x / this.cellSize);
    var right = Math.ceil((entity.x+width) / cellSize);
    var top = Math.floor(entity.y / this.cellSize);
    var bottom = Math.ceil((entity.y + height) / this.cellSize);
    for(var x = left; x < right; x++) {
        for (var y = top; y< bottom; y++)
        {
            this.cells[y * this.widthInCells + x].push(entity);
            if(!entity.cells) entity.cells = [];
            entity.cells.push({x: x, y: y});
        }
    }
}

EntityManager.prototype.updateEntity = function(entity)
{
    
}

EntityManager.prototype.collide = function(callback)
{
    var self = this.cells.forEach(function(cell, i) {
        cell
    }
    )
}

