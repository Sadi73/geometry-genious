document.getElementById('triangleBtn').addEventListener('click', function(){
    const base = parseFloat(document.getElementById('triangle-b').value);
    const height = parseFloat(document.getElementById('triangle-h').value);
    const area = 0.5 * base * height;
    document.getElementById('triangle-b').value = '';
    document.getElementById('triangle-h').value = '';

    const where_to_show = document.getElementById('area-calculation');
    const what_to_add = document.createElement('p');
    what_to_add.innerText = 'Triangle: ' + area + 'cm2';
    where_to_show.appendChild(what_to_add);
})

