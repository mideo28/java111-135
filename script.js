// ===== Уровень A — Условные операторы =====

// Задание 111. Проверка уровня сигнала Wi-Fi
console.log("--- Задание 111 ---");
{
  function wifiQuality(signal) {
    if (signal < 0 || signal > 100) {
      return "Ошибка: уровень сигнала должен быть от 0 до 100";
    } else if (signal === 0) {
      return "Нет сигнала";
    } else if (signal <= 30) {
      return "Слабый";
    } else if (signal <= 70) {
      return "Средний";
    } else {
      return "Сильный";
    }
  }
  let signal = 65;
  console.log(signal + "%: " + wifiQuality(signal)); // Средний
  [0, 25, 95, 120, -5].forEach(function (s) {
    console.log(s + "%: " + wifiQuality(s));
  });
}

// Задание 112. Проверка доступа к онлайн-курсу
console.log("--- Задание 112 ---");
{
  function moduleAccess(completed, score) {
    if (completed && score >= 70) {
      return "Следующий модуль доступен";
    } else {
      return "Доступ закрыт";
    }
  }
  let completed = true;
  let score = 75;
  console.log("Завершён: " + completed + ", баллы: " + score + " -> " + moduleAccess(completed, score));
  console.log("Завершён: true, баллы: 60 -> " + moduleAccess(true, 60));
  console.log("Завершён: false, баллы: 90 -> " + moduleAccess(false, 90));
  console.log("Завершён: false, баллы: 50 -> " + moduleAccess(false, 50));
}

// Задание 113. Расчёт тарифа мобильного интернета
console.log("--- Задание 113 ---");
{
  function internetPrice(internetGB) {
    if (internetGB < 0) {
      return "Ошибка: объём не может быть отрицательным";
    } else if (internetGB <= 5) {
      return "1500 ₸";
    } else if (internetGB <= 15) {
      return "3000 ₸";
    } else if (internetGB <= 30) {
      return "5000 ₸";
    } else {
      return "7000 ₸";
    }
  }
  let internetGB = 12;
  console.log(internetGB + " ГБ: " + internetPrice(internetGB)); // 3000 ₸
  [0, 5, 5.1, 15, 15.1, 30, 30.1, -1].forEach(function (gb) {
    console.log(gb + " ГБ: " + internetPrice(gb));
  });
}

// Задание 114. Определение типа файла
console.log("--- Задание 114 ---");
{
  function fileType(extension) {
    switch (extension.toLowerCase()) {
      case "jpg":
      case "png":
        return "Изображение";
      case "mp4":
      case "avi":
        return "Видео";
      case "pdf":
      case "docx":
        return "Документ";
      case "js":
      case "html":
        return "Исходный код";
      default:
        return "Неизвестный тип";
    }
  }
  let extension = "pdf";
  console.log(extension + ": " + fileType(extension)); // Документ
  ["JPG", "avi", "html", "exe"].forEach(function (e) {
    console.log(e + ": " + fileType(e));
  });
}

// Задание 115. Определение победителя соревнования
console.log("--- Задание 115 ---");
{
  function winner(participant1, participant2) {
    if (participant1 > participant2) {
      return "Победил участник 1";
    } else if (participant2 > participant1) {
      return "Победил участник 2";
    } else {
      return "Ничья";
    }
  }
  let participant1 = 87;
  let participant2 = 92;
  console.log(participant1 + " и " + participant2 + ": " + winner(participant1, participant2)); // участник 2
  console.log("95 и 80: " + winner(95, 80));
  console.log("70 и 70: " + winner(70, 70));
}

// ===== Уровень B — Циклы, строки и массивы =====

// Задание 116. Сумма чисел, кратных семи
console.log("--- Задание 116 ---");
{
  let sum = 0;
  let count = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
      sum += i;
      count++;
    }
  }
  console.log("Количество: " + count + ", сумма: " + sum); // 14, 735
}

