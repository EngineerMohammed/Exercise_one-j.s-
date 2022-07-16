//6 assignments introduction  تكليفات الدروس من 1 إلى 9
// تكليف رقم 2
// let title = document.createElement("h1");
// let text = document.createTextNode("Elzero");
// title.appendChild(text);
// document.body.appendChild(title);

//التكليف 03
// console.log(
//   "%c Elzero " + "%c web " + "%c school",
//   "color:red; font-size:40px;",
//   "color:green; font-size:40px; font-weight:bold",
//   "color:blue; font-size:40px"
// );

//التكليف 04
// console.group("Group 1");
// console.log("Group one");
// console.log("Group two");

// console.group("Group child");
// console.log("Group one");
// console.log("Group two");

// console.group("Grand Group child");
// console.log("Group one");
// console.log("Group two");

// console.groupEnd("Group 1");
// console.groupEnd("Grand Group child");
// console.groupEnd("Group child");

// console.group("Group 2");
// console.log("Group one");
// console.log("Group two");
// console.groupEnd("Group 2");

//التكليف 05
// let Array1 = ["Elzero", "Ahmed","sameh", "Samy", "jamal", "Aya"];
// console.table(Array1)

//التكليف 06

// function samy() {
//   let nam = true;
//   if (nam === true) {
//     console.log("i am in console");
//   } else {
//     console.error("bad");
//   }
// }
// samy();
// document.open();
// window.stop();
// document.write("Iam In Page");

// ======================================================//
//تكليفات JavaScript Bootcamp من الدرس 010 إلى 017
//4 Assignments

//التكليف 01
// let number_One = 10;
// let number_Two = 20;
// let sum = `${ number_One } ./+ ${number_Two}`;
// console.log(sum)

// const item1Price = 5;
// const item2Price = 10;

// console.log(`"20"\n"10" `)
//التكليف 02

// console.log(elzero.innerHTML); // object
// console.log(typeof elzero); // object

//التكليف 03
// let a = 21;
// let b = 20;
// console.log("Write Your Code Here"); // _21_2021_2021_2021_20_
// console.log('_'+a+'_'+a+b+'_'+a+b+'_'+a+b+'_'+b+'_')

// تكليفات JavaScript Bootcamp من الدرس 018 إلى 022
//التكليف 01
// Replace ? With Arithmetic Operators
// console.log(10 + 20 - 15 - 3 * 190 + 10 + 400); // 0

// addCommasAndUnderscore(num);
// ===============
// function addCommasAndUnderscore(num) {
//   // convert number to strng with separaed comma
//   let result = num.toLocaleString();
//   // convart the string to array
//   result = result.split("");
//   //replace the last comma with _
//   result[result.length - 4] = "_";
//   // join the string again or== transfer array to string
//   result = result.join("");
//   //  change string to number
//   result = +result;
//   return typeof result;
// }
// console.log(addCommasAndUnderscore(120)); // 120
// console.log(addCommasAndUnderscore(1530)); // 1_530
// console.log(addCommasAndUnderscore(120510650)); // 120,510_650
// console.log(addCommasAndUnderscore(510650480910)); // 510,650,780_910
// console.log(addCommasAndUnderscore(12069057014032)); // 12,069,057,014_032

// ===============================
//find the longest word
// ===============================
// function determinelongestword(sentence) {
//   // change sentence to an Array
//   let spliArray = sentence.split(" ");
//   //   console.log(spliArray);
//   // test the longest word
//   // 1st make referance length equal zero
//   let referanc_len = 0;
//   let longestword;
//   // make aloop in array to select longest word
//   for (let i = 0; i < spliArray.length; i++) {
//       if (spliArray[i].length > referanc_len) {

//       longestword = spliArray[i];
//       referanc_len = spliArray[i].length;
//     }
//   }
// console.log(referanc_len)
//   return longestword;
// }

// console.log(
//   determinelongestword(
//     "i love programming with javascript tooo mutch tooooooooooo"
//   )
// );

// solution by higher order function reduce

