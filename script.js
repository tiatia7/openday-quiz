/* =====================================================
   SETTINGS
   ===================================================== */
const TIME_LIMIT = 60 // seconds for each question

const TYPE_TEXT = {
    syntax: 'Find the syntax error:',
    output: 'What is the output of the following code?',
    bug:    'Fix the following bug:'
}

/* =====================================================
   QUESTIONS (20)
   answer = index of the correct option (0 = first, 3 = fourth)
   ===================================================== */
const questions = [
    // 1
    {
        type: 'syntax', level: 'easy',
        code: `#include <iostream>
using namespace std;

int main() {
    int x = 5
    cout << x;
    return 0;
}`,
        options: [
            'Missing #include <string>',
            'main() must return void',
            'Missing semicolon after int x = 5',
            'cout needs endl'
        ],
        answer: 2
    },
    // 2
    {
        type: 'output', level: 'easy',
        code: `int x = 10;
int y = 3;
cout << x / y;`,
        options: ['3.33', '3', '4', '3.3'],
        answer: 1
    },
    // 3
    {
        type: 'bug', level: 'easy',
        code: `int i = 0;
while (i < 5) {
    cout << i << " ";
}
// should print: 0 1 2 3 4`,
        options: [
            'Change while to if',
            'Change < to >',
            'Remove the cout line',
            'Add i++; inside the loop'
        ],
        answer: 3
    },
    // 4
    {
        type: 'syntax', level: 'easy',
        code: `#include <iostream>
using namespace std;

int main() {
    cout >> "Hello World";
    return 0;
}`,
        options: [
            'Wrong operator: it should be << not >>',
            'Missing quotes around Hello World',
            'Missing semicolon',
            'Missing return type'
        ],
        answer: 0
    },
    // 5
    {
        type: 'output', level: 'easy',
        code: `int a = 5;
a += 3;
a *= 2;
cout << a;`,
        options: ['10', '13', '16', '11'],
        answer: 2
    },
    // 6
    {
        type: 'bug', level: 'easy',
        code: `int score = 70;
if (score = 100) {
    cout << "Perfect!";
}
// should print only when score is 100`,
        options: [
            'if (score === 100)',
            'if (score == 100)',
            'if (score := 100)',
            'if score == 100'
        ],
        answer: 1
    },
    // 7
    {
        type: 'syntax', level: 'medium',
        code: `#include <iostream>
using namespace std;

int main() {
    for (int i = 0, i < 5; i++) {
        cout << i << " ";
    }
    return 0;
}`,
        options: [
            'Missing { after for',
            'The comma after i = 0 must be a semicolon',
            'i++ is not allowed in a for loop',
            'cout needs endl'
        ],
        answer: 1
    },
    // 8
    {
        type: 'output', level: 'medium',
        code: `int x = 5;
int y = x++;
int z = ++x;
cout << x << " " << y << " " << z;`,
        options: ['7 6 7', '6 5 6', '6 5 7', '7 5 7'],
        answer: 3
    },
    // 9
    {
        type: 'bug', level: 'medium',
        code: `int arr[5] = {1, 2, 3, 4, 5};
for (int i = 0; i <= 5; i++) {
    cout << arr[i] << " ";
}
// should print: 1 2 3 4 5`,
        options: [
            'Change i <= 5 to i < 5',
            'Change int arr[5] to int arr[4]',
            'Change i = 0 to i = 1',
            'Change cout to printf'
        ],
        answer: 0
    },
    // 10
    {
        type: 'syntax', level: 'medium',
        code: `#include <iostream>
using namespace std;

int main() {
    int age = 20;
    if (age >= 18) {
        cout << "Adult";
    else {
        cout << "Minor";
    }
    return 0;
}`,
        options: [
            'else cannot be used with if',
            'Missing closing brace } before else',
            'Missing semicolon after cout',
            'age must be a string'
        ],
        answer: 1
    },
    // 11
    {
        type: 'output', level: 'medium',
        code: `for (int i = 1; i <= 10; i++) {
    if (i % 3 == 0) continue;
    if (i > 7) break;
    cout << i << " ";
}`,
        options: [
            '1 2 3 4 5 6 7',
            '1 2 4 5',
            '1 2 4 5 7',
            '1 2 4 5 7 8'
        ],
        answer: 2
    },
    // 12
    {
        type: 'bug', level: 'medium',
        code: `int a = 7, b = 2;
double avg = a / b;
cout << avg;
// should print: 3.5`,
        options: [
            'double avg = a / b * 1.0;',
            'double avg = double(a / b);',
            'double avg = (double)a / b;',
            'int avg = a / b;'
        ],
        answer: 2
    },
    // 13
    {
        type: 'syntax', level: 'medium',
        code: `#include <iostream>
using namespace std;

int main() {
    cout << square(4);
    return 0;
}

int square(int n) {
    return n * n;
}`,
        options: [
            'square is used before it is declared',
            'main must be void',
            'n * n is not valid',
            'Missing #include <cmath>'
        ],
        answer: 0
    },
    // 14
    {
        type: 'output', level: 'medium',
        code: `int arr[5] = {2, 4, 6, 8, 10};
int sum = 0;
for (int i = 1; i < 5; i += 2)
    sum += arr[i];
cout << sum;`,
        options: ['10', '18', '6', '12'],
        answer: 3
    },
    // 15
    {
        type: 'bug', level: 'medium',
        code: `int day = 1;
switch (day) {
    case 1: cout << "Sat";
    case 2: cout << "Sun";
    default: cout << "Other";
}
// should print only: Sat`,
        options: [
            'Remove the default line',
            'Add break; after each cout',
            'Replace switch with while',
            'Change case 1: to case 1;'
        ],
        answer: 1
    },
    // 16
    {
        type: 'syntax', level: 'hard',
        code: `#include <iostream>
using namespace std;

class Student {
    int id;
public:
    Student(int i) { id = i; }
    int getId() { return id; }
}

int main() {
    Student s(7);
    cout << s.getId();
    return 0;
}`,
        options: [
            'getId() must be const',
            'The constructor must be private',
            'id must be public',
            'Missing semicolon after the closing brace of the class'
        ],
        answer: 3
    },
    // 17
    {
        type: 'output', level: 'hard',
        code: `int a[] = {10, 20, 30, 40};
int *p = a;
p += 2;
cout << *p << " " << *(p - 1) << " " << p[1];`,
        options: ['30 30 40', '30 20 30', '30 20 40', '20 10 30'],
        answer: 2
    },
    // 18
    {
        type: 'output', level: 'hard',
        code: `class A {
public:
    void show() { cout << "A"; }
};

class B : public A {
public:
    void show() { cout << "B"; }
};

int main() {
    A* p = new B();
    p->show();
}`,
        options: ['B', 'AB', 'Compile error', 'A'],
        answer: 3
    },
    // 19
    {
        type: 'bug', level: 'hard',
        code: `void swapNums(int a, int b) {
    int t = a;
    a = b;
    b = t;
}

int main() {
    int x = 1, y = 2;
    swapNums(x, y);
    cout << x << " " << y;
}
// should print: 2 1`,
        options: [
            'Call swapNums(&x, &y); only',
            'Print a and b instead of x and y',
            'Declare x and y as const',
            'Change the parameters to int &a, int &b'
        ],
        answer: 3
    },
    // 20
    {
        type: 'bug', level: 'hard',
        code: `int* createNumber() {
    int n = 42;
    return &n;
}
// the function returns the address of a
// local variable that no longer exists`,
        options: [
            'Return *n instead of &n',
            'Use int* n = new int(42); and return n;',
            'Change the return type to void',
            'Remove the & and return n'
        ],
        answer: 1
    }
]

