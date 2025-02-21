export const hashPassword = (password) => {
    return btoa(password); // Simple encoding (Use a stronger hash for real apps)
  };
  
  export const saveUser = (email, password) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    // Check if user already exists
    if (users.some(user => user.email === email)) {
      return { success: false, message: "User already exists" };
    }
  
    // Store user with hashed password
    users.push({ email, password: hashPassword(password) });
    localStorage.setItem("users", JSON.stringify(users));
    return { success: true, message: "User registered successfully" };
  };
  
  export const validateLogin = (email, password) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    const hashedPassword = hashPassword(password);
    const user = users.find(user => user.email === email && user.password === hashedPassword);
  
    if (user) {
      localStorage.setItem("loggedInUser", email); // Store session
      return { success: true, message: "Login successful" };
    } else {
      return { success: false, message: "Invalid email or password" };
    }
  };
  
  export const logoutUser = () => {
    localStorage.removeItem("loggedInUser");
  };
  