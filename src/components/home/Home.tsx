import Box from "../window/Box";

import "./home.style.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="layout">
        <Box widthProp={300} heightProp={600}>
          <>001</>
        </Box>
        <Box widthProp={1190} heightProp={600}>
          <>002</>
        </Box>
      </div>
      <div className="third-layout">
          <Box widthProp={1500} heightProp={600}>
            <>003</>
          </Box>
        </div>
    </div>
  );
};

export default Home;
