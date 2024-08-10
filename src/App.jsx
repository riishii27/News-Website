import { useLocation } from "react-router-dom";
import NavBar from "./utils/components/NavBar";
import { Outlet } from "react-router-dom";
import backVideo from './assets/backgroundVideo.mp4';
import { ArticleProvider } from "./utils/components/ContextProvider";

function App() {
  const location = useLocation();
  const showImage = location.pathname === "/";

  return (
    <div >
      <ArticleProvider>
      <NavBar />
      <Outlet />
      {showImage && (
        <div className="relative h-full w-full">
          
          <video 
            src={backVideo} 
            loop 
            muted 
            autoPlay 
            disablePictureInPicture 
            alt="Background" 
            className="absolute top-0 left-0 h-screen  w-full object-cover" 
          />
          
          <div className="relative flex justify-center items-center">
            <h1 className="mt-72 font-bold text-7xl text-black">WELCOME TO TAAZAKHABAR</h1>
          </div>
        </div>
      )}
      </ArticleProvider>
    </div>
  );
}

export default App;
