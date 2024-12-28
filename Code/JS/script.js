url = "https://apis.ccbp.in/wiki-search/?search=";

let main_section = document.getElementById("main_section");
let userdata = document.getElementById("search_bar");
let search_data = "";

userdata.addEventListener("input", (e) => {
    let userinput = e.target.value;
//   fetch(`${url}${userinput}`)
//     .then((e) => {
//       return e.json();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((e)=>{
//         console.error(e)
//     })
    // console.log(userinput);

    // user async-await
    async function fetchData(){ //async keyword
       let response = await fetch(`${url}${userinput}`) //await to write the functioning/logic
        //to handle error -> using exception handing using try catch blocks
       try {
        if(response.status === 200){
            let data = await response.json(); //to convert to json format using .json()
            search_data = data.search_results;
            console.log(search_data) //to get response
            displayData(search_data);
        }
       } catch (error) {
        console.error(error); //red bg color
       }
    }
    fetchData();

});

function displayData(p){
    let input = "";
    p.map((val)=>{
        // console.log(val);
        input +=
        `
        <div class = "search_section">
            <a id = "link" href = ${val.link} target="_blank">${val.link}</a>
            <a href = ${val.link}> <h3 id="title">${val.title}</h3> </a>
            <p id = "description">${val.description}</p>
        </div>
        `
    });

    main_section.innerHTML = input;
}