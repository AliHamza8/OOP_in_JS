// const user = {
//     username: "Ali",
//     loginCount: 5,
//     getUserDetails: function() {
//         console.log("Value: ", `${this.loginCount}`)
//     }
// }

// function userDetails(username, loginCount) {
//     this.username = username
//     this.loginCount = loginCount
//     return this
// }

// let userOne = new userDetails("Ali", 2)
// let userTwo = new userDetails("Hamza", 9)
// console.log(userOne)
// console.log(userTwo)
// console.log(userTwo.constructor)

// function mulNumber(num) {
//     return num * 5
// }

// mulNumber.power = 2

// console.log(mulNumber())
// console.log(mulNumber(5))


//prototype
function Employee(username, age, salary){
    this.username = username
    this.age = age
    this.salary = salary
    return this
}

Employee.prototype.addBonus = function(salary) {
    const newSal = this.salary + 5000
    console.log(newSal)
}

const emp1 = new Employee("Adil", 35, 45000)
const emp2 = new Employee("Adeel", 67, 89000)

emp1.addBonus()
emp2.addBonus()