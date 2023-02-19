document.getElementById('triangleBtn').addEventListener('click', function () {
    const base = parseFloat(document.getElementById('triangle-b').value);
    const height = parseFloat(document.getElementById('triangle-h').value);
    if (isNaN(base) || isNaN(height)) {
        alert('please give a number');
        document.getElementById('triangle-b').value = '';
        document.getElementById('triangle-h').value = '';
    }
    else {
        const area = (0.5 * base * height).toFixed(2);
        document.getElementById('triangle-b').value = '';
        document.getElementById('triangle-h').value = '';
        const where_to_show = document.getElementById('area-calculation');
        const what_to_add = document.createElement('p');
        what_to_add.innerText = 'Triangle: ' + area + ' cm2';
        where_to_show.appendChild(what_to_add);
    }
})

document.getElementById('rectangleBtn').addEventListener('click', function () {
    const width = parseFloat(document.getElementById('rectangle-w').value);
    const length = parseFloat(document.getElementById('rectangle-l').value);
    if (isNaN(width) || isNaN(length)) {
        alert('please give a number');
        document.getElementById('rectangle-w').value = '';
        document.getElementById('rectangle-l').value = '';
    }
    else {
        const area = (width * length).toFixed(2);
        document.getElementById('rectangle-w').value = '';
        document.getElementById('rectangle-l').value = '';
        const where_to_show = document.getElementById('area-calculation');
        const what_to_add = document.createElement('p');
        what_to_add.innerText = 'Rectangle: ' + area + 'cm2';
        where_to_show.appendChild(what_to_add);
    }
})

document.getElementById('parallelogramBtn').addEventListener('click', function () {
    const base = parseFloat(document.getElementById('parallelogram-b').value);
    const height = parseFloat(document.getElementById('parallelogram-h').value);
    if (isNaN(base) || isNaN(height)) {
        alert('please give a number');
        document.getElementById('parallelogram-b').value = '';
        document.getElementById('parallelogram-h').value = '';

    }
    else {
        const area = (base * height).toFixed(2);
        document.getElementById('parallelogram-b').value = '';
        document.getElementById('parallelogram-h').value = '';
        const where_to_show = document.getElementById('area-calculation');
        const what_to_add = document.createElement('p');
        what_to_add.innerText = 'Parallelogram: ' + area + ' cm2';
        where_to_show.appendChild(what_to_add);
    }
})

document.getElementById('rhombusBtn').addEventListener('click', function () {
    const d1 = parseFloat(document.getElementById('rhombus-d1').value);
    const d2 = parseFloat(document.getElementById('rhombus-d2').value);
    if (isNaN(d1) || isNaN(d2)) {
        alert('please give a number');
        document.getElementById('rhombus-d1').value = '';
        document.getElementById('rhombus-d2').value = '';

    }
    else {
        const area = (0.5 * d1 * d2).toFixed(2);
        document.getElementById('rhombus-d1').value = '';
        document.getElementById('rhombus-d2').value = '';
        const where_to_show = document.getElementById('area-calculation');
        const what_to_add = document.createElement('p');
        what_to_add.innerText = 'Parallelogram: ' + area + ' cm2';
        where_to_show.appendChild(what_to_add);
    }
})

document.getElementById('pentagonBtn').addEventListener('click', function () {
    const p = parseFloat(document.getElementById('pentagon-p').value);
    const b = parseFloat(document.getElementById('pentagon-b').value);
    if (isNaN(p) || isNaN(b)) {
        alert('please give a number');
        document.getElementById('pentagon-p').value = '';
        document.getElementById('pentagon-b').value = '';

    }
    else {
        const area = (0.5 * p * b).toFixed(2);
        document.getElementById('pentagon-p').value = '';
        document.getElementById('pentagon-b').value = '';
        const where_to_show = document.getElementById('area-calculation');
        const what_to_add = document.createElement('p');
        what_to_add.innerText = 'Parallelogram: ' + area + ' cm2';
        where_to_show.appendChild(what_to_add);
    }
})

document.getElementById('ellipseBtn').addEventListener('click', function () {
    const a = parseFloat(document.getElementById('ellipse-a').value);
    const b = parseFloat(document.getElementById('ellipse-b').value);
    if (isNaN(a) || isNaN(b)) {
        alert('please give a number');
        document.getElementById('ellipse-a').value = '';
        document.getElementById('ellipse-b').value = '';

    }
    else {
        const area = (3.14 * a * b).toFixed(2);
        document.getElementById('ellipse-a').value = '';
        document.getElementById('ellipse-b').value = '';
        const where_to_show = document.getElementById('area-calculation');
        const what_to_add = document.createElement('p');
        what_to_add.innerText = 'Ellipse: ' + area + 'cm2';
        where_to_show.appendChild(what_to_add);
    }

})


