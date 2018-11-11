

let students = [
    {
        firstName: 'Ivan',
        lastName:  'Aleksienko',
        ratting:   '61'
    },
    {
        firstName: 'Nazar',
        lastName:  'Bochnak',
        ratting: '77'
    },
    {
        firstName: 'Julia',
        lastName:  'Boychuk',
        ratting: '90'
    },
    {
        firstName: 'Nazar',
        lastName:  'Koshitsky',
        ratting: '80',
    },
    {
        firstName: 'Igor',
        lastName:  'Mandzyuk',
        ratting: '89',
    },
    {
        firstName: 'Ivan',
        lastName:  'Melnichuk',
        ratting: '78',
    },
    {
        firstName: 'Petro',
        lastName:  'Podminohin',
        ratting: '76',
    },
    {
        firstName: 'Oleg',
        lastName:  'Batun',
        ratting: '60',
    },
    {
        firstName: 'Bohdan',
        lastName:  'Timchishin',
        ratting: '79',
    },
]

const sortObj = (arr, prop) => {
    let compare = (a, b) => a[prop] > b[prop] ? 1 : a[prop] == b[prop] ? 0 : -1; //Сортування.
    arr.sort(compare);
}

// const sortObj = (arr, prop) => {
//     let compare = (a, b) => a[prop] > b[prop] ? 1 : a[prop] == b[prop] ? 0 : -1; // Сортування буз змін у об'єкті.
//     return arr.map(el => el).sort(compare);
// }
// console.log(sortObj(students, 'lastName'));
// console.log(sortObj(students, 'firstName'));
// console.log(sortObj(students, 'age'));


    const compare = (arr, key, callback) => arr.reduce((prev, curr) => //Method for compare elements of object
    (callback(prev[key], curr[key]) ? prev : curr), {})[key];

    const rateMin = compare(students, 'ratting', (a, b) => a < b); //Max value ratting
    const rateMax = compare(students, 'ratting', (a, b) => a > b); //Min value ratting


    
    function avg () { //Method for calculate average  value
    let sum=0;
    for (const key in students){
        sum += +students[key].ratting;
         
       };
    let avg = Math.ceil(sum/students.length);
    return avg.toString();
    }



            function rate (){ ///Add property rate to every object.
                for (const key in students) {
                 let value;
                  value = Math.round(((rateMax/students[key].ratting)*100)-100);
                  students[key].rate = value; 
                    }
                }
/////////////////////////////////////////////
sortObj(students, 'firstName'); //Sort firstName.
 console.log(students); 
 console.log('\n')
 sortObj(students, 'lastName'); //Sort lastName.
 console.log(students);
 console.log('\n')
 sortObj(students, 'ratting');
 console.log(students);
 // sortObj(students, 'lastName');
 // sortObj(students, 'firstName');
 // console.log(students);

 console.log('\n');


 console.log('Максимальне, мінімальне та середне значення'+'\n'+`Min value: ${rateMin}, max value: ${rateMax}`); 
 console.log(students.find(x => x.ratting === avg()));     //Avg value
 console.log(students.find(x => x.ratting === rateMin));   //Min ratting
 console.log(students.find(x => x.ratting === rateMax));   //Max ratting
            
            rate();
    console.log('\n'+'Додавання поля rate: ')
   console.log(students);

   
    






  

