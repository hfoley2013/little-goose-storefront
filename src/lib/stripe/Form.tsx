import {
    CardElement,
    useElements,
    useStripe,
} from "@stripe/react-stripe-js"
import Medusa from "@medusajs/medusa-js"

export default function Form({ clientSecret, cartId }) {
    const stripe = useStripe()
    const elements = useElements()
    const client = new Medusa()

    async function handlePayment(e) {
        e.preventDefault()
        return stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name,
                    email,
                    phone,
                    address: {
                        city,
                        country,
                        line1,
                        line2,
                        postal_code,
                    },
                },
            },
        }).then(({ error, paymentIntent }) => {
            // TODO handle errors
            client.carts.complete(cartId).then(
                (resp) => console.log(resp)
            )
        })
    }

    return (
        <form>
            <CardElement />
            <button onClick={handlePayment}>Submit</button>
        </form>
    )
};