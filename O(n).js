//^O(n)->Fair
//!As no of elements/input increases operations also increases
//*Takes Linear time

const nemos = ['s', 't', 'u', 'v', 'nemo'];
const large = new Array(10000).fill('nemo');
function findNemo(array) {
            for (let i = 0; i < array.length; i++) {
                        if (array[i] === 'nemo') {
                                    console.log("Found");
                        }
            }

}
findNemo(large)