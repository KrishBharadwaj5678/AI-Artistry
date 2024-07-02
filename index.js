let t=gsap.timeline(); 

let search=document.querySelector("input.search");

let generatebtn=document.querySelector("button.generate-btn");

let imagecontainer=document.querySelector("div.image");

let showimage=document.querySelector("img.ai-image");

let spinner=document.querySelector("div.spinner-border");

t.to("h1.ai-image-generator",{
    duration:1,
    text:"AI Image Generator",
    delay:0.5
})

t.to("p.ai-description",{
    duration:1.5,
    text:"Convert your text into an image within a second using this AI Image Generator."
})

t.from("div.search-box",{
    opacity:0,
    x:-20,
    stagger:0.5,
    duration:1
})


generatebtn.addEventListener("click",()=>{

    let data=search.value;
    if(data.length>=1){

        const url = 'https://chatgpt-42.p.rapidapi.com/texttoimage';
        const options = {
            method: 'POST',
            headers: {
                'x-rapidapi-key': 'c0e897e06bmshf1b07b02427bc79p1edb79jsn0132d0db5ef9',
                'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({text: data})
        };
        
        async function getAIimage(){
            spinner.style.display="block";
            const response = await fetch(url, options);
            const result = await response.json();
            imagecontainer.style.display="flex";
            imagecontainer.style.justifyContent="center";
            showimage.style.display="block";
            spinner.style.display="none";
            showimage.src=result["generated_image"];
            console.log(result);
            console.log(result["generated_image"]);

        } 
        getAIimage();
    }
    else{
        alert("Please provide a valid input.");
    }
   
})

// https://gencraft.com/search?s=%7B%22ai%22%3A%22cat+and+dog%22%7D