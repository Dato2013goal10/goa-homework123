class Student{
    constructor (name,surename,age,academy,group,favColor,favLanguage) {
        this.name = name
        this.surename = surename
        this.age = age
        this.academy = academy
        this.group = group
        this.favColor = favColor
        this.favLanguage = favLanguage
    }

    logName(){
        console.log(this.name + " " + this.surename)
    }
}

class ProgrammingLanguage {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    }
    
    const language = new ProgrammingLanguage("JavaScript", 1995);
    console.log(language);
    
