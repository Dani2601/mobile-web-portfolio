import Header from "./content/header";
import Profile from "./content/profile";
import Expertise from "./content/Expertise";
import Project from "./content/project";
import About from "./content/about";
import Footer from "./content/footer";
import Contact from "./content/contact";
import BottomNav from "./content/bottom-navigation";

export default function PhoneContent() {

  
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
      
      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
