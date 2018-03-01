//var holding number of elements of adventure
let numElem = document.querySelector("#numElem");
const list = document.getElementById("element_list");
const generate_btn = document.querySelector("#generate_it_btn");
const reset_btn = document.querySelector("#reset");


//a function holding the generator
 function create_it(){
  //array listing all of the possible adventure elements
  const elems = [
      "A lost tome of ancient knowledge",
      "A sealed vassel with evil contents",
      "The lost tomb of a forgotten king",
      "A fiece manticore",
      "Shrivled up gnome full of questions",
      "An absent minded courier",
      "A shrewd merchant",
      "A apprentis wizard seeking renown",
      "A village festival in full swing",
      "A waystation were the woodland roads cross",
      "An abandoned watchtower, haunted",
      "Dire wolves on the hunt",
      "A Djinn held within a glowing ruby",
      "A gathering of magi",
      "Ominous clouds gathering on the horizon"
  ]


  //for loop 
    for(var i = 1; i <= numElem; i++){
    //var randomly generating a number from 0 to length of array
      let num = Math.floor(Math.random() * elems.length);

    //var using random number to index array
      let element = elems[num];
      console.log(element);

    // var holding unordered list 
      // const list = document.getElementById("element_list");

    //var creating li for the ul
      const nu_li = document.createElement("li");

    //appendChild placing the value of array element into li element
      nu_li.appendChild(document.createTextNode(element));
    
    //appendChild placing li into the ul
      list.appendChild(nu_li);

    //removing selected element from array
      elems.splice(num, 1);

    //incrementing for loop by one
      num ++;
    }//end of for loop
}//end of function

numElem.addEventListener("change", function(){
     numElem = Number(this.value);
});

//function to remove list elements-I hope
function remove_it(){  
    list.innerHTML=" ";
  }


generate_btn.addEventListener("click", function(){
  create_it();
});

reset_btn.addEventListener("click", function(){
  remove_it();
})