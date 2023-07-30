import CostItem from "./components/CostItem";

function App() {
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
      <CostItem
        date={costs[0].date}
        description={costs[0].description}
        amount={costs[0].amount}
      ></CostItem>
      <CostItem
        date={costs[1].date}
        description={costs[1].description}
        amount={costs[1].amount}
      ></CostItem>
      <CostItem
        date={costs[2].date}
        description={costs[2].description}
        amount={costs[2].amount}
      ></CostItem>
      
    </div>
  );
}

export default App;
