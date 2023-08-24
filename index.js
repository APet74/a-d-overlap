let keys = {
  a: false,
  d: false,
};

let mouseData = [];

let showKey = false;

let trackMouse = false;

addEventListener('keydown', (event) => {
  if (event.key === 'a' && showKey) {
    keys.a = true;
    document.getElementById('app').innerHTML +=
      '<span style="color:green">a down</span><br/>';
  }
  if (event.key === 'd' && showKey) {
    keys.d = true;
    document.getElementById('app').innerHTML +=
      '<span style="color:green">d down</span><br/>';
  }

  if (keys.a && keys.d && showKey) {
    document.getElementById('app').innerHTML +=
      '<span style="color:red">both keys pressed at once</span><br/>';
  }

  if (event.key === 'Shift') {
    document.getElementById('app').innerHTML = '';
  }

  if (event.key === ' ') {
    showKey = true;
    document.getElementById('app').innerHTML =
      '<span style="color: purple"><b>Starting Jump</b></span><br>';

    mouseData = [];
    trackMouse = true;
  }

  if (event.key === 'Control') {
    document.getElementById('app').innerHTML +=
      '<span style="color: purple"><b>Stopped Jump</b></span><br>';
    showKey = false;

    trackMouse = false;
    RenderChart();
  }
});

addEventListener('keyup', (event) => {
  if (event.key === 'a' && showKey) {
    keys.a = false;
    document.getElementById('app').innerHTML +=
      '<span style="color:blue">a up</span><br/>';
  }
  if (event.key === 'd' && showKey) {
    keys.d = false;
    document.getElementById('app').innerHTML +=
      '<span style="color:blue">d up</span><br/>';
  }
});

var info = document.getElementById('info');

// Creating function that will tell the position of cursor
// PageX and PageY will getting position values and show them in P
function tellPos(p) {
  info.innerHTML = 'Position X : ' + p.pageX + '<br />Position Y : ' + p.pageY;
  if (trackMouse) {
    mouseData.push({ y: Date.now(), x: p.pageX });
  }
}
addEventListener('mousemove', tellPos, false);

import Chart from 'chart.js';
function RenderChart() {
  new Chart(document.getElementById('line-chart'), {
    type: 'scatter',
    data: {
      datasets: [
        {
          label: 'Mouse Movement x cordinate over time',
          data: mouseData,
        },
      ],
    },
    options: {
      showLines: true,
      scales: {
        xAxes: [
          {
            type: 'linear',
            position: 'bottom',
          },
        ],
        yAxes: [
          {
            type: 'linear',
          },
        ],
      },
    },
  });
}
