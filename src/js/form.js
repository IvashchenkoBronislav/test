
const name = document.querySelector("#name")
const phoneNumber = document.querySelector("#phone_number")
const eMail = document.querySelector("#e_mail")
const product = document.querySelector("#product")
const messege = document.querySelector("#messege")
const sendButton =document.querySelector("#send_messege")


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
}

starDell(phoneNumber,starPhoneNumber)
starDell(eMail,starEMail)
starDell(messege,starMessege)

sendButton.addEventListener("click",()=>{
    if(phoneNumber.value != false){
        if(eMail.value !=false){
            if(messege.value !=false){
                alert("Вы не написали свой запрос в Сообщении, укажите пожалуста")
            }
        }else{
            alert("Вы не указали номер E-mail,укажите пожалуста и повторите попытку!")
        }
    }else{
        alert("Вы не указали номер Tелефона,укажите пожалуста и повторите попытку!")
    }
})