
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import HomePage from "./pages/HomePage";
// import FlightsPage from "./pages/FlightsPage";
// import BookingPage from "./pages/BookingPage";
// import PaymentPage from "./pages/PaymentPage";
// import ConfirmationPage from "./pages/ConfirmationPage";
// import "./index.css";
// import FlightBookingForm from "./components/FlightBookingForm";
// import SeatBookingForm from "./components/SeatBookingForm";
// import { FormProvider } from "./context/FormContext";


// function App() {
//     return (
//         <Router>
//             <FormProvider>
//                 <div className="app">
//                     <Navbar />
//                     <main style={{ flex: 1, padding: "0px" }}>
//                         <Routes>
//                             {/* Home Page */}
//                             <Route path="/" element={<HomePage />} />

//                             {/* Flights List Page */}
//                             <Route path="/flights" element={<FlightsPage />} />

//                             {/* Booking Page */}
//                             <Route path="/book/:flightId" element={<BookingPage />} />

//                             {/* Payment Page */}
//                             <Route path="/payment/:bookingId" element={<PaymentPage />} />

//                             {/* Confirmation Page */}
//                             <Route path="/confirmation" element={<ConfirmationPage />} />
//                             <Route path="/book" element={<FlightBookingForm/>}/>
//                             <Route path="/seat-booking" element={<SeatBookingForm/>}/>
//                         </Routes>
//                     </main>
//                     <Footer />
//                 </div>
//             </FormProvider>
//         </Router>
//     );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import FlightsPage from "./pages/FlightsPage";
// import PaymentPage from "./pages/PaymentPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import FlightBookingForm from "./components/FlightBookingForm";
import SeatBookingForm from "./components/SeatBookingForm";
import { FormProvider } from "./context/FormContext";
import "./index.css";
// import UserForm from "./components/UserForm";
import SeatBookingPage from "./pages/SeatBookingPage";
import SeatSelection from "./components/SeatSelection";
import SeatSelectionPage from "./pages/SeatSelectionPage";

function App() {

  // console.log(import.meta.env.VITE_API_URL);
  
  return (
    <Router>
      <FormProvider>
        <div className="app flex flex-col min-h-screen">
          <Navbar />
          <main className="main-container flex-grow p-4">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/flights" element={<FlightsPage />} />
              <Route path="/book" element={<FlightBookingForm />} />
              <Route path="/seat-selection" element={<SeatSelectionPage/>} />
              {/* <Route path="/payment/:bookingId" element={<PaymentPage />} /> */}
              <Route path="/confirmation/:bookingId" element={<ConfirmationPage />} />
              {/* <Route path="/profile" element={<UserForm/>} /> */}
              <Route path="/x" element={<SeatBookingPage/>}/>
            </Routes>
          </main>
          <Footer />
        </div>
      </FormProvider>
    </Router>
  );
}

export default App;
