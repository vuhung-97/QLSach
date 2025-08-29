const API_URL = 'http://127.0.0.1:8000';

// Hàm lấy và hiển thị tất cả sách
async function fetchBooks() {
    const response = await fetch(`${API_URL}/books/`);
    const books = await response.json();
    const booksList = document.getElementById('booksList');
    booksList.innerHTML = '';
    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
            <h3>${book.ten_sach}</h3>
            <img src="${book.anh}" alt="${book.ten_sach}" />
            <p><strong>Loại:</strong> ${book.loai_sach}</p>
            <p><strong>Giá:</strong> ${book.gia_ban} VNĐ</p>
            <p><strong>NXB:</strong> ${book.nha_xuat_ban}</p>
            <p><strong>Ngày XB:</strong> ${book.ngay_xuat_ban}</p>
            <p><strong>Tóm tắt:</strong> ${book.tom_tat_noi_dung}</p>
            <a href="${book.qrcode_image}" target="_blank">Xem QR Code</a>
            <button class="delete-btn" data-id="${book.id}">Xóa</button>
        `;
        booksList.appendChild(bookCard);
    });

    // Thêm event listener cho nút xóa
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', async (e) => {
            const bookId = e.target.getAttribute('data-id');
            await fetch(`${API_URL}/books/${bookId}`, { method: 'DELETE' });
            fetchBooks(); // Tải lại danh sách sách
        });
    });
}

// Hàm thêm sách mới
async function addBook(e) {
    e.preventDefault();
    const bookData = {
        ten_sach: document.getElementById('ten_sach').value,
        loai_sach: document.getElementById('loai_sach').value,
        gia_ban: parseFloat(document.getElementById('gia_ban').value),
        nha_xuat_ban: document.getElementById('nha_xuat_ban').value,
        ngay_xuat_ban: document.getElementById('ngay_xuat_ban').value,
        tom_tat_noi_dung: document.getElementById('tom_tat_noi_dung').value,
        anh: document.getElementById('anh').value
    };

    await fetch(`${API_URL}/books/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookData),
    });

    document.getElementById('bookForm').reset();
    fetchBooks(); // Tải lại danh sách sách
}

// Gắn event listener cho form và tải sách khi trang load
document.getElementById('bookForm').addEventListener('submit', addBook);
document.addEventListener('DOMContentLoaded', fetchBooks);