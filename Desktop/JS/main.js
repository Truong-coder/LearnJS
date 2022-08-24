// ten bien
// khong dau cham phay code van chay, tuy nhien ko the viet tren cung 1 dong
/*
------
*/
//  var fullName = 'Dinh Thanh Truong';
// var age = 26;

// alert(fullName);
// alert(age);

// console.log(fullName)
// console.warn()
// console.error()

// confirm('Xac nhan ban du tuoi!')// tao ra 1 pop-up
// prompt('Xac nhan ban du tuoi!')// nguoi dung co the nhap du lieu trong pop-up

/*
// chi chay 1 lan sau 1s
setTimeout(function () {
    alert('Thong bao')
}, 1000)

/* chay vinh vien sau moi 1s
setInterval(function () {
console.log('Day la log' + Math.random())
},1000)

*/

// Toan tu 
// var a = 8
// var b = 4
// a /= b

// console.log(a)



// Create a class named "Model" which will inherit the methods from the "Car" class:
//class
class Car{
    //method
    constructor(name){
        this.brand = name;
            }
    present(){
        return 'I have a ' + this.brand;
    }
        }
class Model extends Car{
    constructor(name, mod){
        super(name)
        this.model = mod
        }
// The super() method refers to the parent class.
//By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.
    show(){
        return this.present() + ', it is a ' + this.model
    }
}
// create an object called "mycar" based on the Car class
    const mycar = new Car('Ford')
    mycar.present()
    //document.write (mycar.brand)
   // document.write (mycar.present())

//Create am object called myNewCar based on the Model class

    const myNewCar = new Model("ford", "Mustang")
    document.write(myNewCar.show())