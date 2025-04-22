const History = ({ historyItems = [], onRemoveItem }) => {
    return (
        <div className="history">
            <h2>History:</h2>
            <hr />
            {historyItems.length === 0 ? (
                <p>No history items available.</p>
            ) : (
                <ul>
                    {historyItems.map((item) => (
                        <li key={item.id}>
                            <span>{item.name}</span>
                            <span style={{ color: item.price.startsWith('-') ? 'red' : 'green' }}>
                                {`${item.price}$`}
                            </span>
                            <button 
                                onClick={() => onRemoveItem(item.id)}
                                className="remove-btn"
                            >
                                ×
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default History;