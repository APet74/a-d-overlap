let keys = {
  a: false,
  d: false,
};

addEventListener('keydown', (event) => {
  if (event.key === 'a') {
    keys.a = true;
    console.log('%ca down', 'color:green');
    document.getElementById('app').innerHTML +=
      '<span style="color:green">a down</span><br/>';
  }
  if (event.key === 'd') {
    keys.d = true;
    console.log('%cd down', 'color: green');
    document.getElementById('app').innerHTML +=
      '<span style="color:green">d down</span><br/>';
  }

  if (keys.a && keys.d) {
    console.log('%cboth the keys pressed at once', 'color: red;');
    document.getElementById('app').innerHTML +=
      '<span style="color:red">both keys pressed at once</span><br/>';
  }
});

addEventListener('keyup', (event) => {
  if (event.key === 'a') {
    keys.a = false;
    console.log('%ca up', 'color:blue');
    document.getElementById('app').innerHTML +=
      '<span style="color:blue">a up</span><br/>';
  }
  if (event.key === 'd') {
    keys.d = false;
    console.log('%cd up', 'color: blue');
    document.getElementById('app').innerHTML +=
      '<span style="color:blue">d up</span><br/>';
  }
});


