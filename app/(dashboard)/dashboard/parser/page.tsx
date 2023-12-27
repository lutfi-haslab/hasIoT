"use client";
import React from "react";
import Editor from "@monaco-editor/react";
import { SingleFormatData } from "./mock";
import { useUpdateDevice } from "@/lib/query";

const ParserPage = () => {
  const { trigger } = useUpdateDevice();
  const [data, setData] = React.useState("");
  const [formatData, setFormatData] = React.useState([]);
  const [code, setCode] = React.useState(
    `var parsedData = [];
var obj = {};
var jsonData = JSON.parse(data);

// object should have these keys
// obj = {};
// obj.key = string;
// obj.value = number;
// obj.unit = string;

for (var key in jsonData) {
    obj = {};
    obj.key = key.toUpperCase();
    // Convert the key to uppercase
    obj.value = jsonData[key];
    obj.unit = '';
    parsedData.push(obj);
}



return parsedData;`
  );

  function handleEditorChange(value: any, event: any) {
    setCode(value);
    console.log("here is the current model value:", value);
  }

  function handleRun() {
    // console.log(data)
    const parsedDataFunction = new Function("data", code);
    const dataFormatted = parsedDataFunction(JSON.stringify(data));
    setFormatData(dataFormatted);
    // JSON.stringify({ ph: 7, hum: 80, temp: 30 })
    console.log(dataFormatted);
  }

  const handleInputChange = (e: any) => {
    const inputValue = e.target.value;

    // Attempt to parse the input as JSON
    try {
      const parsedData = JSON.parse(inputValue);
      setData(parsedData);
    } catch (error) {
      // Handle JSON parsing errors (invalid JSON)
      setData(inputValue); // Set the input value as is if it's not valid JSON
    }
  };

  const updateParser = async () => {
    await trigger({ parser: JSON.stringify(code) });
  };

  return (
    <div>
      <div className="flex">
        <div className="w-1/3 flex flex-col">
          <button onClick={handleRun}>RUN</button>
          <button onClick={updateParser}>Save</button>
          <input
            type="text"
            placeholder="Seach by deviceId and timestamp"
            className=" rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
            value={
              typeof data === "string" ? data : JSON.stringify(data, null, 2)
            }
            onChange={handleInputChange}
          />
          {formatData &&
            formatData.map((item: SingleFormatData) => {
              return (
                <p
                  key={item.id}
                  className="bg-blue-300 text-black inline-block px-2 py-1 m-1 rounded-md text-sm"
                >
                  {item.key}:{item.value} {item.unit}
                </p>
              );
            })}
        </div>
        <div className="w-2/3">
          <Editor
            height="300px"
            language="javascript"
            theme="vs-dark"
            value={code}
            onChange={handleEditorChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ParserPage;