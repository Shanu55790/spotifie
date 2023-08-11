
xhr = new XMLHttpRequest();


setTimeout(() => {
    xhr.open('GET', 'https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5');
    xhr.setRequestHeader('X-RapidAPI-Key', 'cf2ba795femsh22eb4dd9571caf6p168e54jsn0c32b7719f1b');
    xhr.setRequestHeader('X-RapidAPI-Host', 'spotify23.p.rapidapi.com');
    xhr.onreadystatechange = () => {
        console.log(`Remaining readystate -> ${xhr.readyState}`)
        if (xhr.readyState == 4 && xhr.status == 200) {
            res = JSON.parse(xhr.responseText)
            console.log(res)

            output = ``
            for (let i = 0; i < res.albums.items.length; i++) {
                // let text =text.charAt(0).toUpperCase()+ text.slice(1);

                output += `
                    <div style="width: 23%;margin:15px;">
                        <a href="${res.albums.items[i].data.uri}" style="text-decoration:none;color:black;"><img src="${res.albums.items[i].data.coverArt.sources[0].url}" alt="">
                        <h2>${res.albums.items[i].data.name}</h2>
                        <h4>${res.albums.items[i].data.artists.items[0].profile.name}</h4></a>
                    </div>
                    `

            }
            document.getElementById("mydiv").innerHTML = output



        }
    }
    xhr.send();
}, 1000)

document.getElementById('search-btn').addEventListener('click', () => {
    text = document.getElementById('searchInput').value
    xhr.open('GET', `https://spotify23.p.rapidapi.com/search/?q=${text}&type=multi&offset=0&limit=10&numberOfTopResults=5`);
    xhr.setRequestHeader('X-RapidAPI-Key', 'cf2ba795femsh22eb4dd9571caf6p168e54jsn0c32b7719f1b');
    xhr.setRequestHeader('X-RapidAPI-Host', 'spotify23.p.rapidapi.com');
    xhr.onreadystatechange = () => {
        console.log(`Remaining readystate -> ${xhr.readyState}`)
        if (xhr.readyState == 4 && xhr.status == 200) {
            res = JSON.parse(xhr.responseText)
            console.log(res)


            output = ``
            for (let i = 0; i < res.albums.items.length; i++) {
                // let text =text.charAt(0).toUpperCase()+ text.slice(1);
                if (res.albums.items[i].data.artists.items[0].profile.name == text || res.artists.items[i].data.profile.name == text)
                {
                    output += `
                    <div style="width: 23%;margin:15px;">
                        <a href="${res.albums.items[i].data.uri}" style="text-decoration:none;color:black;"><img src="${res.albums.items[i].data.coverArt.sources[0].url}" alt="">
                        <h2>${res.albums.items[i].data.name}</h2>
                        <h4>${res.albums.items[i].data.artists.items[0].profile.name}</h4></a>
                    </div>
                    `

                }
                document.getElementById("mydiv").innerHTML = output

            }



        }
    }
    xhr.send();
})