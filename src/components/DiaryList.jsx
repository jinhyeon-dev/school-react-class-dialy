import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DiaryItem from "./DiaryItem";
import Button from "./Button";
import "./DiaryList.css";

const sortOption = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];
const DiaryList = ({ data }) => {
  const [SortType, setSortType] = useState("latest");
  const [SortedData, setSortedData] = useState([]);

  const navigate = useNavigate();

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const onClickNew = () => {
    navigate("/new");
  };

  useEffect(() => {
    const compare = (a, b) => {
      if (SortType === "latest") return Number(b.date) - Number(a.date);
      else return Number(a.date) - Number(b.date);
    };
    const copyList = JSON.parse(JSON.stringify(data));
    copyList.sort(compare);
    setSortedData(copyList);
  }, [data, SortType]);

  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <select value={SortType} onChange={onChangeSortType}>
            {sortOption.map((it, idx) => (
              <option key={idx} value={it.value}>
                {it.name}
              </option>
            ))}
          </select>
        </div>
        <div className="right_col">
          <Button
            type={"positive"}
            text={"새 일기 쓰기"}
            onClick={onClickNew}
          />
        </div>
      </div>
      <div className="list_wrapper">
        {SortedData.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
