const MIN_YEAR = 2000;
const MAX_YEAR = 2100;
const TOTAL_CHAPTERS = 1189;
const ELEMENTS_PER_DAY = 4;

const bibleBooks = [
	{name: "Gn", chapters: 50}, {name: "Ex", chapters: 40}, {name: "Lv", chapters: 27},
    {name: "Nm", chapters: 36}, {name: "Dt", chapters: 34}, {name: "Jos", chapters: 24},
    {name: "Jue", chapters: 21}, {name: "Rt", chapters: 4}, {name: "1S", chapters: 31},
    {name: "2S", chapters: 24}, {name: "1R", chapters: 22}, {name: "2R", chapters: 25},
    {name: "1Cr", chapters: 29}, {name: "2Cr", chapters: 36}, {name: "Esd", chapters: 10},
    {name: "Neh", chapters: 13}, {name: "Est", chapters: 10}, {name: "Job", chapters: 42},
    {name: "Sal", chapters: 150}, {name: "Pr", chapters: 31}, {name: "Ec", chapters: 12},
    {name: "Cnt", chapters: 8}, {name: "Is", chapters: 66}, {name: "Jer", chapters: 52},
    {name: "Lam", chapters: 5}, {name: "Ez", chapters: 48}, {name: "Dan", chapters: 12},
    {name: "Os", chapters: 14}, {name: "Jl", chapters: 3}, {name: "Am", chapters: 9},
    {name: "Abd", chapters: 1}, {name: "Jon", chapters: 4}, {name: "Miq", chapters: 7},
    {name: "Nah", chapters: 3}, {name: "Hab", chapters: 3}, {name: "Sof", chapters: 3},
    {name: "Hag", chapters: 2}, {name: "Zac", chapters: 14}, {name: "Mal", chapters: 4},
    {name: "Mt", chapters: 28}, {name: "Mr", chapters: 16}, {name: "Lc", chapters: 24},
    {name: "Jn", chapters: 21}, {name: "Hch", chapters: 28}, {name: "Ro", chapters: 16},
    {name: "1Co", chapters: 16}, {name: "2Co", chapters: 13}, {name: "Gl", chapters: 6},
    {name: "Ef", chapters: 6}, {name: "Flp", chapters: 4}, {name: "Col", chapters: 4},
    {name: "1Ts", chapters: 5}, {name: "2Ts", chapters: 3}, {name: "1Ti", chapters: 6},
    {name: "2Ti", chapters: 4}, {name: "Tit", chapters: 3}, {name: "Flm", chapters: 1},
    {name: "Heb", chapters: 13}, {name: "Stg", chapters: 5}, {name: "1P", chapters: 5},
    {name: "2P", chapters: 3}, {name: "1Jn", chapters: 5}, {name: "2Jn", chapters: 1},
    {name: "3Jn", chapters: 1}, {name: "Jud", chapters: 1}, {name: "Ap", chapters: 22},
];

