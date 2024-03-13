



class Cafea {
    constructor(options) {
        this.name = options.name
        this.tip = options.tip
        this.tarie = options.tarie
        this.provenienta = options.provenienta
        this.clasa = options.clasa
    }
}

class Etiopia extends Cafea {
    constructor(options) {
        super(options)
    }


anul() {
    console.log(2010)
}}

class Zimbabwe extends Cafea {
    constructor(options) {
        super(options)
    }

anul() {
    console.log(2020)}}

const etiopia = new Etiopia ({name: 'etiopia', tip:'boabe', tarie: 3,
 provenienta:'Africa', clasa: 5})
 console.log(etiopia)
 etiopia.anul()

 const zimbabwe = new Zimbabwe ({name: 'zimbabwe', tip: 'mcinata', tarie:1, provenienta: 'Asia', clasa:5})
 console.log(zimbabwe)
 zimbabwe.anul()

const bumboane = {
    denumire: 'kitkat',
    tipul: 'cu lapte',
    expirare: '1 luna',
    culoare: 'rosie'
}
const{denumire, tipul} = bumboane
console.log(bumboane)
console.log(denumire)
console.log(tipul)


const func = ({denumire, tipul}) => {
    console.log(`eu iubesc ${denumire} ${tipul}`)
}
func({denumire:'kitkat', tipul:'cu lapte'})

