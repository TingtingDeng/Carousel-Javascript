const imgUrls = [
    'https://mobilecontent.costco.com/live/resource/img/ca-categories/d-clothing-hero-221024-en.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-1088-22-sng-coupons-en.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-221024-outdoor-decor-en.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-220905-Auto-en.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hero-221024-Tirepromo-en.jpg',
    'https://mobilecontent.costco.com/live/resource/img/ca-homepage/d-hsc-221024-hero-en.jpg'

]


const descriptions = [
    'Clothing',
    'CostcoGrocery',
    'Outdoor decoration',
    'GM Auto',
    'Tires',
    'Member-only Savings'

]

const data = {
    imgUrls,
    descriptions,
    index: 0,
    timerId : null,
    arrTimerId: [],
    arrButtons: []
}

const objs = {
    eleImg: document.querySelector('.carousel-container img')
}




const timeHandler = function () {

    data.index++
    if(data.index === data.imgUrls.length) {
        data.index = 0;
    }

    objs.eleImg.src = data.imgUrls[data.index]
    updateSelected(data.index)
}


const cbClick = function (eve) {
    console.log('click', eve)
    console.log(eve.target.dataset.imgid)
    let imgid = eve.target.dataset.imgid;
    // let {imgid}= eve.target.dataset.imgid
    console.log(typeof imgid)
    imgid = Number(imgid)
    console.log(imgid)

    objs.eleImg.src = data.imgUrls[imgid]

}

const cbPrev = function () {

}

const cbNext = function () {
    data.index++
    if(data.index === data.imgUrls.length) {
        data.index = 0
    }
    updateSelected()
    objs.eleImg.src = data.imgUrls[data.index]
}

const startAnimation = function (){

    data.timerId = setInterval(timeHandler, 2000)

}

// startAnimation()

const stopAnimation = function () {
    clearInterval(timerId)
}





const updateSelected = function(index) {
    data.arrButtons.forEach((ele, inx) => {
        ele.className = " ";
        if (inx === index) {
            data.arrButtons[index].className = "btnSelected"
        }
    })
}

const update = function (index) {
    updateSelected(index);
    objs.eleImg.src = data.imgUrls[index]
}

const createCarousel = function () {
    objs.eleImg.src = data.imgUrls[data.index]

    const eleBtnBar = document.querySelector('.carousel-container .btnBar')

    for (let i = 0; i < descriptions.length; i++) {
        let eleBtn = document.createElement('button')
        eleBtnBar.appendChild(eleBtn)
        // alert(eleBtn)
        eleBtn.innerText = data.descriptions[i]
        data.arrButtons.push(eleBtn)

        eleBtn.addEventListener('click', cbClick)

        eleBtn.dataset.imgid = i;
        if(i === data.index) {
            updateSelected(i)
        }

    }

}

createCarousel()

