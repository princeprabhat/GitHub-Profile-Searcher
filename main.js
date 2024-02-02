class GitHub{
    constructor(username){
        this.username = username;
    }
    async getUserDetails (){
       const res = await fetch(`https://api.github.com/users/${this.username}`);
        const data = await res.json();
        
    this.createUserCard(data);

    }

    createUserCard(data){
      
      document.getElementById("main").innerHTML = `<div class="img-container">
          <img class="rounded-circle img-fluid img-thumbnail" src=${data.avatar_url} alt="Avatar">
      </div>
      <div class="textContent">
          <h4><b>${data.name}</b></h4>
          <p>${data.bio}</p>
          <div class="row">
              <div class="col"><b>Followers</b> : ${data.followers}</div>
              <div class="col"><b>Following :</b> ${data.following}</div>
              <div class="col"><b>Repos :</b> ${data.public_repos}</div>
          </div>
          <div class="row">
              <div class="col"><b>Twitter :</b> ${data.twitter_username}</div>
              <div class="col"><b>Location :</b> ${data.location}</div>
          </div>
      </div>`
    }
}

const default_user = new GitHub("princeprabhat");
default_user.getUserDetails();


const formId =  document.getElementById('form');
  formId.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inputs = formId.elements;
    const username = inputs[0].value;
    const user = new GitHub(username);
    inputs[0].value =""
    inputs[0].blur();
    user.getUserDetails();
  })