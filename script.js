const count = document.getElementById("count");
count.addEventListener("click", () => {
    let height = document.getElementById("height");
    let weight = document.getElementById("weight");
    let hasil = document.getElementById("hasil");
    const count = document.getElementById("count");
    

    if(height.value != "" && weight.value != "") {

        //count BMI
        let result = (weight.value / ((height.value / 100) * (height.value / 100))).toFixed(2);
        let result2 = '';
        let result3 = '';

        if (result < 18.5) {
            result2 = "UNDERWEIGHT😓";
            result3 = "You need to eat more!";
            console.log(result);
        } else if (result >= 18.5 && result <= 24.9) {
            result2 = "NORMAL😀";
            result3 = "Keep it up!";
            console.log(result);
        } else if (result >= 25 && result <= 29.9) {
            result2 = "OVERWEIGHT🙁";
            result3 = "Jangan Lupa Olahraga!";
            console.log(result);
        } else if (result >= 30) {
            result2 = "OBESE💀";
            result3 = "You need Diet";
            console.log(result);
        }

        //show BMI
        hasil.innerHTML = `BMI: ${result} <br> Kamu <b>${result2}</b> <i>${result3}</i>`;
        

        count.value = "Hitung Lagi";
        count.addEventListener("click", () => {
        location.reload();
        })

    } else{
        alert("Masukkan Tinggi dan Berat Badan Anda");
    }

})