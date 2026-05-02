// const movies = ["dexter","harry potter","avengers"]

// const moviesDiv = (
//     <div>
//         {
//         movies.map((movies1,index) => <li key={index}>{movies1}</li>)
//         }
//     </div>
// )

const Component = () => {
    const list = ["Dashboard","Home","Components","Calendar","Charts","Documents"]
    {
        <div>
            <nav>
                <p>codewithrandom</p> <button></button>
                <ol>
                    {
                        list.map((ls,i) => (
                                <li key={i}>{ls}</li>
                        ))
                    }
                </ol>
            </nav>
        </div>
    }
}