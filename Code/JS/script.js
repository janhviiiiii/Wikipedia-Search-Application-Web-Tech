url = "https://apis.ccbp.in/wiki-search/?search=maharashtra";

let main_section = document.getElementById("main_section");
let userdata = document.getElementById("search_bar");

fetch(url)
.then((e)=>{
    return e.json();
})
.then((data)=>{
    console.log(data);
})