const findNemo2 = array => {
    array.forEach(fish => {
        if (fish === 'nemo') {
            console.log('found nemo!');
        }
    })
}



const findNemo3 = array => {
    for (let fish of array) {
        if (fish === 'nemo') {
            console.log('found nemo!');
        }
    }
}

findNemo2(everyone);
findNemo3(everyone);



