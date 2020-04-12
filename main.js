// - создать массив с 20 числами.
let array = [20, 10, 5, 8, 15, -3, -8, 52, 80, 29, 70, 45, -90, 1000, 5, 4, 18, 10, 0, 63]
// -- при помощи метода sort отсортировать массив.
array.sort();
console.log(array);
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
let a = array.sort((a, b) => b - a)
console.log(a)
// -- при помощи filter получить числа кратные 3
const filt3 = array.filter(n => n % 3 === 0)
console.log(filt3)
// -- при помощи filter получить числа кратные 10
const filt10 = array.filter(n => n % 10 === 0)
console.log(filt10)
// -- перебрать (проитерировать) массив при помощи foreach()
array.forEach(element => console.log(element));
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
const map = array.map(x => x * 3);
console.log(map);
// - создать массив со словами на 15-20 элементов.

let arr1 = ['misha', 'yura', "petro", 'pavlo', 'lilia', 'serhiy', 'ira', "ivan", 'anatoliy', 'ruslana', 'zoryana']
// -- отсортировать его по алфавиту в восходящем порядке.
arr1.sort()
console.log(arr1)
// -- отсортировать его по алфавиту  в нисходящем порядке.
let s = arr1.sort(((a, b) => a - b))
let c = s.reverse()
console.log(c)
// -- отфильтровать слова длиной менее 4х символов
const filt4 = arr1.filter(n => n.length < 4)
console.log(filt4)
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
let m = arr1.map(n => n + '!')
console.log(m)
// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [{name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}];

// - відсортувати його за  віком (зростання , а потім окремо спадання)
let ageSort = users.sort((user1, user2) => user1.age - user2.age);
console.log(ageSort);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
let nameLength1 = users.sort((user1, user2) => user1.name.length - user2.name.length);
console.log(nameLength1)
let nameLength2 = users.sort((user1, user2) => user2.name.length - user1.name.length);
console.log(nameLength2)
//- пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

let newUsers = users.map(user=>user)

function getRandom(min,max) {
    min = Math.ceil(min)
    max=Math.ceil(max)
    return Math.floor(Math.random()*(max-min))+min
}

    newUsers.forEach((a)=>{a.id =getRandom(1,100)})

console.log(newUsers)

// - відсортувати його за індентифікатором
newUsers.sort((user1,user2)=>user1.id-user2.id)
console.log(newUsers)
// -- наисать функцию калькулятора с 2мя числами и колбеком
function calculate(a, b, callback) {
    console.log(callback(a, b))
}


calculate(10, 20, function (a, b) {
    return a + b
})
calculate(10, 20, function (a, b) {
    return a * b - a

})

// -- наисать функцию калькулятора с 3мя числами и колбеком
function customPrintArray(array, callback) {
    callback(array)
}

customPrintArray([1, 3, 4], function (arr) {
    for (const arrElement of arr) {
        console.log(arrElement)
    }

})
customPrintArray([1, 3, 4], (arr) => {
    for (let i = arr.length; i >= 0; i--) {
        const arrElement = arr[i];
        console.log(arrElement)

    }
})
// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================

