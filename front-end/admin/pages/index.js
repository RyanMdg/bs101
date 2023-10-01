import "../src/app/globals.css";
import Navbar from "../src/app/components/navbar";
import Hero from "../src/app/components/hero";


const connectToDB = require('../../../back-end/config/db')
connectToDB();

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
};

export default Home;
