import { useState } from "react";
import MemoBtn from "./MemoBtn";
import Memolist from "./Memolist";
export default function Memo() {
  let [expand, setExpand] = useState(false);
  let [memo, setMemo] = useState([]);

  return (
    <>
      <MemoBtn expand={expand} setExpand={setExpand} />
      {expand && <Memolist memo={memo} setMemo={setMemo} expand={expand}></Memolist>}
    </>
  );
}
