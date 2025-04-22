const AddExpenses = ({ onAddItem }) => {
    // Function to handle form submission
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
        
        // Call the parent's function to add the new item
        onAddItem(description, amount);
        
        // Clear the form
        event.target[0].value = "";
        event.target[1].value = "";
    };

    return (
        <div className="add-expenses">
            <h2>Add Expenses</h2>
            <form onSubmit={handleSubmit}>
                <h3>Description:</h3>
                <input type="text" placeholder="Add Description" className="expenses-input" />
                <h3>Amount:</h3>
                <input type="number" placeholder="Amount" className="expenses-input" /><br />
                <button type="submit" className="submit-btn">Add</button>
            </form>
        </div>
    );
}

export default AddExpenses;