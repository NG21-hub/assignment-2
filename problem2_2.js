function cloneUser(user) {
    return { ...user };
  }
  
  const originalUser = { name: 'Temo', age: 25 };
  const clonedUser = cloneUser(originalUser);
  
  console.log(clonedUser); 
  console.log(clonedUser === originalUser);