import "./App.css";
import { PlatformProvider } from "./context/PlatformContext";
import Landing from "./pages/landing";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <PlatformProvider>
        <Landing />
      </PlatformProvider>
    </div>
  );
}
