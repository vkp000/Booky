import TopNavbar from "../components/navbar/TopNavbar";
import BottomNavbar from "../components/navbar/BottomNavbar";

export default function AppLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-gray-50">
      <TopNavbar />

      {/* <div className="pt-16 pb-14 px-4">
        {children || (
          <>
            <h1 className="text-2xl font-semibold mb-4">Dashboard Content</h1>
            <p className="text-gray-600">
              Add your main content here. This area is padded to avoid overlapping the fixed navbars.
            </p>
          </>
        )}
      </div> */}
      {children}

      <BottomNavbar />
    </div>
  );
}
