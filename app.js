
//input field
const valueF = document.getElementById('value-f')
const valueS = document.getElementById('value-s')
//value of select
const selectedFCurrency = document.getElementById('f-currency')
const selectedSCurrency = document.getElementById('s-currency')

const option = document.querySelectorAll('.option')

//only number in input
valueF.addEventListener('keydown', (e)=>{
    let key = e.key
    if(!isFinite(key) && !(key ==='Backspace') && !(key ==='.')){ 
        return e.preventDefault()
    }
})
valueS.addEventListener('keydown', (e)=>{
    let key = e.key
    if(!isFinite(key) && !(key ==='Backspace') && !(key ==='.')){ 
        return e.preventDefault()
    }
})
valueF.addEventListener('keyup', () => {calculate(selectedFCurrency.value, selectedSCurrency.value)})
selectedFCurrency.addEventListener('change', () =>{calculate(selectedFCurrency.value, selectedSCurrency.value)})
selectedSCurrency.addEventListener('change', () =>{calculate(selectedFCurrency.value, selectedSCurrency.value)})

const euroToDollar = 1.1801
const euroToYen = 129.42

const dollarToYen = 109.672
const dollarToEuro = 0.847385

const yenToEuro = 0.00772612
const yenToDollar = 0.00911763

let valueSC = 0

const calculate = (e, f) => { 
    console.log(e)
    console.log(valueSC = valueF.value * euroToDollar)
    if(e === 'Euro'){
        switch(f){
            case 'Dollar':
                valueSC = Math.round((valueF.value * euroToDollar + Number.EPSILON) * 100) / 100
                break;
            case 'Yen':
                valueSC = valueF.value * euroToYen
                break;
            case 'Euro':
                valueSC = valueF.value
                break;
        }   
    }
    if(e === 'Dollar'){
        switch(f){
            case 'Euro':
                valueSC = valueF.value * dollarToEuro
                break;
            case 'Yen':
                valueSC = valueF.value * dollarToYen
                break;
            case 'Dollar':
                valueSC = valueF.value
                break;
        }
    }
    if(e === 'Yen'){
        switch(f){
            case 'Dollar':
                valueSC = valueF.value * yenToDollar
                break;
            case 'Euro':
                valueSC = valueF.value * yenToEuro
                break;
            case 'Yen':
                valueSC = valueF.value
                break;
        }
    }
    valueS.value = valueSC
}
