import { useState } from 'react';
import { AddressSuggestions, DaDataSuggestion, DaDataAddress  } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
export default function Test() {

  const [value, setValue] = useState<DaDataSuggestion<DaDataAddress> | undefined>();
return (
  <div className="App">
    <h1>验证码</h1>
    <AddressSuggestions token="ba46852478bf9fc6d009639017989e4b2c5c65da" value={value} onChange={setValue} />;
  </div>
);
}





