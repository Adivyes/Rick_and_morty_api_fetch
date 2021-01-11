// https://api.jikan.moe/v3/search/ anime ?q={name of search}
// let api ="https://api.jikan.moe/v3/search/"
// let animeApi = `${api}anime`
// let shows;

// function getAnime(serchToAnime) {
//     return    fetch(`${animeApi}?q=${serchToAnime}`).then(res => res.json())
// }

// async function serchAnime(title) {
//     try{
//         imgDiv.innerHTML = '<img src="img/gif-animations-replace-loading-screen-14.gif">'
//         await getAnime(title).then(res => shows = res.results)
//     }
//     catch (error){
//         console.log(error);
//     }
//     finally{
//         imgDiv.innerHTML =''
//     }
// }

// function serchMyAnime(){
//     serchAnime(animeInput.value).then(() =>{
//         for (const iterator of shows) {
//             resultDiv.innerHTML += `<img src="${iterator.image_url}">`
//             console.log(iterator.image_url)
//         }
//     } )
// }


// ===================================================
let valueSerch = document.getElementById('rickInput')
let findName = `https://rickandmortyapi.com/api/character/?name=`
let apiUrl = 'https://rickandmortyapi.com/api/character/'
let avatarArray;
setTimeout(showDontshow,6000)
getRickData()
                   
                                 
 function showDontshow(){
    haderAnimetionDiv.style.display = "block"; 
}           
 
let haderAnimetionDiv = document.getElementById('gifdiv')

function getRickApi(api) {

    return fetch(api).then(res => res.json()).then(res => res.results)
}

async function getRickData() {
    try {
        avatarArray = await getRickApi(apiUrl);
        console.log(avatarArray)
        picObj()
    }
    catch (error) {
        console.log(error)
    }
    finally {

    }
}

async function getAvatarNameApi() {

    try {
        imgDiv.innerHTML = '<img class="gifclass" src="img/source.gif">'

        avatarArray = await getRickApi(`${findName + valueSerch.value}`);
        picObj()
    }
    catch (error) {
        console.log(error)
    }
    finally {
        
    }
}

function picObj() {
    imgDiv.innerHTML = ''
    for (const iterator of avatarArray) {
        imgDiv.innerHTML += `<div class='imgid' id="img${iterator.id}">
    <img class='avatrimg' src=${iterator.image}>
    
    <h2>${iterator.name}</h2>
    <h3>Gender: ${iterator.gender}</h3>
    <h3>Species: ${iterator.species}</h3>
    <h3>Status: ${iterator.status}</h3>
    </div>`

    }
}

function rickAndMorty() {
    getAvatarNameApi()

}



