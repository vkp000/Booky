import Navbar from "../components/Navbar";
import Feed from "../components/Feed";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <Feed />
      </div>
    </>
  );
}
