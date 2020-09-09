////////////////////////
// !   Ignoring constants//
//                    //
////////////////////////
function calculateBigO(items) {
            console.log(items[0]);

            var midIndex = Math.floor(items.length / 2);
            var index = 0;
            while (index < midIndex) {
                        index++;
            }
            for (var i = 0; i < 100; i++) {
                        console.log("hi");
            }
}
//!      drop constants
//&    O(1+n/2+100)
//&   O(n/2 +1) 
//&  O(n+1)
//^   O(n)

function doSomething(item) {
            item.map(i => console.log(i)); //O(n)
            item.filter(i => i % 2 == 0)//O(n)
}
//&    O(2n) =>  O(n)

////////////////////////////////
//!    Different terms for input //
////////////////////////////////

function compressBox(boxes, boxes2) {
            boxes.forEach(function (boxes) {
                        console.log(boxes);
            })


            boxes2.forEach(function (boxes) {
                        console.log(boxes);
            })
}
//^   O(a+b)
//!   First for loop depends on size of boxes,second for loop depends on size of boxes2

//example2
//Logging all pairs of arrayTime
//&  Nested for loop we use * symbol
const chair = [1, 2, 3, 4, 5];
function pair(array) {
            for (let i = 0; i < array.length; i++) {
                        for (let j = 0; j < array.length; j++) {
                                    console.log(array[i], array[j]);
                        }
            }
}
pair(chair);
//^  O(n*n)=>O(n^2)

//^   Nested loop with different input

function compressBox(boxes, boxes2) {
            boxes.forEach(function (boxes1) {
                        boxes2.forEach(function (boxes2) {
                                    console.log(boxes1, boxes2);
                        })

            })
}
//&  O(a*b)

////////////////////////
//!  Drop Non Dominants//
////////////////////////
function pairSum(nos) {
            nos.forEach((no) => {
                        console.log(no);
            });

            nos.forEach((firstNo) => {
                        nos.forEach((secondNo) => {
                                    console.log(firstNo + secondNo);
                        })
            })
}
//&  O(n+n^2) =>Drop non dominant term
//*   O(n^2)

//!     O(x^2 + 3x +100 +x/2)=>O(x^2)