//
//
//
let cars = [
{producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
{producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
{producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
{producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
{producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
{producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
{producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
{producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
{producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
{producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
{producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
{producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
{producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];

// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
const volume = cars.filter(car => car.volume > 3)

console.log(volume)

// - двигун = 2л
const volume2 = cars.filter(car => car.volume === 2)
console.log(volume2)

// - виробник мерс
const mercedes = cars.filter(car => car.producer === "mercedes")
console.log(mercedes)

// - двигун більше 3х літрів + виробник мерседес
const mercedes3 = cars.filter(car => (car.producer === "mercedes" & car.volume >= 3))
console.log(mercedes3)

// - двигун більше 3х літрів + виробник субару
const subaru3 = cars.filter(car => car.volume >= 3 & car.producer === "subaru")
console.log(subaru3)

// - сили більше ніж 300
const power = cars.filter(car => car.power > 300)
console.log(power)

// - сили більше ніж 300 + виробник субару
const subaru300 = cars.filter(car => car.power > 300 & car.producer === "subaru")
console.log(subaru300)

// - мотор серіі ej
const engine = cars.filter(car => {
    if (car.engine.includes('ej')) {
        return true
    }
})
console.log(engine)
// - сили більше ніж 300 + виробник субару + мотор серіі ej
const subaru300ej = cars.filter(car => {
    if (car.power > 300 & car.producer === "subaru" & car.engine.startsWith("ej")) {
        return true
    }
})
console.log(subaru300ej)
// - двигун меньше 3х літрів + виробник мерседес
const mercedes3les = cars.filter(car => {
    if (car.producer === "mercedes" & car.volume < 3) {
        return true
    }
})
console.log(mercedes3les)
// - двигун більше 2л + сили більше 250
const volume_2_250 = cars.filter(car => {
    if (car.volume > 2 & car.power > 250) {
        return true
    }
})
console.log(volume_2_250)
// - сили більше 250  + виробник бмв
const bmw250 = cars.filter(car => {
    if (car.power > 250 & car.producer === "bmw") {
        return true
    }
})
console.log(bmw250)

// - взять слдующий массив
 let usersWithAddress = [
     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
// -- отсортировать его по id пользователей
let sortId = usersWithAddress.sort((user1,user2)=>user1.id-user2.id)
console.log(sortId)
// -- отсортировать его по id пользователей в обратном опрядке
let sortIdReverse = usersWithAddress.sort((user1,user2)=>user2.id-user1.id)
console.log(sortIdReverse)
// -- отсортировать его по возрасту пользователей
let userAge = usersWithAddress.sort((user1,user2)=>user1.age-user2.age)
console.log(userAge)
// -- отсортировать его по возрасту пользователей в обратном порядке
let userAgeReverse = usersWithAddress.sort((user1,user2)=>user2.age-user1.age)
console.log(userAgeReverse)
// -- отсортировать его по имени пользователей
console.log('????????????????????')
let userName = usersWithAddress.sort((user1,user2)=>user1.name-user2.name)
console.log(userName)
// -- отсортировать его по имени пользователей в обратном порядке
let userNameReverse = usersWithAddress.sort((user1,user2)=>user2.name-user1.name)
console.log(userNameReverse)
// -- отсортировать его по названию улицы  в алфавитном порядке
let userStreetName = usersWithAddress.sort((user1,user2)=>user1.address.street-user2.address.street)
console.log(userStreetName)
// -- отсортировать его по номеру дома по возрастанию
let userHouseNumber = usersWithAddress.sort((user1,user2)=>user1.address.number-user2.address.number)
console.log(userHouseNumber)
// -- отфильтровать (оставить) тех кто младше 30
let userLess30 = usersWithAddress.filter(user => user.age < 30)
console.log(userLess30)
// -- отфильтровать (оставить) тех у кого отрицательный статус
let statusFalse  = usersWithAddress.filter(user => user.status == false)
console.log(statusFalse)
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
let statusFalseLess30  = usersWithAddress.filter(user => user.status == false & user.age < 30)
console.log(statusFalseLess30)
// -- отфильтровать (оставить) тех у кого номер дома четный
let userHouseNumberEven = usersWithAddress.filter(user => user.address.number%2 == 0)
console.log(userHouseNumberEven)
//
// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================
//
// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.

let newCars = [
    {model:'bmv', power: 400 ,  price: 30000, yearProduction: 2018, ovner: { name :'Misha', age:35 , drivingExpirience: 10}},
    {model:'audi', power: 300 ,  price: 35000, yearProduction: 2019, ovner: { name :'Max', age:25 , drivingExpirience: 5}},
    {model:'mercedess', power: 300 ,  price: 36000, yearProduction: 2017, ovner: { name :'Petro', age:34 , drivingExpirience: 7}},
    {model:'toyota', power: 500 ,  price: 40000, yearProduction: 2020, ovner: { name :'Ivan', age:36 , drivingExpirience: 6}},
    {model:'shkoda', power: 300 ,  price: 25000, yearProduction: 2016, ovner: { name :'Oksana', age:40 , drivingExpirience: 12}},
    {model:'renout', power: 200 ,  price: 20000, yearProduction: 2014, ovner: { name :'Ruslana', age:28 , drivingExpirience: 5}},
    {model:'subaru', power: 500 ,  price: 28000, yearProduction: 2015, ovner: { name :'Vova', age:30 , drivingExpirience: 20}},
]
// console.log(newCars)


// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).

// let newPower = newCars
//     .filter(car=> car.power<400)
//     .map(car=>{
//         return {
//             model:`${car.model}`,
//             power : Math.floor(car.power*1.10) ,
//             price:`${car.price}` ,
//             yearProduction:`${car.yearProduction}`,
//             ovner:{name :`${car.ovner.name}`,age :`${car.ovner.age}`,drivingExpirience :`${car.ovner.drivingExpirience}`,}
//         }
//     })
// console.log(newPower)


// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).


// Для початку вкладіть всі наші створені автомобілі в масив cars.

// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
console.log('22222222222222222222222222222')
let element = 0
for (let i = 0; i < newCars.length; i = i + 2) {
    element = newCars[i];
    console.log({
            model: `${element.model}`,
            power: Math.floor(element.power * 1.10),
            price: `${element.price*1.05}`,
            yearProduction: `${element.yearProduction}`,
            ovner: {
                name: `${element.ovner.name}`,
                age: `${element.ovner.age}`,
                drivingExpirience: `${element.ovner.drivingExpirience}`,
            }
        }
    )

}

// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
//
//
// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
