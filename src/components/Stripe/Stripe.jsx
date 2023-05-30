import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Stripe = () => {
    const handleToken = (token) => {
      // Aquí puedes realizar cualquier acción adicional con el token de Stripe, como enviarlo al servidor para procesar el pago.
      console.log(token);
    };
  
    return (
      <StripeCheckout
        token={handleToken}
        stripeKey="pk_test_51NDTD1HTprZfhDQSHXBuwOsyujuq3hNayIEUqEH3VFL20763rMNXqDu5fJ82LsYmpNBUbkL4J06C8auWUb0KHmvM00A0aU4OIA"
        amount={200} // Cambia esto al monto deseado que deseas cobrar
        currency="USD" // Cambia esto a la moneda deseada
        name="Mi Tienda" // Cambia esto al nombre de tu tienda
        description="Descripción del pago" // Cambia esto a la descripción deseada
      >
        <button>Pagar con Stripe</button>
      </StripeCheckout>
    );
  };
  
  export default Stripe;