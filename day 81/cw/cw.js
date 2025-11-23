// const languages = ["Js","Py","C++","Java","C","C#","HolyC"]

// console.log(languages.findIndex(el => el.length > 8))

    const technologies = [
        {
        name: "JavaScript",
        releaseYear: 1995,
        threadsCount: 1,
        usedInWebDev: true
        },
        {
        name: "Python",
        releaseYear: 1991,
        threadsCount: 1,
        usedInWebDev: true
        },
        {
        name: "Rust",
        releaseYear: 2010,
        threadsCount: "Multi-threaded", 
        usedInWebDev: false
        },
        {
        name: "React",
        releaseYear: 2013,
        threadsCount: 1,
        usedInWebDev: true
        },
        {
        name: "Go",
        releaseYear: 2009,
        threadsCount: "Highly concurrent (goroutines)",
        usedInWebDev: true
        }
    ];
    
    const firstBefore2000 = technologies.find(item => item.releaseYear < 2000);
    console.log(firstBefore2000);