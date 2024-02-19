
// class for squares
//
class Square {
	constructor (width, height) {
		this.width	= width;
		this.height = height;
		this.x;
		this.y;
		this.color;
	}
}

//	 subclass green

class GreenSquare extends Square {
	constructor (originX, originY) {
		super(originX, originY);
		this.color	= '#00ff00';
		this.width	= 50;		// get sizes 
		this.height	= 50;		// get sizes 
		this.x = originX;
		this.y = originY;
	}
}
//	 subclass white

class WhiteSquare extends Square {
	constructor (originX, originY) {
		super(originX, originY);
		this.color = '#ffffff';
		this.width	= 10;		// get sizes 
		this.height	= 10;		// get sizes 
		this.x = originX;
		this.y = originY;
	}
}
//	 subclass red

class RedSquare extends Square {
	constructor (originX, originY) {
		super(originX, originY);
		this.color = '#ff0000';
		this.width	= 50;		// get sizes 
		this.height	= 50;		// get sizes 
		this.x = originX;
		this.y = originY;
	}
}
//	 method moveUp


//	 method moveDown

//	 method moveLeft

//	 method moveRight



//	 tests

// console.log(white);
// console.log(green);
// console.log(red);

