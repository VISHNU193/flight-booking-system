
// import { useParams } from "react-router-dom";
// import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe("your-publishable-key");

// function PaymentForm() {
//     const stripe = useStripe();
//     const elements = useElements();
//     const { bookingId } = useParams();

//     const handlePayment = async (event) => {
//         event.preventDefault();
//         const card = elements.getElement(CardElement);

//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: "card",
//             card,
//         });

//         if (error) {
//             console.error("Payment failed:", error);
//         } else {
//             // Send payment details to the backend
//             fetch(`/api/payment/${bookingId}`, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ paymentMethodId: paymentMethod.id }),
//             })
//                 .then((response) => response.json())
//                 .then((data) => {
//                     if (data.success) {
//                         window.location.href = "/confirmation";
//                     } else {
//                         alert("Payment failed. Please try again.");
//                     }
//                 });
//         }
//     };

//     return (
//         <form onSubmit={handlePayment} style={{ maxWidth: "400px", margin: "20px auto" }}>
//             <CardElement />
//             <button type="submit" disabled={!stripe} style={{ marginTop: "10px", padding: "10px", backgroundColor: "green", color: "white", border: "none", borderRadius: "4px" }}>
//                 Pay Now
//             </button>
//         </form>
//     );
// }

// export default function PaymentPage() {
//     return (
//         <Elements stripe={stripePromise}>
//             <PaymentForm />
//         </Elements>
//     );
// }
