/* axios.get('https://api.github.com/users/diego3g')
    .then(function(response) {
        // handle success
        user_id = response.data.id
        console.log(response);
        console.log(user_id);
        if (user_id > 20) {
            console.log("ID maior que 20 ")
        }
   
    })
    .catch(function(error) {
        // handle error
        console.log(error);
    })
//verifica se o id é maior que 20
 */
base_url = "https://api.github.com/users/";
wasclicked = false;
user = "";

//Disables any spaces on input
function AvoidSpace(event) {
    var k = event ? event.which : window.event.keyCode;
    if (k == 32) return false;
}

 function clicked() {
    user = document.getElementById("myText").value 
    user = decodeURIComponent(user);
    

    console.log(user);
    wasclicked = true;
    user_url = base_url.concat(user);
    console.log(user_url)
    if (wasclicked == true) {
        document.getElementById("myText").value = '';
        axios.get(user_url)
        .then(function(response) {
            // handle success
            user_login = response.data.login
            user_id = response.data.id
            user_followers = response.data.followers
            user_picture = response.data.avatar_url

            console.log(response);

            //creates ul
            user_list = document.createElement("ul");
            user_list.id = "info_list";
            document.body.appendChild(user_list);

            //creates first li
            list_login = document.createElement("li");
            list_login.setAttribute('class', 'item');
            list_login.innerHTML += 'User´s Login: ' + user_login;
            //creates second li
            list_id = document.createElement("li");
            list_id.setAttribute('class', 'item');
            list_id.innerHTML += 'User´s Id: ' + user_id;
            //creates third li
            list_followers = document.createElement("li");
            list_followers.setAttribute('class', 'item');
            list_followers.innerHTML += 'User´s followers: ' + user_followers;
            //creates fourth li
            /* list_picture = document.createElement("li");
            list_picture.setAttribute('class', 'item');
            list_picture.innerHTML += 'User´s picture: ' + user_picture;
 */
            //creates image
            user_img = document.createElement("img");
            user_img.setAttribute("src", user_picture);
            document.body.appendChild(user_img);


            //appending li to ul
            user_list.appendChild(list_login);
            user_list.appendChild(list_id);
            user_list.appendChild(list_followers);
            user_list.appendChild(list_picture);
            
            
            
            return axios.get(user_picture);

            


            

        })
        .catch(function(error) {
            // handle error
            console.log(error);
            if (error.response.status == 404){
                if (user == "") {
                    window.alert("Você não inseriu um usuário"); 
                }
                else {
                    window.alert("Erro ao localizar usuário");

                }

            }

        })
    }
    
}

