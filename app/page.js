import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="bg-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <Feedback />
      <div className="gradient-04 z-0" />
    </div>
    <Footer />
  </div>
);

export default Page;
