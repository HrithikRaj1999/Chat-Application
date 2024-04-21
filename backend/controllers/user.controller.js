import User from "../models/user.model.js";
import fs from "fs";
export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUsersForSidebar: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// export const getImg = async (req, res) => {
//   const imgDir = path.join(__dirname, "../uploads/", req.params.imgid);
//   try {
//     await fs.access(imgDir);
//     res.status(200).sendFile(imgDir);
//   } catch (error) {
//     console.error();
//   }
// };
