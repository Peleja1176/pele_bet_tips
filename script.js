fetch('bets.json')
  .then(res => res.json())
  .then(data => {
    const table = document.getElementById('betsTable');
    const today = new Date();

    data.bets.forEach(bet => {
      const betDate = new Date(bet.date);
      const diffDays = (today - betDate) / (1000 * 60 * 60 * 24);

      if (diffDays <= 5) {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${bet.date}</td>
          <td>${bet.match}</td>
          <td>${bet.tip}</td>
          <td>${bet.odd}</td>
          <td class="${bet.status}">${bet.status}</td>
        `;
        table.appendChild(row);
      }
    });
  });
