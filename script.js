fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json()) 
    .then(data =>{
       const list1 = document.createElement("ol")
       const list2 = document.createElement("ul")
       data.forEach(post => {
        const listItems1 = document.createElement("li");
        const listItems2 = document.createElement("li");
        listItems1.textContent = `${post.title}`
        listItems2.textContent = `${post.body}`
        list1.appendChild(listItems1)
        list2.appendChild(listItems2)
       });
       document.body.appendChild(list1)
       document.body.appendChild(list2)
       console.log(list1);
       console.log(list2);
    })
    .catch(error =>console.log(error))


fetch("https://jsonplaceholder.typicode.com/posts",{
    method:'POST',
    headers:{
        'Content-Type':'application/json',
    },
    body:JSON.stringify({
        title:'New Post',
        body:'Lorem ipsu',
        userId:1
    })
})
    .then(response =>response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))


fetch("https://jsonplaceholder.typicode.com/posts",{
    method:'delete',
    headers:{
        'Content-Type':'application/json',
    },
    body:JSON.stringify({
        title:'New Post ',
        body:'Lorem ipsu ',
        userId:1
    })
})
    .then(response =>response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

async function handleResponse(response) {
    const { status } = response; 

    if(status === 200){
        console.log('200 OK: Successful request.');
        return await response.json();
    }
    if (status === 201) {
        console.log('201 Created: Successfully created resource.');
        return await response.json();
    }
    if (status === 404) {
        console.error('404 Not Found: If the post ID for deletion is not found.');
        return await response.json();
    }
    if (status === 500) {
        console.error('500 Internal Server Error: If there’s a server error.');
        return await response.json();
    }
    
}