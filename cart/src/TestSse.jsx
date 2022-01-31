import React, { useEffect, useState } from "react";

const TestSse = () => {
  const [stock, setStock] = useState({ status: "PENDING" });

  useEffect(() => {
    const source = new EventSource(`http://localhost:8080/stock`);

    source.addEventListener("open", () => {
      console.log("SSE opened!");
    });

    source.addEventListener("message", (e) => {
      console.log(e.data);
      const data = JSON.parse(e.data);

      console.log(data);

      setStock(data);
    });

    source.addEventListener("error", (e) => {
      console.error("Error: ", e);
    });

    return () => {
      source.close();
    };
  }, []);

  return (
    <div>
      <h1>Stock Status: {stock.status}</h1>
      <hr />
    </div>
  );
};

export default TestSse;
