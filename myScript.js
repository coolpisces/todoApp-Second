const add = document.querySelector('.add');
const ul = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
    const html = `
            <li class="list-group-item text-light d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="far bi-trash3 delete"></i>
            </li>
`;
    ul.innerHTML += html;
}

add.addEventListener('submit', e => {
    e.preventDefault();
    const todo = e.target.add.value.trim();
    if (todo.length != 0) {
        generateTemplate(todo);
        add.reset();
    }

});

ul.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})

const filterFunc = filtre => {
    Array.from(ul.children).filter(todo => !todo.textContent.toLowerCase().includes(filtre))
        .forEach(todo => todo.classList.add('filtered'));

    Array.from(ul.children).filter(todo => todo.textContent.toLowerCase().includes(filtre))
        .forEach(todo => todo.classList.remove('filtered'));
}

search.addEventListener('keyup', () => {
    const filtre = search.value.trim().toLowerCase();
    filterFunc(filtre);
})
