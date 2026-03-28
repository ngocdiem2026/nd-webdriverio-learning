/** Exercise 1 - Environment Information Management */
const BASE_URL = "https://automationfc.com"
const timeout = 30000
console.log(`Exercise 1: The system will execute tests on ${BASE_URL} with a timeout set to {timeout}ms.`)

/** Exercise 2 - Mock Login Data */
let userAccount = {
    username: "test_Account_1",
    password: "0000@Ta",
    role: "User"
}
console.log(`Exercise 2: Test account: ${userAccount.username} | Role: ${userAccount.role}.`)
userAccount.role = "Manager"
console.log(`Exercise 2: Test account: ${userAccount.username} | Role: ${userAccount.role}.`)

/** Exercise 3 rol- Cart items */
const cartItems = ["iPhone 15", "Samsung S23", "MacBook M3"]
console.log(`Exercise 3: Number of items in the cart is ${cartItems.length} and 
    item #2 in the list is ${cartItems[1]}.`)

/** Exercise 4 - Check the status of the Test Case. */
const isElementDisplayed = true
const errorMessage = "hello"
console.log(`Exercise 4: Data type of "isElementDisplayed" is ${typeof isElementDisplayed} 
    and "errorMessage" is ${typeof errorMessage}.`)
let testResult
if (isElementDisplayed == true && errorMessage == "") {
    testResult = true
} else {
    testResult = false
}
console.log(`   The test result is ${testResult}`)

/** Exercise 5 - Define a selector */
const loginPageLocators = {
    usernameInput: "input#username",
    passwordInput: "input#password",
    loginButton: "button.btn-primary",
    rememberMeCheckbox: "input[type='checkbox']"
}
const actionLog = `Click the element located by the selector: ${loginPageLocators.loginButton}`
console.log(`Exercise 5: ${actionLog}`)

