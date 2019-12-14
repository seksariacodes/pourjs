class Field{
    constructor(){
      console.log("Field element created");
      }
      getHtml(){}
      getValue(){}
      getAttr(key){}
      getAllAttr(){}
      setAttr(dict){}
  }

class NumberF extends Field{
    constructor(id){
        super();
        this.id=id;
    }
    getHtml(){
        return '<input type="number" name="firstname">'
    }
}