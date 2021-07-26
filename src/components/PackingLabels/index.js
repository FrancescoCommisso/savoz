import React, { useRef } from "react";
import { Controls, Wrapper } from "./style";
import ReactToPrint from "react-to-print";
import ComponentToPrint from "./Label";

export default ({ savozOrder = {} }) => {
  const componentRef = useRef();

  return (
    <Wrapper>
      <Controls>
        <ReactToPrint
          trigger={() => {
            return <button>Print Labels</button>;
          }}
          content={() => componentRef.current}
        ></ReactToPrint>

        {savozOrder && (
          <div style={{ display: "none" }}>
            <div ref={componentRef}>
              {Array(Number(savozOrder.totalCases))
                .fill("")
                .map((_, i) => {
                  console.log(i);
                  return (
                    <ComponentToPrint
                      savozOrder={savozOrder}
                      totalCases={savozOrder.totalCases}
                      i={i + 1}
                      key={i}
                    ></ComponentToPrint>
                  );
                })}
            </div>
          </div>
        )}
      </Controls>
    </Wrapper>
  );
};
