//ex1
{
    class Author {
        constructor(name, email, gender) {
            this.name = name;
            this.email = email;
            this.gender = gender;
        }
        getName() { return this.name }
        getEmail() { return this.email }
        getGender() { return this.gender }
        toString() {
            return `Author: ${this.name}, 
        Email:${this.email}, Gender: ${this.gender}`
        }
    }

    class Book extends Author {
        constructor(name, email, gender, title, price, quantity) {
            super(name, email, gender);
            this.title = title;
            this.price = price;
            this.quantity = quantity;
        }
        getTitle() { return this.title }
        getAuthor() { return super.toString() }
        getPrice() { return this.price }
        setPrice(price) { this.price = price }
        getQuantity() { return this.quantity }
        getProfit() { return this.price * this.quantity }
        toString() {
            return `Title: ${this.title}, ${super.toString()}, Price: ${this.price} $, Quantity: ${this.quantity}`;
        }
    }
    const author1 = new Author("Anatoli Aleqsanyan", "anatolialqsanyan@gmail.com", "Male");
    console.log(author1)
    const book1 = new Book("Anatoli Aleqsanyan", "anatolialqsanyan@gmail.com", "Male", "NewBook", 50, 100);
    console.log(book1.toString());
    console.log(book1.getEmail());
    console.log("Profit:", book1.getProfit(), "$");



}

//ex2
{
    class Account {
        constructor(id, name, balance) {
            this._id = id;
            this._name = name;
            this._balance = balance
        }
        get id() { return this._id }
        get name() { return this._name }
        get balance() { return this._balance }
        toString() {
            return `Account Id: ${this._id}, 
    Name:${this._name}, Balance: ${this._balacne}`
        }
        credit(amount) { return this._balance += amount }
        debit(amount) {
            if (amount <= this._balance) {
                this._balance -= amount
                return this._balance
            }
            else {
                console.log("Amount exceeded Balance")
            }
        }
        transferTo(anotherAccount, amount) {
            if (amount <= this._balance) {
                this._balance -= amount
                anotherAccount.credit(amount)
                return this._balance
            }
            else {
                console.log("Amount exceeded Balance")

            }
        }

        static identifyAccounts(account1, account2) {
            return account1.id === account2.id &&
                account1.name === account2.name &&
                account1.balache === account2.balance;
        }

    }
    const account1 = new Account(1, "Anatoli", 2000)
    const account2 = new Account(1, "Aleqsanyan", 2500)


}


//ex 3
{
    class Person {
    constructor(firstName, lastName, age, gender) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._gender = gender;
        this._age = age;
    }
    get firstName() {return this._firstName;}
    get lastName() {return this._lastName;}
    get gender() {return this._gender;}
    get age() {return this._age;}
    toString() {return `${this._firstName} ${this._lastName} - ${this._age}`; }
}
class Student extends Person {
    constructor(firstName, lastName, age, gender, program, year, fee) {
        super(firstName, lastName, age, gender);
        this._program = program;
        this._year = year;
        this._fee = fee;
    }
    get program() {return this._program; }
    set program(program) {this._program = program;}
    get year() {return this._year;}
    passExam(programName, grade) {
        const programIndex = this._program.findIndex(prog => prog.programName === programName);
        if (programIndex !== -1) {
            this._program[programIndex].grade = grade;
            const passedAllExams = this._program.every(prog => prog.grade >= 50);
            if (passedAllExams) {
                this._year++;
            }
        }
    }
    toString() {
        return `${super.toString()} - Year: ${this._year}, Fee: ${this._fee}`;
    }
}
const student = new Student('Anatoli', 'Aleqsanyan', 23, 'Male', [{ programName: 'Math', grade: 75 }], 1, 500);
console.log(student.toString())
student.program = [{ programName: 'Science', grade: 52 }];
console.log(student.program);
student.passExam('Science', 52);
console.log(student.program);




}
