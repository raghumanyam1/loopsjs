class Product{
    constructor(name, offer, price){
        this.name = name;
        this.offer = offer;
        this.price = price;
}
 
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Offer: ${this.offer}`);
        console.log(`Price: $${this.price.toFixed(3)}`);

    }
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}
const salesTax = 0.05;

const product1 = new Product("shirt", "offer valid", 19.99);
const product2 = new Product("pants", "offer valid", 29.99);
const product3 = new Product("shoes", "offer valid", 49.99);

product2.displayProduct();
 
const total = product2.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(3)}`);

console.log("-----------------------");

product3.displayProduct(); 
const total2 = product3.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total2.toFixed(3)}`);

console.log("-----------------------");
const grandtotal = total + total2;
console.log(`Grand Total: $${grandtotal.toFixed(3)}`);



class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    display() {
        console.log(`Name: ${this.name}`);
        console.log(`Salary: $${this.salary}`);
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    showDepartment() {
        console.log(`Department: ${this.department}`);
    }
}

const manager = new Manager("Raghu", 5000, "IT");

manager.display();
manager.showDepartment();

console.log("-----------------------");
console.log("-----------------------");

//encapsulation
class BankAccount {
    #balance;

    constructor(accountNumber, accountHolder) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.#balance = 0;
    }
    
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}`);
        } else {
            console.log("Invalid withdrawal amount.");
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount("123456789", "Raghu");
account.deposit(1000);
account.withdraw(500);
console.log(`Current Balance: $${account.getBalance()}`);


  



