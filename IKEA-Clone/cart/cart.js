
const temp = ()=>{
    return ` <div id="deliveryOption">
        <div id="upperDiv">
           <h3>How would you like to receive your order?</h3> 
        </div>
        <div id="lowerDiv">
            <div>
                <button id="pinCode"><img src="https://order.ikea.com/in/en/checkout/static/media/ws-home-delivery-blue.ff16e8a8.svg" alt="">Home delivery</button>
            </div>
            <div>
                <button id="shop"><img src="https://order.ikea.com/in/en/checkout/static/media/ws-click-and-collect.6cad58e4.svg" alt="">Click & collect</button>
            </div>
        </div>
         <hr>
        <div id="checkDelivery">

        </div>`
}

let login =1;
if(login==1){
    document.querySelector("#temp").innerHTML=temp();
    document.querySelector("#loginButton").style.display="none";
    document.querySelector(".cartMsg>a").style.display="none";
}
let cart = 1;

let productDetails = document.querySelector("#productDetails");

function display() {
    productDetails.innerHTML="";
    for (let i = 0; i < 3; i++) {


        let mainbox = document.createElement("div");
        mainbox.setAttribute("id", "mainDiv")

        let div1 = document.createElement("div");
        div1.setAttribute("class", "upper")

        let div2 = document.createElement("div");
        let image = document.createElement("img");
        image.src = "https://secure.ikea.com/in/en/images/products/sodersjon-bath-mat__0991777_PE819589_S3.JPG";

        div2.append(image);

        let div3 = document.createElement("div");
        let productName = document.createElement("h3");
        productName.innerHTML = "SODERSJON";

        let productUse = document.createElement("p");
        productUse.innerHTML = "Bath mat";

        let productColor = document.createElement("p");
        productColor.innerHTML = "dark grey";

        let productDimension = document.createElement("p");
        productDimension.innerHTML = `50x80 cm (20x32") 205.079.89`;

        div3.append(productName, productUse, productColor, productDimension);
        let div4 = document.createElement("div");
        let productPrice = document.createElement("h3");
        productPrice.innerHTML = "Rs.999.00";
        div4.append(productPrice);
        let div7 = document.createElement("div");
        div7.append(div2, div3)
        div1.append(div7, div4);

        let div5 = document.createElement("div");

        div5.setAttribute("class", "lower");


        let div6 = document.createElement("div");
        let button = document.createElement("button");
        button.setAttribute("id", "imageSize")
        let productQunatity = document.createElement("select");
        let opt1 = document.createElement("option")
        opt1.innerHTML = "1";
        let opt2 = document.createElement("option")
        opt2.innerHTML = "2";
        let opt3 = document.createElement("option")
        opt3.innerHTML = "3";
        let opt4 = document.createElement("option")
        opt4.innerHTML = "4";
        productQunatity.append(opt1, opt2, opt3, opt4);
        let deleteButton = document.createElement("img");
        deleteButton.src = "	https://order.ikea.com/in/en/checkout/static/media/remove-thin-24.16c1cc7a.svg";
        button.append(deleteButton);
        div6.append(button, productQunatity);
        div6.setAttribute("id", "flexProp")
        mainbox.append(div1, div6)
        let hr = document.createElement("hr");
        productDetails.append(mainbox, hr);
    }
    
}
if (cart == 1) {
    display();
    document.querySelector(".cartMsg").style.display="none";
    document.querySelector("#browserButton").style.display="none";
    totatCart()
}
function totatCart() {
    let box = document.createElement("div");

    let hr = document.createElement("hr");
    hr.style.textDecoration = "dashed"
    let h2 = document.createElement("h3");
    h2.innerHTML = "Subtotal";

    let h1 = document.createElement("h3");
    h1.innerHTML = `Rs. ${1},${598}.00`;
    box.append(h2, h1);
    document.querySelector("#totalCartAmout").append(box)

}
document.querySelector("#pinCode").addEventListener("click", () => {
    document.querySelector("#checkDelivery").innerHTML = "";
    let box = document.createElement("div");
    box.setAttribute("id", "applyStyle")
    let para = document.createElement("p")
    para.innerHTML = "Enter a PIN code to see product availability and delivery options.";
    let inputbox = document.createElement("input");
    let proceedButton = document.createElement("button");
    proceedButton.innerText = "Proceed";
    box.append(para, inputbox, proceedButton);
    document.querySelector("#checkDelivery").append(box);
})

