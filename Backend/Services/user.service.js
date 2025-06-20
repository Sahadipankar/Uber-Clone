const userModel = require('../Models/user.model');  // Import the user model


module.exports.createUser = async ({    // Function to create a new user
    firstname, lastname, email, password
}) => {
    if (!firstname || !email || !password) {
        throw new Error('All fields are required');
    }
    const user = userModel.create({     // Create a new user in the database   
        fullname: { firstname, lastname },
        email,
        password
    });

    return user;
}