import { useState } from "react"
import Medusa from "@medusajs/medusa-js"
import { Elements } from "@stripe/react-stripe-js"
import Form from "./Form"
import { loadStripe } from "@stripe/stripe-js"
import { useCart } from "medusa-react"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY!)

export default function Container() {
    const [clientSecret, setClientSecret] = useState()
    const client = new Medusa()
    const { cart } = useCart()

    client.carts.createPaymentSessions(cart.id)
        .then(({ cart }) => {
            // check if stripe is selected
            const isStripeAvailable = cart.payment_sessions?.some(
                (session) => (
                    session.processor_id === "stripe"
                )
            )
            if (!isStripeAvailable) {
                return
            }

            // select stripe payment session
            client.carts.setPaymentSession(cart.id, {
                processor_id: "stripe",
            }).then(({ cart }) => {
                setClientSecret(cart.payment_session.data.client_secret)
            })
        })

    return (
        <div>
            {clientSecret && (
                <Elements stripe={stripePromise} options={{
                    clientSecret,
                }}>
                    <Form clientSecret={clientSecret} cartId={cartId} />
                </Elements>
            )}
        </div>
    )
};