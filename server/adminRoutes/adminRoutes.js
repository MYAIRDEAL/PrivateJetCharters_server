const express = require("express");
const router = express.Router();

const multer = require("multer");
const adminController = require("../adminController/adminController");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;
const loginController = require("../adminController/loginController");
const modifyController = require("../adminController/categorymodifyController");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger-output.json');

router.use('/api-docs', swaggerUi.serve,swaggerUi.setup(swaggerDocument));

// Cloudinary configuration
cloudinary.config({
  cloud_name: "dybrajkta",
  api_key: "921983243972892",
  api_secret: "c4n72FykTGrxsKpDzpADvNsqf5U",
});
// Multer configuration
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads",
    format: async (req, file) => {
      const supportedFormats = ["jpg", "jpeg", "png", "gif"];
      const fileFormat = file.mimetype.split("/")[1];

      return supportedFormats.includes(fileFormat) ? fileFormat : "jpg";
    },
    public_id: (req, file) => Date.now() + "-" + file.originalname,
  },
});

const upload = multer({
  storage: storage,
});
/** Category Section Routes Starts */

// router.get("/getallcategories", adminController.getAllCategories);
// router.post(
//   "/addchartercategory",
//   upload.single("image"),
//   adminController.addCharterCategory
// );
// router.get("/getcharterbyid/:id", adminController.getCharterById);
// router.put(
//   "/editcharterbyid/:id",
//   upload.single("image"),
//   adminController.editCharterById
// );
// router.delete("/deletecharterbyid/:id", adminController.deleteCharterById);



// /** Empty legs Section Starts */
// router.get("/getallemptylegs", adminController.getAllEmptyLegs);
// router.post(
//   "/addemptylegs",
//   upload.single("image"),
//   adminController.addEmptyLegs
// );
// router.get("/getemptylegsbyid/:id", adminController.getEmptyLegById);
// router.put(
//   "/editemptylegsbyid/:id",
//   upload.single("image"),
//   adminController.editEmptyLegsById
// );
// router.delete("/deleteemptylegsbyid/:id", adminController.deleteEmptyLegsById);

// /** Empty Leg Booking Routes */

// router.get("/getallemptylegbookings", adminController.getAllEmptyBookings);
// router.post("/addemptylegbooking", adminController.addEmptyLegBooking);
// router.get(
//   "/getemptylegbookingbyid/:id",
//   adminController.getEmptylegBookingById
// );
// router.post("/filteremptylegbooking", adminController.filterEmptyLegDate);
// router.delete(
//   "/deleteemptylegbookingbyid/:id",
//   adminController.deleteEmptyLegBookingById
// );  

/**Register and Login Routes */
router.post("/register", loginController.register);
router.post("/login", loginController.login);
router.delete("/deleteadmin/:id", loginController.deleteAdmin);
router.get('/getalladmins',loginController.getAllAdmins)
router.put('/updateuserrolebyid/:id',loginController.editUserRole)
router.get('/getadminbyid/:id',loginController.getAdminById)

// /** Feedback Section */
// router.post("/addfeedback", adminController.addFeedback);
// router.get("/getallfeedback", adminController.getAllFeedbacks);
// router.delete("/deletefeedbackbyid/:id", adminController.deleteFeedbackById);
// module.exports = router;

// /**Search Route */
// router.post("/search", adminController.Search);

// /**Sub Categories */
// router.get("/categories", adminController.explorecategories);
// router.get("/categories/:id", adminController.exploreCategoriesById);

/**
 * Routes of Modify Schema
 */
router.get("/modifycategory", modifyController.getModifyCategories);
router.post(
  "/addmodifycategory",
  upload.single("image"),
  modifyController.addModifyCategories
);
router.put(
  "/editmodifycharterbyid/:id",
  upload.single("image"),
  modifyController.editModifyCharterById
);
router.delete(
  "/deletemodifycharterbyid/:id",
  modifyController.deleteModifyCharterById
);
/**
 * Sub Categories Routes
 */

router.get("/getallsubcategories", modifyController.getSubCategories);
router.post(
  "/addsubcategory",
  upload.single("image"),
  modifyController.addSubCategories
);
router.put(
  "/editmodifysubcharterbyid/:id",
  upload.single("image"),
  modifyController.editSubCategoryById
);
router.delete(
  "/deletemodifysubcharterbyid/:id",
  modifyController.deleteModifySubCharterById
);
/**
 * Filter Category Data
 */
router.get("/filter/:chartertype", modifyController.getsubCategorybyType);
router.get('/categorybytype/:type',modifyController.filterByType)


/**On Demand Search api */
router.post('/demandsearch',modifyController.onDemandSearch)

/**
 * Types of Sections
 */
router.get('/getalltypes',modifyController.getAllTypes)
router.post('/addsections',modifyController.sectionAdding)
router.delete('/deletetype/:id',modifyController.deleteTypeById)
router.put('/updatetype/:id',modifyController.editTypeById)

/**
 * Get Modify Subcategory by Id
 */
router.get('/getmodifysubcategorybyid/:id',modifyController.getSubCategoryId)




/** Modify Booking Section Routes Starts */
router.get("/getallbookings", modifyController.getAllBookings);
router.post("/addbooking", modifyController.addBooking);
router.post("/sorted", modifyController.filterDate);
router.delete("/deletebookingbyid/:id", modifyController.deleteBookingById);

/**
 * Enquiry Routs
 */
router.post('/addenquiry',modifyController.addEnquiry)
router.delete('/deleteenquirybyid/:id',modifyController.deleteEnquiryById)
router.get('/getallenquiry',modifyController.getAllEnquiry)


/**
 * Routes for log details
 */
router.post('/addlogs',modifyController.addLogDetails)
router.get('/getalllogs',modifyController.getAllLogs)

/**
 * Filter data based on Type and Category
 */
router.post('/filterbytypeandcategory/:section/:chartertype',modifyController.filterByTypeAndCategory)