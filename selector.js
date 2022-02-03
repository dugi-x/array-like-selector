function Selector(path){

    var element = document.querySelector(path)
    if (element) {
        this[ 0 ] = element ;
        this.length = 1;
    }
    return this;
}

Selector.prototype.length = 0; //Object(0)
Selector.prototype.splice = [].splice; //(new Array).splice

const selector = function(path){
    return new Selector(path)
}
