



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

// mai mult de o zi mai putin de o sapt 4days 10Header
// mai mult de o ora si minute - 7hours si 50minutes 
// mai putin de o ora - less thn an hour


const time = 12456
const week = 10080
const day = 1440
const hour = 60

const timeFormat = (remaningTime) => {
    if(remaningTime/week >= 1) {
        const weekMark = Math.floor(remaningTime/week) !==1 ? 'weeks' : 'week'
        const dayMark = (remaningTime%week)/day > 1 ? 'days' : 'day'
        return `${Math.floor(remaningTime/week)}${weekMark}${Math.floor((remaningTime%week)/day)}${dayMark}`
    }
    if(remaningTime/day >= 1) {
        const dayMark1 = Math.floor(remaningTime/day) !==1 ? 'days' : 'day'
        const hourMark = (remaningTime%day)/hour > 1 ? 'hours' : 'hour'
        return`${Math.floor(remaningTime/day)}${dayMark1}${Math.floor((remaningTime%day/hour))}${hourMark}`
    }
    if(remaningTime/hour >=1){
        const hourMark1 = Math.floor(remaningTime/day) !==1 ? 'days' : 'day'
        const minMark = remaningTime%hour >1 ? 'minutes' : 'minute'
        return`${Math.floor(remaningTime/hour)}${hourMark1}${Math.floor(remaningTime%hour)}${minMark}`
    }

    if(remaningTime < hour) {
        return 'less than an hour'

    }

}
console.log(timeFormat(time))
console.log(timeFormat(time))