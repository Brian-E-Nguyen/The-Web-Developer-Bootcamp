echo('Echo!!!', 10);
echo('Tater tots', 3);

function echo(message, numberOfIterations) {
    for (let index = 0; index < numberOfIterations; index++) {
        console.log(message);
    }
}