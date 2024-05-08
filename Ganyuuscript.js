document.getElementById("regis").addEventListener("submit", function (event) {
    event.preventDefault();

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let date = document.getElementById("date").value;
    let gender = document.getElementById("gender").value;
    let jurusan = document.getElementById("jurusan").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let mother = document.getElementById("mother").value;
    let ayah = document.getElementById("ayah").value;
    let poto = document.getElementById("poto").files[0]; // Mengambil file foto
    let potonilai = document.getElementById("potonilai").files[0];
    let potoakte = document.getElementById("potoakte").files[0];

    // Memeriksa apakah ada input yang kosong
    if (!nama || !email || !date || gender === '0' || jurusan === '0' || !address || !phone || !mother || !ayah || !poto || !potonilai || !potoakte) {
        alert("Harap lengkapi semua kolom!");
        return; // Menghentikan proses jika ada input yang kosong
    }

    if (poto && potonilai && potoakte) {
        // Membuat objek FileReader
        let reader = new FileReader();

        // Mengatur fungsi onload ketika file selesai dibaca
        reader.onload = function (e) {
            let hasil = document.getElementById("hasil");
            hasil.innerHTML = `
                <h3>Registration Information:</h3>
                <p><strong>Name:</strong> ${nama}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Date of Birth:</strong> ${date}</p>
                <p><strong>Gender:</strong> ${gender}</p>
                <p><strong>Program of Interest:</strong> ${jurusan}</p>
                <p><strong>Address:</strong> ${address}</p>
                <p><strong>Phone Number:</strong> ${phone}</p>
                <p><strong>Mother's Name:</strong> ${mother}</p>
                <p><strong>Father's Name:</strong> ${ayah}</p>
                <p><strong>Photo Mahasiswa:</strong></p>
                <img src="${e.target.result}" alt="Uploaded photo" style="max-width: 100%; height: auto;">
            `;
        };

        let reader2 = new FileReader();
        reader2.onload = function (a) {
            let hasil = document.getElementById("hasil");
            hasil.innerHTML += `
                <p><strong>Photo Nilai Mahasiswa:</strong></p>
                <img src="${a.target.result}" alt="Uploaded photo" style="max-width: 100%; height: auto;">
            `;
        };

        let reader3 = new FileReader();
        reader3.onload = function (p) {
            let hasil = document.getElementById("hasil");
            hasil.innerHTML += `
                <p><strong>Photo Akte Lahir Mahasiswa:</strong></p>
                <img src="${p.target.result}" alt="Uploaded photo" style="max-width: 100%; height: auto;">
            `;
        };

        // Membaca file sebagai URL data
        reader.readAsDataURL(poto);
        reader2.readAsDataURL(potonilai);
        reader3.readAsDataURL(potoakte);
    } else {
        // Jika tidak ada file yang diunggah
        let hasil = document.getElementById("hasil");
        hasil.innerHTML = "Please upload all required photos.";
    }
});
