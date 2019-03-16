# NodeJSContinuosEducation
## Assignments from the UVDA NodeJS course

The first assignment of the week is:
   - Show a list of courses
   - Select a course id, and argv params, set the student's name and id, and it has to save on a file the data.
      - If no args are passed it has to print all the courses.
      - if the course id does not exists, it has to show a message to say so.

To test the first activity:
   - install yargs:
      ```npm i yargs```
   - on the node cli write the command:
      ```node .\SelectCourse.js```

To test the second activity:
   - Yargs must be installed now
   - on the node cli write the command:
      ```node .\OfferedCourses.js```
      - It must show all the courses
   - on the node cli write the command:
      ```node .\SelectCourse.js inscribir --curso=1 --nombre='Mike Tyson' --cedula=12345```
      - It must create a file with the data.
