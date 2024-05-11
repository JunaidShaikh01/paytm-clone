const express = require("express");
const { authMiddleware } = require("../middleware/middleware");
const { Account } = require("../db/db");
const { default: mongoose } = require("mongoose");
const accountRouter = express.Router();

accountRouter.get("/balence", authMiddleware, async (req, res) => {
  const accountHolder = await Account.findOne({
    userId: req.userId,
  });

  if (!accountHolder) {
    return res.status(404).json({
      msg: "Account not found for this User",
    });
  }
  res.json({
    balence: accountHolder.balence,
  });
});

accountRouter.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();

  session.startTransaction();
  const { to, amount } = req.body;

  const account = await Account.findOne({
    userId: req.userId,
  });

  if (!account || account.balence < amount) {
    session.abortTransaction();
    return res.status(404).json({
      msg: "Account not found or low balence",
    });
  }

  const toAccount = await Account.findOne({
    userId: to,
  });
  if (!toAccount) {
    session.abortTransaction();
    return res.status(404).json({
      msg: "To user account does not found",
    });
  }

  await Account.updateOne(
    { userId: req.userId },
    {
      $inc: {
        balence: -amount,
      },
    }
  ).session(session);

  await Account.updateOne(
    {
      userId: to,
    },
    {
      $inc: {
        balence: amount,
      },
    }
  ).session(session);

  await session.commitTransaction();
  res.json({
    msg: "Transfer Successfully",
  });
});

module.exports = { accountRouter };