/* =====================================================
   ELEMENTS
   ===================================================== */
const startBtn    = document.getElementById('start-btn')
const grid        = document.getElementById('question-grid')
const titleEl     = document.getElementById('question-title')
const timerEl     = document.getElementById('timer')
const textEl      = document.getElementById('question-text')
const codeEl      = document.querySelector('#question-code code')
const optionsEl   = document.getElementById('options')
const checkBtn    = document.getElementById('check-btn')

let currentIndex = null  // which question is open now
let timeLeft     = TIME_LIMIT
let timerId      = null

/* =====================================================
   SCREENS
   ===================================================== */
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.add('hidden')
    })
    document.getElementById(id).classList.remove('hidden')
}

/* =====================================================
   GRID (all questions stay available all day)
   ===================================================== */
questions.forEach((question, index) => {
    const btn = document.createElement('button')
    btn.type = 'button'
    btn.className = 'q-btn'
    btn.textContent = 'Question ' + (index + 1)
    btn.addEventListener('click', () => openQuestion(index))

    grid.appendChild(btn)
})

/* =====================================================
   OPEN A QUESTION
   ===================================================== */
function openQuestion(index) {
    currentIndex = index
    const q = questions[index]

    titleEl.textContent = 'Question ' + (index + 1)
    textEl.textContent  = TYPE_TEXT[q.type]
    codeEl.textContent  = q.code

    // Build the four options
    optionsEl.innerHTML = '<legend>Choose your answer</legend>'
    q.options.forEach((text, i) => {
        const label = document.createElement('label')
        label.className = 'option'
        if (q.type === 'bug' || q.type === 'output') label.classList.add('mono')

        const input = document.createElement('input')
        input.type  = 'radio'
        input.name  = 'option'
        input.value = i
        input.addEventListener('change', () => {
            checkBtn.disabled = false
        })

        const span = document.createElement('span')
        span.textContent = text

        label.append(input, span)
        optionsEl.appendChild(label)
    })

    checkBtn.disabled = true   // enabled when the player picks an option

    startTimer()
    showScreen('question-screen')
}

/* =====================================================
   TIMER
   ===================================================== */
function updateTimer() {
    timerEl.textContent = timeLeft + 's'
    timerEl.classList.toggle('low', timeLeft <= 10)
}

function startTimer() {
    clearInterval(timerId)       // never keep two timers running
    timeLeft = TIME_LIMIT
    updateTimer()

    timerId = setInterval(() => {
        timeLeft--
        updateTimer()
        if (timeLeft <= 0) {
            finishQuestion('timeup-screen')
        }
    }, 1000)
}

/* =====================================================
   CHECK THE ANSWER AND SHOW THE RESULT
   ===================================================== */
function finishQuestion(resultScreen) {
    clearInterval(timerId)
    showScreen(resultScreen)
}

checkBtn.addEventListener('click', () => {
    const chosen = optionsEl.querySelector('input:checked')
    if (!chosen) return

    if (Number(chosen.value) === questions[currentIndex].answer) {
        finishQuestion('win-screen')
    } else {
        finishQuestion('lose-screen')
    }
})

/* =====================================================
   BUTTONS
   ===================================================== */
startBtn.addEventListener('click', () => showScreen('grid-screen'))

document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', () => showScreen('grid-screen'))
})