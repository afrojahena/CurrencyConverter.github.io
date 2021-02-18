$(document).ready(function () {

  var baseCurrency = 'USD';

  var baseNumber = 1;

  var targetCurrency = 'INR';

  var targetNumber;

  var url;

  currencyConverter(baseCurrency, baseNumber,targetCurrency,targetNumber)

  $("#base").change(function () {

    baseCurrency = $(this).children("option:selected").val();

    currencyConverter(baseCurrency,baseNumber,targetCurrency,targetNumber)


  });

  $("#baseNumber").change(function(){

    baseNumber = $(this).val()

    currencyConverter(baseCurrency,baseNumber,targetCurrency,targetNumber)

  })

  $("#target").change(function () {

    targetCurrency = $(this).children("option:selected").val();

    currencyConverter(baseCurrency,baseNumber,targetCurrency,targetNumber)

  });


  $("#targetNumber").change(function(){

    targetNumber = $(this).val()

    currencyConverter2(baseCurrency,baseNumber,targetCurrency,targetNumber)

  })


  function currencyConverter(baseCurrency, baseNumber,targetCurrency,targetNumber)
  {

      url = "https://api.exchangeratesapi.io/latest?symbols="+targetCurrency+"&base="+baseCurrency
    

      $.get(url,function(data){
          console.log(data.rates)

          for (let [key, value] of Object.entries(data.rates)) {
            
            var result = value * baseNumber

           $("#targetNumber").val(result)

          }
          console.log(`data.rates.${targetCurrency}`)
      })
  }

  function currencyConverter2(baseCurrency, baseNumber,targetCurrency,targetNumber)
  {

      url = "https://api.exchangeratesapi.io/latest?symbols="+baseCurrency+"&base="+targetCurrency

      $.get(url,function(data){
          console.log(data.rates)

          for (let [key, value] of Object.entries(data.rates)) {

            console.log(value)
            
            var result = value * targetNumber

           $("#baseNumber").val(result)

          }
          console.log(`data.rates.${targetCurrency}`)
      })
  }


});