import { template } from "./constant/color";
import Landing from "./pages/landing";

export default function App() {
  return (
    <div className="min-h-screen" style={{background: template.mainBackground}}>
        <Landing />
    </div>
  );
}