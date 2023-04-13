'use strict'

import { fetchApiDataStudents } from "./api.js";

//alert('works')

const removeScreen =  () =>  {
    
    let x = document.getElementById("overal_content_list_student");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


const cardStudent =  async ()=> {

    const listStudentData = await fetchApiDataStudents()

       listStudentData.data.forEach(element => {

       let studentCard = document.createElement("button");
       studentCard.id= "student_card_list"
       studentCard.className = 'student_card_list'
       studentCard.href= element.foto
       studentCard.textContent = element.nome
       
         var image = document.createElement("img")
         image.id = "a"
         image.src = "img/instagram_icon.png"
         
       all_students.appendChild(studentCard) 
       all_students.addEventListener('click', removeScreen)
      // all_students.addEventListener('click',createScreenContent)
   });

   
   
}


cardStudent()
