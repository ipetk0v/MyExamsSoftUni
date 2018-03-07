// 2.	Inheriting and Replacing ToString
// Extend the Person and Teacher from the previous task and add a class Student inheriting from Person. Add toString() functions to all classes, the formats should be as follows:
// •	Person - returns "Person (name: {name}, email: {email})"
// •	Student - returns "Student (name: {name}, email: {email}, course: {course})"
// •	Teacher - returns "Teacher (name: {name}, email:{email}, subject:{subject})"
// Try to reuse code by using the toString function of the base class.
// Input
// There will be no input.
// Output
// Your function should return an object containing the classes Person, Teacher and Student.

function toStringExtension() {
    class Person{
        constructor(name,email){
            this.name = name
            this.email = email
        }
        toString(){
            let className = this.constructor.name
            return `${className} (name: ${this.name}, email: ${this.email})`
        }
    }
    class Teacher extends Person{
        constructor(name,email,subject){
            super(name,email)
            this.subject = subject
        }
        toString(){
            let patentStr = super.toString().slice(0, -1)
            return `${patentStr}, subject: ${this.subject})`
        }
    }
    class Student extends Person{
        constructor(name,email,course){
            super(name,email)
            this.course = course
        }
        toString(){
            let patentStr = super.toString().slice(0, -1)
            return `${patentStr}, course: ${this.course})`
        }
    }
    return {
        Person,
        Teacher,
        Student
    }
    
module.exports = Person
}