// Задание 117. Анализ продаж магазина
console.log("--- Задание 117 ---");
{
  let sales = [12000, 18500, 9700, 25000, 16300, 21000, 14000];
  let sum = 0;
  let max = sales[0];
  let min = sales[0];
  let over20k = 0;
  for (let i = 0; i < sales.length; i++) {
    sum += sales[i];
    if (sales[i] > max) max = sales[i];
    if (sales[i] < min) min = sales[i];
    if (sales[i] > 20000) over20k++;
  }
  console.log("Сумма продаж за неделю: " + sum + " ₸");                        // 116500
  console.log("Средняя дневная выручка: " + (sum / sales.length).toFixed(2) + " ₸"); // 16642.86
  console.log("Наибольшая выручка: " + max + " ₸");                           // 25000
  console.log("Наименьшая выручка: " + min + " ₸");                           // 9700
  console.log("Дней с продажами выше 20 000 ₸: " + over20k);                  // 2
}

// Задание 118. Подсчёт пробелов в тексте
console.log("--- Задание 118 ---");
{
  let text = "I am learning JavaScript today";
  let spaces = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      spaces++;
    }
  }
  console.log("Пробелов: " + spaces); // 4
}

// Задание 119. Замена отрицательных чисел нулями
console.log("--- Задание 119 ---");
{
  let numbers = [12, -4, 7, -9, 18, -2, 5];
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      result.push(0);
    } else {
      result.push(numbers[i]);
    }
  }
  console.log("Исходный массив: " + numbers.join(", "));
  console.log("Новый массив: " + result.join(", ")); // 12, 0, 7, 0, 18, 0, 5
  let viaMap = numbers.map(function (n) { return n < 0 ? 0 : n; });
  console.log("Через .map(): " + viaMap.join(", "));
}

// Задание 120. Поиск самого длинного слова
console.log("--- Задание 120 ---");
{
  let words = ["HTML", "JavaScript", "CSS", "Programming", "SQL"];
  let longest = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  console.log("Самое длинное слово: " + longest + " (" + longest.length + " символов)"); // Programming (11)
}

// Задание 121. Последовательность Фибоначчи
console.log("--- Задание 121 ---");
{
  let fib = [0, 1];
  for (let i = 2; i < 10; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  console.log(fib.join(", ")); // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
}

// Задание 122. Определение повторяющихся имён
console.log("--- Задание 122 ---");
{
  let names = ["Алия", "Арман", "Данияр", "Алия", "Мадина", "Арман"];
  let duplicates = [];
  for (let i = 0; i < names.length; i++) {
    let count = 0;
    for (let j = 0; j < names.length; j++) {
      if (names[j] === names[i]) {
        count++;
      }
    }
    if (count > 1 && !duplicates.includes(names[i])) {
      duplicates.push(names[i]);
    }
  }
  console.log("Повторяющиеся имена: " + duplicates.join(", ")); // Алия, Арман
}

// Задание 123. Подсчёт количества цифр в строке
console.log("--- Задание 123 ---");
{
  let text = "Group RPO-23-1 Room 21";
  let digits = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] >= "0" && text[i] <= "9") {
      digits++;
    }
  }
  console.log("Цифр в строке: " + digits); // 5
}

// ===== Уровень C — Функции и обработка объектов =====

// Задание 124. Расчёт стоимости электроэнергии
console.log("--- Задание 124 ---");
{
  function calculateElectricity(kwh, rate) {
    if (typeof kwh !== "number" || typeof rate !== "number" ||
        isNaN(kwh) || isNaN(rate) || kwh < 0 || rate <= 0) {
      return null;
    }
    return kwh * rate;
  }
  console.log("250 кВт·ч по 25 ₸ = " + calculateElectricity(250, 25) + " ₸"); // 6250 ₸
  console.log("100 кВт·ч по 25 ₸ = " + calculateElectricity(100, 25) + " ₸"); // 2500 ₸
  console.log("0 кВт·ч по 25 ₸ = " + calculateElectricity(0, 25) + " ₸");     // 0 ₸
  console.log("-10 кВт·ч по 25 ₸ = " + calculateElectricity(-10, 25));        // null
  console.log("250 кВт·ч по 0 ₸ = " + calculateElectricity(250, 0));          // null
}

