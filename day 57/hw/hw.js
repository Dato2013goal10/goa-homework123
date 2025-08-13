let obj = {}

function createEmptyObject() {
    obj = {}
    console.log(obj)
}

function createPersonObject() {
    obj = { name: "David", age: 12, city: "Tbilisi" }
    console.log(obj)
}

function accessProperty() {
    console.log(obj.name)
}

function addProperty() {
    obj.country = "Georgia"
    console.log(obj)
}

function createNestedObject() {
    obj = {
        name: "David",
        age: 12,
        address: {
            city: "Tbilisi",
            street: "Rustaveli"
        }
    }
    console.log(obj)
}

function changeProperty() {
    obj.age = 13
    console.log(obj)
}

function bothGreaterThan10() {
    let a = 12, b = 15
    console.log(a > 10 && b > 10)
}

function atLeastOneTrue() {
    let a = 5, b = 20
    console.log(a > 10 || b > 10)
}

function invertBoolean() {
    let value = true
    console.log(!value)
}

function combineLogical() {
    let a = 12, b = 8, c = 20
    console.log((a > 10 && b < 10) || c > 15)
}
