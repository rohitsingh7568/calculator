let display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
      display.value = eval(display.value);

 
}


  let getData = localStorage.getItem('history')
  let parsedGetData = JSON.parse(getData)
  
  all = `${oldString}=${calculated}`
  const mydata = parsedGetData.concat(all)
  console.log(mydata);

/////////////////HISTORY OF CALCULATOR


const element = document.getElementById("myelememnt")
  const listItemArray = mydata.map(item => {
      const li = document.createElement("div");
      li.textContent = item;
      return li;
  });

  listItemArray.forEach(item => {
      element.appendChild(item);
  });

 