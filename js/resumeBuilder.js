


var bio = {
    "name" :"Hussam Mostafa",
    "role" :"Software Engineer",
    "contacts" : {
        "mobile" :"+201022495616",
        "email" : "hussam.mostafa.qi@gmail.com",
        "Github" : "hussamqi",
        "location" : "@Egypt/cairo"
    },
    "WelcomeMsg" : "An ambitious engineer who's looking for a challenging position in a leading company in the self-driving car industry, where I can put my knowledge and skills into practice, achieve more progress and success and make significant contributions. Lifelong learner who aims to be a computer science professor in a top ranked university",
    "skills" : ["HTML" , "CSS" , " Javascript",'C','C++','Pyhton','Java','Algorithms and Data Structure' , 'Problem Solving', 'Embedded systems fundementals','Teaching'] ,
    "bioPic" : "images/hussam.PNG"
        };

bio.display = function display_bio (){

        if (bio.skills.length > 0 ) {

        }
        $("#header").prepend(HTMLheaderRole.replace("%data%" , bio.role));
        $("#header").prepend(HTMLheaderName.replace("%data%" , bio.name));
        $("#topContacts").append(HTMLmobile.replace("%data%" , bio.contacts.mobile));
        $("#topContacts").append(HTMLlocation.replace("%data%" , bio.contacts.location));
        $("#topContacts").append(HTMLgithub.replace("%data%" , bio.contacts.Github));
        $("#topContacts").append(HTMLemail.replace("%data%" , bio.contacts.email));
        $("#header").append(HTMLwelcomeMsg.replace("%data%" , bio.WelcomeMsg));
        $("#header").append(HTMLbioPic.replace("%data%" , bio.bioPic));
        $("#header").append(HTMLskillsStart)
        for (var i = 0 ; i < bio.skills.length ; ++i)
        {
            $("#skills").append(HTMLskills.replace("%data%",bio.skills[i]))
        }

        }
bio.display()

var education = {
    "schools": [{
        "name": "Faculty of engineering",
        "location": "Egypt/mansoura university",
        "major": "Communication and information engineering",
        "dates": "2017",
        "degree" : "BA"

    }],
    "onlineCourses": [{
        "title": "Introduction to HTML5",
        "school" : "Coursera",
        "dates": "2017",
        "url" : "https://www.coursera.org/account/accomplishments/certificate/BD4QHLFN8F5X"
    },
    {
        "title": "Introduction to CSS3",
        "school" : "Coursera",
        "dates": "2017",
        "url" : "https://www.coursera.org/account/accomplishments/certificate/APAJ2CFS7X48"
    }
    ]
}

education.display = function display_education() {
    $("#education").append( HTMLschoolStart);
    for (school in education.schools){
        var x = HTMLschoolDegree.replace("%data%" , education.schools[school].degree);
        var y = HTMLschoolName.replace("%data%" , education.schools[school].name);
        var z = y+x ;
        $(".education-entry:last").append(z);
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%" , education.schools[school].dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%" , education.schools[school].location));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%" , education.schools[school].major));
    }
        $(".education-entry:last").append(HTMLonlineClasses);
        for (course in education.onlineCourses){
        var x = HTMLonlineTitle.replace("%data%" , education.onlineCourses[course].title);
        var y = HTMLonlineSchool.replace("%data%" , education.onlineCourses[course].school);
        var z = x+y ;
        $(".education-entry:last").append(z);
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%" , education.onlineCourses[course].dates));
        $(".education-entry:last").append(HTMLonlineURL.replace(/%data%/g , education.onlineCourses[course].url));

    }
}

education.display()

var work = {
    "jobs" : [{
            "employer" : "Groot workspace",
            "title" : "Software engineer instructor",
            "date" :"Feb 2016 - Future",
            "location" : "Egypt/alex",
            "description" : "Teaching programming and problem solving fundamentals using python and Embedded systems software engineering using Atmega16 micro-controller."
            } ]
}


function display_work (){
    for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var employer = HTMLworkEmployer.replace("%data%" , work.jobs[job].employer);
    var title = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var dis = employer +  title;
    $(".work-entry:last").append(dis);
    $(".work-entry:last").append(HTMLworkDates.replace("%data%" , work.jobs[job].date));
    $(".work-entry:last").append(HTMLworkLocation.replace("%data%" , work.jobs[job].location));
    $(".work-entry:last").append(HTMLworkDescription.replace("%data%" , work.jobs[job].description));
}
};

display_work();

var projects =  {
    "projects": [{
        "projectTitle": "Internet programming CVs project",
        "projectDates": "2017",
        "projectDescription": "Creating outstanding Cvs using what we've learnt throught the course and applying HTML, CSS and Javascript knowledge to real project.",
        "HTMLprojectImage": ["images/2.jpg","images/1.png"]
                },
        {
        "projectTitle": "Temperature control system using Atmega16",
        "projectDates": "2016",
        "projectDescription": "Temperature control system Based-on Atmega16,, LM35, dc motor, fan",
        "HTMLprojectImage": ["images/4.png"]
                },
                                {
        "projectTitle": "Simple Calculator using Atmega16",
        "projectDates": "2015",
        "projectDescription": "Simple Calculator using arrays of pointers to functions Based-on Atmega16, LCD, Keypad",
        "HTMLprojectImage": ["images/3.png"]
                }
                ]

 }



projects.display = function () {
    for (project in projects.projects){
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%" , projects.projects[project].projectTitle));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%" , projects.projects[project].projectDates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%" , projects.projects[project].projectDescription));
        for (i in projects.projects[project].HTMLprojectImage)
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%" , projects.projects[project].HTMLprojectImage[i]));
    }
}

projects.display();


function footerDisplay(){
        $("#footerContacts").append(HTMLmobile.replace("%data%" , bio.contacts.mobile));
        $("#footerContacts").append(HTMLlocation.replace("%data%" , bio.contacts.location));
        $("#footerContacts").append(HTMLgithub.replace("%data%" , bio.contacts.Github));
        $("#footerContacts").append(HTMLemail.replace("%data%" , bio.contacts.email));
}


footerDisplay()

$(document).click(function(loc) {
  // your code goes here
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y)
});

$("#main").append(internationalizeButton)


function inName(oldName) {
    var finalName = oldName;
    var names = oldName.trim().split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}

$("#mapDiv").append(googleMap);

// function locationizer (work)
// {
//     var locations = []
//     for (job in work.jobs) {
//         locations.push(work.jobs[job].location)
//     }
//     return locations
// }