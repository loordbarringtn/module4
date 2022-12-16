const rain = Math.round(Math.random());

if (rain === 1) {
    console.log('Пошёл дождь. Возьмите зонт!');
} else if (rain === 0) {
    console.log('Дождя нет!');
}

const mathScore = prompt('Введите кол-во баллов по математике:');
const russianLanguageScore = prompt('Введите кол-во баллов по русскому языку:');
const InfTechnScore = prompt('Введите кол-во баллов по информатике: ');

const totalMark = mathScore + russianLanguageScore + InfTechnScore;

if (totalMark>=265) {
    console.log('Поздравляю, вы поступили на бюджет!');
} else {
    console.log('К сожалению Вы не поступили!');
}


const atmMoney = 9000;

const withdrawAmmount = prompt('Введите сумму для выдачи');

if (withdrawAmmount % 100 ===0 && withdrawAmmount <= 9000) {
    console.log('Выдача денег');
} else {
    console.log('В банкомате нет денежных средств');
}
