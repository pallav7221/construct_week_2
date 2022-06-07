let button = document.querySelector("#button>input");

let orderStatus = document.querySelector(".orderStatus");

button.addEventListener("click", () => {

    let orderno = document.querySelector(".input-data>input").value;
    let emailOrNumber = document.querySelector("#email").value;

    if (orderno == "1" && emailOrNumber == "9") {
        event.preventDefault();
        orderStatus.innerHTML = ""
        let box = document.createElement("div")
        box.setAttribute("class", "popUp");
        let image = document.createElement("img")

        setTimeout(() => {
            image.src = "../images/processing.jpg"
            box.append(image)
            orderStatus.append(box)
            setTimeout(() => {
                image.src = "../images/shipped.jpg"
                box.append(image)
                orderStatus.append(box)
                setTimeout(() => {
                    image.src = "../images/inTransit.jpg"
                    box.append(image)
                    orderStatus.append(box)
                    setTimeout(() => {
                        image.src = "../images/delivered.jpg"
                        box.append(image)
                        orderStatus.append(box)
                    }, 3000)
                }, 3000)
            }, 3000)
        }, 3000)




    }
    else {
        alert("Wrong details")
    }

})

