"use strict";

//alert('a')

import { fetchApiDataSubject } from "./api.js";

fetchApiDataSubject();

//this remove things onscreen

const remove = () => {
  let x = document.getElementById("overal_content_subect");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

const createScreen = () => {
  let x = document.getElementById("overal_content_list_student");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};
//remove()

//creates the image space
const subjectBox = () => {
  let leftPartsSubject = document.createElement("div");
  leftPartsSubject.id = "left_part_subject";
  leftPartsSubject.className = "left_part_subject";
  overal_content_subect.appendChild(leftPartsSubject);

  let rigthPartsSubject = document.createElement("div");
  rigthPartsSubject.id = "right_part_subject";
  rigthPartsSubject.className = "right_part_subject";
  overal_content_subect.appendChild(rigthPartsSubject);
};

//creates the button
const buttonsBox = function () {
  let buttonsDiv = document.createElement("div");
  buttonsDiv.id = "button_div";
  buttonsDiv.className = "button_div";
  right_part_subject.appendChild(buttonsDiv);
};

//give the button content
const buttonSubject = async () => {
  const subjectsData = await fetchApiDataSubject();

  //console.log(subjectsData)

  subjectsData.data.map((element) => {
    //console.log(element.sigla)
    let buttonsSubject = document.createElement("button");
    //buttonSubject.addEventListener('click', remove)
    buttonsSubject.id = "button_subject";
    buttonsSubject.className = "button_subject";
    let butoonSigla = element.sigla;
    buttonsSubject.innerHTML = butoonSigla;
    // buttonSubject.onclick = 'remove()';



    button_div.appendChild(buttonsSubject);
    button_div.addEventListener("click", remove);
    button_div.addEventListener("click", createScreen);
  });
};

//makes the button disapear

// subjectBox()
// buttonsBox()
// buttonSubject()

export { subjectBox, buttonsBox, buttonSubject };
