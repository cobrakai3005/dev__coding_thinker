//1. Write a programs to check prime number for a give range using function

function checkPrime(n) {
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i == 0) return false;
  }

  return true;
}

function primeTill(n) {
  for (let j = 1; j < n; j++) {
    if (checkPrime(j)) {
      console.log(j);
    }
  }
}

primeTill(7);

const st = {
  name: "Love Porwal",
  age: 28,
  marks: 61,
  getDetails: function () {
    console.log(
      `My Name is ${this.name}, I am a Teacher age ${this.age}. I scored ${this.marks}`
    );
  },

  getAge: function () {
    return age;
  },
};

st.getDetails();
