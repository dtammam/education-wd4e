// Array of grades and blank sum
var grades = [80, 87, 94, 82, 62, 98, 81, 81, 74, 91];
var sum = 0

// if the length of the array is a number (greater than zero)...
if (grades.length > 0) {
    // Create an inerator index at value 0, and loop until it is no longer less than the index of the array (number of grades), increasing the value of index each time
    for (index = 0; index < grades.length; index++) {
        // When it iterates, add the value of the specific element of the grades array to the sum
        sum += grades[index];
    }
    // Output the average grade (which is sum divided by grades.length which is the number of grades)
    document.write(sum/grades.length)
}
else
    document.write("Empty array");