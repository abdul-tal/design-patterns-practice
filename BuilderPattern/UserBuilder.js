const User = require('./user');

class UserBuilder {
    constructor(name) {
        this.name = name;
    }

    setAge(age) {
        this.age = age;
        return this;
    }

    setPhone(phone) {
        this.phone = phone;
        return this;
    }

    setAddress(address) {
        this.address = address;
        return this;
    }

    setHobby(hobby) {
        this.hobby = hobby;
        return this;
    }

    setGrade(grade) {
        this.grade = grade;
        return this;
    }

    setSchool(school) {
        this.school = school;
        return this;
    }

    // build() {
    //     return new User(this);
    // }
}
