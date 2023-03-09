const prevButton = document.querySelector('#prev')
const nextButton = document.querySelector('#next')
const monthName = document.querySelector('#monthName')
const yearName = document.querySelector('#yearName')
const dayList = document.querySelectorAll('#dayList')

let today = new Date();
let month = today.getMonth();
let year = today.getFullYear();
const date = today.getDate();
const day = today.getDay()

const hari = [
    'senin',
    'selasa',
    'rabu',
    'kamis',
    'jumat',
    'sabtu',
    'minggu'
]

// const months = [
//     "Januari", "Februari", "Maret", "April", "Mei", "Juni",
//     "Juli", "Agustus", "September", "Oktober", "November", "Desember"
// ];

const months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
]

monthName.textContent = months[month];
yearName.textContent = year;

nextButton.addEventListener('click', () => {
    next()
})

prevButton.addEventListener('click', () => {
    prev()
})

function arrayOfdate(year, month) {
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const daysInMonth = new Date(year, month, 0).getDate();
    const firstWeekday = new Date(year, month - 1, 1).getDay();

    const calendarArray = new Array(37).fill('').map((day, index) => {
        const dayOfMonth = index - firstWeekday + 1;
        if (dayOfMonth < 1 || dayOfMonth > daysInMonth) {
            return '';
        } else {
            return `${dayOfMonth}`;
        }
    });

    return calendarArray;
}

let datesArray = arrayOfdate(year, month + 1)
for (let a = 0; a < datesArray.length; a++) {
    for (i = 0; i < dayList.length; i++) {
        dayList[i].textContent = datesArray[i]
        if (dayList[i].textContent == date) {
            dayList[i].innerHTML = `<span title="hari ini" :class="themeIndex == 2 ? 'border-white' : themeIndex == 3 ? 'border-black dark:border-white' : 'border-black' " class="w-6 h-6 grid text-inherit place-items-center border border-dotted rounded-full">${date}</span>`
        }
    }
}

function next() {
    if (month >= 11) {
        monthName.textContent = months[month = 0]
        yearName.textContent = year++ + 1
        let datesArray = arrayOfdate(year, month + 1)
        for (let a = 0; a < datesArray.length; a++) {
            for (i = 0; i < dayList.length; i++) {
                dayList[i].textContent = datesArray[i]
                if (month == today.getMonth() && year == today.getFullYear()) {
                    if (dayList[i].textContent == date) {
                        dayList[i].innerHTML = `<span title="hari ini" :class="themeIndex == 2 ? 'border-white' : themeIndex == 3 ? 'border-black dark:border-white' : 'border-black' " class="w-6 h-6 grid text-inherit  place-items-center border border-dotted rounded-full">${date}</span>`
                    }
                }
            }
        }
    } else {
        monthName.textContent = months[month++ + 1]
        let datesArray = arrayOfdate(year, month + 1)
        for (let a = 0; a < datesArray.length; a++) {
            for (i = 0; i < dayList.length; i++) {
                dayList[i].textContent = datesArray[i]
                if (month == today.getMonth() && year == today.getFullYear()) {
                    if (dayList[i].textContent == date) {
                        dayList[i].innerHTML = `<span title="hari ini" :class="themeIndex == 2 ? 'border-white' : themeIndex == 3 ? 'border-black dark:border-white' : 'border-black' " class="w-6 h-6 grid text-inherit  place-items-center border border-dotted rounded-full">${date}</span>`
                    }
                }
            }
        }
    }
}

function prev() {
    if (month <= 0) {
        monthName.textContent = months[month = 11]
        yearName.textContent = year-- - 1
        let datesArray = arrayOfdate(year, month + 1)
        for (let a = 0; a < datesArray.length; a++) {
            for (i = 0; i < dayList.length; i++) {
                dayList[i].textContent = datesArray[i]
                if (month == today.getMonth() && year == today.getFullYear()) {
                    if (dayList[i].textContent == date) {
                        dayList[i].innerHTML = `<span title="hari ini" :class="themeIndex == 2 ? 'border-white' : themeIndex == 3 ? 'border-black dark:border-white' : 'border-black' " class="w-6 h-6 grid text-inherit  place-items-center border border-dotted rounded-full">${date}</span>`
                    }
                }
            }
        }
    } else {
        monthName.textContent = months[month-- - 1]
        let datesArray = arrayOfdate(year, month + 1)
        for (let a = 0; a < datesArray.length; a++) {
            for (i = 0; i < dayList.length; i++) {
                dayList[i].textContent = datesArray[i]
                if (month == today.getMonth() && year == today.getFullYear()) {
                    if (dayList[i].textContent == date) {
                        dayList[i].innerHTML = `<span title="hari ini" :class="themeIndex == 2 ? 'border-white' : themeIndex == 3 ? 'border-black dark:border-white' : 'border-black' " class="w-6 h-6 grid text-inherit  place-items-center border border-dotted rounded-full">${date}</span>`
                    }
                }
            }
        }
    }
}