var router = require('express').Router();
var path = require('path');
const { STRIPE_SK } = require('../config');
const stripe = require('stripe')(STRIPE_SK);

router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, "../public/html/payment.html"));
});

router.post('/payment', async (req,res) =>{
    try {
        const session = await stripe.checkout.sessions.create({
            line_items: [{
                amount: req.body.price * 100,
                name: "Shopping",
                currency: "usd",
                quantity: 1
            }],
            payment_method_types: ["card"],
            success_url: `${req.headers.origin}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.origin}/?cancelled=true`
        });
        console.log(session);
        res.redirect(303, session.url);
    } catch(err) {
        res.status(500).json(err.message);
    }
});

module.exports = router;