import Builder from "./page/builder";
import TestBuild from "./page/test-build";

const App = () => {
  return (
    <div className="bg-gray-50 p-4 w-full min-h-screen">
      {/* <Builder /> */}
      <TestBuild />
    </div>
  );
};

export default App;
