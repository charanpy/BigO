//////////////////////
// !Space Complexity//
//////////////////////
//&variable decl
//&Data structures
//&function call
//&allocations



function a(n) {
            //variable declaration takes up memory
            for (let i = 0; i < n.length; i++) {
                        console.log('oh');
            }
}
a([1, 2, 3]);//O(1)=>space complex

function arr(n) {
            let hiArray = [];//creating data structure
            for (let i = 0; i < n.length; i++) {
                        hiArray[i] = 'hi'; //allocating memory
            }
            return hiArray;
}
arr([1, 2, 3, 4, 5])//^O(n)

const array = [{
            tweet: 'hi',
            date: 2012
},
{
            tweet: 'my',
            date: 2014
},
{
            tweet: 'teddy',
            date: 2016
}];
array[0];//O(1)
array[array.length - 1]   //0(1)
