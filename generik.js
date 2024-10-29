let angka = [10, 20, 30];
let kata = ["satu", "dua", "tiga"];

function addElement(array, element) {
    array.push(element);
    return array;
}

// Contoh penggunaan
console.log(addElement(angka, 40)); // Output: [10, 20, 30, 40]
console.log(addElement(kata, "empat")); // Output: ["satu", "dua", "tiga", "empat"]

function updateElementAtIndex(array, index, newValue) {
    if (index >= 0 && index < array.length) {
        array[index] = newValue;
        return array;
    }
    throw new Error("Indeks di luar jangkauan");
}

// Contoh penggunaan
console.log(updateElementAtIndex(angka, 2, 50)); // Output: [10, 20, 50, 40]
console.log(updateElementAtIndex(kata, 1, "dua baru")); // Output: ["satu", "dua baru", "tiga", "empat"]

function deleteElementAtIndex(array, index) {
    if (index >= 0 && index < array.length) {
        array.splice(index, 1);
        return array;
    }
    throw new Error("Indeks di luar jangkauan");
}

// Contoh penggunaan
console.log(deleteElementAtIndex(angka, 1)); // Output: [10, 50, 40]
console.log(deleteElementAtIndex(kata, 0)); // Output: ["dua baru", "tiga", "empat"]

