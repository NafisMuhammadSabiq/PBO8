// Menggunakan List (Array)
let listMahasiswa = ["Budi", "Siti", "Agus"];
listMahasiswa.push("Ani"); // Menambahkan elemen baru
console.log(listMahasiswa); // Output: ["Budi", "Siti", "Agus", "Ani"]
console.log(listMahasiswa[1]); // read elemen
listMahasiswa[1] = "Septian"; // Update elemen
console.log(listMahasiswa);
listMahasiswa.splice(1, 2); // delete elemen
console.log(listMahasiswa);

// Menggunakan Set
let setMahasiswa = new Set(["Budi", "Siti", "Agus"]);
setMahasiswa.add("Ani");
setMahasiswa.add("Budi"); // Tidak akan menambahkan karena Budi sudah ada
console.log(setMahasiswa); // Output: Set(4) {"Budi", "Siti", "Agus", "Ani"}
setMahasiswa.delete("Budi");// Update dalam set dengan menghapus elemen terlebih dahulu lalu menambahkan
setMahasiswa.add("Septian");
console.log(setMahasiswa);
setMahasiswa.delete("Septian"); // menghapus elemen
console.log(setMahasiswa);

// Menggunakan Map
let mapNilai = new Map();
mapNilai.set("Budi", 90);
mapNilai.set("Siti", 85);
mapNilai.set("Siti", 75); //Update nilai pada key
console.log(mapNilai.get("Siti")); 
console.log(mapNilai.get("Budi")); // Output: 90
mapNilai.delete("Budi"); // menghapus elemen
console.log(mapNilai);