import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://api.frankfurter.app/2024-01-01..?${currency}/`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    console.log(data);
  }, [currency]);
  console.log(data);
  return data
}

export default useCurrencyInfo;
