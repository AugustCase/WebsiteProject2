function sendApiRequest() {
    var userInput = document.getElementById("input").value
    console.log(userInput)

    var giphyApiKey = 'vZ6ZX9AJ6RDnvG1HxdeImauUtVS0wjfr'
    var giphyApiUrl = 'https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=r&api_key=${giphyApiKey}'
    var giphyApiURL = giphyApiUrl.replace('${userInput}', userInput).replace('${giphyApiKey}', giphyApiKey)

    fetch(giphyApiURL).then(function(data) {
        return data.json()
    })
    .then(function(json){
        console.log(json.data[0].images.fixed_height.url)
        var imgPath = json.data[0].images.fixed_height.url
        var img = document.createElement("img")
        img.setAttribute("src", imgPath)
        document.body.appendChild(img)
    })
}