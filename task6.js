function largestArgument(){
    let largest = arguments[0];
    [... arguments].forEach(argument => {
        largest < argument ? largest = argument : false;
        
    });
    return largest

}
largestArgument(1,0,6,4,9,2,7);