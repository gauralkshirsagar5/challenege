import React, { useEffect, useState } from "react";
import { fetchData } from "./api";

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then((responseData) => {
      setData(responseData);
    });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return <div>{data}</div>;
}
