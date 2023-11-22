let belanja = parseInt(prompt("masukan total belanja"));
document.writeln(`anda belanja : ${belanja}`)
let diskon = 0;
switch(true){

    case (belanja <100000):
    document.writeln("tidak mendapatkan diskon");
    
    break;
    
    case (belanja >= 100000 && belanja <= 200000):
        diskon = belanja * 10/100 
        document.writeln(`anda mendapatkan diskon 10% total bayar menjadi ${belanja - diskon} `)
        break;

    case belanja >200000:
        diskon = belanja * 25/100
        document.writeln(`anda mendapatkan diskon 25% dan total bayar diskon ${belanja - diskon}`);
}