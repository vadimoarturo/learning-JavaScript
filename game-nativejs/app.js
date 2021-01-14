var $start = document.querySelector('#start')
var $gameBlock = document.querySelector('#game')
var $gameTime = document.querySelector('#game-time')
var $time = document.querySelector('#time')
var $timeHeader = document.querySelector('#time-header')
var $resultHeader = document.querySelector('#result-header')
var $result = document.querySelector('#result')
var $resultTop = document.querySelector('#result-top')
var $timeTop = document.querySelector('#time-top')

var isGameStarted = false
var score = 0




$start.addEventListener('click', startGame)
$gameBlock.addEventListener('click', handleBoxClick)
$gameTime.addEventListener('change', setGameTime)

function show($el){
    $el.classList.remove('hide')
}

function hide($el){
    $el.classList.add('hide')
}




function startGame() {
    score = 0
    isGameStarted = true
    setGameTime ()
    hide($start)
    $gameTime.setAttribute('disabled', 'true')
    $gameBlock.style.backgroundColor = '#fff'


    var interval = setInterval(() => {
        var time = parseFloat($time.textContent)

        if (time <= 0){
         clearInterval(interval)
         endGame()
        } else {
            $time.textContent = (time - 0.1).toFixed(1)
        }

    }, 100 )

    renderBox()
}




function handleBoxClick(event){
    if (!isGameStarted){
        return
    }
 if (event.target.dataset.box){
    score++
     renderBox()
 }
}

function renderBox(){

$gameBlock.innerHTML = ''
var box = document.createElement('div')
var gameblockSize = $gameBlock.getBoundingClientRect()
var boxSize = getRandom(30,100)
var maxTop = gameblockSize.height - boxSize
var maxLeft = gameblockSize.width - boxSize


box.style.height = box.style.width = boxSize + 'px'
box.style.position = 'absolute'
box.style.backgroundColor = '#' + getRandom(555 , 999)
box.style.top = getRandom(0 , maxTop) + 'px'
box.style.left = getRandom(0 , maxLeft)  + 'px'
box.style.cursor = 'pointer'
box.setAttribute('data-box', 'true')

$gameBlock.insertAdjacentElement('afterbegin', box)

}



function endGame() {
    isGameStarted = false
    $gameBlock.innerHTML = ''
    $gameBlock.style.backgroundColor = '#ccc'
    show($start)
    hide($timeHeader)
    show($resultHeader)
    $result.textContent = score.toString()
    $gameTime.removeAttribute('disabled')
    var time = +$gameTime.value
    var obj = {
        time: time.toFixed(1),
        score: score.toString()
    }

    localStorage.setItem('valueGame', JSON.stringify(obj))

    if(obj){
        var $geitem = localStorage.getItem('valueGame')
        var $resulItem = JSON.parse($geitem)
        $resultTop.textContent = $resulItem.score
        $timeTop.textContent = $resulItem.time
    }else {
    localStorage.setItem('valueGame', JSON.stringify(obj))
    }
    

}



function getRandom(min,max){
    return Math.floor(Math.random() * (max - min) + min)
}


function setGameTime(){
    var time = +$gameTime.value
    $time.textContent = time.toFixed(1)
    show($timeHeader)
    hide($resultHeader)
}


    var $geitem = localStorage.getItem('valueGame')
    if($geitem){
        var $resulItem = JSON.parse($geitem)
        $resultTop.textContent = $resulItem.score
        $timeTop.textContent = $resulItem.time    
    }
