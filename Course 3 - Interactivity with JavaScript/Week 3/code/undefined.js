var grades= [2, 5, , , 9, 8, , 8];
var sum = 0;
var count = 0;

if (grades.length > 0){
    for (index = 0; index < grades.length; index++){
        // I only want to do this if it's a real number
        if (grades[index] != undefined) {
            sum += grades[index]; 
            count += 1;
        }
    }
    // Divide by the count of the 'good' values
    document.write(sum/count);
}

else
    document.write("Empty Array");