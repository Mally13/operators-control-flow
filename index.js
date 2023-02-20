//Qsn 3: Bolatito an arts student at Greenfield Highschool
let scienceSubjects = 'Physics, Chemistry, Biology, Technical Drawing';
let socialScienceSubjects = 'Accounting, Commerce, Marketing, Geography';
let artsSubjects = 'Government, Economics, Literature, History';
let generalSubjects = 'English, Mathematics';

let userInput="arts";

if (userInput=="arts"){
    console.log(`${generalSubjects}, ${artsSubjects} `)
} else if(userInput=="science"){
    console.log(`${generalSubjects}, ${scienceSubjects} `)
}else if (userInput=="social-science"){
    console.log(`${generalSubjects}, ${socialScienceSubjects} `)
}else{
    console.log(`${generalSubjects}`)    
}

//Qsn 5: Write a program that takes a positive number (num) and finds the power of 2 nearest to that number.
let num=40;

const nearestPowerOfTwo = num => {
    // dealing only with non-negative numbers
    if(num < 0){
       num *= -1;
    }
    let pwr = 1;
    while(pwr < num){
       if(num - pwr <= Math.floor(pwr / 2)){
          return pwr;
       };
       pwr *= 2;
    };
    // if ((pwr - num) == (num -))
    return pwr;
 };
console.log(`The number ${nearestPowerOfTwo(num)} is the power of 2 nearest to ${num}`);



