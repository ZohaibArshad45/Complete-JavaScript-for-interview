// chai aur code js video 40
// promises
// phr ya agy 

////  ================== 1 ==================
// async function abcd(){
//     var res = await fetch(`https://jsonplaceholder.typicode.com/users`)
//     var ans = await res.json()
//     console.log(ans)
// }
// abcd()

//// ================= 2 try and catch =================
async function abcd2 () {
    try {
        var res = await fetch(`https://jsonplaceholder.typicode.com/users`)
        var ans = await res.json()
        console.log(ans)
    } catch (error) {
        console.log(error)
    }
}
abcd2()

// ================== 3 then and catch =================
