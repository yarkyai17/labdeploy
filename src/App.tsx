import { useState } from "react";
import BmiResult from "./components/BmiResult";

import "./App.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "weight") {
      setWeight(Number(value));
    } else if (name === "height") {
      setHeight(Number(value));
    }
  };

  const calculateBmi = () => {
    // const bmi = weight / ((height / 100) * (height / 100))

    //const bmi = weight / (height / 100) ** 2;
    //setBmi(bmi);

    let i;

    for (i = 1; i <= 12; i++) {
      <p> hello </p>;
    }
  };

  return (
    <div className="bmi-app">
      <h1 className="title">BMI Calculator</h1>
      <p className="subtitle">โปรแกรมคำนวณค่าดัชนีมวลกาย - BMI</p>

      <table>
        <tr>
          <td>
            <label htmlFor="weight">น้ำหนัก (kg)</label>
          </td>
          <td>
            <input type="number" name="weight" onChange={handleOnChange} />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="height">ส่วนสูง (cm)</label>
          </td>
          <td>
            <input type="number" name="height" onChange={handleOnChange} />
          </td>
        </tr>
      </table>
      <button type="button" onClick={calculateBmi}>
        คำนวณ
      </button>

      <hr />
    </div>
  );
}

export default App;
