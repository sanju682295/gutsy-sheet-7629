import "./homepage.css"
import Navbar from "../Components/Main_Navbar/Navbar";
import Copyright from "../Components/Footer/Copyright";
import Footer from "../Components/Footer/Footer";
import Middle_1 from "../Components/MiddleSection/middle_1";
import WhiteOne from "../Components/MiddleSection/middle_1st";
import PinkOne from "../Components/MiddleSection/middle_2nd";
import News from "../Components/MiddleSection/middle_3rd";
import Medical from "../Components/MiddleSection/middle_4th";
import Testonomial from "../Components/MiddleSection/middle_5th";

function HomePage() {
    return (
      <div className="App">
       <Navbar/>
       <Middle_1 />
       <WhiteOne/>
       <PinkOne/>
       <WhiteOne/>
       <PinkOne/>
       <WhiteOne/>
       <News/>
       <Medical/>
       <Testonomial/>
       <Footer/>
       <Copyright/>
      </div>
    );
  }
  
  export default HomePage;