const bibleBooksNT = [
    {name: "Mt", chapters: 28}, {name: "Mr", chapters: 16}, {name: "Lc", chapters: 24},
    {name: "Jn", chapters: 21}, {name: "Hch", chapters: 28}, {name: "Ro", chapters: 16},
    {name: "1Co", chapters: 16}, {name: "2Co", chapters: 13}, {name: "Gl", chapters: 6},
    {name: "Ef", chapters: 6}, {name: "Flp", chapters: 4}, {name: "Col", chapters: 4},
    {name: "1Ts", chapters: 5}, {name: "2Ts", chapters: 3}, {name: "1Ti", chapters: 6},
    {name: "2Ti", chapters: 4}, {name: "Tit", chapters: 3}, {name: "Flm", chapters: 1},
    {name: "Heb", chapters: 13}, {name: "Stg", chapters: 5}, {name: "1P", chapters: 5},
    {name: "2P", chapters: 3}, {name: "1Jn", chapters: 5}, {name: "2Jn", chapters: 1},
    {name: "3Jn", chapters: 1}, {name: "Jud", chapters: 1}, {name: "Ap", chapters: 22},
    {name: "Gn", chapters: 50}, {name: "Ex", chapters: 40}, {name: "Lv", chapters: 27},
    {name: "Nm", chapters: 36}, {name: "Dt", chapters: 34}, {name: "Jos", chapters: 24},
    {name: "Jue", chapters: 21}, {name: "Rt", chapters: 4}, {name: "1S", chapters: 31},
    {name: "2S", chapters: 24}, {name: "1R", chapters: 22}, {name: "2R", chapters: 25},
    {name: "1Cr", chapters: 29}, {name: "2Cr", chapters: 36}, {name: "Esd", chapters: 10},
    {name: "Neh", chapters: 13}, {name: "Est", chapters: 10}, {name: "Job", chapters: 42},
    {name: "Sal", chapters: 150}, {name: "Pr", chapters: 31}, {name: "Ec", chapters: 12},
    {name: "Cnt", chapters: 8}, {name: "Is", chapters: 66}, {name: "Jer", chapters: 52},
    {name: "Lam", chapters: 5}, {name: "Ez", chapters: 48}, {name: "Dan", chapters: 12},
    {name: "Os", chapters: 14}, {name: "Jl", chapters: 3}, {name: "Am", chapters: 9},
    {name: "Abd", chapters: 1}, {name: "Jon", chapters: 4}, {name: "Miq", chapters: 7},
    {name: "Nah", chapters: 3}, {name: "Hab", chapters: 3}, {name: "Sof", chapters: 3},
    {name: "Hag", chapters: 2}, {name: "Zac", chapters: 14}, {name: "Mal", chapters: 4},
];

document.addEventListener('DOMContentLoaded', () => {
    const yearPicker = document.getElementById('yearPicker');
    yearPicker.value = new Date().getFullYear() + 1;
});

function getDistribution(year) {
    const array = [];
    let remainingChapters = TOTAL_CHAPTERS;
    let date = new Date(year, 0, 1);
    const lastDayOfYear = new Date(year, 11, 31);

    while (date <= lastDayOfYear) {
        const dayOfWeek = date.getDay();
        let elements = ELEMENTS_PER_DAY;

        if (
			dayOfWeek === 3 || //Wenesday 
			dayOfWeek === 0 || //saturday
			(date.getDate() === 1 && date.getMonth() === 0) //Juanuary 1st.
		) {
            elements = 1;
        } else if (
			(date.getDate() === 24 && date.getMonth() === 11) ||
			(date.getDate() === 29 && date.getMonth() === 8) ||
			(date.getDate() === 4 && date.getMonth() === 9) ||
			(date.getDate() === 5 && date.getMonth() === 9) ||
			(date.getDate() === 6 && date.getMonth() === 9) ||
			(date.getDate() === 26 && date.getMonth() === 10)
		) {
            elements = 3;
        }
        remainingChapters -= elements;

        array.push({
            month: date.getMonth() + 1,
            day: date.getDate(),
            dayOfWeek,
            elements
        });

        date.setDate(date.getDate() + 1);
    }

    let saturdays = array.filter(day => day.dayOfWeek === 6);
    let index = date.getDay() === 1 ? 1 : 0;

    while (remainingChapters > 0 && index < saturdays.length) {
        saturdays[index].elements += 1;
        remainingChapters--;
        index++;
    }

    return array;
}

