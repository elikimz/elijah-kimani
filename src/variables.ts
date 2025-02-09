export const variables = () => {

    // Challenge 1: Fix the Type Safety Issue

    // Fix this function to avoid using 'any'
    function processInput(input: any) {
        return input.toUpperCase(); // ❌ This may break if input is not a string
    }

    // console.log(processInput("typescript"));
    // console.log(processInput(100)); // ❌ Error


    // Challenge 2: Type-Check Before Use
    let userResponse: unknown;

    // Assign a value (try changing the type)
    userResponse = 42;

    // Convert to number only if it's a number
    // Fix this: let result: number = userResponse * 2; ❌ ERROR

    // Challenge 3: Logging Function
    // Create a function logMessage that takes a message and logs it
    function logMessage(message: string) {
        // Your code here
    }
    logMessage("Hello TypeScript!"); // Should log to console



    // Challenge 4: Create an Error-Throwing Function
    // Write a function that throws an error if a user is not logged in
    function checkLogin(isLoggedIn: boolean) {
        // Your code here
    }

    // Test: checkLogin(false); // Should throw an error




};