window.onload = function getURL() {
  document.querySelector(".svd_acc_getInfo ul li:nth-child(1)").addEventListener("click", ()=>{
    jsonInfo = ["Josh", "M", "assets/img/photos/josh.jpeg", "assets/img/illustration/illustrationJosh.png"];
    jsonCoursesStatistics = {"completed":"11", "progress":"4"};
    jsonGraphStatistics = {"mon":"0h","tue":"1.5h","wed":"2.5h","thu":"1h","fri":"4h","sat":"3h","sun":"2h"}

    joshInfo = [jsonInfo, jsonCoursesStatistics, jsonGraphStatistics];
    sessionStorage.setItem("jsonGetInfo", JSON.stringify(joshInfo));
    window.open("dashboard.html", "blank_");
  })

  document.querySelector(".svd_acc_getInfo ul li:nth-child(2)").addEventListener("click", ()=>{
    jsonInfo = ["Karen", "F", "assets/img/photos/karen.jpeg", "assets/img/illustration/illustrationKaren.png"];
    jsonCoursesStatistics = {"completed":"8", "progress":"7"};
    jsonGraphStatistics = {"mon":"0h","tue":"1h","wed":"3h","thu":"1.5h","fri":"4h","sat":"2h","sun":"1.5h"}

    karenInfo = [jsonInfo, jsonCoursesStatistics, jsonGraphStatistics];
    sessionStorage.setItem("jsonGetInfo", JSON.stringify(karenInfo));
    window.open("dashboard.html", "blank_");
  })
}
