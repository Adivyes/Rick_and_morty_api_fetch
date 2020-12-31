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



// 1.	מצאו API שמעניין 
// אתכם/ן
// 2.	צרו פונקציה שקוראת לו ומדפיסה את התוצאה ללוג
// 3.	צרו פונקציה אסינכרונית שקוראת לפונקציית ה API
// 4.	צרו
//  מנגנון tr/catch/finally לפונקציה האסיכרונית
// 5.	הוסיפו loading שמופיע בזמן הטעינה ונעלם בעת קבלת תשובה 
// מהשרת
// 6.	הציגו ב DOM את הנתונים בצורה יפה
// 7.	הוסיפו שורת קלט וכפתור
// 8.	הציגו על המסך את הנתונים מה API על בסיס חיפוש של הקלט בעת לחיצה על הכפתור


// https://rickandmortyapi.com/api/character/
let valueSerch = document.getElementById('rickInput')
let findName = `https://rickandmortyapi.com/api/character/?name=`
let apiUrl = 'https://rickandmortyapi.com/api/character/'
let avatarArray;  
getRickData()

function getRickApi(api){
    
return fetch(api).then(res => res.json()).then(res => res.results)
}

async function getRickData(){
    try{
        imgDiv.innerHTML = '<img src="img/gif-animations-replace-loading-screen-14.gif">'
        avatarArray = await getRickApi(apiUrl);
           console.log(avatarArray)
           picObj()
    }
    catch(error){
        console.log(error)
    }
    finally{

    }
}

async function getAvatarNameApi (){
    
        try{
   
            avatarArray = await getRickApi(`${findName + valueSerch.value}`);
               picObj()
        }
        catch(error){
            console.log(error)
        }
        finally{
    
        }
    }


function picObj() {
    imgDiv.innerHTML = ''
   for (const iterator of avatarArray) {
    imgDiv.innerHTML += `<div class='imgid' id="img${iterator.id}">
    <img class='avatrimg' src=${iterator.image}></img>
    
    <h2>${iterator.name}</h2>
    <h3>Gender: ${iterator.gender}</h3>
    <h3>Species: ${iterator.species}</h3>
    <h3>Status: ${iterator.status}</h3>
    </div>`
    
   }
}


function rickAndMorty(){
    getAvatarNameApi ()
     
}