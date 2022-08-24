//Class

class Car {
    constructor(name, power, age) {// method
      this.brand = name;
      this.powerhorse = power;
      this.years = age; 
    }
    // The constructor function is called automatically when the object is initialized.
    
    // create a method named "present"

    present(){
        return 'I have a ' + this.brand +'.';
    }

    car(){
        return ' The car is ' + this.years + ' years old, but it has ' + this.powerhorse +' HP'
    }
}
//Create a class named "Model" which will inherit the methods from the Car class

class Model extends Car{
    constructor(name,mod){
        super(name);
        this.model = mod;
    }
    show(){
        return '\n' + this.present() + ' It is a ' +this.model;
    }
}
  //create an object called 'mycar', 'mycar2'
  
  const mycar = new Car("Ford","300","5");
  const mycar2 = new Model("BMW","Sport")
  //document.write(mycar.brand);
  document.write(mycar.present());
  document.write(mycar.car());
  document.write(mycar2.show());

