import React, { useEffect, useState } from "react";
import {RiHandCoinFill} from 'react-icons/ri'
import { Card, Form, Input, Select } from "antd";

function Converter() {
  // the url data is not in array
  const apiurl = "https://api.coingecko.com/api/v3/exchange_rates";

  const defaultFirstSelectValue = "Bitcoin";
  const defaultSecondSelectValue = "Ether";

  const [cryptoList, setcryptoList] = useState([]);
  const [Inputvalue, setInputvalue] = useState("0");
  const [firstSelect, setfirstSelect] = useState(defaultFirstSelectValue);
  const [secondSelect, setsecondSelect] = useState(defaultSecondSelectValue);
  const [result , setResult] = useState('0')
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(apiurl);
    const jsondata = await response.json();

    const data = jsondata.rates;
    // &&&&const tempArray = [];

    //*****/ //convert url onbject data into array use object.entries();

    // Object.entries(data).forEach(item => {
    //   const tempValue = {
    //     value: item[1].name,
    //     label: item[1].name,
    //     rate: item[1].value,
    //   };
    //   tempArray.push(tempValue);
    //   console.log(tempArray); &&&&

    // use upper is or lower code are same upper code is in use for each loop and below code use map function

    const tempArray = Object.entries(data).map((item) => {
      return {
        value: item[1].name,
        label: item[1].name,
        rate: item[1].value,
      };
    });

    //console.log(tempArray)

    setcryptoList(tempArray);
  }

  // it is use to see change value of any of this it reflects
  useEffect(() => {

    if (cryptoList.length == 0) return;


    const firstSelectRate = cryptoList.find((item) => {
      return item.value === firstSelect;
    }).rate;

    const secondSelectRate = cryptoList.find((item) => {
      return item.value === secondSelect;
    }).rate;

const resultValue = (Inputvalue * secondSelectRate) / firstSelectRate

      setResult(resultValue)
      console.log(setResult)
    // console.log(Inputvalue,firstSelect,secondSelect)
  }, [Inputvalue, firstSelect, secondSelect]);

  return (
    <div className="container">
      <Card className="crypto-card" title={<h1>Crypto Converter  <RiHandCoinFill/></h1>}>
        <Form>
          <Form.Item>
            <Input onChange={(event) => setInputvalue(event.target.value)} />
          </Form.Item>
        </Form>
        <div className="select-box">
          <Select
            style={{ width: "120px" }}
            defaultValue={defaultFirstSelectValue}
            options={cryptoList}
            onChange={(value) => setfirstSelect(value)}
          ></Select>
          <Select
            style={{ width: "120px" }}
            defaultValue={defaultSecondSelectValue}
            options={cryptoList}
            onChange={(value) => setsecondSelect(value)}
          ></Select>
        </div>
        <p className="result"><h4>{Inputvalue} {firstSelect} = {result} {secondSelect}</h4></p>
      </Card>
    </div>
  );
}

export default Converter;
