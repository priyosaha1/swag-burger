const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Razorpay = require('razorpay');

const app = express();
const port = 3002;


const razorpay = new Razorpay({
  key_id: 'rzp_test_phiHbv4IGNCRN4',
  key_secret: 'Oy4osceH51riBtl0gFg6ydzK',
});

app.use(bodyParser.json());
app.use(cors()); 


app.post('/createOrder', async (req, res) => {
  console.log("Create order request", req.body);

  try {
    const options = {
      amount: req.body.amount * 100,  
      currency: 'INR',
      receipt: 'rcpti1',
    };

    const order = await razorpay.orders.create(options);
    console.log(order);
    res.send({ orderId: order.id });
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to create order');
  }
});

app.post('/paymentCallback', (req, res) => {
  const body = req.body;
  const signature = req.headers['x-razorpay-signature'];

 
  try {

    const verified = Razorpay.webhooks.verify(body, signature);
    console.log('Webhook verified:', verified);

    res.json({ status: 'success' });
  } catch (error) {
    console.error('Webhook verification failed:', error);
    res.status(400).send('Webhook verification failed');
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
