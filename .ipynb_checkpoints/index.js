const resp=fetch('https://api.publicapis.org/entries')
resp.then((data)=>data.json()).then((data)=>console.log(data)).catch((err)=>{
    console.log(err)

})
// Specify the API endpoint URL
// const apiUrl = 'https://api.publicapis.org/entries';

// // Use the fetch function to make a GET request
// fetch(apiUrl)
//   .then(response => {
//     // Check if the request was successful (status code 200 OK)
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }

//     // Parse the response JSON
//     return response.json();
//   })
//   .then(data => {
//     // Do something with the data
//     console.log(data);
//   })
//   .catch(error => {
//     // Handle errors
//     console.error('Error fetching data:', error);
//   });
