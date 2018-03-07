// 1.	Person and Teacher
// Write a JS class Person and a class Teacher which extends Person. A Person should have a name and an email. A Teacher should have a name, an email, and a subject.
// Input
// There will be no input.
// Output
// Your function should return an object containing the classes Person and Teacher.


function personAndTeacher() {
    class Person{
        constructor(name,email){            
            this.name = name
            this.email = email
        }
    }

    class Teacher extends Person{
        constructor(name,email,subject){
            super(name,email)
            this.subject = subject
        }
    }
    return {
        Person,
        Teacher
    }
}
