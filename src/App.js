import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";

const App = () => {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: "Холодильник",
      amount: 999.99,
    },
    {
      date: new Date(2021, 3, 12),
      description: "Джинсы",
      amount: 99,
    },
    {
      date: new Date(2021, 4, 10),
      description: "Телевизор",
      amount: 1200,
    },
  ];

  return (
    <div>
      <NewCost />
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
