let calculateBtn = document.getElementById('calculate'),
    sellingPriceInput = document.getElementById('selling-price'),
    cogsInput = document.getElementById('cogs'),
    grossMarginInput = document.getElementById('gross-margin'),
    salesMarketingInput = document.getElementById('sales-marketing'),
    operationCostInput = document.getElementById('operation-cost'),
    netMarginInput = document.getElementById('net-margin'),
    sellingPriceValue,cogsValue, grossMarginValue,salesMarketingValue,
    operationCostValue,netMarginValue;



function calculate(){
    sellingPriceValue = sellingPriceInput.value;
    cogsValue = cogsInput.value;
    grossMarginValue = sellingPriceValue - cogsValue;
    grossMarginInput.value = grossMarginValue;
    salesMarketingValue =  salesMarketingInput.value;
    operationCostValue = operationCostInput.value;
    netMarginValue = grossMarginValue - salesMarketingValue - operationCostValue;
    netMarginInput.value = netMarginValue;   
}
calculateBtn.addEventListener('click', calculate);