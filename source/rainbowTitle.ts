const titleOptions = ["theFactorioScreen", "Приколдэс", "Смішняка", "Srandičkaka"];
let titleIndex = 0;

const titleElement = document.getElementById('title') as HTMLElement;

function updateTitleText() {
    titleElement.innerHTML = '';
    const currentText = titleOptions[titleIndex];

    document.title = currentText;

    currentText.split('').forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.classList.add('letter');
        span.style.animationDelay = `${index * 0.1}s`;
        titleElement.appendChild(span);
    });

    titleIndex = (titleIndex + 1) % titleOptions.length;
}

let timer: NodeJS.Timer | null = null;

if (titleElement) {

    if (timer) {
        clearInterval(timer);
    }

    updateTitleText();

    titleElement.addEventListener('click', updateTitleText);

    let hue = 0;
    timer = setInterval(() => {
        hue = (hue + 1) % 360;
        document.querySelectorAll('.letter').forEach((el, index) => {
            const letter = el as HTMLElement;
            if (themeSwitch.checked) {
                letter.style.color = `hsl(${(hue + index * 30) % 360}, 100%, 50%)`;
            } else {
                letter.style.color = `hsl(${(hue + index * 30) % 360}, 100%, 48%)`;
            }
        });
    }, 100);

}

const mainContent = document.getElementById('mainContent');
const mainContainer = document.getElementById('mainContainer');

const islandWidth = 470;
const resizeMainContent = () => {
    if (mainContent && mainContainer) {
        let islandCount = Math.floor(mainContainer.offsetWidth / islandWidth);
        if (islandCount < 1) { islandCount = 1; }
        else if (islandCount > 4) { islandCount = 4; }
        mainContent.style.width = islandCount * islandWidth + 'px';
    }
}
window.addEventListener('resize', function () {
    resizeMainContent();
});
resizeMainContent();
