























// // function count (string) {  
// //     var count = {};
// //     string.split('').forEach(function(s) {
// //        count[s] ? count[s]++ : count[s] = 1;
// //     });
// //     return count;
// //   }




// // function foobar(count) {
// //     let array = (new Array(count)).fill(1).map((_, x) => x + 1);
// //     let arr = array.map( x => x % 3 === 0 && x % 5 === 0 
//         // ? 'FOOBAR' : x % 3 === 0 
//         // ? 'Foo' : x % 5 === 0 
//         // ? 'Bar' : x)
// //     return arr
// // }

// // console.log(foobar(100));


// // let xml  = new XMLHttpRequest();

// // xml.onreadystatechange = () => {
// //         if (this.readyState === '4' && this.status === 200)
// //         console.log('1111')
// //         callbackFunction(this.responseText);
// // }

// // xml.open('GET', 'https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new');
// // xml.send();

// // function callbackFunction(data) {
// //         console.log(data);
// // }

// const requestURL = 'https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new';

// async function sendRequest(method, url) {
    
//         return fetch(url).then(response => {
//             return response.text().then(data => {
                
//                 return  data[0]
//             })
//         })
// }

// sendRequest('GET', requestURL)
//         .then(data => console.log(data))
//         .catch(err => console.log(err));
























// const requestURL = 'https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new';

//  function getRequest(method, url) {
//      return fetch(url).then(response => {
//         return response.text();
//     })
// }

// getRequest('GET', requestURL)
//     .then(data => console.log(data))
//     .catch(error => console.log(error))


