import jwt from "jsonwebtoken";

export const auth = async (req, res, next) => {
  try {
    const token =
      req.cookies.accessToken || req?.headers?.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "Authentication required. Please log in",
      });
    }

    const decoded = await jwt.verify(
      token,
      process.env.JWT_SECREET_KEY_ACCESS_TOKEN
    );
    if (!decoded) {
      return res.status(401).json({
        message: "unAuthorized to access",
        error: true,
        success: false,
      });
    }

    req.userId = decoded.id;
    next();
  } catch (err) {
    res.status(500).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};
