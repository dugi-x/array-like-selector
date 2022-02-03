function selector(path){

    var element = document.querySelector(path)
    if (element) {
        this[ 0 ] = element;
        this.length = 1;
    }
    return this;
}

selector.prototype.length = 0; //Object(0)
selector.prototype.splice = [].splice; //(new Array).splice
