const salary = prompt('Пожалуйста введите зарплату');
let taxAmmount;

if (salary < 15000) {
    taxAmmount = salary * 0.13;
} else if (salary >= 15000 && salary <= 50000) {
    taxAmmount = (salary-15000) * 0.2 + 15000 * 0.13;
} else if (salary > 50000) {
    taxAmmount = (salary - 50000) * 0.3 + (salary-15000) * 0.2 + 15000 * 0.13;
}

console.log(taxAmmount);