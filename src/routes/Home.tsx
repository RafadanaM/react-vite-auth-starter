// import useFetch from "../common/utils/useFetch";

import { useState } from "react";
import ExampleService from "../example/services/example.service";
import IMantapResponse from "../example/responses/mantap.response";

function Home() {
  const [data, setData] = useState<IMantapResponse>();
  // function a(b: string) {
  //   return b;
  // }

  // const { result } = useFetch(() => a("s"));
  // console.log(result);
  async function handleButtonClick() {
    const res = await ExampleService.mantap();
    if (res.data) {
      setData(res.data);
    }
  }

  return (
    <div>
      <p>Home</p>
      <p>{data && data.message}</p>
      <button type="button" onClick={handleButtonClick}>
        Click Me
      </button>
    </div>
  );
}

export default Home;
