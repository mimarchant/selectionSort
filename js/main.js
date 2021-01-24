let cardNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
let cardTypes = ["hearts", "spades", "diamonds", "clubs"]

const cardNumber = () => {

    let num = Math.floor(Math.random() * cardNumbers.length)
    return cardNumbers[num]
}

const cardType = () => {

    let num = Math.floor(Math.random() * cardTypes.length)
    return cardTypes[num]
}

let input = document.querySelector(".cartas");
let btnDraw = document.querySelector(".draw");
let btnSort = document.querySelector(".sort");
let btnBorrar = document.querySelector(".delete");
let main = document.querySelector("main")
let cardArray = [];
//let section = document.querySelector(".bubble-sort")

btnDraw.addEventListener("click", (e) => {
    if (input.value !== "") {
        main.innerHTML = ""
        numCartas = parseInt(input.value);

        let i = 0;
        while (i < numCartas) {
            let newSpan = document.createElement("span");
            let newDiv = document.createElement("div");
            newSpan.classList.add("numero");
            newSpan.innerHTML = cardNumber();
            newDiv.classList.add(cardType());
            cardArray.push({ number: newSpan.innerHTML, type: newDiv.classList.value })
            console.log(cardArray)
            newDiv.classList.add("miniCard");
            newDiv.classList.add("d-flex");
            newDiv.appendChild(newSpan)

            console.log(newSpan.innerHTML)
            main.appendChild(newDiv)
            console.log(cardArray)
            i++
        }
    }

})

btnBorrar.addEventListener("click", e => {
    //main.innerHTML= "";
    //input.value = "";
    location.reload();
})

const drawSorted = () => {
    for (let j = 0; j < cardArray.length; j++) {
        let cartaSpan = document.createElement("span");
        let cartaDiv = document.createElement("div");
        cartaSpan.classList.add("numero");
        cartaSpan.innerHTML = cardArray[j]["number"];
        cartaDiv.classList.add(cardArray[j]["type"]);
        cartaDiv.classList.add("miniCard", "d-flex")

        cartaDiv.appendChild(cartaSpan);
        contenedor.appendChild(cartaDiv)

    }
    document.body.appendChild(contenedor);
}


btnSort.addEventListener("click", (e) => {
    let n = cardArray.length;

    for (let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (parseInt(cardArray[j]["number"]) < parseInt(cardArray[min]["number"])) {
                min = j;
            }
        }
        if (min != i) {
            // Swapping the elements
            let tmp = cardArray[i];
            cardArray[i] = cardArray[min];
            cardArray[min] = tmp;
        }
        let contenedor = document.createElement("div")
        for (let h = 0; h < cardArray.length; h++) {
                let cartaSpan = document.createElement("span");
                let cartaDiv = document.createElement("div");
                cartaSpan.classList.add("numero");
                cartaSpan.innerHTML = cardArray[h]["number"];
                cartaDiv.classList.add(cardArray[h]["type"]);
                cartaDiv.classList.add("miniCard", "d-flex")

                cartaDiv.appendChild(cartaSpan);
                contenedor.appendChild(cartaDiv)

        }
        document.body.appendChild(contenedor);

    }
    return arr;
})




/* btnSort.addEventListener("click", e => {
    let stop = cardArray.length - 1;
    while (stop > 0) {
        let j = 0;
        while (j < stop) {
            if (parseInt(cardArray[j]["number"]) > parseInt(cardArray[j + 1]["number"])) {
                let aux = cardArray[j]["number"];
                cardArray[j]["number"] = cardArray[j + 1]["number"];
                cardArray[j + 1]["number"] = aux;

                let auxType = cardArray[j]["type"];
                cardArray[j]["type"] = cardArray[j+1]["type"];
                cardArray[j+1]["type"] = auxType;


                let contenedor = document.createElement("div")
                for (let i = 0; i < cardArray.length; i++) {
                    let cartaSpan = document.createElement("span");
                    let cartaDiv = document.createElement("div");
                    cartaSpan.classList.add("numero");
                    cartaSpan.innerHTML = cardArray[i]["number"];
                    cartaDiv.classList.add(cardArray[i]["type"]);
                    cartaDiv.classList.add("miniCard", "d-flex")

                    cartaDiv.appendChild(cartaSpan);
                    contenedor.appendChild(cartaDiv)

                }
                document.body.appendChild(contenedor);


            }
            j++;
        }
        stop--;
    }
    console.log(cardArray)
})
 */
