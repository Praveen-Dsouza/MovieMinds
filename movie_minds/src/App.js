import Body from "./Components/Body";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";

function App() {
  return (
    <div className="text-3xl">
      <Provider store={appStore} >
        <Body/>
      </Provider>
    </div>
  );
}

export default App;
