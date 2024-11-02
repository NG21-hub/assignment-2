const users = [
    { name: 'Temo', age: 25 },
    { name: 'Lasha', age: 21 },
    { name: 'Ana', age: 28 }
  ];
  
  function findYoungestUserName(users) {
    const youngest = users.reduce((min, user) => (user.age < min.age ? user : min));
    return youngest.name;
  }
  
  console.log(findYoungestUserName(users));