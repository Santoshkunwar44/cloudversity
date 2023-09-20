module.exports = (app)=>{
    // app.use("/api/user",require("./UserRoute"))
    app.use("/api/course",require("./CourseRoute"))
    app.use("/api/auth",require("./AuthRoute"))
}