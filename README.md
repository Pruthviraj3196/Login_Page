# React Form with Formik and Yup Validation

This project demonstrates how to create a sign-up form in React using Formik for form state management and Yup for validation. The form includes validation for a name, email, password, and confirm password fields. The password must be set to the specific value "rishiME@199".

# Features

- Name Field: Must be between 2 and 25 characters.
- Email Field: Requires a valid email format.
- Password Field: Must match the exact password "rishiME@199".
- Confirm Password: Must match the password field.
- Error Display: Shows validation error messages below each field.
- Submit Button: Disabled until all fields are valid.


### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/task-scheduler-project.git

  2. **Install Frontend Dependencies:**
 ```bash
    npm install
```
  3. Start the frontend
  ```bash
     npm run dev
   ```

 # Usage
 The form consists of four fields:
 - Name: Must be between 2 and 25 characters.
 - Email: Requires a valid email address.
 - Password: Must be exactly "rishiME@199".
 - Confirm Password: Must match the entered password.
 
# Validation Rules
- Name: The name must be at least 2 characters long and no more than 25 characters.
- Email: The email must follow a standard email format.
- Password: The password is restricted to the string "rishiME@199".
- Confirm Password: The confirm password must match the value entered in the password field.

# How to Use
- Fill in all fields according to the validation rules.
- The form will only be submitted if all fields are valid.
- Errors will be displayed inline below the respective input fields.

# Conclusion
This project is an example of using Formik and Yup to create and validate forms in React. With Yup, you can easily define validation schemas, ensuring proper data input and a smooth user experience. 

