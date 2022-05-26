const adviceNum = document.querySelector('.advice-num');
const adviceText = document.querySelector('.advice-text');
const diceBtn = document.getElementById('dice-btn');

const url = "https://api.adviceslip.com/advice";
    
async function fatchData() {
        const response = await fetch(url)
        const data = await response.json()
        const { slip } = data;
        adviceNum.innerHTML = "advice # " + slip.id;
        adviceText.innerHTML = slip.advice;
    }

diceBtn.addEventListener('click', () => {
    fatchData();
})
window.onload = fatchData();