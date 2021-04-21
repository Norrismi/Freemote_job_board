
var http = new XMLHttpRequest();
http.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       let data = JSON.parse(http.response)
       console.log(data)

       
       for(i=1; i<=20; i++){
           
            let rowDiv = document.createElement('div')
            rowDiv.classList.add('job_row')
            let btn = document.createElement('button')
            btn.classList.add('job_btn')


           rowDiv.innerHTML = `
           <div class='job_left-container'>
                <div class='job_left-company' >${data[i].company}</div>
                <h3 class='job_left-position' >${data[i].position}</h3>
                <span class='job_left-location'>${data[i].location}</span>
           </div>

           <div class='job_middle-container'>
                <div class='job_middle-tags'>${data[i].tags.map(a => `<div class='job_span'>${a}</div>`).join('')}</div>
           </div>

           <div class='job_btn-container'>
                <button class='job_right' id='job_right'>Apply</button>
           </div>

           
           `
        // document.querySelector('.job_left').innerHTML += `<div class='job_left-company'>${data[i].company}</div>`
        // document.querySelector('.job_left').innerHTML += `<div class='job_left-position'>${data[i].position}</div>`
        // document.querySelector('.job_middle').innerHTML += `<div class='job_middle-tags'>${data[i].tags}</div>`
       
            document.getElementById('job_container').appendChild(rowDiv)
    
        }


    }
};
http.open("GET", "https://remoteok.io/api", true);
http.send();
