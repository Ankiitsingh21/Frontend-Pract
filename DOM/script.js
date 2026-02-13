const body= document.body;
// const div = document.createElement('div');

// div.innerText ="ankit Singh";

// body.append(div);

// document.querySelector("p").textContent = "Para";
// document.querySelector("button").innerText = "Click";



// body.append("hello");

// const box = document.getElementById('box');

// console.log(box.textContent);
// console.log(box.innerText);

const div = document.createElement('div');  //this is not a right wat or not a way to parse property to any tag
// div.append("<strong>hellow world</strong>")  //this is not a right wat or not a way to parse property to any tag
                                             //this is not a right wat or not a way to parse property to any tag        
// body.appendChild(div);                       //this is not a right wat or not a way to parse property to any tag

//this is a correct way to parse propety to any tag
// div.innerHTML="<strong>hellow world</strong>";

// body.appendChild(div);
//but this is not the secure way to do this diretcly do anything on innerhtml with strings

//this ia secure way to do this

// const centre = document.createElement('center');

// const strong = document.createElement('strong');
// strong.innerText="hellow world";

// centre.appendChild(strong);

// div.appendChild(centre);
// body.appendChild(div);
