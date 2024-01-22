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
// function Employee(username, age, salary){
//     this.username = username
//     this.age = age
//     this.salary = salary
//     return this
// }

// Employee.prototype.addBonus = function(salary) {
//     const newSal = this.salary + 5000
//     console.log(newSal)
// }

// const emp1 = new Employee("Adil", 35, 45000)
// const emp2 = new Employee("Adeel", 67, 89000)

// emp1.addBonus()
// emp2.addBonus()

//Injecting method to object
// const superHeroes = ["Batman", "Spiderman"]

// const heroPower = {
//     Batman: "bats",
//     Spiderman: "sling"
// }

// Object.prototype.askPower = function() {
//     console.log(`Powers and Heroes`)
// }

// superHeroes.askPower()
// heroPower.askPower()

// function setUsername(username) {
//     this.username = username
// }

// function createUser(username, password, email) {
//     setUsername.call(this, username)

//     this.password = password
//     this.email = email
// }

// let newUser = new createUser("Ali", "123", "email@exam.com")
// console.log(newUser)

// class User {
//     constructor(username, password, email) {
//         this.username = username
//         this.password = password
//         this.email = email
//     }

//     encryptPassword() {
//         return `${this.password}123`
//     }
// }

// const newUser = new User("Ali", "abc", "email@gmail.com")
// console.log(newUser.encryptPassword())


function User(username, password, email) {
    this.username = username
    this.password = password
    this.email = email
}

User.prototype.encryptPassword = function() {
    return `${this.password}123`
}

const newUser = new User("Ali", "abc", "email@gmail.com")
console.log(newUser.encryptPassword())