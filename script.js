//your JS code here. If required.
// create three promises that resolve after a random time between 1 and 3 seconds
  const promise1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1'), Math.random() * 2000 + 1000));
  const promise2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2'), Math.random() * 2000 + 1000));
  const promise3 = new Promise((resolve) => setTimeout(() => resolve('Promise 3'), Math.random() * 2000 + 1000));

  // wait for all promises to resolve using Promise.all
  Promise.all([promise1, promise2, promise3])
    .then((results) => {
      // remove the loading text
      const loadingRow = document.getElementById('loading');
      loadingRow.parentNode.removeChild(loadingRow);

      // populate the table with the results
      const tableBody = document.querySelector('tbody');
      results.forEach((result, index) => {
        const row = tableBody.insertRow(index);
        const promiseCell = row.insertCell(0);
        promiseCell.textContent = result;
        const timeTakenCell = row.insertCell(1);
        timeTakenCell.textContent = ((index + 1) * 1000 + Math.random() * 2000) / 1000;
      });

      // add a row for the total time taken
      const totalRow = tableBody.insertRow();
      const totalCell = totalRow.insertCell(0);
      totalCell.textContent = 'Total';
      const totalTimeTakenCell = totalRow.insertCell(1);
      totalTimeTakenCell.textContent = (Date.now() - performance.timing.navigationStart) / 1000;
    });
       