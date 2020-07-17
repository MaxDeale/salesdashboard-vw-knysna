let totalCalls = [];

function myLoad() {
  if (sessionStorage.getItem("hasCodeRunBefore") === null) {
    localStorage.setItem("totalCalls", [
      {
        "Mark Johnson": 12,
        "Jacob Smith": 34,
        "Larry Goberson": 62,
        "Mary Henders": 23,
        "Sally Smith": 12,
      },
    ]);

    sessionStorage.setItem("hasCodeRunBefore", true);
  } else {
    // otherwise set the array to whatever is in the session storage
    totalCalls = JSON.parse(sessionStorage.getItem("totalCalls"));
  }
}

const getTotalCalls = () => {
  fetch("https://www.breakingbadapi.com/api/characters")
    .then((res) => {
      return res.json();
    })
    .then((resData) => {
      localStorage.setItem("totalCalls", resData);
      totalCalls = resData;
      console.log(totalCalls);
    });
};
