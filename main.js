// verilmis arraye uygunn olaraq arrow functiondan isdifade ederek dinamik olaraq
// bir array ve bir simvol("herf") qebul eden funksiya yaradin
// gonderilen herfle uygun olaraq o herfle baslayan adlari secib 
// yeni arrayde ekrana cap elesin
// qeyd: for of dan istifade ede bilersiz .
// basa dusmediyiniz hisse varsa sorusun ugurlar


let arrayy = ["Ali", "Ali", "Qabil", "Qalib", "Behlul", "Ali", "Malik", "Kamil"];

const chooseValue = (arr,symbol) => {
 let result =[];
 for (let item of arr) {
    if (item[0]==symbol){
        result.push(item);
    }
 }
 console.log(result);
}

chooseValue (arrayy,"Q")