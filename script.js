//your JS code here. If required.
function getRandomTime() {
  return Math.floor(Math.random() * 3000) + 1000;
}

function createPromise(index) {
  const time = getRandomTime();
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ index, time });
    }, time);
  });
}

const promises = [
  createPromise(1),
  createPromise(2),
  createPromise(3),
];

const table = document.getElementById('table');

Promise.all(promises)
  .then((results) => {
    const totalTime = results.reduce((acc, cur) => acc + cur.time, 0) / 1000;

    const tbody = table.getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';

    results.forEach((result) => {
      const tr = document.createElement('tr');
      const td1 = document.createElement('td');
      td1.textContent = `Promise ${result.index}`;
      const td2 = document.createElement('td');
      td2.textContent = `${result.time / 1000}`;
      tr.appendChild(td1);
      tr.appendChild(td2);
      tbody.appendChild(tr);
    });

    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.textContent = 'Total';
    const td2 = document.createElement('td');
    td2.textContent = `${totalTime.toFixed(3)}`;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tbody.appendChild(tr);
  })
  .catch((error) => {
    console.error(error);
  });
