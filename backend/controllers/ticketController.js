const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Ticket = require("../models/ticketModel");

// @desc Get user tickets
// @route GET/api/tickets
// @access Private
const getTickets = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get tickets" });
});

// @desc Create a ticket
// @route POST/api/tickets
// @access Private
const createTicket = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "create a ticket" });
});

module.exports = {
  getTickets,
  createTicket,
};
