import { useState } from 'react'
import Header from './components/Header.jsx'
import Balance from './components/Balance.jsx'
import Card from './components/Card.jsx'
import History from './components/History.jsx'
import AddExpenses from './components/AddExpenses.jsx'

const App = () => {
  const [historyItems, setHistoryItems] = useState([])

  const addHistoryItem = (description, amount) => {
    const newItem = {
      id: Date.now(),
      name: description,
      price: amount
    }
    setHistoryItems([...historyItems, newItem])
  }

  const removeHistoryItem = (id) => {
    setHistoryItems(historyItems.filter(item => item.id !== id))
  }

  return (
    <>
      <div className="container">
        <Header />
        <Balance historyItems={historyItems} />
        <Card historyItems={historyItems} />
        <History historyItems={historyItems} onRemoveItem={removeHistoryItem} />
        <AddExpenses onAddItem={addHistoryItem} />
      </div>
    </>
  )
}

export default App
