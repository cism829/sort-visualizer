const arrayGrid = document.getElementById('array-grid');
const bubbleSelect = document.getElementById('select');
const bubbelInput = document.getElementById('numberHold');

let sorted = new Set();

bubbleSelect.addEventListener('click', ()=>{
    bubbleSort(arrayGen(bubbelInput.value));
})

console.log('********')

function bubbleSort(array) {
    createGrid(array); 

    let i = 0;
    let j = 0; 

    function step() {
        if (i < array.length - 1) {
            let swapped = false;

            if (j < array.length - 1 - i) {
                createGrid(array, j, j + 1, false);

                setTimeout(() => {
                    if (array[j] > array[j + 1]) {
                        let temp = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = temp;
                        swapped = true;
                        console.log('swapped');
                        createGrid(array, j, j + 1, true); 
                    }

                    j++;
                    setTimeout(step, 400); 
                }, 500); 
            } else {
                sorted.add(array[array.length - 1 - i]);
                console.log('Sorted elements:', sorted);
                console.log('2');

                if (swapped || i < array.length - 1) {
                    j = 0;
                    i++; 
                    if(i == array.length -1){
                        sorted.add(array[array.length - 1 - i]);
                    }
                    createGrid(array, j, j + 1, false);
                    setTimeout(step, 100); 
                } else {
                    createGrid(array, j, j + 1, false);
                    console.log('Sorting complete');
                    return;
                }
            }
        }
    }

    setTimeout(step, 100); 
}

function swap(x, y) {
    let temp = x;
    x = y;
    y = temp;
    return [x, y];
}

function createGrid(array, green, yellow, swap) {
    // console.log('grid create')

    arrayGrid.replaceChildren();

    for (let i = 0; i < array.length; i++) {
        let myDiv = document.createElement('div');
        myDiv.classList.add('number');
        let para = document.createElement('h2');
        para.textContent = array[i];

        if (swap === true) {
            if (green === i) {
                myDiv.id = 'swap';
            }
            if (i === yellow) {
                myDiv.id = 'less';
            }
        } else {
            if (i === green) {
                myDiv.id = 'target'; 
            }
            if (i === yellow) {
                myDiv.id = 'compare'; 
            }
        }

        if (sorted.has(array[i])) {
            myDiv.id = 'sorted'; 
        }
        myDiv.append(para);
        arrayGrid.append(myDiv);
    }
}

function arrayGen(number) {
    let array = [];
    for (let i = 0; i < number; i++) {
        let rando = Math.floor(Math.random() * 100) + 1;
        array.push(rando);
    }
    return array;
}
