document.addEventListener('scroll', function (e) {
    var top1  = window.pageYOffset + window.innerHeight,
        isVisible1 = top1 > document.querySelector('#container1 > p').offsetTop;
    var top2  = window.pageYOffset + window.innerHeight,
        isVisible2 = top2 > document.querySelector('#container2 > p').offsetTop;
    var top3  = window.pageYOffset + window.innerHeight,
        isVisible3 = top3 > document.querySelector('#container3 > p').offsetTop;
    var top4  = window.pageYOffset + window.innerHeight,
        isVisible4 = top4 > document.querySelector('#container4 > p').offsetTop;
    var top5  = window.pageYOffset + window.innerHeight,
        isVisible5 = top5 > document.querySelector('#container5 > p').offsetTop;
    var top6  = window.pageYOffset + window.innerHeight,
        isVisible6 = top6 > document.querySelector('#container6 > p').offsetTop;
    var top7  = window.pageYOffset + window.innerHeight,
        isVisible7 = top7 > document.querySelector('#container7 > p').offsetTop;
    var top8  = window.pageYOffset + window.innerHeight,
        isVisible8 = top8 > document.querySelector('#container8 > p').offsetTop;
    var top9  = window.pageYOffset + window.innerHeight,
        isVisible9 = top9 > document.querySelector('#container9 > p').offsetTop;
    var top10  = window.pageYOffset + window.innerHeight,
        isVisible10 = top10 > document.querySelector('#container10 > p').offsetTop;
    var top11  = window.pageYOffset + window.innerHeight,
        isVisible11 = top11 > document.querySelector('#container11 > p').offsetTop;

    if (isVisible1) {
        document.getElementById('container1').classList.add('pop-in');
    }
    if (isVisible2) {
        document.getElementById('container2').classList.add('pop-in');
    }
    if (isVisible3) {
        document.getElementById('container3').classList.add('pop-in');
    }
    if (isVisible4) {
        document.getElementById('container4').classList.add('pop-in');
    }
    if (isVisible5) {
        document.getElementById('container5').classList.add('pop-in');
    }
    if (isVisible6) {
        document.getElementById('container6').classList.add('pop-in');
    }
    if (isVisible7) {
        document.getElementById('container7').classList.add('pop-in');
    }
    if (isVisible8) {
        document.getElementById('container8').classList.add('pop-in');
    }
    if (isVisible9) {
        document.getElementById('container9').classList.add('pop-in');
    }
    if (isVisible10) {
        document.getElementById('container10').classList.add('pop-in');
    }
    if (isVisible11) {
        document.getElementById('container11').classList.add('pop-in');
    }

});
var top1s  = window.pageYOffset + window.innerHeight,
    isVisible1s = top1s > document.querySelector('#container1 > p').offsetTop;
var top2s  = window.pageYOffset + window.innerHeight,
    isVisible2s = top2s > document.querySelector('#container2 > p').offsetTop;
var top3s  = window.pageYOffset + window.innerHeight,
    isVisible3s = top3s > document.querySelector('#container3 > p').offsetTop;
var top4s  = window.pageYOffset + window.innerHeight,
    isVisible4s = top4s > document.querySelector('#container4 > p').offsetTop;
var top5s  = window.pageYOffset + window.innerHeight,
    isVisible5s = top5s > document.querySelector('#container5 > p').offsetTop;


if (isVisible1s) {
    document.getElementById('container1').classList.add('flip-in');
}
if (isVisible2s) {
    document.getElementById('container2').classList.add('flip-in');
}
if (isVisible3s) {
    document.getElementById('container3').classList.add('flip-in');
}
if (isVisible4s) {
    document.getElementById('container4').classList.add('flip-in');
}
if (isVisible5s) {
    document.getElementById('container5').classList.add('flip-in');
}