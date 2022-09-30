var array, i;

// Describe this function...
function disImg() {
  if (--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_images = document.getElementById("images");
  element_images.replaceChildren();
  let new_img = document.createElement("img");
  new_img.setAttribute("src", i);

  element_images.appendChild(new_img);
}

array = [
  "./img/kiwi.jpg",
  "./img/coconut.jpg",
  "./img/blueberry.jpg",
];
i = array[0];
disImg();

document.getElementById("next").addEventListener("click", (event) => {
  i = array.shift();
  disImg();
  array.push(i);
});

document.getElementById("prev").addEventListener("click", (event) => {
  i = array.pop();
  disImg();
  array.unshift(i);
});
//////////////////////////////////////////////////
var array, isOpened;

// Describe this function...
const toggleHideShow = () => {
  let x = document.querySelector(".nav--link");
  x.style.display = x.style.display === "none" ? "" : "none";
};

// array = ["Home", "About", "Product", "Contact"];
// isOpened = false;

// document.getElementById("click").addEventListener("click", (event) => {
//   if (isOpened == true) {
//     let element_list = document.getElementById("list");
//     element_list.replaceChildren();
//     isOpened = false;
//   } else {
//     array.forEach((item) => {
//       let element_list2 = document.getElementById("list");
//       let new_li = document.createElement("li");
//       new_li.innerText = item;

//       element_list2.appendChild(new_li);
//     });
//     isOpened = true;
//   }
// });
///////////////////////////////////////////////
const count_total = ()=>{
  document.getElementById("carttotal").innerText = Number(document.getElementById("kiwi_amount").innerText)+Number(document.getElementById("coco_amount").innerText)+Number(document.getElementById("blue_amount").innerText)
}

document.getElementById("kiwi_addCart").addEventListener("click", (event) => {
  document.getElementById("kiwiQty").innerText = Number(document.getElementById("kiwiQty").innerText) + 1;
  document.getElementById("kiwi_amount").innerText = Number(document.getElementById("kiwiQty").innerText) * Number(document.getElementById("kiwiCost").innerText);
  count_total()
});
document.getElementById("kiwi_minCart").addEventListener("click", (event) => {
  let kiwiQty = Number(document.getElementById("kiwiQty").innerText) - 1;
  if (kiwiQty < 0) {
    Number(document.getElementById("kiwiQty").innerText) = 0
    Number(document.getElementById("kiwi_amount").innerText) = 0
  }else{
    document.getElementById("kiwiQty").innerText = kiwiQty;
    document.getElementById("kiwi_amount").innerText = Number(document.getElementById("kiwiQty").innerText) * Number(document.getElementById("kiwiCost").innerText);
  }
  count_total()
});
document.getElementById("coco_addCart").addEventListener("click", (event) => {
  document.getElementById("cocoQty").innerText = Number(document.getElementById("cocoQty").innerText) + 1;
  document.getElementById("coco_amount").innerText = Number(document.getElementById("cocoQty").innerText) * Number(document.getElementById("cocoCost").innerText);
  count_total()
});
document.getElementById("coco_minCart").addEventListener("click", (event) => {
  let cocoQty = Number(document.getElementById("cocoQty").innerText) - 1;
  if (cocoQty < 0) {
    Number(document.getElementById("cocoQty").innerText) = 0
    Number(document.getElementById("coco_amount").innerText) = 0
  }else{
    document.getElementById("cocoQty").innerText = cocoQty;
    document.getElementById("coco_amount").innerText = Number(document.getElementById("cocoQty").innerText) * Number(document.getElementById("cocoCost").innerText);
  }
  count_total()
});

document.getElementById("blue_addCart").addEventListener("click", (event) => {
  document.getElementById("blueQty").innerText = Number(document.getElementById("blueQty").innerText) + 1;
  document.getElementById("blue_amount").innerText = Number(document.getElementById("blueQty").innerText) * Number(document.getElementById("blueCost").innerText);
  count_total()
});
document.getElementById("blue_minCart").addEventListener("click", (event) => {
  let blueQty = Number(document.getElementById("blueQty").innerText) - 1;
  if (blueQty < 0) {
    Number(document.getElementById("blueQty").innerText) = 0
    Number(document.getElementById("blue_amount").innerText) = 0
  }else{
    document.getElementById("blueQty").innerText = blueQty;
    document.getElementById("blue_amount").innerText = Number(document.getElementById("blueQty").innerText) * Number(document.getElementById("blueCost").innerText);
  }
  count_total()
});





document.getElementById("kiwiClear").addEventListener("click", (event) => {
  document.getElementById("kiwiQty").innerText = 0;
  document.getElementById("kiwi_amount").innerText = 0;
  document.getElementById("carttotal").innerText = Number(document.getElementById("kiwi_amount").innerText)+Number(document.getElementById("coco_amount").innerText)+Number(document.getElementById("blue_amount").innerText)
});
document.getElementById("cocoClear").addEventListener("click", (event) => {
  document.getElementById("cocoQty").innerText = 0;
  document.getElementById("coco_amount").innerText = 0;
  document.getElementById("carttotal").innerText = Number(document.getElementById("kiwi_amount").innerText)+Number(document.getElementById("coco_amount").innerText)+Number(document.getElementById("blue_amount").innerText)
});
document.getElementById("blueClear").addEventListener("click", (event) => {
  document.getElementById("blueQty").innerText = 0;
  document.getElementById("blue_amount").innerText = 0;
  document.getElementById("carttotal").innerText = Number(document.getElementById("kiwi_amount").innerText)+Number(document.getElementById("coco_amount").innerText)+Number(document.getElementById("blue_amount").innerText)
});