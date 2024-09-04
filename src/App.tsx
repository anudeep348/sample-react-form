import { Toaster } from "react-hot-toast";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="w-100 xl:text-lg flex items-center justify-center h-full 2xl:min-h-screen font-karla bg-main-green-1 py-6 lg:py-12 lg:px-16">
      <Form />
      <Toaster />
    </div>
  );
};

export default App;
