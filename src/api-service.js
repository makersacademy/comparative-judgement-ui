class ApiService {
  getComparison() {

    var images = [
      "./jester.jpeg",
      "./Minstrel.jpg"
    ]

    var index1 = Math.floor(Math.random() * 2);
    var index2 = Math.floor(Math.random() * 2);

    return new Promise((resolve, reject) => {
      resolve({
        "firstImageUrl": images[index1],
        "secondImageUrl": images[index2]
      })
    })

    //return fetch('/mockGETData.json');
  }
}

module.exports = new ApiService();
