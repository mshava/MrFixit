const express      = require('express'),
      exhbs        = require('express-handlebars'),
      cookieParser = require('cookie-parser'),
      session      = require('express-session'),
      bodyParser   = require('body-parser'),
      connectionPv = require('connection-provider'),
      compression  = require('compression'),
      uuid         = require('node-uuid'),
      lodash       = require('lodash'),
      app          = express();


const ViewCarServicesDataService = require('./data_services/viewCarServicesDataService');
const AddCarServicesDataServices = require('./data_services/addCarServicesDataServices');

const ViewAutoElectronicsDataServices = require('./data_services/viewAutoElectronicsDataServices');
const AddAutoElectronicsDataServices = require('./data_services/addAutoElectronicsDataServices');

const ViewCarRepairsDataServices = require('./data_services/viewCarRepairsDataServices');
const AddCarRepairsDataServices = require('./data_services/addCarRepairsDataServices');

const ViewAirConditioningDataServices = require('./data_services/viewAirConditioningDataServices');
const AddAirConditioningDataServices = require('./data_services/addAirConditioningDataServices');

const ViewAutoRepairsDataServices = require('./data_services/viewAutoRepairsDataServices');
const AddAutoRepairDataServices = require();

const viewMechanicalRepairsDataServices = require('./data_services/viewMechanicalRepairsDataServices');
const viewMechanicsDataServices = require('./data_services/viewMechanicsDataServices');
const viewUsersDataServices = require('./data_services/viewUsersDataServices');

const viewCarService = require('./routes/viewCarService');
const addCarServices = require('./routes/addCarServices');

const viewAutoElectronics = require('./routes/viewAutoElectronics');
const addAutoElectronics = require('./routes/addAutoElectronics');

const viewCarRepairs = require('./routes/viewCarRepairs');
const addCarRepairs = require('./routes/addCarRepairs');

const viewAirConditioning = require('./routes/viewAirConditioning');
const addAirConditioning = require('./routes/addAirConditioning');



const dbOptions = {
  host      : 'localhost',
  user      : 'root',
  password  : '2197832',
  port      : 3306,
  database  : 'mr_fixit'
};

const servicesSetupCallBack = function(connection) {
  return {

      viewCarServicesDataService : new ViewCarServicesDataServices(connection),
      viewAutoElectronicsDataServices : new ViewAutoElectronicsDataServices(connection),
      viewCarRepairsDataServices : new ViewCarRepairDataServices(connection),
      viewAirConditioningDataServices : new ViewAirConditioningDataServices(connection),
      viewAutoRepairsDataServices : new ViewAutoRepairsDataServices(connection),
      viewMechanicalRepairsDataServices : new ViewMechanicalRepairsDataServices(connection),
      viewMechanicsDataServices : new ViewMechanicsDataServices(connection),
      viewUsersDataServices : new ViewUsersDataServices(connection)
  }
};

app.use(connectionPv(dbOptions, serviceSetupCallBack));
app.use(cookieParser('shhhh, very secret'));
app.use(session({ secret : 'keyboard cat', cookie :{ maxAge : 3600000 }, resave : true, saveUninitialized : true }));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());
app.use(compression());
app.engine('handlebars', exhbs({defaultLayout : 'main'}));
app.set('view engine', 'handlebars');

app.get("/", function(req, res) {
  res.render("index");
});

app.get('/car_services', function(req, res) {
  res.render('car_services');
});

app.get('/auto_electronics', function(req, res) {
  res.render('auto_electronics');
});

app.get('/car_repairs', function(req, res) {
  res.render('car_repairs');
});

app.get('/air_conditioning', function(req, res) {
  res.render('air_conditioning');
});

app.get('/auto_repairs', function(req, res) {
  res.render('auto_repairs');
});

app.get('/mechanical_repairs', function(req, res) {
  res.render('mechanical_repairs');
});


const port = process.env.PORT || 3000;
const server = app.listen(port, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log('App running on http://%s:%s', host, port);
});
