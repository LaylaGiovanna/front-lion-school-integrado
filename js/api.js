
//alert('jswoks')

//___________________________________________Get list subjects___________________________________________________________

const fetchApiDataSubject = async () => {

    
    const url = `http://localhost:8080/v1/lion-school/cursos`

    const response = await fetch(url)
    const data = await response.json()

    // data.forEach(element => {

    //     console.log(element)
      return {
            data
        }

    // });

    
           
}

//___________________________________________Get list all studesf of a subject________________________________________//

 const fetchApiDataStudents = async () =>{
    const url = `http://localhost:8080/v1/lion-school/alunos/cursos/RDS`

    const response = await fetch(url)
    const data = await response.json()
  //  console.log(data)

    return {
        data
    }
}
fetchApiDataStudents()
//__________________________________________________________Get student_____________________________________//

const fetchApiData = async (cep) =>{
    const url = `http://localhost:8080/v1/lion-school/alunos/matriculas/${cep}`

    const response = await fetch(url)
    const data = await response.json()

    console.log(data)

    const list = document.getElementById('student_card_name')

    return{
        data
    }
}

fetchApiData('20151001001')

////fetchApiDataSubject()


export{fetchApiDataSubject,fetchApiDataStudents}
