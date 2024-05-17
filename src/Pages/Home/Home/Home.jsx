import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Banner2 from "../Banner2/Banner2";
import CallUs from "../CallUs/CallUs";
import Catagory from "../Catagory/Catagory";
import Featured from "../Featured/Featured";
import PopularMenu from "../Popularmenu/PopularMenu";
import Recommends from "../Recommends/Recommends";
import Testimonials from "../Testiminials/Testimonials";

const Home = () => {
    return (
        <div>
           <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
          <Banner></Banner>
          <Catagory></Catagory>
          <Banner2></Banner2>
          <PopularMenu></PopularMenu>
          <CallUs></CallUs>
          <Recommends></Recommends>
          <Featured></Featured>
          <Testimonials></Testimonials>
        </div>
    );
};

export default Home;