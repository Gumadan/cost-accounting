import React, { useState } from "react";
import "./CostForm.css";

const CostForm = (props) => {
    const [inputname, setInputName] = useState("");
    const [inputamount, setInputAmount] = useState("");
    const [inputdate, setInputDate] = useState("");

//   const [userInput, setUserInput] = useState({
//     name: "",
//     amount: "",
//     date: "",
//   });

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
    //     setUserInput({
    //       ...userInput,
    //       name: event.target.value,
    //     });
    //   };
    // setUserInput((previousState) => {
    //   return {
    //     ...previousState,
    //     name: event.terget.value,
    //   };
    // });
  };

  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      description: inputname,
      amount: inputamount,
      date: new Date(inputdate)
    };

    props.onSaveCostData(costData);
    setInputName('');
    setInputAmount('');
    setInputDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input type="text" value={inputname} onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            value={inputamount}
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            value={inputdate}
            onChange={dateChangeHandler}
            type="date"
            min="2019-01-01"
            step="2022-12-31"
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить расход</button>
          <button type="button" onClick={props.onCancel}>Отмена</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
