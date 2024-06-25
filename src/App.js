import logo from "./logo.svg";
import "./App.css";
import HomeIcon from "./icons/HomeIcon";
import capitalize from "./utils/text/capitalize";
import createDeepCopy from "./utils/createDeepCopy";
import cutTheWord from "./utils/cutTheWord";
import getFileExtension from "./utils/getFileExtension";
import isEmptyObj from "./utils/isEmptyObj";
import removeElementFromArray from "./utils/array/removeElementFromArray";

const obj = [{ name: "Version 1", additionalInfo: { version: 1 } }];
const dummyText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";

function App() {
  // -- Deep Copy --
  const deepCopy = createDeepCopy(obj);

  // -- Cut the Word
  const { isWordCut, result } = cutTheWord(dummyText, 3);

  // -- Get File Extension
  console.log("get extension", getFileExtension("abc.pdf"));

  // -- check object empty or not
  console.log("check object empty or not", isEmptyObj({}));

  // -- remove element from array
  const arr = [1, 2, 3];

  const finalArray = removeElementFromArray(arr, 2);
  console.log("🚀 ~ App ~ finalArray:", finalArray);

  return (
    <div style={{ height: "100vh", display:'flex', alignItems:'center', justifyContent:'center'}}>
      {/* ---- use of common svg icons */}
      {/* <HomeIcon hoverColor="#46aa1e" width={22} height={22} /> */}

      {/* -- capitalize -- */}
      {/* <div>{capitalize("unrelated to your answer, but why do ")}</div> */}

      {/* ----- cut the worlds ---- */}
      {/* <div>{result}</div> */}
      <h2>React Folder Structure</h2>
    </div>
  );
}

export default App;
