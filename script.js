
function sendApiRequest() {
    var userInput = document.getElementById("input").value
    console.log(userInput)
    var giphyApiKey = 'vZ6ZX9AJ6RDnvG1HxdeImauUtVS0wjfr'
    var giphyApiUrl = 'https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=r&api_key=${giphyApiKey}&limit=30&offset=0&lang=en'
    var giphyApiURL = giphyApiUrl.replace('${userInput}', userInput).replace('${giphyApiKey}', giphyApiKey)

    fetch(giphyApiURL).then(function(data) {
        return data.json()
    })

.then(function(json) {
        console.log(json)
        // Clear previous images
        var images = document.querySelectorAll("img")
        for (var i = 0; i < images.length; i++) {
            images[i].remove()
        }
        // Display new images
        // Loop through the data array and create img elements for each gif
    for (var i = 0; i < json.data.length; i++) {
        console.log(json.data[i])
        var imgPath = json.data[i].images.fixed_height.url
        var img = document.createElement("img")
        img.setAttribute("src", imgPath)
        document.body.appendChild(img)
        document.querySelector("#input").value = ""
    }
    })
    .catch(function(err) {
        console.log(err)
    })
}