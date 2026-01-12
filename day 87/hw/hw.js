    class Person {
        constructor(name, age) {
        this.name = name
        this.age = age
        }
        greet() {
        console.log(`Hi, my name is ${this.name}`)
        }
    }
    
    const person1 = new Person("David", 13)
    person1.greet()
    
    class Car {
        constructor(brand, year) {
        this.brand = brand
        this.year = year
        }
        printBrand() {
        console.log(this.brand)
        }
    }
    
    const car1 = new Car("BMW", 2018)
    const car2 = new Car("Toyota", 2020)
    car1.printBrand()
    car2.printBrand()
    
    class Animal {
        constructor(type) {
        this.type = type
        }
        printType() {
        console.log(this.type)
        }
    }
    
    const animal1 = new Animal("Dog")
    animal1.printType()
    
    class Student {
        constructor(name, grade) {
        this.name = name
        this.grade = grade
        }
        printGrade() {
        console.log(this.grade)
        }
    }
    
    const student1 = new Student("Nika", 9)
    const student2 = new Student("Luka", 10)
    student1.printGrade()
    student2.printGrade()
    
    class Book {
        constructor(title, author) {
        this.title = title
        this.author = author
        }
        printTitle() {
        console.log(this.title)
        }
    }
    
    const book1 = new Book("1984", "George Orwell")
    book1.printTitle()
    
    class Phone {
        constructor(model, price) {
        this.model = model
        this.price = price
        }
        checkPrice() {
        console.log(this.price > 1000 ? "Expensive" : "Cheap")
        }
    }
    
    const phone1 = new Phone("iPhone", 1200)
    const phone2 = new Phone("Redmi", 400)
    phone1.checkPrice()
    phone2.checkPrice()
    