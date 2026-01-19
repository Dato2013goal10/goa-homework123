// საკლასო დავლება:
// შექმენით promise ობიექტი და მის executor ფუნქციაში ასეთი ლოგიკა დაწერეთ: შემოიღეთ მასივი, სადაც ჯგუფი 29-ის მოსწავლეების სახელები გექნებათ. შემდეგ, მასივიდან აირჩიეთ random ელემენტი და თუ ამ სახელის სიგრძე ნაკლებია 6-ზე, მოახდინეთ reject, სხვა შემთხვევაში resolve.
// თქვენს promise ობიექტზე გამოიძახეთ then მეთოდი და მას გადაეცით ორივე handler. ამ handler-ებმა უნდა მიიღონ პარამეტრში ინფორმაცია და ფუნქციაში უბრალოდ დაბეჭდეთ ეს ინფორმაცია.

const promise = new Promise((resolve, reject) => {
    const students = ["Giorgi", "Nika", "Datuna", "aleqsandre", "Luka", "nika"];
    const randomIndex = Math.floor(Math.random() * students.length);
    const randomName = students[randomIndex];

    if (randomName.length < 6) {
        reject(randomName);
    } else {
        resolve(randomName);
    }
    });

    promise.then(
    (result) => {
        console.log(result);
    },
    (error) => {
        console.log(error);
    }
);
