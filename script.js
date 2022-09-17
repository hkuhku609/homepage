console.log('hello world')

const fruits = ['apple','orange','banana','stawberry']
fruits.forEach(item=>item)

document.getElementById('nightBtn').addEventListener('click', (event) => {
  let fruits_list = ['apple','orange','banana','stawberry']
  let x=Math.floor(Math.random()*fruits_list);
  console.log(x)

});

function getWords(type) {
    // Return words of a given type, or all words if type is 'WORD'
    let words = [
      {type: 'ADJECTIVE', value: 'big'},
      {type: 'ADJECTIVE', value: 'purple'},
      {type: 'ADJECTIVE', value: 'new'},
      {type: 'ADJECTIVE', value: 'interesting'},
      {type: 'ADJECTIVE', value: 'curious'},
      {type: 'ADJECTIVE', value: 'happy'},
      {type: 'ADJECTIVE', value: 'busy'},
      {type: 'ADJECTIVE', value: 'tiny'},
      {type: 'NOUN', value: 'umbrella'},
      {type: 'NOUN', value: 'knee'},
      {type: 'NOUN', value: 'banana'},
      {type: 'NOUN', value: 'platypus'},
      {type: 'NOUN', value: 'cat'},
      {type: 'NOUN', value: 'mouse'},
      {type: 'NOUN', value: 'house'},
      {type: 'VERB', value: 'impressed'},
      {type: 'VERB', value: 'honoured'},
      {type: 'VERB', value: 'saw'},
      {type: 'VERB', value: 'ate'},
      {type: 'VERB', value: 'surprised'},
      {type: 'VERB', value: 'annoyed'},
      {type: 'VERB', value: 'touched'},
      {type: 'VERB', value: 'understood'},
      {type: 'VERB', value: 'taught'},
    ];
    return words.filter(word => type === 'WORD' || word.type === type).map(word => word.value);
  }
  
  function randomInt(n) {
    // Return a random number from in [0, n[
    return Math.floor(Math.random()*n);
  }
  
  function randomMember(arr) {
    // Return a random member of the array
    return arr[randomInt(arr.length)]
  }
  
  document.getElementById('helloworld').addEventListener('click', (event) => {
    let element_list = document.getElementById('list');
    element_list.innerText = 'i am fine';

  
  });
  
  
  document.getElementById('nightBtn').addEventListener('click', (event) => {
    let element_list = document.getElementById('list');
    element_list.innerText = 'night mode';
    element_list.style.color = '#ffffff';
    element_list.style.backgroundColor = '#000000';
  
  });
  
  document.getElementById('dayBtn').addEventListener('click', (event) => {
    let element_list2 = document.getElementById('list');
    element_list2.innerText = 'day mode';
    element_list2.style.color = '#000000';
    element_list2.style.backgroundColor = '#ffffff';
  
  });
  
  document.getElementById('noun1').addEventListener('click', (event) => {
    event.target.innerText = randomMember(getWords('NOUN'));
  
  });
  
  document.getElementById('verb').addEventListener('click', (event) => {
    event.target.innerText = randomMember(getWords('VERB'));
  
  });
  
  document.getElementById('adjective').addEventListener('click', (event) => {
    event.target.innerText = randomMember(getWords('ADJECTIVE'));
  
  });
  
  document.getElementById('noun2').addEventListener('click', (event) => {
    event.target.innerText = randomMember(getWords('NOUN'));
  
  });