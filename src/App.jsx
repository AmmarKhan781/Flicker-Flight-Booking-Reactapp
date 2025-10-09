import { useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Search from "./Components/Search";
import FlightSearch from "./Components/Result";
import Hotelpage from "./Components/Hotelpage";

function App() {
  const [page, setPage] = useState("explore"); 

  return (
    <div className="home">
      <Navbar setPage={setPage} />

      {page === "explore" && (
        <>
          <Search/>
        </>
      )}

      {page === "search" && (
        <>
          <FlightSearch />
        </>
      )}

      {page === "hotels" && (
        <>
          <Hotelpage />
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;
