import Header from "./content/header";
import Profile from "./content/profile";
import Project from "./content/project";
import About from "./content/about";
import Footer from "./content/footer";
import Contact from "./content/contact";
import Expertise from "./content/expertise";

export default function LaptopContent() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header */}
      <Header />

      {/* Profile */}
      <Profile />

      {/* Technichal Expertise */}
      <Expertise />

      {/* Featured Projects */}
      <Project />

      {/* About */}
      <About />

      {/* Lets Talk */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
