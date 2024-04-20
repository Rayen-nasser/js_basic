/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];


var nb=0;
for(i=0 ; i<myAdmins.length;i++){
    if(myAdmins[i]==="Stop"){
        break;
    }else {
        nb=nb+1;
    }
}
document.write(`<div>We Have ${nb} Admins</div>`);
for (i=0 ; i<myAdmins.length;i++){
    
    var Nb=0;
    if(myAdmins[i]==="Stop"){
        break ;
    }
    document.write(`<hr> <div>The Admin For Team ${i+1} Is ${myAdmins[i]}</div>
    <p>Team Members</p>`);
            for(j=0 ; j<myEmployees.length;j++){
                if(myEmployees[j][0]===myAdmins[i][0])
                {
                    Nb+=1
                    document.write(`${Nb}-${myEmployees[j]}<br>`)
                }
            }
            
}
document.write('<hr>');    


