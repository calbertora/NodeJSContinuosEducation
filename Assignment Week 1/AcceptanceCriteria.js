/**************************************************************************
 * 
 * ES: Como interesado necesito obtener la información de cursos ofertados por educación continua 
 * para así tener diferentes opciones para elegir posteriormente un curso al cual matricularme.
 * 
 * EN: As interested in courses, I need to get the information of the offered courses by continous education,
 * so I can get the different options to choose later a course wich I can take
 * 
 **************************************************************************/
let courses = [
   {
      id: 1,
      name: 'Diseño web',
      duration: 40,
      price: null,
   },
   {
      id: 2,
      name: 'NodeJS',
      duration: 32,
      price: null,
   },
   {
      id: 3,
      name: 'Programación',
      duration: 40,
      price: 50000,
   },
];

let timer = 0;
function getCourseOffering() {

   courses.forEach((item) => {
      timer++;
      printValue(item,timer); 
   })
};

function printValue(item,timer){
   setTimeout(() => {
      console.log(item);
   }, 2000*timer);
}

getCourseOffering();