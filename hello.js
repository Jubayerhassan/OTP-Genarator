// function generateOTP(){
//     let digite = '012345679'
//     let OTP = ' ';

//     for(let i= 0; i < 5; i++){
//         OTP += digite[Math.floor(Math.random() * 10)]
//     }

//     let span = document.querySelector('.box span');
//     span.innerHTML = OTP
// }


function generateOTP(){
    let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let OTP = '';

    for(let i = 0; i < 5; i++){
        OTP += alpha[Math.floor(Math.random() * 10)]
    }

    let span = document.querySelector('.box span');
    span.innerHTML = OTP
}



