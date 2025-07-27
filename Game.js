

// let table= document.getElementById("V1");
// let range = document.getElementById("range");
// // let name = ["name1","name2" , "name3"];

// // let array={
// //     name : "ali",
// //     city : "karachi",
// //     age: 30,
// // }
// // console.log(name[1])

// // let num =10
// // let num2 =20

// // document.write(typeof(num));

// function GenerateTable() {

//     let value1= parseInt (table.value);
//     // let random =Math.random();
//     // document .write
//     let value2= parseInt (range.value);

//     // document.write(value1 + value2 );
//     for (let i=value1; i<=value2; i++) {
//         document.write(`<table > <tr> ${value1} × ${i} = ${value1 * i} <br> </tr> </table> `);
//     }
// }





// let ans=document.getElementById("bbtn")
// function btn() {
//     let value1= parseInt (ans.value);
//     let random =Math.floor(Math.random(1));
//     document.write(random);
//     if(random==value1){
//         alert ("you won")
//     }
//     else{
//         alert("Try again correct ans is " + value1)
//     }
// }



function btn() {
    var value1=document.getElementById("bbtn");
    let random= Math.floor(Math.random()*10);
    if(random==value1){
Swal.fire({
  title: "You win !",
  text: "Your answer is correct!",
  icon: "success",
  showCancelButton: true,
  confirmButtonColor: "#16e632ff",
  cancelButtonColor: "#d33",
  confirmButtonText: "New game"
});
}
    else{
Swal.fire({
  title: "Opps",
  text: "Your gussed number is wrong! " + "Correct answer is " + random,
  icon: "error",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Try again"
});

}
}