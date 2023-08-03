import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";

const App = () => {
  const costs = [
    {
      id: 'c1',
      date: new Date(2021, 2, 12),
      description: "Холодильник",
      amount: 999.99,
    },
    {
      id: 'c2',
      date: new Date(2021, 3, 12),
      description: "Джинсы",
      amount: 99,
    },
    {
      id: 'c3',
      date: new Date(2021, 4, 10),
      description: "Телевизор",
      amount: 1200,
    },
  ];

  const addCostHandler = (cost) => {
    console.log(cost);
    console.log('App Component');
  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
