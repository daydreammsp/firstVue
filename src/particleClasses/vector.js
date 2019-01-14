export default class vector {
    constructor(x,y){
        this._x = x;
        this._y = y;
    }
    setX(value){
        this._x = value;
    }
    getX(){
        return this._x;
    }
    setY(value){
        this._y = value;
    }
    getY(){
        return this._y;
    }
    setAngle(angle){
        let length = this.getLength();
        this._x = Math.cos(angle) * length;
        this._y = Math.sin(angle) * length;
    }
    getAngle(){
        return Math.atan2(this._y,this._x);
    }
    setLength(length){
        let angle = this.getAngle();
        this._x = Math.cos(angle) * length;
        this._y = Math.sin(angle) * length;
    }
    getLength(){
        return Math.sqrt(this._x * this._x + this._y * this._y);
    }
    add(v2){
        return new vector(this._x + v2.getX(), this._y + v2.getY());
    }
    subtract(v2){
        return new vector(this._x - v2.getX(), this._y - v2.getY());
    }
    multiply(val){
        return new vector(this._x * val, this._y * val);
    }
    divide(val){
        return new vector(this._x / val, this._y / val);
    }
    addTo(v2){
        this._x += v2.getX();
        this._y += v2.getY();
    }
    subtractFrom(v2){
        this._x -= v2.getX();
        this._y -= v2.getY();
    }
    multiplyScalar(val){
        this._x *= val;
        this._y *= val;
    }
    divideScalar(val){
        this._x /= val;
        this._y /= val;
    }
}