// function longestWordIn(sentence) {
//   let longestWord = sentence
//     .split(" ")
//     .reduce((m, n) => (m.length > n.length ? m : n));
//   return longestWord;
// }
// console.log(
//   longestWordIn("i love programming with javascript tooo mutch tooooooooooo")
// );

// finding the missing letter

// function findmissingletter(inputletter) {
//   // insert all English letters
//   let letters = "abcdefghijklmnopqrstuvwxyz";
//   // determine start letter append to all letters
//   let start = letters.indexOf(inputletter[0]);
//   // make for loop in input letters
//   for (let i = 0; i < inputletter.length; i++){
//     // console.log(letters[start + i]);
//     // console.log(inputletter[i])
//     // console.log('#'.repeat(20))
//     if (inputletter[i] !== letters[start + i]) {
//       return letters[start + i];
//     }
//   }
//   return 'no midssing letters '
// }

// console.log(findmissingletter("defgi"));

//  reverse numbers
// function reversenums(nums) {
//   // transfer number to string
//   // also to string array
//   let array = nums.toString().split("");
//   console.log(array);
//   array.reverse();
//   //  convert all elements to numbers
//   array = array.map((x) => +x);
//   return array;
// }
// console.log(reversenums(564987654));
// function reversenums(nums) {
//   return nums
//     .toString()
//     .split("")
//     .reverse()
//     .map((x) => +x);
// }
// console.log(reversenums(564987654));

// function revarr(n) {
//   let str = n.toString();
//   let array = [];
//   for (let i = 0; i < str.length; i++) {
//     array.unshift(+str[i]);
//   }
//   return array;
// }
// console.log(revarr(564987654));

// function removcharacher(word, c) {
//   return word.split("").filter(function (chrc) {
//     return chrc !== c.toLowerCase() && chrc !== c.toUpperCase()
//   })
//   .join("")
// }
// console.log(removcharacher('elzxero web school', 'x'));
// function clearword_repeated(sentence) {
//   let newsentence = sentence.split(" ");
//   let emptyArry = [];
//   // console.log(newsentence)
//   for (let i = 0; i < newsentence.length; i++) {
//     if (emptyArry.indexOf(newsentence[i]) === -1) {
//       emptyArry.push(newsentence[i]);
//     }
//     // return emptyArry.join(" ");
//   }
//     return emptyArry.join(" ");

// }

// console.log(clearword_repeated("Hello Elzero Web school Hello Elzero"));

// JavaScript Big Tutorials 50 vidieos
// التكليف الأول creat HTML markup and style with CSS

// [1] creat Array from imags count by querySelectorAll
// let current_Slide = 1;

// let Slider_Imgs = Array.from(document.querySelectorAll(".slider-container img"));
// // make variable of slider element number
// let slide_number_Element_Elem = document.getElementById("slide-number");
// // check array
// // console.table(Slider_Imgs)
// // set length of Array
// let slide_count = Slider_Imgs.length;
// // creat Button in next and prev
// let prevBtn = document.getElementById("prev");
// let nextBtn = document.getElementById("next");

// // create two functions to next and prev Buttons
// function funforPrevBtn() {
//   if (prevBtn.classList.contains("disabled")) {
//     // Do NOTHING
//     return false;
//   } else {
//     current_Slide--;

//     checkFunc();
//   }
// }

// function funforNextBtn() {
//   //
//   if (nextBtn.classList.contains("disabled")) {
//     // Do NOTHING
//     return false;
//   } else {
//     current_Slide++;

//     checkFunc();
//   }
// }
// // add the to functions to the btn onclick effect
// prevBtn.onclick = funforPrevBtn;
// nextBtn.onclick = funforNextBtn;
// // Ceate ul and lis in the indicator span
// let ul_bullet = document.createElement("ul");
// // set attribute= id for ul
// ul_bullet.setAttribute("id", "ul_attrib");
// // creat the lis equal to the imgs_count using for loop
// for (let i = 0; i <= slide_count; i++) {
//   // creat lis elements
//   let lis_Elements = document.createElement("li");
//   // set Attribut fot lis like data-index and the number i
//   lis_Elements.setAttribute("data-index", i);
//   // Add text node to every li
//   lis_Elements.appendChild(document.createTextNode(i));
//   // Added the lis to the ul
//   ul_bullet.appendChild(lis_Elements);
// }

