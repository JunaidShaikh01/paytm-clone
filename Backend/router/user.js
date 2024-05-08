const express = require("express");
const bcrypt = require("bcrypt");
const zod = require("zod");
const { User, Account } = require("../db/db");
const app = express();
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const { authMiddleware } = require("../middleware/middleware");
const JWT_SECRET = process.env.JWT_SECRET;

const signupSchema = zod.object({
  username: zod.string().email(),
  firstname: zod.string(),
  lastname: zod.string(),
  password: zod.string(),
});

const signinSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
});

const putSchema = zod.object({
  firstname: zod.string(),
  lastname: zod.string(),
  password: zod.string(),
});

//signup Route
userRouter.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("hashed Pasword", hashedPassword);
  const success = signupSchema.safeParse(req.body);
  if (!success) {
    return res.json({
      msg: "Invalid Input",
    });
  }

  const existingUser = await User.findOne({
    username: username,
  });

  if (existingUser) {
    return res.status(404).json({
      msg: "User already exists",
    });
  }

  const user = await User.create({
    username: req.body.username,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: hashedPassword,
  });

  const userId = user._id;

  const token = jwt.sign({ userId }, JWT_SECRET);
  await Account.create({
    userId,
    balence: Math.floor(Math.random() * 100000) + 1,
  });
  res.json({
    msg: "User Signup successfully",
    user,
    token: token,
  });
});

//signin Route
userRouter.post("/signin", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(`Username:${username} , Password:${password}`);
    const success = signinSchema.safeParse(req.body);
    if (!success) {
      return res.status(404).json({
        msg: "invalid input",
      });
    }

    const user = await User.findOne({ username });
    console.log("User:-", user);
    if (!user) {
      return res.status(404).json({
        msg: "Invalid Username",
      });
    }
    console.log("User Password", user.password);

    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log("Password Match:", passwordMatch);
    if (!passwordMatch) {
      return res.status(401).json({
        msg: "Invalid password",
      });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET);
    console.log("token:- ", token);
    res.json({
      msg: "Signin Successfull",
      user,
      token,
    });
  } catch (error) {
    res.status(404).json({
      msg: `Some error has been occured ${error}`,
   
    });
  }
});

//update Route
userRouter.put("/update", authMiddleware, async (req, res) => {
  const success = putSchema.safeParse(req.body);

  if (!success) {
    return res.json({
      msg: "Invalid Input",
    });
  }

  await User.updateOne(
    {
      _id: req.userId,
    },
    req.body
  );
  res.json({
    msg: "Updated Successfully",
  });
});


//Al other users
userRouter.get("/all_User", authMiddleware, async (req, res) => {
  const loggInUser = await User.findById(req.userId);

  const { balence } = await Account.findOne({
    userId: req.userId,
  });

  const allUsers = await User.find();

  const allOtherUsers = allUsers.filter(
    (user) => user._id.toString() !== loggInUser._id.toString()
  );

  res.json({
    user: loggInUser,
    balence,
    users: allOtherUsers,
  });
});

//Export Module
module.exports = {
  userRouter,
};
