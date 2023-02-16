import Test from "./common/components/test/Test";
import ToastProvider from "./common/providers/Toast.provider";

function App() {
  return (
    <ToastProvider>
      <Test />
    </ToastProvider>
  );
}

export default App;