// // console.log(lis_Array);

// // get the indicator span then add the ul on it
// document.getElementById("indicators").appendChild(ul_bullet);
// // creat an array from constructed li(lis_Elements)
// let li_Array = Array.from(document.querySelectorAll("#ul_attrib li"));
// console.table(li_Array);
// // ==============================================================
// // get the ul and put it in a vairable
// let ul_variable = document.getElementById("ul_attrib");

// // check if the current class is the first
// if (current_Slide == 1) {
//   // add disabled class in prevBtn
//   prevBtn.classList.add("disabled");
// } else {
//   // Remove Disable From PrevBtn
//   prevBtn.classList.remove("disabled");
// }
// // check if the current class is the last one

// if (current_Slide == slide_count) {
//   //  disabled class in nextBtn
//   nextBtn.classList.add("disabled");
// } else {
//   nextBtn.classList.remove("disabled");
// }

// // Create the Cheacker function
// // first make avairiable

// function checkFunc() {
//   // writte at slide number div
//   // let(current_Slide) <= slide_count;

//   slide_number_Element_Elem.textContent =
//     "slide # " + (current_Slide) + " of " + (slide_count);
//   // set Active class in current slide
//   Slider_Imgs[current_Slide - 1].classList.add("active");
//   // set Active class in current ul[li] iteam
//   ul_variable.children[current_Slide - 1].classList.add("active");
// }

// // checkFunc();

// // Remove all active classes from li and images
// function removAllActiv() {
//   Slider_Imgs.forEach((img) => {
//     img.classList.remove("active");
//   });
//   li_Array.forEach((li) => {
//     li.classList.remove("active");
//   });
// }
// // removAllActiv()

// ===========================
// 2nd time التكليفاالاول
// ===================

// // Repeat // JavaScript Big Tutorials 50 vidieos
// // التكليف الأول creat HTML markup and style with CSS

// let Current_Slide = 3;
// // Creat an Array from Photo
// let Slider_Img = Array.from(document.querySelectorAll(".slider-container img"));
// // console.table(Slider_Img) teast
// // adding number to every img and text also
// let Slide_Count = Slider_Img.length;
// // console.log(Slide_Count); teat
// // craet ul
// let ul_bullet = document.createElement("ul");
// // set attrubite = id for the ul
// ul_bullet.setAttribute("id", "ul_Attrib");
// // creat the lis by loop equal to img count

// for (let i = 1; i <= Slide_Count; i++) {
//   let li_bullts = document.createElement("li");
//   // set data-index equal the li numbring
//   li_bullts.setAttribute("data-index", i);
//   // add text inside li represent the index
//   li_bullts.appendChild(document.createTextNode(i));
//   // append lis to ul
//   ul_bullet.appendChild(li_bullts);
// }
// document.getElementById("indicators").appendChild(ul_bullet);
// // creat an Array from lis
// let Array_lis = Array.from(document.querySelectorAll("#ul_Attrib li"));

// // loop throw all li iteams
// for (i = 0; i < Array_lis.length; i++) {
//   Array_lis[i].onclick = function () {
//     Current_Slide = parseInt(this.getAttribute("data-index"));
//     checker_FUNC();
//   };
// }

// // console.table(Array_lis); //=> only for teast

// // make nextBtn
// let nextBtn = document.getElementById("next");
// let prevBtn = document.getElementById("prev");
// // make Afunction for prev and next Button

// function nextfun() {
//   // check if the btn has disablead => stop
//   if (nextBtn.classList.contains("disabled")) {
//     return false;
//   } else {
//     Current_Slide++;
//     checker_FUNC();
//   }
// }

