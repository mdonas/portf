import Navbar from "./layouts/Header";
import ReactRouter from "./icons/iconReactRouter";
import IconGallery from "./components/IconGallery";

function App() {
  return (
    <>
      <div className="bg-newBlack pt-3 vh-100 background-gradient">
        <div className="container">
          <div className="d-flex justify-content-center">
            <Navbar />
          </div>
          <IconGallery />
        </div>
      </div>
    </>
  );
}

export default App;
