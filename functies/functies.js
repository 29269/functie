let recept = [
      "Spaghetti met ham en kaas",
      "Macaroni met ham en kaas",
      "Tagliatelli met ham en kaas",
      "Spaghetti met spinazie en room",
      "Macaroni met spinazie en room",
      "Tagliatelli met spinazie en room",
      "Spaghetti met gehakt-tomatensaus en kaas",
      "Macaroni met gehakt-tomatensaus en kaas",
      "Tagliatelli met gehakt-tomatensaus en kaas ",
      "Spaghetti met spekjes, spinazie en room",
      "Macaroni met spekjes, spinazie en room",
      "Tagliatelli met spekjes, spinazie en room",
      "Spaghetti met courgette en tomatensaus",
      "Macaroni met courgette en tomatensaus",
      "Tagliatelli met courgette en tomatensaus",
      "Lasagne met courgette en tomatensaus",
      "Lasagne met room, doperwten en tomatensaus",
      "Lasagne met spinazie en tomatensaus en kaas"
      ];

menu();
functietje(2);


function menu() {
  for (let i = 0; i < recept.length; i++) {
        console.log(recept[i])
   }
}

function functietje(number){
  console.log(recept[number]);
}
console.log(waarde("Heerlijk"));
let recept1 = waarde("Heerlijk");
 function waarde(name) {
return "deze recept is " + name;
 }
