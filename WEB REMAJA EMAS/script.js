document.addEventListener('DOMContentLoaded', function () {
    const colorDiv = document.getElementById('.grid-item');

    // Array warna yang dapat berubah-ubah
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#34495e'];

    // Fungsi untuk mengubah warna secara acak
    function changeColor() {
        const randomIndex = Math.floor(Math.random() * colors.length);
        const randomColor = colors[randomIndex];
        colorDiv.style.backgroundColor = randomColor;
    }

    // Memanggil fungsi changeColor setiap 3 detik
    setInterval(changeColor, 500);
});

function downloadPDF(fileName) {
    // Gantilah 'lokasi_file_pdf/' dengan lokasi folder tempat file PDF Anda disimpan
    var pdfFilePath = 'lokasi_file_pdf/' + fileName;

    // Buat elemen <a> untuk memicu unduhan
    var downloadLink = document.createElement('a');

    // Atur atribut href ke lokasi file PDF
    downloadLink.href = pdfFilePath;

    // Atur atribut download dengan nama file yang ingin ditampilkan oleh pengguna
    downloadLink.download = fileName;

    // Simulasikan klik pada elemen <a>
    downloadLink.click();
}

function openWhatsApp() {
    // Gantilah '6281234567890' dengan nomor WhatsApp yang ingin dihubungi
    var phoneNumber = '6289516028710';

    // Gantilah 'Halo%20%21' dengan pesan awal yang ingin ditampilkan di obrolan WhatsApp
    var message = 'INGIN BERGABUNG KE KOMUNITAS KAK.';

    // Bangun URI skema WhatsApp
    var whatsappURI = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    // Buka tautan menggunakan window.open
    window.open(whatsappURI, '_blank');
}