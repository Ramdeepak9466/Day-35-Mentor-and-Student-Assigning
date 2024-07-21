# Description: 

*API was tested in this FrontEnd*

*This is a Admin Page to Handle Organization DB for a Online Teaching Site*

# Visit :

**[https](https://httdbadminpage.netlify.app/)**

# API URL:

**[https](https://assign-mentor-rwbp.onrender.com)**

# Run In PostMan or View:

**[https](https://documenter.getpostman.com/view/34103499/2sA3XWdycy)**


# Below Operations are performed in this Front End

*"/students"*

* Displays all Students in the database

*"/mentors"*

* Displays all Mentors in the database

*"/addmentor"*

* Adding a Mentor

*"/addstudent*

* Adding a Student

**Assigning Students to Mentor**
*"/assignstudent/:MentorID"*

1. Add Students
    - Display All Students with similar Course proficiency with the mentor
    - Not to be displayed - Already assigned student

**Changing Mentor for a Student**
*"/changementor/:studentID"*

1. For Particular student ID - Change mentor by getting mentor ID 
    - Replace the exsisting Mentor ID with the New 
    - Push the exsisting Mentor ID into the Previous Mentor information in student DB 

**Displaying Students for Particular Mentor**
*"/displaystudents/:mentorID"*

1. Lookup the Params MentorID with the mentor id in the student DB
    - Display the Students data

**Display Students who Assigned Previuos with a Mentor**
*"/previousmentor/:studentID"*

1. Displaying previously assigned Mentor for a particular Student 


