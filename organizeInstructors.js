const organizeInstructors = instructors => {
  let organizedCourses = {};

  instructors.forEach((study) => {
    if (study.course in organizedCourses) {
      organizedCourses[study.course].push(study.name);
    } else {
      organizedCourses[study.course] = [study.name];
    }
  });
  return organizedCourses;
}

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
/*
{
  iOS: ["Samuel"],
  Web: ["Victoria", "Karim", "Donald"]
}
{
  Blockchain: ["Brendan"],
  Web: ["David", "Carlos"],
  iOS: ["Martha"]
}
*/