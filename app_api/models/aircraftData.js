var mongoose = require('mongoose');

var ClimbSchema = new mongoose.Schema({
	WebSocketeight: Number,
	Flaps5: Number,
	Flaps10: Number,
	Flaps15: Number,
	VClimb: Number
});

mongoose.model('climbdata', ClimbSchema, 'climbdata');

var TakeoffSchema = new mongoose.Schema({
	Weight: Number,
	Setting: Number,
	Vr: Number,
	V2: Number,
	Above20: Boolean,
	Altitude: Number,
});

mongoose.model('takeoffdata', TakeoffSchema, 'takeoffdata');

var LandingSchema = new mongoose.Schema({
	Weight: Number,
	Setting: Number,
	Vapp: Number,
	Vref: Number,
	Vga: Boolean,
});

mongoose.model('landingdata', LandingSchema, 'landingdata');