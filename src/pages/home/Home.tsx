import { ToastContainer } from "react-toastify";
import Content from "../../components/content/Content";
import ResizableBox from "../../components/resizable-box/ResizableBox";
import "./home.style.css";

const Home: React.FC = () => {
  return (
    <>
      <ToastContainer />
      <div className="wrapper">
        <div className="layout">
          <ResizableBox widthProp={"30%"} heightProp={"80vh"}>
            <Content contentType={1} />
          </ResizableBox>
          <ResizableBox widthProp={"69%"} heightProp={"80vh"}>
            <Content contentType={2} />
          </ResizableBox>
        </div>
        <div className="third-layout">
          <ResizableBox widthProp={"100%"} heightProp={"80vh"}>
            <Content contentType={3} />
          </ResizableBox>
        </div>
      </div>
    </>
  );
};

export default Home;
