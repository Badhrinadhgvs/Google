function performSearch()
{
    var query = document.getElementById('search-input').value;
    window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(query);
}


function seo()
{
    var query = document.getElementById('search-input').value;
    alert("You can enter in your optional language and click search")
}

