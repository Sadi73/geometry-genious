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


document.getElementById('rectangleBtn').addEventListener('click', function(){
    const width = parseFloat(document.getElementById('rectangle-w').value);
    const length = parseFloat(document.getElementById('rectangle-l').value);
    const area = width * length;
    document.getElementById('rectangle-w').value = '';
    document.getElementById('rectangle-l').value = '';

    const where_to_show = document.getElementById('area-calculation');
    const what_to_add = document.createElement('p');
    what_to_add.innerText = 'Rectangle: ' + area + 'cm2';
    where_to_show.appendChild(what_to_add);
})


document.getElementById('parallelogramBtn').addEventListener('click', function(){
    const base = parseFloat(document.getElementById('parallelogram-b').value);
    const height = parseFloat(document.getElementById('parallelogram-h').value);
    const area = base * height;
    document.getElementById('parallelogram-b').value = '';
    document.getElementById('parallelogram-h').value = '';

    const where_to_show = document.getElementById('area-calculation');
    const what_to_add = document.createElement('p');
    what_to_add.innerText = 'Parallelogram: ' + area + 'cm2';
    where_to_show.appendChild(what_to_add);
})
document.getElementById('rhombusBtn').addEventListener('click', function(){
    const d1 = parseFloat(document.getElementById('rhombus-d1').value);
    const d2 = parseFloat(document.getElementById('rhombus-d2').value);
    const area = 0.5 * d1 * d2;
    document.getElementById('rhombus-d1').value = '';
    document.getElementById('rhombus-d2').value = '';

    const where_to_show = document.getElementById('area-calculation');
    const what_to_add = document.createElement('p');
    what_to_add.innerText = 'Parallelogram: ' + area + 'cm2';
    where_to_show.appendChild(what_to_add);
})

