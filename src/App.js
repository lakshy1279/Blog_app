import "./App.css";
import Navbar from "./component/navbar";
import Bloglist from "./component/blogs/blogslist";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Bloglist />
    </div>
  );
}

export default App;
