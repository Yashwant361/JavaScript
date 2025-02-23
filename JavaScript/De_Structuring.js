
const course = {
    courseName : "JS in Hindi",
    price : "999",
    courseInstructor : "Alpha Pandey"
};

//course.courseInstructor;

const {courseInstructor : teacher} = course;

console.log(teacher);

