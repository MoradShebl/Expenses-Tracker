const Card = ({ historyItems = [] }) => {
    // Calculate total income and expenses
    const totals = historyItems.reduce((acc, item) => {
        const amount = parseFloat(item.price);
        if (amount > 0) {
            acc.income += amount;
        } else {
            acc.expenses += Math.abs(amount);
        }
        return acc;
    }, { income: 0, expenses: 0 });

    return (
        <div className="card">
            <h3>Income<br /> <span style={{ color: 'green' }}>{`$${totals.income.toFixed(2)}`}</span></h3>
            <div className="vl"></div>
            <h3>Expenses<br /><span style={{ color: 'red' }}>{`$${totals.expenses.toFixed(2)}`}</span></h3>
        </div>
    );
}

export default Card;