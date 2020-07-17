const getTotalCalls = () => {
  fetch("https://www.breakingbadapi.com/api/characters")
    .then((res) => {
      return res.json();
    })
    .then((resData) => {
      console.log(resData);
    });
};

let currentData = [];




localStorage.setItem("totalCalls", [
  {
    "Mark Johnson": 12,
    "Jacob Smith": 34,
    "Larry Goberson": 62,
    "Mary Henders": 23,
    "Sally Smith": 12,
  },
]);
