const AddExpenses = ({ onAddItem }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (event.target[0].value === "") {
            alert("Please enter a description");
            return;
        }
        if (event.target[1].value === "") {
            alert("Please enter an amount");
            return;
        }

        const description = event.target[0].value;
        const amount = event.target[1].value;
        
        onAddItem(description, amount);
        
        event.target[0].value = "";
        event.target[1].value = "";
    };

    const addMinus = (input) => {
        input.value = input.value.startsWith('-') ? input.value.slice(1) : '-' + input.value;
    };

    return (
        <div className="add-expenses">
            <h2>Add Expenses</h2>
            <form onSubmit={handleSubmit}>
                <h3>Description:</h3>
                <input type="text" placeholder="Add Description" className="expenses-input" />
                <h3>Amount:</h3>
                <div className="amount-input-container">
                    <input type="number" placeholder="Amount" className="expenses-input" />
                    <button type="button" className="minus-btn" onClick={(e) => addMinus(e.target.previousElementSibling)}>-</button>
                </div>
                <button type="submit" className="submit-btn">Add</button>
            </form>
        </div>
    );
}

export default AddExpenses;