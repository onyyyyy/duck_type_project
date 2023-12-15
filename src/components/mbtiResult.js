import { mbtiName } from "./mbtiName";

export const mbtiResult = () => {
  let IorE =
    mbtiName.find(function (data) {
      return data.name === "I";
    }).count >
    mbtiName.find(function (data) {
      return data.name === "E";
    }).count
      ? "I"
      : "E";

  let SorN =
    mbtiName.find(function (data) {
      return data.name === "S";
    }).count >
    mbtiName.find(function (data) {
      return data.name === "N";
    }).count
      ? "S"
      : "N";

  let ForT =
    mbtiName.find(function (data) {
      return data.name === "F";
    }).count >
    mbtiName.find(function (data) {
      return data.name === "T";
    }).count
      ? "F"
      : "T";

  let PorJ =
    mbtiName.find(function (data) {
      return data.name === "P";
    }).count >
    mbtiName.find(function (data) {
      return data.name === "J";
    }).count
      ? "P"
      : "J";

  let mbti = IorE + SorN + ForT + PorJ;

  const [mbtiDuck, setMbtiDuck] = useState([]);
  // console.log(mbtiName);
  setMbtiDuck(mbtiName.filter((val) => val.mbti)[0]);
};
