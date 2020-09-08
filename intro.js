//^Testing performance,efficiency
const nemos = ['s', 't', 'u', 'v', 'nemo'];
const nemo = ['nemo'];
const large = new Array(10000).fill('nemo');
function findNemo(array) {
            console.time("ArrayTime")
            for (let i = 0; i < array.length; i++) {
                        if (array[i] === 'nemo') {
                                    console.log("Found");
                        }
            }
            console.timeEnd("ArrayTime");
}
//findNemo(large)

