import "./App.css";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="min-h-screen  sm:bg-white bg-gray-100">
      <div className="lg:pt-8">
        <Todo />
        <footer className="text-center text-gray-500 font-medium fixed bottom-10 left-0 right-0">
          All rights reserved ©{" "}
          <a
            className="underline underline-offset-1 font-medium"
            href=""
            target="_blank"
            rel="noopener noreferrer">
            Ranit Ghosh
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
