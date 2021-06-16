// let outer = (start, end) => {
//     let result = []
//     let recurse = (start, end) => {
//         if (start === end) return undefined
//         result.push(start)
//         recurse(start + 1, end)
//     }
//     recurse(start, end)
//     return result
// }


let recurse = (start,end) => {
if(start===end)return []
return [start].concat(recurse(start+1,end))
}


console.log(outer(1, 3))
