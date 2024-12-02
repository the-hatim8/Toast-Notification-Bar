let toastBox = document.getElementById("toastBox")
let successMag = '<i class="fa-solid fa-circle-check"></i>Successfully Submitted';
let errorMag = '<i class="fa-solid fa-circle-xmark"></i>Please fix the error!';
let invalidMag = '<i class="fa-solid fa-circle-exclamation"></i>Invalid Input, Check again';

function showToast(msg){
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('error')){
        toast.classList.add('error');
    }
    if(msg.includes('Invalid')){
        toast.classList.add('Invalid');
    }

    setTimeout(()=>{
        toast.remove();
    }, 6000)
}