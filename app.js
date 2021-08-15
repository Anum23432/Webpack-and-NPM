
  //   fetch ('https://jsonplaceholder.typicode.com/users'). then( function (response){
    
  //     return response.json();
    
  // }).then (function (userData){
  //             document.getElementById('person').innerHTML = userData.map(user => 
  //                 `<div id="info">
  //                   <p>User Id=> ${user.id}</p>
  //                   <div>User Name=> ${user.name}</div><br>
  //                   <button id = "btn" onclick= "getElementById('userInfo').innerHTML='ID: ${user.id}<br>Address: ${user.address.street}<br>Website: ${user.website} <br>'">More Info</button>
  //                 </div>`
  //             ).join('') 
  // });

  
  

  fetch('https://newsapi.org/v2/everything?q=apple&apiKey=69601cff58d54dfcb52579c18c850a24'). then( function (response){
  console.log(response, 'Response');
  return  response.json();
}).then(myArray)
.catch(function (err) {
  console.log(err);
});;
function myArray(obj){
  let newsArray = obj.articles;
  console.log(newsArray);
  console.log(typeof newsArray);
  document.querySelector("#main").innerHTML =(newsArray.articles(news => 
    `
    <div class="master">
      
        <img src="${news.urlToImage}"/>
        <div class= "title">${news.title}</div>
        <div class= "description">${news.description}</div>
        <div class= "content">${news.content}</div>
        <div class= "website">${news.url}</div>
        <div class= "author">${news.author}</div>
        <div class= "time">${news.publishedAt}</div>
        
     
    </div>`
).join(''));
}