import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';
import CardList from './components/CardList';


export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      url: "https://images.unsplash.com/photo-1569013279783-1c1f3a057657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      age: 36,
      note: "Alergitic to Penicciline"
    }
  ])

  return (
    <div className="App">
      <h1>Income Calculating</h1>
      <h3>Sidar Yuksel Mahrek Project</h3>
      <CardList />
    {/*  <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
  */}
    </div>
  );
}

export default App;
