import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item  bg-fixed pt-8 my-20 text-white ">
          <SectionTitle
          subHeading="Check It out"
          heading="Featured Item"
          ></SectionTitle>
         <div className="md:flex  justify-center items-center pt-12 pb-20 px-36 bg-slate-500  bg-opacity-40">
         <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="md: ml-10">
            <p>Aug 20, 2029</p>
            <p className="uppercase">where can i get some</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias praesentium voluptate quae soluta? Ad dignissimos necessitatibus omnis iste, cupiditate, facilis ullam consectetur, sapiente eum beatae harum impedit! Aperiam quo tempora repellendus libero. Iste maiores quibusdam ab eos doloribus. Nobis corporis sunt possimus, quas et obcaecati beatae illum totam aspernatur aliquam!</p>
            <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
          </div>
         
         </div>
        </div>
    );
};

export default Featured;