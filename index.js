// Add your code here



    function submitData(name, email) {
   
      return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email
        })
      })
      .then(response=>  response.json() )
      .then(data =>{
        const newElement = document.createElement("p");
        newElement.textContent=data.id;
        document.body.appendChild(newElement);
      })
      .catch(error => {
        const errorMessage = document.createElement("p");
        errorMessage.textContent = `${error.message}`;
        document.body.appendChild(errorMessage);
      });
        
        }