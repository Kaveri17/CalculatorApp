let display = document.getElementById('display')
let btn_dot = document.getElementById('btn_dot')
let plus = document.getElementById('btn_sum')
let minus = document.getElementById('btn_sub')
let mul = document.getElementById('btn_mul')
let div = document.getElementById('btn_div')
let equals = document.getElementById('btn_equals')

let clear = document.getElementById('clear')
let sq = document.getElementById('square')
let sq_rt = document.getElementById('square_root')
let bs = document.getElementById('bs')

let btn0 = document.getElementById('btn0')
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')
let btn7 = document.getElementById('btn7')
let btn8 = document.getElementById('btn8')
let btn9 = document.getElementById('btn9')

let operator_check = false
let initial_check = true
let operator = ''
let a, b

function assign_operand(){
    if (operator_check){
        b = Number(display.value)
    }
    else{
        a = Number(display.value)
    }
}

const initial = () => {
    if(initial_check){
        display.value = ''
    }
    initial_check = false
}
function display_7(){
    initial()
    if(display.value === '0'){
        display.value = 7
    }
    else{
        display.value += 7
    }
}

function display_8(){
    initial()
    if(display.value === '0'){
        display.value = 8
    }
    else{
        display.value += 8
    }
}

function display_9(){
    initial()

    if(display.value === '0'){
        display.value = 9
    }
    else{
        display.value += 9
    }
}

function display_6(){
    initial()

    if(display.value === '0'){
        display.value = 6
    }
    else{
        display.value += 6
    }
}

function display_5(){
    initial()

    if(display.value === '0'){
        display.value = 5
    }
    else{
        display.value += 5
    }
}

function display_4(){
    initial()

    if(display.value === '0'){
        display.value = 4
    }
    else{
        display.value += 4
    }
}

function display_3(){
    initial()

    if(display.value === '0'){
        display.value = 3
    }
    else{
        display.value += 3
    }
}

function display_2(){
    initial()

    if(display.value === '0'){
        display.value = 2
    }
    else{
        display.value += 2
    }
}

function display_1(){
    initial()

    if(display.value === '0'){
        display.value = 1
    }
    else{
        display.value += 1
    }
}

function display_0(){
    initial()

    if(display.value === '0'){
        display.value = 0
    }
    else{
        display.value += 0
    }
}

const clear_display = () => {
    display.value = 0
    a = 0
    b = 0
    operator = ''
    operator_check = false
}

const square = () => {
    let input = Number(display.value)
    operator = ''
    operator_check = false
    initial_check = true
    display.value = input*input
}

const square_root = () => {
    let input = Number(display.value)
    operator = ''
    operator_check = false
    initial_check = true
    display.value = Math.sqrt(input)
}

const backspace = () => {
    let input = display.value
    operator = ''
    operator_check = false
    initial_check = true
    display.value = input.slice(0, input.length-1)
}

const plus_click = () =>{
    // assign_operand()
    equals_click()
    operator = '+'
    operator_check = true
    initial_check = true
}
const sub_click = () =>{
    // assign_operand()
    equals_click()
    operator = '-'
    operator_check = true
    initial_check = true
}
const mul_click = () =>{
    // assign_operand()
    equals_click()
    operator = '*'
    operator_check = true
    initial_check = true
}
const divide_click = () =>{
    // assign_operand()
    equals_click()
    operator = '+'
    operator_check = true
    initial_check = true
}

const equals_click = () => {
    assign_operand()
    if(!operator_check){
        return
    }
    else{
        switch(operator){
            case '+':
                result = a + b
                display.value = result 
                a = result
                break 
            case '-':
                result = a - b
                display.value = result 
                a = result
                break 
            case '*':
                result = a * b
                display.value = result 
                a = result
                break 
            case '/':
                result = a / b
                display.value = result 
                a = result
                break 
            default:
                return
        }
    }
}

btn0.addEventListener('click', display_0)
btn1.addEventListener('click', display_1)
btn2.addEventListener('click', display_2)
btn3.addEventListener('click', display_3)
btn4.addEventListener('click', display_4)
btn5.addEventListener('click', display_5)
btn6.addEventListener('click', display_6)
btn7.addEventListener('click', display_7)
btn8.addEventListener('click', display_8)
btn9.addEventListener('click', display_9)
clear.addEventListener('click', clear_display)
sq.addEventListener('click', square)
sq_rt.addEventListener('click', square_root)
bs.addEventListener('click', backspace)
plus.addEventListener('click', plus_click)
equals.addEventListener('click', equals_click)
plus.addEventListener('click', plus_click)
minus.addEventListener('click', sub_click)
mul.addEventListener('click', mul_click)
div.addEventListener('click', divide_click)



/*
operator 

operand1 , opereand2  

*/


