var bio = {
	"name" : "Michael Schmitz",
	"role" : "Product Manager",
	"welcomeMessage" : "I am an experienced product manager and service delivery professional in the healthcare technology industry, and possess a strong lean towards product and process optimization.  My passion and success lies in discovering and implementing the means to improve myself, the people, the operations, and the tools around me. I thrive best in an environment where the culture embodies and embraces an ever-improving mindset.  I strive to put myself, and everyone around me, in a better place today than where we were yesterday.",
	"contacts" : {
		"mobile" : "847-224-2515",
		"email" : "michaelschmitz5@gmail.com",
		"github" : "mrchristmas",
		"twitter" :"misterschmitz",
		"location" : "Chicago"
	},
	"skills" : ["Product Management", "Strategic Roadmaps", "User Stories", "Agile Methodologies", "User Experience"],
	"bioPic" : "images/profile.jpg"
};

var education = {
	"schools" : [
		{
			"name" : "University of Illinois at Urbana-Champaign",
			"location" : "Urbana, IL",
			"degree" : "B.S.",
			"majors" : ["General Engineering"],
			"dates" : "2006-2010",
			"url" : "http://www.illinois.edu/"
		}
	],
	"onlineCourses" : [
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "https://www.udacity.com/course/viewer#!/c-ud804/"
		}
	]
};

var work = {
	"jobs" : [
		{
			"employer" : "Strata Decision Technology",
			"title" : "Technical Product Manager",
			"location" : "Chicago, IL",
			"dates" : "July 2014",
			"description" : "Primarily responsible for managing company’s Financial Performance Management product offerings through all stages of the product life-cycle; from problem definition and business impact/value analysis, through product development, launch, and optimization.",
			"url" : "http://www.stratadecision.com/"
		},
		{
			"employer" : "Strata Decision Technology",
			"title" : "Manager, Consulting",
			"location" : "Chicago, IL",
			"dates" : "July 2012",
			"description" : "Leading and managing the implementation and use of organizational decision analysis and decision-support software systems in integrated health systems and hospitals.",
			"url" : "http://www.stratadecision.com/"
		}
	]
};

var projects = {
	"projects" : [
		{
			"title" : "Project Title",
			"dates" : "N/A",
			"description" : "N/A",
			"images" : ["images/197x148.gif","images/197x148.gif"]
		}
	]
};

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formattedPic = HTMLbioPic.replace("%data%",bio.bioPic);
var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);


$("#header").prepend(formattedLocation);
$("#header").prepend(formattedTwitter);
$("#header").prepend(formattedEmail);
$("#header").prepend(formattedMobile);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#header").append(formattedPic);
$("#header").append(formattedMessage);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
};

bio.display = function() {
	for (skill in bio.skills) {
		
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills:last").append(formattedSkills);
		console.log(formattedSkills);
	}
};

bio.display();

$("#main").append(work.jobs.employer);
$("#main").append(projects.projects.title);
$("#main").append(education.onlineCourses.title);

work.display = function() {

	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedEmployer = formattedEmployer.replace("%url%", work.jobs[job].url);

		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		$(".work-entry:last").append(formattedEmployer+formattedTitle);

		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedWorkDates);

		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedWorkLocation);

		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedWorkDescription);
	}
};

work.display();

projects.display = function() {
	for (proj in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[proj].images.length>0) {
			for (image in projects.projects[proj].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[proj].images[image]);
				$(".project-entry:last").append(formattedImage);		
			}
		}
	}
};

projects.display();

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		formattedName = formattedName.replace("%url%", education.schools[school].url);

		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedName+formattedDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedMajor);
	}

		$("#education").append(HTMLonlineClasses);

	for (course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		formattedOnlineTitle = formattedOnlineTitle.replace("%url%", education.onlineCourses[course].url);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedOnlineTitle+formattedOnlineSchool);		

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedOnlineDates);

		// var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

		// $(".education-entry:last").append(formattedOnlineURL);

	}
};

education.display();

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " +name[1];
};

// $("#mapDiv").append(googleMap);

//$("#main").append(skills[0]);

/* Pop and Push arrays
var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    newArray = _array;
    newArray.push(newArray.pop()+1);
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));
*/

//Split Strings into Array elements
//Join Array elements into a String
/* Code
var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}
;
console.log(nameChanger(name));
*/
