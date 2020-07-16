var scores = [90, 98, 89, 100, 100, 86, 94];
average(scores); // return 94

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2); // return 68


function average(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var average = Math.ceil(sum / arr.length);
    console.log(average);
}