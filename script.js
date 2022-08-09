function changeColor(){
  let  hex_numbers = ["0","1","2","3","4","5","6","7","8",
  "9","A","B","C","D","E","F",];

  let hexcode = '';
  
  for (let i=0; i < 6; i++){
    let random_index = Math.floor(Math.random() * hex_numbers.length);

    hexcode += hex_numbers[random_index]
  }
  document.getElementById("hex_code").innerHTML = hexcode;
  document.getElementsByTagName("body")[0].style.background = "#" + hexcode;
}


// function changeGradientColor {
//   let  grdhex_numbers = ["0","1","2","3","4","5","6","7","8",
//   "9","A","B","C","D","E","F",];
//   let hexcode1 = '';
//   let hexcode2 = '';
//   let random_ind = 0;

//   for (let i = 0; i<6;i++){
//     random_ind = Math.floor(Math.random() * grdhex_numbers.length);
//     hexcode1 += grdhex_numbers[random_ind];
//     random_ind = Math.floor(Math.random() * grdhex_numbers.length);
//     hexcode2 += grdhex_numbers[random_ind];    
//   }

//   document.getElementById("hexcode1").innerHTML = grdhexcode;
//   document.getElementById("hexcode2").innerHTML = grdhexcode;
//   document.getElementsByTagName("body")[0].style.background = "#" + grdhexcode;

// }.

document.getElementById("submit").addEventListener("click", () => {
  var hex_numbers = ["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F"];
  var hexcode1 = "";
  var hexcode2 = "";
  var random_index = 0;
  
  for(let i = 0; i < 6;i++){
    random_index = Math.floor(Math.random() * hex_numbers.length);
      hexcode1 += hex_numbers[random_index];
    random_index = Math.floor(Math.random() * hex_numbers.length);
      hexcode2 += hex_numbers[random_index];
  }

  document.body.style.background = `linear-gradient(to right, #${hexcode1}, #${hexcode2})`;
  document.querySelector("#hexcode1").textContent = hexcode1;
  document.querySelector("#hexcode2").textContent = hexcode2;
});