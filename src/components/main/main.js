import './main.css';
import React, {useState} from "react";

const Main = (props) =>{
  const [language, setLanguage] = useState("portuguese");

  return (
    <div className="Main">
      <label for="language"> Select a language: </label>
      <select name="language" value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="portuguese">Português</option>
        <option value="english">English</option>
      </select>
    </div>
  );
}

export default Main;