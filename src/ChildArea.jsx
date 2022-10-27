import { memo, useState } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("ChildArea is rendered");
  const [count, setCount] = useState(0);
  const onClickCount = () => {
    setCount(count + 1);
    console.log("State( in ChildArea ) is Changed");
  };

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("....");
  });
  return (
    <>
      {open && (
        <div style={style}>
          <p>Child Component</p>
          <button onClick={onClickCount}>CountUp</button>
          <br />
          <button onClick={onClickClose}>Close</button>
        </div>
      )}
    </>
  );
});
