function closeMe(id){
    // Find the element
        targetElement=document.getElementById(id);
    // Option 1: Change the style attribute directly
        targetElement.style.display="none";
    //Option 2: Change the class
        // x.className="closed";
  }

function openMe(id){
    // Find the element
        targetElement=document.getElementById(id);

    //Option 1: Change the style attribute directly
        targetElement.style.display="block";
    
    //Option 2: Change the class
        // x.className="open";
  }