import Container from "./Container";
import Footer from "./Footer";
import Profile from "./Profile";
import './style.css'

function Page() {
  return (
    <div className="containerPage">
    <div className="page-1">
      {/* PROJECT ONE */}
      <Profile />
      <Container />
      <Footer />
      {/* // PROJECT ONE // */}
    </div>
    </div>
  );
}

export default Page;