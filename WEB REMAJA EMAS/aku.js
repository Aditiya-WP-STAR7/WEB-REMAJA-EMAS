let userPoints = 0;
const pointsPerSecond = 1; // Ganti dengan jumlah poin yang ingin ditambahkan setiap detik

function updatePointsUI() {
    document.getElementById('points').innerText = userPoints;
}

function earnPoints() {
    userPoints += 10; // Poin yang diperoleh setiap kali tombol "Earn Points" diklik
    updatePointsUI();
}

function redeemPoints() {
    if (userPoints >= 10) {
        userPoints -= 10; // Kurangi poin ketika menukar dengan hadiah
        alert('Selamat! Anda menukarkan 10 poin dengan hadiah.');
    } else {
        alert('Maaf, Anda tidak memiliki cukup poin.');
    }
    updatePointsUI();
}

function autoEarnPoints() {
    userPoints += pointsPerSecond;
    updatePointsUI();
}

document.addEventListener('DOMContentLoaded', function () {
    updatePointsUI(); // Inisialisasi tampilan poin

    // Setiap 1000 milidetik (1 detik), panggil autoEarnPoints
    setInterval(autoEarnPoints, 1000);
});