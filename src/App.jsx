import React, { useState } from "react";
import "./styles.css";
import GetImage from "./compornets/GetImage";

export const App = () => {
  const [qualificationsText, setQualificationsText] = useState("");
  const [qualifications, setQualifications] = useState(["aaaaa", "bbbbb"]);
  const onChangeQualificationText = (event) =>
    setQualificationsText(event.target.value);
  const onClickAdd = () => {
    if (qualificationsText === "") return;
    const newqualifications = [...qualifications, qualificationsText];
    setQualifications(newqualifications);
    setQualificationsText("");
  };
  const onClickDelete = (index, qualification) => {
    const newQualifications = [...qualifications];
    newQualifications.splice(index, 1);
    setQualifications(newQualifications);
    alert(qualification);
  };

  return (
    <>
      <div className="me">
        <p className="title">me</p>
        <div className="me-text">
          <GetImage className="img"></GetImage>
          <p>
            松延佑弥
            <br />
            部署
            <br />
            レベル・役職
            <br />
          </p>
        </div>
      </div>

      <div className="skill">
        <p className="title">スキル</p>
      </div>
      <div className="input-area">
        <p className="title">保有資格</p>
        <input
          placeholder="資格名を入力"
          value={qualificationsText}
          onChange={onChangeQualificationText}
        />
        <button onClick={onClickAdd}>追加</button>
        <ul>
          {qualifications.map((qualification, index) => {
            return (
              <div key={qualification} className="list-row">
                <li>{qualification}</li>
                <button onClick={() => onClickDelete(index, qualification)}>
                  削除
                </button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">受験予定</p>
      </div>
    </>
  );
};
