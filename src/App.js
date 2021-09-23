import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar
        title="textUtils"
        coulmn1="about textUtils"
        coulmn2="contact us"
        coulmn3="search"
      />
      <div className="container ">
        <TextForm heading="textUtils area" />
      </div>
      <div className="conatiner ">
        <About />
      </div>
    </>
  );
}

export default App;

// {
//   /* <div className="container "> */
// }
// {
//   /* .conatiner  .my-3 is bootstrap class */
// }
// {
//   /*  */
// }
// {
//   /* </div> */
// }
// {
//   /* </div> */
// }