// function prevFunc() {
//   if (prevBtn.classList.contains("disabled")) {
//     return false;
//   } else {
//     Current_Slide--;
//     checker_FUNC();
//   }
// }
// // add the function action to the btn
// nextBtn.onclick = nextfun;
// prevBtn.onclick = prevFunc;
// // Get the slide number and writte
// let slide_number_Element = document.getElementById("slide-number");
// // add number to the the current slide

// function checker_FUNC() {
//   // ================================
//   slide_number_Element.textContent =
//     "slide # " + Current_Slide + " of " + Slide_Count;
//   // remove all active class by per constructed func
//   removeActiveClass();

//   // added Active TO the Current SLIDE(imag)
//   Slider_Img[Current_Slide - 1].classList.add("active");
//   // Add ACTIVE Class to the current li (arry als)
//   Array_lis[Current_Slide - 1].classList.add("active");

//   // check if current slide is the first
//   if (Current_Slide == 1) {
//     prevBtn.classList.add("disabled");
//   } else {
//     prevBtn.classList.remove("disabled");
//   }
//   if (Current_Slide == Slide_Count) {
//     nextBtn.classList.add("disabled");
//   } else {
//     nextBtn.classList.remove("disabled");
//   }
// }
// checker_FUNC();

// // Creat function for remove active from li and imgs
// function removeActiveClass() {
//   // =================================
//   Slider_Img.forEach((img) => {
//     //  remove active from All img
//     img.classList.remove("active");
//   });
//   //  remove active from All li
//   Array_lis.forEach((li) => {
//     //  remove active from All img
//     li.classList.remove("active");
//   });
// }

// // ===========================
// 3rd time التكليفاالاول
// ===================
// set current slide number
let currentslide = 5;
// Creat Array by loop on imgs
let Array_imgs = document.querySelectorAll(".slider-container img");
let total_imgs = Array_imgs.length;
// creat ul element
let ul_Element = document.createElement("ul");
// add id to ul
ul_Element.setAttribute("id", "ul_master");

// make aloop to creat li
for (let i = 1; i <= total_imgs; i++) {
  let li_child = document.createElement("li");
  // add id to li
  li_child.setAttribute("data-index", i);
  // added textnode to li
  li_child.appendChild(document.createTextNode(i));
  // Append li to ul
  ul_Element.appendChild(li_child);
}
// add all li to span
document.getElementById("indicators").appendChild(ul_Element);
// Call slid number
let slide_Number_Ele = document.getElementById("slide-number");
// Creat Arry from lis
let Array_lis = Array.from(document.querySelectorAll("#ul_master li"));
let total_Array_lis = Array_lis.length;

// Buttons calls should be befor checker functions
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");

// prevSlide()

// ============================&&&&&&&&&&&&&&&***********************
mastercheckfunc();
// creat mastercheckfunc
function mastercheckfunc() {
  // [1]added number to the slide
  slide_Number_Ele.textContent =
    "slid no #" + currentslide + " of " + total_imgs;
  // Activate the func to remove active
  RemoveActiveClass();
  // add active classes current img
  Array_imgs[currentslide - 1].classList.add("active");
  // add active classes current li
  ul_Element.children[currentslide - 1].classList.add("active");
  // [2] disabe prev and next Button
  if (currentslide == 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }
  if (currentslide == total_imgs) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

// Creat the control function on next and prev function
// ==================================================================
function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    currentslide--;
    mastercheckfunc();
  }
}
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    currentslide++;
    mastercheckfunc();
  }
}
prevButton.onclick = prevSlide;
nextButton.onclick = nextSlide;
// ==========================================================================
// creat afunction on the number data-index action
for (let i = 0; i < total_Array_lis; i++) {
  Array_lis[i].onclick = function () {
    currentslide = parseInt(this.getAttribute("data-index"));
    mastercheckfunc();
  };
}

// make a function to remove all actives
function RemoveActiveClass() {
  Array_imgs.forEach((img) => {
    img.classList.remove("active");
  });
  Array_lis.forEach((li_child) => {
    li_child.classList.remove("active");
  });
}
