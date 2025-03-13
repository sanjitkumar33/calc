// let firstName = "Michal"
// let lastName = "Peter"

let sayHi = {
    firstName: 'Zoe',
    lastName: 'Lisa',
    greet:function(){
        return `say Hi to ${this.firstName} ${this.lastName}`
    }
}
console.log(sayHi.greet());
// say Hi to Michal Peter
// say Hi to Zoe Lisa