// Задание 125. Проверка допустимости имени пользователя
console.log("--- Задание 125 ---");
{
  function validateUsername(username) {
    if (username.length < 5 || username.length > 15) {
      return false;
    }
    return /^[A-Za-z0-9_]+$/.test(username);
  }
  ["user1", "ab", "student_2026", "hello world"].forEach(function (u) {
    console.log('"' + u + '": ' + validateUsername(u)); // true, false, true, false
  });
}

// Задание 126. Расчёт успеваемости учебной группы
console.log("--- Задание 126 ---");
{
  let students = [
    { name: "Алия", score: 95 },
    { name: "Арман", score: 76 },
    { name: "Данияр", score: 48 },
    { name: "Мадина", score: 88 },
    { name: "Руслан", score: 35 }
  ];
  function analyzeStudents(students) {
    let sum = 0;
    let passed = [];
    for (let i = 0; i < students.length; i++) {
      sum += students[i].score;
      if (students[i].score >= 50) {
        passed.push(students[i].name);
      }
    }
    return {
      average: sum / students.length,
      passedStudents: passed,
      failedCount: students.length - passed.length,
      successRate: passed.length / students.length * 100
    };
  }
  console.log(analyzeStudents(students));
  // average 68.4, passedStudents Алия, Арман, Мадина, failedCount 2, successRate 60
}

// Задание 127. Поиск товара по названию
console.log("--- Задание 127 ---");
{
  let products = [
    { name: "Ноутбук", price: 280000 },
    { name: "Монитор", price: 95000 },
    { name: "Мышь", price: 7500 },
    { name: "Клавиатура", price: 18000 }
  ];
  function findProduct(name) {
    let query = name.trim().toLowerCase();
    let product = products.find(function (p) {
      return p.name.toLowerCase() === query;
    });
    if (product) {
      console.log(product.name + ": " + product.price + " ₸");
    } else {
      console.log("Товар не найден");
    }
  }
  findProduct("монитор");
  findProduct("МЫШЬ");
  findProduct("Телефон");
}

// Задание 128. Расчёт времени выполнения задач
console.log("--- Задание 128 ---");
{
  let tasks = [
    { name: "HTML", minutes: 45 },
    { name: "CSS", minutes: 60 },
    { name: "JavaScript", minutes: 90 },
    { name: "Testing", minutes: 30 }
  ];
  function calculateTotalTime(tasks) {
    let total = 0;
    let longest = tasks[0];
    for (let i = 0; i < tasks.length; i++) {
      total += tasks[i].minutes;
      if (tasks[i].minutes > longest.minutes) {
        longest = tasks[i];
      }
    }
    return {
      totalMinutes: total,
      hours: Math.floor(total / 60),
      minutes: total % 60,
      longest: longest
    };
  }
  let t = calculateTotalTime(tasks);
  console.log("Всего: " + t.totalMinutes + " мин = " + t.hours + " ч " + t.minutes + " мин"); // 225 мин = 3 ч 45 мин
  console.log("Самая продолжительная задача: " + t.longest.name + " (" + t.longest.minutes + " мин)"); // JavaScript
}

// Задание 129. Система начисления бонусных баллов
console.log("--- Задание 129 ---");
{
  function calculatePoints(amount) {
    if (typeof amount !== "number" || isNaN(amount) || amount < 0) {
      return null;
    }
    let percent;
    if (amount < 10000) {
      percent = 1;
    } else if (amount < 30000) {
      percent = 3;
    } else {
      percent = 5;
    }
    return Math.round(amount * percent / 100);
  }
  [5000, 15000, 40000, -100].forEach(function (a) {
    console.log("Покупка " + a + " ₸ -> бонусов: " + calculatePoints(a)); // 50, 450, 2000, null
  });
}