document.querySelector("#shop").addEventListener("click", () => {
    document.querySelector("#checkDelivery").innerHTML = "";

    let box = document.createElement("div");
    box.setAttribute("id", "buttonCenter")
    let select = document.createElement("select");
    select.setAttribute("id", "selectStore")
    let opt1 = document.createElement("option");
    opt1.innerHTML = "Select store";

    let opt2 = document.createElement("option");
    opt2.innerHTML = "IKEA Hyderabad";

    let opt3 = document.createElement("option");
    opt3.innerHTML = "IKEA Navi Mumbai";
    select.append(opt1, opt2, opt3);

    let proceedButton = document.createElement("button");
    proceedButton.innerText = "Click & collect";
    box.append(select, proceedButton);
    document.querySelector("#checkDelivery").append(box);
})



let createCart = document.querySelector("#createNewCart>button");
let createCart1 = document.querySelector("#createNewCart");

let changeCartName = document.querySelector(".changeCartName");
let newCart = document.querySelector("#newCart")

createCart.addEventListener("click",()=>{
    createCart1.innerHTML="";
    let box = document.createElement("div");
    let form = document.createElement("form")

    box.setAttribute("id","CreateCartContainer")

    let nameOfCart = document.createElement("label")
    nameOfCart.innerText = "Name:"
    
    let nameInput = document.createElement("input")
    nameInput.setAttribute("id","nameOfCart")

    let box1 = document.createElement("div");
    
    let cancelButton = document.createElement("button")
    cancelButton.setAttribute("id","cancelButton")
    cancelButton.addEventListener("click",()=>{



    })
    cancelButton.innerText="Cancel";

    let createCartButton = document.createElement("button")
    createCartButton.addEventListener("click",createNewCart)


    createCartButton.setAttribute("id", "createCartButton")
    createCartButton.innerHTML = "Create new cart";
    box1.append(cancelButton,createCartButton)

    form.append(nameOfCart,nameInput,box1)
    box.append(form)
   
    createCart1.append(box);

    
})




function createNewCart(){
    event.preventDefault();
    let parent = document.createElement("div"); 
    let box = document.createElement("div");

    // let hr = document.createElement("hr")

    let a = document.createElement("a")
    a.href = "./cart.html";
    a.innerHTML = document.querySelector("#nameOfCart").value;

    box.append(a);

    let box1 = document.createElement("div");

    let button1 = document.createElement("button")
    button1.setAttribute("class","changeCartName")
    button1.addEventListener("click",()=>{
        
        button1.style.display="none"
    })

    let image1 = document.createElement("img")
    image1.src = "https://order.ikea.com/in/en/checkout/static/media/edit-thin-24.ca4fff8f.svg";
    button1.append(image1);



    let button2 = document.createElement("button")
   
    let image2 = document.createElement("img")
    image2.src = "https://order.ikea.com/in/en/checkout/static/media/remove-thin-24.16c1cc7a.svg";
    button2.append(image2);

    box1.append(button1,button2);

    parent.append(box,box1);
    
    newCart.append(parent);
}





let overlay = document.querySelector(".overLay");
let closePopupButton = document.querySelector("#closePopUpButton");
let openPopupButton = document.querySelector(".cartDetail>button")

openPopupButton.addEventListener("click",function(){
   overlay.classList.add("active");


})
closePopupButton.addEventListener("click", () => {
    overlay.classList.remove("active");
})



