//IT WORKS

var validator = {
    types: {},
    messages: [],
    config: {},

    validate: function (data) {
        var i, msg, type, valid, checker;

        this.messages = [];

        for (i in data) {
            if (data.hasOwnProperty(i)) {
                type = this.config[i];
                checker = this.types[type];

                if (!type) {
                    continue;
                }
                if (!checker) {
                    throw {
                        name: "ValidatorError",
                        messgae: "Validator not found " + type
                    }
                }

                valid = checker.validate(data[i]);

                if (!valid) {
                    msg = "Error  " + i + "," + checker.message;
                    this.messages.push(msg);
                }
            }
        }

        return this.hasErrors();
    },

    hasErrors: function () {
        return this.messages.length !== 0;
    }

};


validator.types.required = {
    validate: function (value) {
        return value !== "";
    },
    message: "Required"
};

// validator.types.isAlphaNum = {
//     validate: function (value) {
//         return !!/[^a­z09]­/i.test(value);
//     },
//     message: "the value can only contain characters and numbers, and special symbols "
// };

validator.types.number = {
    validate: function (value) {
        return !isNaN(value);
    },
    message: "Must be a number"
};

validator.types.email = {
    validate: function (value) {
        return !!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value);
    },
    message: "Must be an email address"
};



validator.config = {
    firstName: "required",
    lastName: "required",
    // username:'isAlphaNum',
    age: 'number',
    email: 'email'

};





var obj1 = {
    firstName: "tom",
    lastName: "tompson",
    // username:"Eugisdfjsdjljfwu7342347237",
    age: 42,
    email: 'mail@mail.com'
};


if (validator.validate(obj1)) {
    console.dir(validator.messages);
}



