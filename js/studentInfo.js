'use stric'


// alert('js woks')

//Student card
const studentCardInfo = function(){

 let studentCardBox = document.createElement("div")
 studentCardBox.className = "student_box"
 studentCardBox.id = "student_card_box"
 container.appendChild(studentCardBox)

 //the card shape

 let studentCard = document.createElement("div")
 studentCard.className = "student_card"
 studentCard.id = "student_card"
 student_card_box.appendChild(studentCard)

 //card img
 
 let studentCardBoxImg = document.createElement("div")
 studentCardBoxImg.className = "student_img"
 studentCardBoxImg.id = "student_card_img"
 student_card.appendChild(studentCardBoxImg)
 //card name

 let studentCardBoxName = document.createElement("div")
 studentCardBoxName.className = "student_name"
 studentCardBoxName.id = "student_card_name"
 student_card.appendChild(studentCardBoxName)

}

studentCardInfo()

const fetchApiData = async (cep) =>{
    const url = `http://localhost:8080/v1/lion-school/alunos/matriculas/${cep}`

    const response = await fetch(url)
    const data = await response.json()

    console.log(data)

    const list = document.getElementById('student_card_name')

        data.map((item)=>{
            const li = document.createElement('p')

            console.log(item.nome)
            li.setAttribute('id', item)
            li.innerHTML = item.nome
            list.appendChild(li)
        })
}

fetchApiData('20151001001')

//_________________________________________________________________________________________


//Student graphyc info
const studentGraphycInfo = function(){
  
 let studentGraphycBox = document.createElement("div")
 studentGraphycBox.id = "student_graphyc_box"
 studentGraphycBox.className = "student_box"
 container.appendChild(studentGraphycBox )

 let studentCard = document.createElement("div")
 studentCard.className = "student_card"
 studentCard.id = "student_card_graphyc"
 student_graphyc_box.appendChild(studentCard)

}

studentGraphycInfo()
