import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import img from '../../../assets/home/slide1.jpg';


const Recommends = () => {
    return (
        <section>
            <SectionTitle
            subHeading={"Should Try"}
            heading="CHEF RECOMMENDS"
            ></SectionTitle>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
	<img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between text-center p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">Caeser Salad</h2>
			<p className="dark:text-gray-800">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
		</div>
		<button className="btn btn-outline border-0 border-b-4 text-[#BB8506]">Add To Cart</button>
	</div>
</div>
        </section>
    );
};

export default Recommends;