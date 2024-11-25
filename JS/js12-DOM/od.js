class Toplam {
    constructor(sayi1, sayi2){
        this.sayi1 = sayi1
        this.sayi2 = sayi2

    
    }

    topla(){
        return this.sayi1 + this.sayi2
    }
}

const toplam = new Toplam(10,10)
console.log(toplam.topla());