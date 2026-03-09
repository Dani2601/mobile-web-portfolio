import { template } from "./constant/color";
import { PlatformProvider } from "./context/PlatformContext";
import Landing from "./pages/landing";

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{ background: template.mainBackground }}
    >
      <PlatformProvider>
        <Landing />
      </PlatformProvider>
    </div>
  );
}
