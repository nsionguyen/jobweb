var topcv_testItems = document.getElementById('topcv_test-Items');
function themItem (linkanh, p, h3, basic, basic1) {
    var div = document.createElement('div'); // Tạo một phần tử div mới
    div.classList.add('topcv_test-item'); // Thêm lớp cho phần tử div
    
    var html = `
    <img src="${linkanh}" alt="">
                        
    <div class="boc_item">
        <p>${p}</p>
        <h3>${h3}</h3>
        <span>${basic}</span>
        <span class="basic">${basic1}</span>
        <div class="lambaithi">
            <a href="">Làm bài thi </a>
            <i class="fa-solid fa-arrow-right"></i>
        </div>
    </div>
    `;

    div.innerHTML = html; // Gán nội dung cho phần tử div
    topcv_testItems.appendChild(div);
}
themItem ('./asset/img/topcvtest.jpg', 'Kỹ năng công nghệ', 'GIT', 'Trung bình', '1400+ ứng viên');
themItem ('./asset/img/topcvtest.jpg', 'Kỹ năng công nghệ', 'Agile', 'Trung bình', '1000+ ứng viên');
themItem ('./asset/img/topcvtest.jpg', 'Kỹ năng công nghệ', 'JAVA', 'Trung bình', '800+ ứng viên');
themItem ('./asset/img/topcvtest.jpg', 'Kỹ năng công nghệ', 'JAVASCRIPT', 'Trung bình', '1000+ ứng viên');
themItem ('./asset/img/topcvtest.jpg', 'Kỹ năng công nghệ', 'MYSQL', 'Trung bình', '800+ ứng viên');
themItem ('./asset/img/topcvtest.jpg', 'Kỹ năng công nghệ', 'PHOTOSHOP', 'Trung bình', '1500+ ứng viên');
themItem ('./asset/img/topcvtest.jpg', 'Kỹ năng công nghệ', 'PHP', 'Cơ bản', '500+ ứng viên');
themItem ('./asset/img/topcvtest.jpg', 'Kỹ năng công nghệ', 'PYthon', 'Cơ bản', '500+ ứng viên');
themItem ('./asset/img/topcvtest.jpg', 'Kỹ năng công nghệ', 'HTML', 'Trung bình', '1400+ ứng viên');
themItem ('./asset/img/topcvtest.jpg', 'Kỹ năng công nghệ', 'HTML', 'Trung bình', '1400+ ứng viên');
themItem ('./asset/img/topcvtest.jpg', 'Kỹ năng công nghệ', 'HTML', 'Trung bình', '1400+ ứng viên');
themItem ('./asset/img/topcvtest.jpg', 'Kỹ năng công nghệ', 'HTML', 'Trung bình', '1400+ ứng viên');
themItem ('./asset/img/topcvtest.jpg', 'Kỹ năng công nghệ', 'HTML', 'Trung bình', '1400+ ứng viên');
themItem ('./asset/img/topcvtest.jpg', 'Kỹ năng công nghệ', 'HTML', 'Trung bình', '1400+ ứng viên');
themItem ('./asset/img/topcvtest.jpg', 'Kỹ năng công nghệ', 'HTML', 'Trung bình', '1400+ ứng viên');
themItem ('./asset/img/topcvtest.jpg', 'Kỹ năng công nghệ', 'HTML', 'Trung bình', '1400+ ứng viên');
themItem ('./asset/img/topcvtest.jpg', 'Kỹ năng công nghệ', 'HTML', 'Trung bình', '1400+ ứng viên');
themItem ('./asset/img/topcvtest.jpg', 'Kỹ năng công nghệ', 'HTML', 'Trung bình', '1400+ ứng viên');
themItem ('./asset/img/topcvtest.jpg', 'Kỹ năng công nghệ', 'HTML', 'Trung bình', '1400+ ứng viên');
themItem ('./asset/img/topcvtest.jpg', 'Kỹ năng công nghệ', 'HTML', 'Trung bình', '1400+ ứng viên');
