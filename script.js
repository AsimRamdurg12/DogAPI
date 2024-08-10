// const asimRa = document.getElementById('regret')


const dogResult = () => {
    let url = "https://dog.ceo/api/breeds/image/random"
    let response = fetch(url)
    response.then((v) => {
        return v.json()
    }).then((response) => {
        imgDog.src = response.message;
        
        
    })
}
regret.addEventListener('click', dogResult)
