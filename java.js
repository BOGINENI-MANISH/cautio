const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/cautio', { useNewUrlParser: true, useUnifiedTopology: true });

// Define models
const User = require('./models/User');
const EmergencyContact = require('./models/EmergencyContact');
const Location = require('./models/Location');
const SafetyAlert = require('./models/SafetyAlert');
const PanicButton = require('./models/PanicButton');
const SafetyCheckin = require('./models/SafetyCheckin');
const CommunitySafetyNetwork = require('./models/CommunitySafetyNetwork');

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.send('Cautio API');
});

// User routes
app.post('/users', (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.send(user);
    }
  });
});

app.get('/users', (req, res) => {
  User.find().then(users => {
    res.send(users);
  }).catch(err => {
    res.status(400).send(err);
  });
});

// Emergency Contact routes
app.post('/emergency-contacts', (req, res) => {
  const emergencyContact = new EmergencyContact(req.body);
  emergencyContact.save((err, emergencyContact) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.send(emergencyContact);
    }
  });
});

app.get('/emergency-contacts', (req, res) => {
  EmergencyContact.find().then(emergencyContacts => {
    res.send(emergencyContacts);
  }).catch(err => {
    res.status(400).send(err);
  });
});

// Location routes
app.post('/locations', (req, res) => {
  const location = new Location(req.body);
  location.save((err, location) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.send(location);
    }
  });
});

app.get('/locations', (req, res) => {
  Location.find().then(locations => {
    res.send(locations);
  }).catch(err => {
    res.status(400).send(err);
  });
});

// Safety Alert routes
app.post('/safety-alerts', (req, res) => {
  const safetyAlert = new SafetyAlert(req.body);
  safetyAlert.save((err, safetyAlert) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.send(safetyAlert);
    }
  });
});

app.get('/safety-alerts', (req, res) => {
  SafetyAlert.find().then(safetyAlerts => {
    res.send(safetyAlerts);
  }).catch(err => {
    res.status(400).send(err);
  });
});

// Panic Button routes
app.post('/panic-buttons', (req, res) => {
  const panicButton = new PanicButton(req.body);
  panicButton.save((err, panicButton) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.send(panicButton);
    }
  });
});

app.get('/panic-buttons', (req, res) => {
  PanicButton.find().then(panicButtons => {
    res.send(panicButtons);
  }).catch(err => {
    res.status(400).send(err);
  });
});

// Safety Checkin routes
app.post('/safety-checkins', (req, res) => {
  const safetyCheckin = new SafetyCheckin(req.body);
  safetyCheckin.save((err, safetyCheckin) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.send(safetyCheckin);
    }
  });
});

app.get('/safety-checkins', (req, res) => {
  SafetyCheckin.find().then(safetyCheckins => {
    res.send(safetyCheckins);
  }).catch(err => {
    res.status(400).send(err);
  });
});

// Community Safety Network routes
app.post('/community-safety-networks', (req, res) => {
  const communitySafetyNetwork = new CommunitySafetyNetwork(req.body);
  communitySafetyNetwork.save((err, communitySafetyNetwork) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.send(communitySafetyNetwork);
    }
  });
});

app.get('/community-safety-networks', (req, res) => 