console.log("Good Saurabh");

//Reactangle pattern Question

function rectanglePattern() {
  let i = +prompt("Enter number of row");
  let j = +prompt("Enter number of column");
  let str = "";
  for (let row = 0; row < i; row++) {
    for (let col = 0; col < j; col++) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);
}
// rectanglePattern();

function hollowRectangle() {
  let row = +prompt("Enter number of Row");
  let col = +prompt("Enter number of Column");
  let str = "";
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i == 0 || j == 0 || i == row - 1 || j == col - 1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  console.log(str);
}
// hollowRectangle();

function leftTrianglePattern() {
  let row = +prompt("Enter the row");
  // let col = +prompt('Enter the Column');
  let str = "";
  for (let i = 0; i < row; i++) {
    for (let j = 0; j <= i; j++) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);
}
// leftTrianglePattern();

function rightTrianglePattern() {
  let row = +prompt("Enter the row");
  let str = "";
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < row; j++) {
      if (j < row - i - 1) {
        str += " ";
      } else {
        str += "*";
      }
    }
    str += "\n";
  }
  console.log(str);
}
// rightTrianglePattern();

function invertedLeftTriangle() {
  let row = +prompt("Enter the row");
  let str = "";
  for (let i = 0; i < row; i++) {
    for (let j = row - 1; j >= 0; j--) {
      if (j >= i) {
        str += "*";
      }
    }
    str = str + "\n";
  }
  console.log(str);
}
// invertedLeftTriangle();

function invertedRightTriangle() {
  let row = +prompt("Enter the row");
  let str = "";
  for (let i = 0; i < row; i++) {
    for (let j = row - 1; j >= 0; j--) {
      if (j < row - i - 1) {
        str += "*";
      } else {
        str = str + " ";
      }
    }
    str += "\n";
  }
  console.log(str);
}
// invertedRightTriangle()

function halfPyramidWithNumber() {
  let row = +prompt("Enter the row");
  let str = "";
  let count = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < row; j++) {
      if (j <= i) {
        str = str + count + ' ';
        count++;
      }
    }
    str = str + "\n";
  }
  console.log(str);
}
// halfPyramidWithNumber();


function butterFlyPattern(){
  let row = +prompt('Enter number of Rows');
  let str = '';
  for(let i=0; i<row; i++){
    for(let j=0; j<=i; j++){
      str += '*';
    }
    let spaces = 2*row - 2*i-2;
    for(let j=0;j< spaces; j++){
      str += ' ';
    }
    for(let j=0; j<=i; j++){
      str += '*';
    }
    str += '\n';
  }
  for(let i=row-1; i>=0; i--){
    for(let j=0; j<=i; j++){
      str += '*';
    }
    let spaces = 2*row - 2*i-2;
    for(let j=0;j< spaces; j++){
      str += ' ';
    }
    for(let j=0; j<=i; j++){
      str += '*';
    }
    str += '\n';
  }
  console.log(str);
}

// butterFlyPattern();




function pyramidPattern(){
  let row = +prompt('Enter the number of Rows');
  let str = '';
  for(let i=1; i<=row; i++){
    for(let j=1; j<=row-i;j++){
        str=str +' ';
    }
    for(let j=1;j<=i;j++){
      str =str + '* ';
    }
    str+='\n'
  }
  console.log(str);
}
// pyramidPattern()


function rhombusPattern(){
  let str ="";
  let rows = +prompt('Enter the number of Rows');
  for(let i =1; i<=rows;i++){
    for(let j=1;j<=rows-i;j++){
      str+=" ";
    }
    for(let j=1;j<=rows;j++){
      str+='*'
    }
    str+='\n';
  }
  console.log(str);
}
// rhombusPattern();

function palindromicPattern(){
  let str ='';
  let rows = +prompt('Enter the number of Rows');
  for(let i=1;i<=rows;i++){
    for(let j=1;j<=rows-i;j++){
      str+="  ";
    }
    for(let j=i;j>=1;j--){
      str=str+j +' ';
    }
    for(let j=2;j<=i;j++){
      str+=j +' ';
    }
    str=str+'\n';
  }
  console.log(str);
}

// palindromicPattern();

function starPattern(){
  let str=''; 
  let rows= +prompt('Enter the number of rows');
  for(let i=1;i<=rows;i++){
    for(let j=rows-i;j>=1;j--){
      str+=' ';
    }
    for(let j=1;j<=i;j++){
      str=str+'*';
    }
    for(let j=2;j<=i;j++){
      str+='*'
    }
    str=str+ '\n';
  }
  for(let i=rows;i>=1;i--){
    for(let j=rows-i;j>=1;j--){
      str+=' ';
    }
    for(let j=1;j<=i;j++){
      str=str+'*';
    }
    for(let j=2;j<=i;j++){
      str+='*'
    }
    str=str+ '\n';
  }
  console.log(str);
}

starPattern();