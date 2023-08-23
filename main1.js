var TimviecLength = document.querySelector('.bodyTimViec .anhHeaderTimViec1');
var TimviecImg = document.querySelector('.bodyTimViec .headerTimViec-img');
var nextBtn = document.querySelector('.bodyTimViec .btn1 .next');
var prevBtn = document.querySelector('.bodyTimViec .btn1 .prev');
var length = TimviecLength.offsetWidth;
var length1 = 0;
nextBtn.addEventListener('click', (e) => {
    length1+=length;
    if (length1 == length*3){
        length1 = 0;
        TimviecImg.style.marginLeft = `0`;
    } 
    else {
        TimviecImg.style.marginLeft = `-${length1}px`;
    }
})
prevBtn.addEventListener('click', (e) => {
    length1-=length;
    if (length1 < 0){
        length1 = length*2;
        TimviecImg.style.marginLeft = `-${length1}`;
    } 
    else {
        TimviecImg.style.marginLeft = `-${length1}px`;
    }
})
setInterval(function () {
    length1+=length;
    if (length1 == length*3){
        length1 = 0;
        TimviecImg.style.marginLeft = `0`;
    } 
    else {
        TimviecImg.style.marginLeft = `-${length1}px`;
    }
}, 9000);


var timviec = document.getElementById('timviec_trangtimviec');
// function themviec (linkanh, a, title2, luong, diadiem) {
//     html = '';
//     html+= `
//     <div timkiem__viecLam-items>
//     <div class="timkiem__item">
//         <div class="items1">
//             <img src="./asset/img/${linkanh}" alt="logo">
//             <div class="mieuta">
//                 <a href=""class="title1">${a}</a>
//                 <p class="title2">${title2}</p>
//             </div>
//         </div>

//         <div class="items">
//             <span>${luong}</span>
//             <span>${diadiem} </span>
//             <span><i class="love fa-regular fa-heart"></i></span>
//         </div>
//     </div>
// </div>
// </div>
// `;
//     return html;
// }
function themviec (linkanh, a, title2, luong, diadiem) {
    var div = document.createElement('div'); // Tạo một phần tử div mới
    div.classList.add('timkiem__viecLam-items'); // Thêm lớp cho phần tử div
    
    var html = `
        <div class="timkiem__item">
            <div class="items1">
                <img src="./asset/img/${linkanh}" alt="logo">
                <div class="mieuta">
                    <a href=""class="title1">${a}</a>
                    <p class="title2">${title2}</p>
                </div>
            </div>

            <div class="items">
                <span>${luong}</span>
                <span>${diadiem} </span>
                <span><i class="love fa-regular fa-heart"></i></span>
            </div>
        </div>
    `;

    div.innerHTML = html; // Gán nội dung cho phần tử div
    timviec.appendChild(div);
}

themviec('itemsvieclam1.webp', 'test test', 'là title', 'lên tới 40 triệu', 'Hà Nội');
themviec('itemsvieclam1.webp', 'test test', 'là title', 'lên tới 20 triệu', 'Thành Phố Hồ Chí Minh');
themviec('itemsvieclam1.webp', 'test test', 'là title', 'lên tới 40 triệu', 'Thành Phố Hồ Chí Minh');
themviec('itemsvieclam1.webp', 'test test', 'là title', 'lên tới 40 triệu', 'Thành Phố Hồ Chí Minh');
themviec('itemsvieclam1.webp', 'test test', 'là title', 'lên tới 40 triệu', 'Thành Phố Hồ Chí Minh');
themviec('itemsvieclam1.webp', 'test test', 'là title', 'lên tới 40 triệu', 'Thành Phố Hồ Chí Minh');
themviec('itemsvieclam1.webp', 'test test', 'là title', 'lên tới 40 triệu', 'Thành Phố Hồ Chí Minh');
themviec('itemsvieclam1.webp', 'test test', 'là title', 'lên tới 40 triệu', 'Thành Phố Hồ Chí Minh');



var tims = document.querySelectorAll('.timkiem__viecLam-items i');
for (tim of tims) {
    tim.addEventListener('click', (event) => {
        event.target.classList.toggle('tim');
    })
}





var CongtydauLength = document.querySelector('.congtydau-anh');
var CongtydauImg = document.querySelector('.bonanhdau');
var nextBtn1 = document.querySelector('.congtydau .next');
var prevBtn1 = document.querySelector('.congtydau .prev');
var length1 = CongtydauLength.offsetWidth;
var length2 = 0;
nextBtn1.addEventListener('click', (e) => {
    length2+=length1;
    if (length2 == length1*3){
        length2 = 0;
        CongtydauImg.style.marginLeft = `0`;
    } 
    else {
        CongtydauImg.style.marginLeft = `-${length2}px`;
    }
})
prevBtn1.addEventListener('click', (e) => {
    length2-=length1;
    if (length2 < 0){
        length2 = length1*2;
        CongtydauImg.style.marginLeft = `-${length1}`;
    } 
    else {
        CongtydauImg.style.marginLeft = `-${length1}px`;
    }
})
setInterval(function () {
    length2+=length1;
    if (length2 == length1*3){
        length2 = 0;
        CongtydauImg.style.marginLeft = `0`;
    } 
    else {
        CongtydauImg.style.marginLeft = `-${length1}px`;
    }
}, 4000);
