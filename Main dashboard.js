    // Example data (replace with backend data via API call)
    const overviewData = {
        totalCourses: 4,
        totalStudents: 127,
        avgProgress: 74,
        activeLearners: 98,
        completionRate: 68,
        avgRating: 4.7
    };

    // Populate the cards
    document.getElementById('totalCourses').textContent = overviewData.totalCourses;
    document.getElementById('totalStudents').textContent = overviewData.totalStudents;
    document.getElementById('avgProgress').textContent = overviewData.avgProgress + '%';
    document.getElementById('activeLearners').textContent = overviewData.activeLearners;
    document.getElementById('completionRate').textContent = overviewData.completionRate + '%';
    document.getElementById('avgRating').textContent = overviewData.avgRating;
     // Theme toggle
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}
//Notification
const notifications = {
  1: {
    title: "&#128226;5 student Inactive in React Development Fundamental: ",
    date: "2 hours ago",
    description: "The name of student who are not active for 3 days are:- Jumaa hasan,Idd Mussa, Ismail john, Anna Hamisi and Amina Juma",
    action: "Failure for being active for one month lead to incomplete in their study"
  },
  2: {
    title: "&#128226; Assignment Due: JavaScript Basics Quiz",
    date: "1 ",
    description: "The 'JavaScript Concepts Assignment' is due on 15 Aug 2025.",
    action: "Go to Assesments to view submitted Assignments."
  }
};

function viewDetails(id) {
  document.getElementById("notificationList").style.display = "none";
  document.getElementById("detailsPanel").style.display = "block";
  document.getElementById("detailsContent").innerHTML =
    `<strong>${notifications[id].title}</strong><br>
     <small>Posted: ${notifications[id].date}</small><br><br>
     ${notifications[id].description}<br><br>
     <em>${notifications[id].action}</em>`;
}

function goBack() {
  document.getElementById("notificationList").style.display = "block";
  document.getElementById("detailsPanel").style.display = "none";
}