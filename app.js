 const albumContent =
        document.getElementById('album_content'
        );
      const searchInput = document.getElementById('search_input'
      );
      const searchBtn = document.getElementById('search_btn'
      );

      const searchResult = document.getElementById('search_result');

      const loader = document.getElementById('loader');

      let albums = [];
      
      

       function searchAlbumEvent() {
    
        searchInput.addEventListener(
          'keypress',
          (e) => {
            if (e.keyCode === 13) {
              
                searchBtn();
                
            }
          }
        );

       
    
          searchBtn.addEventListener(
            'click', ()=> {
            loader.style.visibility = 'visible';
            let artistName = searchInput.value;
           
            console.log(artistName);
            if (artistName.length < 1) {
            alert("Please enter an artist name");
             return;
  }

  
fetchJsonp(`https://itunes.apple.com/search?term=${artistName}&media=music&entity=album&attribute=artistTerm&limit=200`)
    .then((response) => response.json())
    .then((items) => {
loader.style.visibility = 'hidden';
       albums = items.results;

         searchResult.innerHTML = `<h1>${albums.length} albums found`;
       const htmlString = albums.map((album) =>{return `
            
            <li class = "single_album">
            <h2>${album.collectionName}</h2>
           
            <img src="${album.artworkUrl100}">
            
            </li>
            `;}).join('');

            albumContent.innerHTML = htmlString;


    });

}

);

 
       }
       

searchAlbumEvent();




       