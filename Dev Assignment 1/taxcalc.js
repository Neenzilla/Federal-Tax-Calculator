// Nina Robichaud
// 3/16/21
// Interactive Web Design 
// Development Assignment 1
  

// Income Tax Calculator function
  
  function calcIncomeTax() {
    var preFormattedIncome = document.getElementById("income").value;
    var income = preFormattedIncome.replace(/[^\d.-]/g, '');
    // resource: https://stackoverflow.com/questions/19577748/what-does-this-javascript-regular-expression-d-mean/19577790
    // (/[^\d.-]/g, '') >>>> removes trailing white spaces when calculating income
    
    if (income < 0) {
      document.getElementById("total").innerHTML = (0.00).toFixed(2);
    } else if (income >= 0 && income < 27050) {
        var incomeTax = income * 0.15;
        document.getElementById("total").innerHTML = incomeTax.toFixed(2);
    } else if (income >= 27050 && income < 65550){
        var incomeTax = 4057.50 + ((income - 27050) * 0.275);
        document.getElementById("total").innerHTML = incomeTax.toFixed(2);
    } else if (income >= 65550 && income < 136750) {
        var incomeTax = 14654 + ((income - 65550) * 0.305);
        document.getElementById("total").innerHTML = incomeTax.toFixed(2);
    } else if (income >= 136750 && income < 297350) {
        var incomeTax = 36361 + ((income - 136750) * 0.355);
        document.getElementById("total").innerHTML = incomeTax.toFixed(2);
    } else {
        //Income >= 297350
        var incomeTax = 93374 + ((income - 297350) * 0.391);
        document.getElementById("total").innerHTML = incomeTax.toFixed(2);
    }
  };


// Modal Window 

  $(window).resize(function () {
    var windowHeight = $( window ).height();
    
    var newHeaderHeight = windowHeight * 0.3;
    $('#header').height(newHeaderHeight);
    
    var newContentHeight = windowHeight * 0.7;
    var newContentHeightMargin = (windowHeight * 0.3);
    $('#content').height(newContentHeight);
  });