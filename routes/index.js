var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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

/* GET destination details page. */
router.get('/details/:id', function(req, res, next) {
  const ids = req.params.id;
  // Assuming you have an array of details objects
  const detailss = [
    { id: 1, place: 'Kerala',image:'/assets/img/photo-1491497895121-1334fc14d8c9.jpg',description: 'Description 1',description2:'snksdni asidkjdvnjhjhfhjfjhfh' },
    { id: 2, place: 'Delhi',image:'/assets/img/photo-1491497895121-1334fc14d8c9.jpg',description: 'Description asdasd1',description2:'snksdni asidkjdvnjhjhfhjfjhfh' },
    { id: 3, place: 'Karnataka',image:'/assets/img/photo-1491497895121-1334fc14d8c9.jpg',description: 'Description asdasdasdsdfvs1',description2:'snksdni asidkjdvnjhjhfhjfjhfh' },
    { id: 4, place: 'Jammu and Kashmir',image:'/assets/img/photo-1491497895121-1334fc14d8c9.jpg',description: 'Descriptionsdsds sdv 1',description2:'snksdni asidkjdvnjhjhfhjfjhfh' },
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
