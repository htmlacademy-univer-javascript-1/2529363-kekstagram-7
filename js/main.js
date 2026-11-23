// ==========================================
// Вспомогательные функции
// ==========================================

// Функция для генерации случайного целого числа в диапазоне (включая границы)
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max))
  const upper = Math.floor(Math.max(min, max))
  return Math.floor(Math.random() * (upper - lower + 1) + lower)
}

// Функция для получения случайного элемента из массива
const getRandomArrayElement = elements => {
  return elements[getRandomInteger(0, elements.length - 1)]
}

// ==========================================
// Данные для генерации
// ==========================================

// Набор имен для комментаторов
const NAMES = ['Артём', 'Мария', 'Иван', 'Елена', 'Алексей', 'Ольга', 'Дмитрий', 'Анна', 'Сергей', 'Ксения']

// Набор предложений для комментариев
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
]

// Набор описаний для фотографий
const DESCRIPTIONS = [
  'Тестим новую камеру!',
  'Затусили с друзьями на море',
  'Как же круто тут кормят',
  'Отдыхаем...',
  'Цените каждое мгновение',
  'Вот это тачка!',
  'Мой день',
  'Утренний кофе',
  'Выходные',
  'Путешествия',
  'Мое хобби',
  'Внезапно',
  'Люблю',
  'Красиво',
  'Вид из окна',
  'Всем хорошего дня',
  'Хорошо',
  'Расслабляюсь',
  'Это было круто',
  'Еще одна прогулка',
  'Как вам?',
  'Смотрите, что умею',
  'Не судите строго',
  'Вот так вот',
  'Момент'
]

// ==========================================
// Генерация данных
// ==========================================

// Счетчик для уникальных ID комментариев
let commentIdCounter = 1

// Функция для создания одного комментария
const createComment = () => {
  // Выбираем 1 или 2 предложения
  const sentencesCount = getRandomInteger(1, 2)
  let message = ''

  if (sentencesCount === 1) {
    message = getRandomArrayElement(MESSAGES)
  } else {
    // Если предложений два, берем два случайных.
    // Чтобы они не повторялись, используем простой цикл.
    const firstSentence = getRandomArrayElement(MESSAGES)
    let secondSentence = getRandomArrayElement(MESSAGES)
    while (firstSentence === secondSentence) {
      secondSentence = getRandomArrayElement(MESSAGES)
    }
    message = `${firstSentence} ${secondSentence}`
  }

  return {
    id: commentIdCounter++, // Уникальный ID
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: message,
    name: getRandomArrayElement(NAMES)
  }
}

// Функция для генерации массива из 25 фотографий
const createPhotos = () => {
  // Создаем массив длиной 25. Array.from позволяет сразу итерироваться.
  return Array.from({ length: 25 }, (_, index) => {
    // id и url формируются на основе индекса (от 1 до 25)
    const id = index + 1

    // Количество комментариев от 0 до 30
    const commentsCount = getRandomInteger(0, 30)

    // Генерируем нужное количество комментариев
    const comments = Array.from({ length: commentsCount }, () => createComment())

    return {
      id: id,
      url: `photos/${id}.jpg`,
      description: getRandomArrayElement(DESCRIPTIONS),
      likes: getRandomInteger(15, 200),
      comments: comments
    }
  })
}

// Генерируем данные и сохраняем в переменную
const mockPhotos = createPhotos()

// Выводим результат в консоль для проверки
console.log(mockPhotos)
