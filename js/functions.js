// ==========================================
// 1. Функция для проверки длины строки
// ==========================================
function checkStringLength(string, maxLength) {
  return string.length <= maxLength
}

// ==========================================
// 2. Функция для проверки, является ли строка палиндромом
// ==========================================
function isPalindrome(string) {
  // Приводим строку к нижнему регистру и удаляем все пробелы
  const normalizedString = string.toLowerCase().replaceAll(' ', '')

  // Переворачиваем строку
  const reversedString = normalizedString.split('').reverse().join('')

  // Сравниваем нормализованную строку с перевернутой
  return normalizedString === reversedString
}

// ==========================================
// 3. Дополнительное задание: Извлечение цифр
// ==========================================
function extractDigits(value) {
  // Преобразуем аргумент в строку (на случай, если пришло число)
  const stringValue = String(value)

  // Находим все цифры с помощью регулярного выражения
  const digits = stringValue.match(/\d/g)

  // Если цифр нет, возвращаем NaN
  if (!digits) {
    return NaN
  }

  // Склеиваем цифры в строку и преобразуем в целое число
  // Number() или parseInt() автоматически избавятся от ведущих нулей (например, '007' станет 7)
  return Number(digits.join(''))
}

// ==========================================
// Проверка работы функций (тесты из задания)
// ==========================================

// Тесты для checkStringLength
console.log('--- checkStringLength ---')
console.log(checkStringLength('проверяемая строка', 20)) // true
console.log(checkStringLength('проверяемая строка', 18)) // true
console.log(checkStringLength('проверяемая строка', 10)) // false

// Тесты для isPalindrome
console.log('\n--- isPalindrome ---')
console.log(isPalindrome('топот')) // true
console.log(isPalindrome('ДовОд')) // true
console.log(isPalindrome('Кекс')) // false
console.log(isPalindrome('Лёша на полке клопа нашёл ')) // true

// Тесты для extractDigits
console.log('\n--- extractDigits ---')
console.log(extractDigits('2023 год')) // 2023
console.log(extractDigits('ECMAScript 2022')) // 2022
console.log(extractDigits('1 кефир, 0.5 батона')) // 105
console.log(extractDigits('агент 007')) // 7
console.log(extractDigits('а я томат')) // NaN
console.log(extractDigits(2023)) // 2023
console.log(extractDigits(-1)) // 1
console.log(extractDigits(1.5)) // 15
