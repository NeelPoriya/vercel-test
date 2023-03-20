const nc = require("next-connect");
const authController = require("./../../../../controllers/authController");

const handler = nc({
  onError: authController.handleError,
  onNoMatch: authController.handleNoMatch,
});

handler.get(authController.protect, async (req, res, next) => {
  res.status(200).json({
    status: "success",
    verified: true,
    user: req.user,
  });
});

export default handler;
