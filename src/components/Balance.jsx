const Balance = ({ historyItems = [] }) => {
  // Calculate total balance (income - expenses)
  const totalBalance = historyItems.reduce((total, item) => {
    return total + parseFloat(item.price);
  }, 0);

  return (
    <div className="balance">
      <h2>Your Balance</h2>
      <h3 style={{ color: totalBalance >= 0 ? 'green' : 'red' }}>
        ${Math.abs(totalBalance).toFixed(2)}
      </h3>
    </div>
  );
}

export default Balance;