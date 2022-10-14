// 1-
function filtre(arr,str){
    return arr.filter(s => !s.includes(str));

}
let result = filtre(["ahmed","med","sally"], "med");

console.log(result);


 // 2-
function swap(arr, xp, yp)
{
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}
 
// An optimized version of Bubble Sort
function bubbleSort( arr, n)
{
var i, j;
for (i = 0; i < n-1; i++)
{
    for (j = 0; j < n-i-1; j++)
    {
        if (arr[j] > arr[j+1])
        {
        swap(arr,j,j+1);
         
        }
    }
 
}
}
 
/* Function to print an array */
function printArray(arr, size)
{
    var i;
    for (i=0; i < size; i++)
        document.write(arr[i]+ " ");
    document.write("\n");
}
 
// Driver program to test above functions
  var arr = [64, 34, 25, 12, 22, 11, 90];
    var n = 7;
    document.write("UnSorted array: \n");
    printArray(arr, n);
 
    bubbleSort(arr, n);
    document.write("Sorted array: \n");
    printArray(arr, n);

     //3- 
     var Person = function() {};
 Person.prototype.initialize = function(name, age)
 {
  this.name = name;
  this.age = age;  
 }
 Person.prototype.describe = function()
 {
  return this.name + ", " + this.age + " years old.";
 }
 var Student = function() {};
 Student.prototype = new Person();
 Student.prototype.learn = function(subject)
 {
  console.log(this.name + " just learned " + subject);
 }
 var me = new Student();
 me.initialize("John", 25);
 me.learn("Inheritance");

var Teacher = function(){};
Teacher.prototype= new Person();
//Teacher.prototype.teach = funtion(subject)
//{
//    console.log(this.name + " is now teaching " + subject);
//}