// Задание 130. Определение рейтинга IT-проектов
console.log("--- Задание 130 ---");
{
  let projects = [
    { title: "Smart Campus", score: 85 },
    { title: "AI Assistant", score: 97 },
    { title: "Eco Monitor", score: 78 },
    { title: "Digital Library", score: 91 }
  ];
  let ranking = projects.slice().sort(function (a, b) { return b.score - a.score; });
  console.log("Рейтинг:");
  ranking.forEach(function (p, index) {
    console.log((index + 1) + " место: " + p.title + " — " + p.score);
  });
  console.log("Победитель: " + ranking[0].title);
  let sum = 0;
  projects.forEach(function (p) { sum += p.score; });
  console.log("Средний балл: " + sum / projects.length); // 87.75
  let top = projects.filter(function (p) { return p.score >= 90; });
  console.log("Не менее 90 баллов: " + top.map(function (p) { return p.title; }).join(", "));
}

// ===== Уровень D — Веб-приложения =====
// (работают только в браузере)
if (typeof document !== "undefined") {

  // Задание 131. Калькулятор потребления воды
  {
    let weightInput = document.getElementById("waterWeight");
    let result = document.getElementById("waterResult");
    let bar = document.getElementById("waterBar");
    document.getElementById("waterBtn").addEventListener("click", function () {
      let raw = weightInput.value.trim();
      let weight = Number(raw);
      if (raw === "" || isNaN(weight) || weight <= 0 || weight > 500) {
        result.textContent = "Ошибка: введите массу тела от 1 до 500 кг";
        bar.style.width = "0%";
        return;
      }
      let ml = weight * 30;
      let liters = ml / 1000;
      result.textContent = "Суточная норма воды: " + liters.toFixed(2) + " л (" + ml + " мл)";
      bar.style.width = Math.min(liters / 5 * 100, 100) + "%"; // шкала до 5 л
    });
  }

  // Задание 132. Генератор QR-кода
  {
    let input = document.getElementById("qrText");
    let box = document.getElementById("qrBox");
    let msg = document.getElementById("qrMessage");
    let saveBtn = document.getElementById("qrSave");
    saveBtn.style.display = "none";

    document.getElementById("qrBtn").addEventListener("click", function () {
      let text = input.value.trim();
      if (text === "") {
        msg.textContent = "Введите ссылку или текст";
        return;
      }
      if (typeof QRCode === "undefined") {
        msg.textContent = "Библиотека QR-кодов не загрузилась. Проверьте подключение к интернету и обновите страницу.";
        return;
      }
      box.innerHTML = "";
      try {
        new QRCode(box, { text: text, width: 200, height: 200 });
        msg.textContent = "QR-код создан";
        saveBtn.style.display = "";
      } catch (e) {
        box.innerHTML = "";
        msg.textContent = "Не удалось создать QR-код: текст слишком длинный";
        saveBtn.style.display = "none";
      }
    });

    document.getElementById("qrClear").addEventListener("click", function () {
      input.value = "";
      box.innerHTML = "";
      msg.textContent = "";
      saveBtn.style.display = "none";
    });

    // Дополнительно: сохранение QR-кода в PNG
    saveBtn.addEventListener("click", function () {
      let canvas = box.querySelector("canvas");
      let img = box.querySelector("img");
      let dataUrl = canvas ? canvas.toDataURL("image/png") : (img ? img.src : "");
      if (!dataUrl) {
        msg.textContent = "Сначала создайте QR-код";
        return;
      }
      let a = document.createElement("a");
      a.href = dataUrl;
      a.download = "qrcode.png";
      document.body.appendChild(a);
      a.click();
      a.remove();
    });
  }

  // Задание 133. Интерактивная таблица умножения
  {
    let total = 10;
    let a, b, asked, correct;
    let example = document.getElementById("mulExample");
    let input = document.getElementById("mulAnswer");
    let feedback = document.getElementById("mulFeedback");
    let progress = document.getElementById("mulProgress");
    let checkBtn = document.getElementById("mulCheck");

    function nextExample() {
      a = Math.floor(Math.random() * 10) + 1;
      b = Math.floor(Math.random() * 10) + 1;
      example.textContent = a + " × " + b + " = ?";
      progress.textContent = "Пример " + (asked + 1) + " из " + total + ". Правильных: " + correct;
      input.value = "";
      input.focus();
    }
    function startTest() {
      asked = 0;
      correct = 0;
      feedback.textContent = "";
      input.disabled = false;
      checkBtn.disabled = false;
      nextExample();
    }
    function checkAnswer() {
      let raw = input.value.trim();
      let answer = Number(raw);
      if (raw === "" || !Number.isInteger(answer)) {
        feedback.textContent = "Введите целое число";
        return;
      }
      if (answer === a * b) {
        correct++;
        feedback.textContent = "Верно!";
      } else {
        feedback.textContent = "Неверно, правильный ответ: " + (a * b);
      }
      asked++;
      if (asked >= total) {
        example.textContent = "Тест завершён";
        progress.textContent = "Результат: " + correct + " из " + total;
        input.disabled = true;
        checkBtn.disabled = true;
        input.value = "";
      } else {
        nextExample();
      }
    }
    checkBtn.addEventListener("click", checkAnswer);
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") checkAnswer();
    });
    document.getElementById("mulRestart").addEventListener("click", startTest);
    startTest();
  }

  // Задание 134. Менеджер расходов
  {
    let expenses = [];
    let nameInput = document.getElementById("expName");
    let amountInput = document.getElementById("expAmount");
    let list = document.getElementById("expList");
    let totalEl = document.getElementById("expTotal");
    let msg = document.getElementById("expMessage");

    try {
      let saved = JSON.parse(localStorage.getItem("expenses"));
      if (Array.isArray(saved)) expenses = saved;
    } catch (e) {
      // localStorage недоступен
    }
    function save() {
      try {
        localStorage.setItem("expenses", JSON.stringify(expenses));
      } catch (e) {
        // не удалось сохранить
      }
    }
    function renderExpenses() {
      list.innerHTML = "";
      let total = 0;
      expenses.forEach(function (item) {
        total += item.amount;
        let li = document.createElement("li");
        li.textContent = item.name + " — " + item.amount + " ₸ ";
        let del = document.createElement("button");
        del.textContent = "Удалить";
        del.addEventListener("click", function () {
          expenses = expenses.filter(function (e) { return e.id !== item.id; });
          save();
          renderExpenses();
        });
        li.appendChild(del);
        list.appendChild(li);
      });
      totalEl.textContent = "Общая сумма расходов: " + total + " ₸";
    }
    document.getElementById("expAdd").addEventListener("click", function () {
      let name = nameInput.value.trim();
      let rawAmount = amountInput.value.trim();
      let amount = Number(rawAmount);
      if (name === "") {
        msg.textContent = "Введите название расхода";
        return;
      }
      if (rawAmount === "" || isNaN(amount) || amount <= 0) {
        msg.textContent = "Сумма должна быть числом больше нуля";
        return;
      }
      expenses.push({ id: Date.now() + Math.random(), name: name, amount: amount });
      msg.textContent = "";
      nameInput.value = "";
      amountInput.value = "";
      save();
      renderExpenses();
    });
    renderExpenses();
  }

  // Задание 135. Электронный журнал оценок
  {
    // вымышленные данные для демонстрации (если в localStorage ничего нет)
    let students = [
      { id: 1, name: "Иванов Алибек", score: 92 },
      { id: 2, name: "Сидорова Мадина", score: 78 },
      { id: 3, name: "Петров Данияр", score: 45 }
    ];
    let nextId = 4;
    let sortDir = null; // null | "desc" | "asc"
    let nameInput = document.getElementById("jName");
    let scoreInput = document.getElementById("jScore");
    let searchInput = document.getElementById("jSearch");
    let body = document.getElementById("jBody");
    let avgEl = document.getElementById("jAverage");
    let msg = document.getElementById("jMessage");
    let sortBtn = document.getElementById("jSort");

    try {
      let saved = JSON.parse(localStorage.getItem("journal"));
      if (Array.isArray(saved)) {
        students = saved;
        nextId = students.reduce(function (m, s) { return Math.max(m, s.id); }, 0) + 1;
      }
    } catch (e) {
      // localStorage недоступен — остаются демонстрационные данные
    }
    function save() {
      try {
        localStorage.setItem("journal", JSON.stringify(students));
      } catch (e) {
        // не удалось сохранить
      }
    }
    function levelOf(score) {
      if (score >= 90) return "Отлично";
      if (score >= 70) return "Хорошо";
      if (score >= 50) return "Удовлетворительно";
      return "Неудовлетворительно";
    }
    function renderJournal() {
      let query = searchInput.value.trim().toLowerCase();
      let shown = students.filter(function (s) {
        return s.name.toLowerCase().includes(query);
      });
      if (sortDir === "desc") {
        shown = shown.slice().sort(function (a, b) { return b.score - a.score; });
      } else if (sortDir === "asc") {
        shown = shown.slice().sort(function (a, b) { return a.score - b.score; });
      }
      body.innerHTML = "";
      shown.forEach(function (s, index) {
        let tr = document.createElement("tr");
        [index + 1, s.name, s.score, levelOf(s.score)].forEach(function (v) {
          let td = document.createElement("td");
          td.textContent = v;
          tr.appendChild(td);
        });
        let td = document.createElement("td");
        let del = document.createElement("button");
        del.textContent = "Удалить";
        del.addEventListener("click", function () {
          students = students.filter(function (x) { return x.id !== s.id; });
          save();
          renderJournal();
        });
        td.appendChild(del);
        tr.appendChild(td);
        body.appendChild(tr);
      });
      if (students.length === 0) {
        avgEl.textContent = "Средний балл группы: —";
      } else {
        let sum = 0;
        students.forEach(function (s) { sum += s.score; });
        avgEl.textContent = "Средний балл группы: " + (sum / students.length).toFixed(2);
      }
    }
    document.getElementById("jAdd").addEventListener("click", function () {
      let name = nameInput.value.trim();
      let raw = scoreInput.value.trim();
      let score = Number(raw);
      if (name === "") {
        msg.textContent = "Введите ФИО студента";
        return;
      }
      if (raw === "" || isNaN(score) || score < 0 || score > 100) {
        msg.textContent = "Баллы должны быть числом от 0 до 100";
        return;
      }
      students.push({ id: nextId++, name: name, score: score });
      msg.textContent = "";
      nameInput.value = "";
      scoreInput.value = "";
      save();
      renderJournal();
    });
    searchInput.addEventListener("input", renderJournal);
    sortBtn.addEventListener("click", function () {
      sortDir = sortDir === "desc" ? "asc" : "desc";
      sortBtn.textContent = "Сортировка по баллам: " + (sortDir === "desc" ? "по убыванию" : "по возрастанию");
      renderJournal();
    });

    // Дополнительно: экспорт в CSV
    document.getElementById("jExport").addEventListener("click", function () {
      function cell(v) {
        return '"' + String(v).replace(/"/g, '""') + '"';
      }
      let lines = ["№;ФИО;Баллы;Уровень"];
      students.forEach(function (s, i) {
        lines.push([i + 1, cell(s.name), s.score, cell(levelOf(s.score))].join(";"));
      });
      let blob = new Blob(["\uFEFF" + lines.join("\r\n")], { type: "text/csv;charset=utf-8" });
      let a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "journal.csv";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(a.href);
    });
    renderJournal();
  }
}