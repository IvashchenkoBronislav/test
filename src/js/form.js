
const nameI = document.querySelector("#name")
const phoneNumber = document.querySelector("#phone_number")
const eMail = document.querySelector("#e_mail")
const product = document.querySelector("#product")
const messege = document.querySelector("#messege")
const sendButton =document.querySelector("#send_messege")
const checkButton = document.querySelector("#comf_check")


const starPhoneNumber = document.querySelector("#star_phone_number")
const starEMail = document.querySelector("#star_e_mail")
const starMessege = document.querySelector("#star_case_messege")



const starDell= (inputId, starId)=>{
    inputId.addEventListener("keyup",()=>{
        if(inputId.value != false){
            starId.innerText = ""
        }else if (inputId.value === ""){
            starId.innerText = "*"
        }
    })
    inputId.addEventListener("keydown",()=>{
        if(inputId.value != false){
            starId.innerText = ""
        }else if (inputId.value === ""){
            starId.innerText = "*"
        }
    })
}

starDell(phoneNumber,starPhoneNumber)
starDell(eMail,starEMail)
starDell(messege,starMessege)

// const funCollect = (input,value) =>{
//     value = input.value 
// }
const locStorage = window.localStorage
let localKay = locStorage.getItem("key");

const locKayGen = () =>{
    console.log(localKay)
    if(localKay === null){
        locStorage.setItem("key","0")
    }else{
        locStorage.setItem("key",localKay++)
    }
}


const collectInfo = () =>{
    
    let nemeInfo = nameI.value;
    let phoneNumberInfo = phoneNumber.value;
    let emailInfo = eMail.value;
    let productInfo = product.value;
    let messegeInfo = messege.value;

    let ollInfo = {
        neme:nemeInfo,
        phone:phoneNumberInfo,
        email:emailInfo,
        prod:productInfo,
        messeg:messegeInfo,
    }

    nameI.value = "";
    phoneNumber.value = "";
    eMail.value = "";
    product.value = "";
    messege.value = "";

    let jsonInfo = JSON.stringify(ollInfo)
    locStorage.setItem(localKay,jsonInfo)
    locKayGen()
}

const checkInfo = () =>{
    if(phoneNumber.value.length <= 0){
        alert("Вы не указали номер Tелефона,укажите пожалуста и повторите попытку!")
    }else if(phoneNumber.value.length <= 9 || phoneNumber.value.length >= 13 ){
        alert("Вы не коректно указали номер Телефона")
    }else{
        if(eMail.value !=false){
            if(messege.value !=false){
                collectInfo()
            }else{
                alert("Вы не написали свой запрос в Сообщении, укажите пожалуста")
            }
        }else{
            alert("Вы не указали номер E-mail,укажите пожалуста и повторите попытку!")
        }
    }
}



sendButton.addEventListener("click",()=>{
    checkInfo()    
})

