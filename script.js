//  function that makes an HTTP request to a meme API and sets the response as the source of an image element with the id "img". The function is called on page load and again on click of the "next" and "previous" buttons.
const memes =()=>{
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then(data => data.json())
    .then(data_val => {
        const u_data = data_val.url;
        document.getElementById("img").src = u_data;
    })
    .catch(error => console.log("Error:", error));
    };
    
    memes();
     
    const nextFun = () => {
    memes();
    };
    
    const prevFun = () => {
    memes();
    };
    // an event listener that adds click handlers to the "next" and "previous" buttons. When the "next" button is clicked, the memes function is called, which makes an HTTP request to a meme API and sets the response as the source of an image element with the id "img". Similarly, when the "previous" button is clicked, the memes function is called again.

    document.getElementById("next").addEventListener("click", nextFun);
    document.getElementById("prev").addEventListener("click", prevFun);
    