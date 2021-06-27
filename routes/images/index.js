const router = require("express").Router();
const path = require("path");

router.use("/:image", function(request, response){
    response.sendFile(path.join(__dirname, `../../resources/${request.params.image}`));
});

module.exports = router;