document.addEventListener("DOMContentLoaded", () => {
    const table = document.getElementById("periodic-table");

    fetch('https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json')
        .then(response => response.json())
        .then(data => {
            data.elements.forEach(element => {
                const elementDiv = document.createElement('div');
                elementDiv.classList.add('element');
                elementDiv.style.gridColumnStart = element.xpos;
                elementDiv.style.gridRowStart = element.ypos;

                const categoryClass = getCategoryClass(element.category);
                if (categoryClass) {
                    elementDiv.classList.add(categoryClass);
                }

                elementDiv.innerHTML = `
                    <div class="number">${element.number}</div>
                    <div class="symbol">${element.symbol}</div>
                    <div class="name">${element.name}</div>
                    <div class="weight">${element.atomic_mass.toFixed(2)}</div>
                `;

                table.appendChild(elementDiv);
            });
        })
        .catch(error => console.error('Error loading the data:', error));
});

function getCategoryClass(category) {
    switch (category.toLowerCase()) {
        case 'alkali metal':
            return 'alkali-metal';
        case 'alkaline earth metal':
            return 'alkaline-earth-metal';
        case 'transition metal':
            return 'transition-metal';
        case 'post-transition metal':
            return 'post-transition-metal';
        case 'metalloid':
            return 'metalloid';
        case 'noble gas':
            return 'noble-gas';
        case 'nonmetal':
            return 'nonmetal';
        case 'lanthanide':
            return 'lanthanide';
        case 'actinide':
            return 'actinide';
        case 'halogen':
            return 'halogen';
        default:
            return 'unknown';
    }
}
