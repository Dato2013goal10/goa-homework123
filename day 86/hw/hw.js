// const items = {
//     apple: 2,
//     banana: 1.5,
//     orange: 3
//     };
    
//     const result = Object.entries(items).map(
//     ([item, price]) => `${item}: $${price}`
//     );
    
// console.log(result);

// const obj = {
//     name: "David",
//     age: 13,
//     country: "Georgia"
// };

//     const props = ["name", "age", "city", "country", "email"];

//     let count = 0;

//     props.forEach(p => {
//     if (Object.hasOwn(obj, p)) count++;
//     });

//     console.log(count);

//     const obj = {
//         cpu: "i3-9100F",
//         gpu: "GTX 1060",
//         ram: "8GB",
//         ssd: "500GB"
//     };
    
//     const keys = Object.keys(obj);
//     const keyCount = keys.length;
//     const hasGpu = keys.includes("gpu");
    
//     console.log(keyCount);
//     console.log(hasGpu);

//     const obj = {
//         a: 10,
//         b: 25,
//         c: 5,
//         d: 40
//     };
    
//     const values = Object.values(obj);
    
//     const total = values.reduce((sum, v) => sum + v, 0);
//     const max = Math.max(...values);
    
//     console.log(total);
//     console.log(max);
