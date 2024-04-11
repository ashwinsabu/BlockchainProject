var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/refer', function(req, res, next) {
  res.render('refer', { title: 'Express' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

/* GET destinations page. */
router.get('/destinations', function(req, res, next) {
  res.render('destinations', { title: 'Express' });
});

/* GET success page. */
router.get('/success', function(req, res, next) {
    const mailgun = require("mailgun-js");
const DOMAIN = "sandboxde42ad39c7d7478eb4dcd31f89514a2b.mailgun.org";
const mg = mailgun({apiKey: "4502320065bdd7b89e91b38e4a74520a-4c205c86-5ce74454", domain: DOMAIN});
const data = {
	from: "Travel Agnecy <ashwin@travelagency.com>",
	to: "ashwinsabu2000@gmail.com",
	subject: "Trip is Booked",
	text: "Thanks for your booking. Please keep the token ready to be shown in your destionation. See you there"
};
mg.messages().send(data, function (error, body) {
	console.log(body);
});
  res.render('success', { title: 'Express' });
});

/* GET destination details page. */
router.get('/details/:id', function(req, res, next) {
  const ids = req.params.id;
  // Assuming you have an array of details objects
  const detailss = [
    { id: 1, place: 'Kerala',image:'/assets/img/photo-1491497895121-1334fc14d8c9.jpg',description: 'The ideal place for people intrested in visiting a place to experiece a different tradition.', description2:'Airpot Pickup * Tour guide available' },
    { id: 2, place: 'Delhi',image:'https://img.freepik.com/free-photo/building-decorated-indian-republic-day_23-2151142432.jpg?t=st=1712071354~exp=1712074954~hmac=82d19f3123de29796309b1af01d482b99e7bfc2807ca5c92569cc412e74a07a7&w=1380',description: 'The captial state of India with famous places to visit and able to meet people with diverse cultures',description2:'Meals Included * Tour guide available' },
    { id: 3, place: 'Karnataka',image:'https://img.freepik.com/free-photo/ancient-sandstone-arches-adorn-hindu-temple-courtyard-generated-by-ai_188544-23459.jpg?t=st=1712071075~exp=1712074675~hmac=eac787f5d02741ba0d351afb72944a7f93f54ba442219d7ff1032d62b13fe1d1&w=1380',description: 'Here you will be visiting the sixth largest indian state with lots of tourist activities.',description2:'Adventure Sports Free Entry * Tour guide available on request' },
    { id: 4, place: 'Jammu and Kashmir',image:'https://img.freepik.com/free-photo/mountains-snow-covered-fjord_155003-10147.jpg?t=st=1712071132~exp=1712074732~hmac=a4ab56b7248f96ddd983b4abec30592eb467db47445674e761f2e6231874fe24&w=1060',description: 'Want to explore the cold side of north india !! Kashmiri is the most-spoken language, is mainly spoken in the Kashmir Valley and in the upper reaches of the Chenab Valley, with a sizeable number of speakers in Jammu City',description2:'Airpot Pickup * Tour guide available' },
  ];

  // Find the details object based on the ID provided in the URL parameters
  const details = detailss.find(dest => dest.id === parseInt(ids));
  
  if (!details) {
    // Handle case where details is not found
    return res.status(404).render('error', { message: 'details not found', error: {} });
  }

  // Render the details details template with the details object
  res.render('details', { details });
});


module.exports = router;
