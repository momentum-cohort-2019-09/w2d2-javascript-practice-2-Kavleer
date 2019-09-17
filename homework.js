// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.

//
// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.

// function remove(memberlist,member){
//     for (let x of memberlist){
//     let idx=memberlist.indexOf(x)
//     if (idx === -1){
//     return memberlist
//     }
//     else if (x===member){
//     memberlist.splice(idx,1)
//     }
//     }return memberlist
// }

// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.

function remove(memberlist,member){
    let newMembers=memberlist.slice()
    for (let x of newMembers){
    let idx=newMembers.indexOf(x)
    if (idx === -1){
    return memberlist
    }
    else if (x===member){
    newMembers.splice(idx,1)
    }
    }return newMembers
}

// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.

function sum(list){
    let sum=0
    for (let i=0; i< list.length; i++){
        sum +=list[i]
    } return sum

}
// 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.

function average(list){
    if (list.length >0){
    let avg
    avg = (sum(list) /list.length)
    return avg
    } 
}
// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.

function minimum(list){
    let min=list[0]
    for (let i=0; i< list.length; i++){
    if (list[i]< min){
        min=list[i]
    }
    }return min
}
// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.

// function selectionSort(list){
//     if (list.length >0 && list.length>1){
//     sortList=list.slice()
//     let sorted
//     for (let i=0; i< sortList.length; i++){
//     minimum(sortList)
//     sorted.push(min)
//     remove(sortlist,min)
//     }if (list===sorted){
//         return list
//     }else
//     return sorted
//     }return list
// }
// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion"`.

function textList(input){
    let string=""
    if (input.length>0){
    string= string + input[0]
    if (input.length===1){
        return string
    }
    for (let i=1; i< input.length; i++){
    string=string + "," + input[i]
    }return string
    }return string
}