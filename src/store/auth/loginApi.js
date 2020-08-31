export default async function loginApi(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'wizeline' && password === 'Rocks!') {
        const user = { name: 'Wizeline', avatarUrl: 'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png' };

        return resolve(user);
      }
      return reject(new Error('Username or password invalid'));
    }, 500);
  });
}