function generatePlan(distribution, bibleBooks) {
	
    let currentBookIndex = 0;
    let currentChapter = 1;
    const planning = [];

    for (const day of distribution) {
        let chaptersToRead = day.elements;
        const readings = [];

        while (chaptersToRead > 0) {
            const book = bibleBooks[currentBookIndex];
            const chaptersLeft = book.chapters - currentChapter + 1;

            if (chaptersToRead <= chaptersLeft) {
                let endChapter = currentChapter + chaptersToRead - 1;
                let textChapter = (currentChapter === endChapter) ? currentChapter : `${currentChapter}-${endChapter}`;
                readings.push(`${book.name}. ${textChapter}`);
                currentChapter += chaptersToRead;
                chaptersToRead = 0;
            } else {
                if (currentChapter <= book.chapters) {
                    let textChapter = (currentChapter === book.chapters) ? currentChapter : currentChapter + '-' + book.chapters;
                    readings.push(`${book.name}. ${textChapter}`);
                }
                chaptersToRead -= chaptersLeft;
                currentChapter = 1;
                currentBookIndex++;
            }
        }

        planning.push({month: day.month, day: day.day, dayOfWeek: day.dayOfWeek, readings: readings.join(", ")});
    }

    return planning;
}

document.getElementById('generateButton').addEventListener('click', () => {
    const yearPicker = document.getElementById('yearPicker');
    const errorMessage = document.getElementById('errorMessage');
    const generatedCardContainer = document.getElementById('generatedCardContainer');
    const selectedYear = parseInt(yearPicker.value, 10);

    if (isNaN(selectedYear) || selectedYear < MIN_YEAR || selectedYear > MAX_YEAR) {
        errorMessage.textContent = `Por favor, ingresa un año válido entre ${MIN_YEAR} y ${MAX_YEAR}.`;
        generatedCardContainer.innerHTML = '';
        return;
    } else {
        errorMessage.textContent = '';
    }

    generatedCardContainer.innerHTML = '';
    const distribution = getDistribution(selectedYear);
	
    const startPicker = document.getElementById('startPicker').value;
	const selectedBooks = (startPicker === "NT") ? bibleBooksNT : bibleBooks;
	
	const planning = generatePlan(distribution, selectedBooks);

    if (!planning.length) {
        console.error("No se pudo generar el plan.");
        return;
    }

    const titleCard = document.createElement('div');
    titleCard.classList.add('card', 'p-4', 'general-card', 'title-card');

    const titleWrapper = document.createElement('div');
    titleWrapper.style.display = 'flex';
    titleWrapper.style.justifyContent = 'space-between';
    titleWrapper.style.alignItems = 'center';
    titleWrapper.style.gap = '10px';

    const titleText = document.createElement('h4');
	titleText.style.marginLeft = "9px"
    titleText.innerText = "Plan de Lectura Biblica " + selectedYear;
    titleWrapper.appendChild(titleText);

    const colorMessage = document.createElement('span');
    colorMessage.textContent = "Cambiar color del fondo:";
    colorMessage.style.fontSize = "0.9rem";
    colorMessage.style.marginRight = "6px";
	colorMessage.style.fontWeight = "bold";

    const colorPicker = document.createElement('input');
    colorPicker.type = 'color';
    colorPicker.value = '#F0FFFF';
    colorPicker.title = 'Cambiar color de fondo';
    colorPicker.style.cursor = 'pointer';

    const planningCard = document.createElement('div');
    planningCard.classList.add('card', 'p-4', 'general-card', 'planning-card');
    planningCard.style.backgroundColor = colorPicker.value;

    colorPicker.addEventListener('input', (e) => {
        planningCard.style.backgroundColor = e.target.value;
    });

    const colorContainer = document.createElement('div');
    colorContainer.style.display = 'flex';
    colorContainer.style.alignItems = 'center';
    colorContainer.appendChild(colorMessage);
    colorContainer.appendChild(colorPicker);

    titleWrapper.appendChild(colorContainer);
    titleCard.appendChild(titleWrapper);

    const downloadCard = document.createElement('div');
    downloadCard.classList.add('card', 'p-4', 'general-card', 'download-card');

    const columnContainer = document.createElement('div');
    columnContainer.classList.add('column-container');

    for (let month = 1; month <= 12; month++) {
        const monthDays = planning.filter(day => day.month === month);

        if (monthDays.length > 0) {
            const monthColumn = document.createElement('div');
            monthColumn.classList.add('month-column');
            if ([3, 9].includes(month)) monthColumn.classList.add('column-push-mar-higt');
            if ([5, 11].includes(month)) monthColumn.classList.add('column-push-pad-higt');
            if ([6, 12].includes(month)) monthColumn.classList.add('column-push-pad-low');

            const monthTitle = document.createElement('div');
            monthTitle.classList.add('month-title');
            monthTitle.textContent = new Date(0, month - 1).toLocaleString('es-MX', {month: 'long'});
            monthColumn.appendChild(monthTitle);

            let initialItem = true;
            for (const day of monthDays) {
                const readingItem = document.createElement('div');
                readingItem.classList.add('reading-item');
                if(initialItem){
                    readingItem.classList.add('initial-item');
                    initialItem = false;
                }

                const dayText = document.createElement('span');
                dayText.classList.add('day-text');
                if (day.dayOfWeek === 3) dayText.classList.add('day-wednesday');
                if (day.dayOfWeek === 0) dayText.classList.add('day-sunday');

                dayText.innerHTML = `<div class="mark-check">&#x25AD;</div> <strong>${day.day} ${day.readings}</strong>`;
                readingItem.appendChild(dayText);
                monthColumn.appendChild(readingItem);
            }

            columnContainer.appendChild(monthColumn);
        }
    }

    planningCard.appendChild(columnContainer);

    const downloadButton = document.createElement('button');
    downloadButton.id = 'downloadImageButton';
    downloadButton.classList.add('btn', 'btn-success', 'mt-4', 'download-button');
    downloadButton.textContent = 'Descargar imagen';
    downloadButton.addEventListener('click', () => {
        html2canvas(planningCard, {
            scale: 4,
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = "Plan de lectura biblica " + selectedYear + ".png";
            link.href = canvas.toDataURL('image/png');
            link.click();
        }).catch(error => {
            console.error('Error al generar la imagen:', error);
        });
    });

    const downloadInfoButton = document.createElement('button');
    downloadInfoButton.id = 'downloadInfoButton';
    downloadInfoButton.classList.add('btn', 'btn-secondary', 'mt-4', 'download-button');
    downloadInfoButton.textContent = 'Descargar informacion';

    downloadInfoButton.addEventListener('click', () => {
        const columns = columnContainer.children;
        const excelData = [];

        let currentRow = 0;

        for (const column of columns) {
            const rows = column.children;
            const monthName = rows[0].textContent.toUpperCase();

            if (excelData.length <= currentRow) {
                excelData[currentRow] = [];
            }
            excelData[currentRow].push(monthName);
            currentRow++;

            for (let i = 1; i < 32; i++) {
                const dayData = (i < rows.length) ? rows[i].textContent.trim().replace('▭ ', '') : "";
                if (excelData.length <= currentRow) {
                    excelData[currentRow] = [];
                }

                excelData[currentRow].push(dayData);
                currentRow++;
            }

            currentRow = 0;
        }

        console.log(excelData);

        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.aoa_to_sheet(excelData);

        const columnWidths = excelData[0].map((_, colIndex) => {
            const maxWidth = excelData.reduce((max, row) => {
                const cellValue = row[colIndex] || "";
                return Math.max(max, cellValue.toString().length);
            }, 0);
            return {wch: maxWidth + 2};
        });

        worksheet['!cols'] = columnWidths;
        XLSX.utils.book_append_sheet(workbook, worksheet, "Plan de Lectura " + selectedYear);
        const excelFileName = `Plan de Lectura Biblica ${selectedYear}.xlsx`;
        XLSX.writeFile(workbook, excelFileName);
    });

    downloadCard.appendChild(downloadInfoButton);
    downloadCard.appendChild(downloadButton);
    generatedCardContainer.appendChild(titleCard);
    generatedCardContainer.appendChild(planningCard);
    generatedCardContainer.appendChild(downloadCard);
});

