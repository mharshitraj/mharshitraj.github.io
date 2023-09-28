setInterval(() => {

    let p = new Date();
    let y = " " + p.getHours() + " : " + p.getMinutes() + " : " + p.getSeconds();

    let x = document.getElementById('header').innerText = y;
}, 1000);
