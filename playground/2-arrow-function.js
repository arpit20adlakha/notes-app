// const square = function (number) {
//     return number * number
// }

//
// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x
//

/*  this of the object is not available in case of arrow functions */
// console.log(square(3))
// const event = {
//     name: "Birthday Party",
//     printGuestList: () => {
//         console.log("Guest List For "+ this.name)
//     }
// }

/* here this.name inside forEach does not work because the function will have a this binding
of their own not of the parent which can be solved by using a arrow function which
does not have its own  this binding
 */
// const event = {
//     name: "Birthday Party",
//     guestList: ['aerpit', 'sasy','capsy'],
//     printGuestList: function () {
//         console.log("Guest List For "+ this.name)
//         this.guestList.forEach(function(guest) {
//             console.log(guest + ' is attending ' + this.name)
//
//         })
//     }
// }



// // the arrow function in here dont bind their own this value they access this value of
// the context in which they are created which here is printGuestList
const event = {
    name: "Birthday Party",
    guestList: ['arpit', 'sasy','capsy'],
    printGuestList: function () {
        console.log("Guest List For "+ this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)

        })
    }
}

event.printGuestList()