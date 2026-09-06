function login(userName, password)
{
    console.log("Login Attempted");

    return new Promise((resolve, rejecct) => {
        setTimeout(() => {
            if(userName === "vicky" && password === "123") 
            {
                console.log("1. Login Successful : " + userName + password)
                 
                resolve({
                    userId : 100,
                    userName : userName,
                    token : "insta201",
                });
            }
            else{
                rejecct("invalid id or password");
            }
        },2000);
    });

}

function profileFetch(userId){
    console.log("fetching profile details");

    return new Promise((resolve, reject) => {

        setTimeout( ( ) =>{

            if(userId){
                console.log("2. profile fetch")
                resolve({
                    bio : "DADY is home....!",
                    profilePic : "vicky.png",
                    followers : 1000000,
                    following : 10000
                });
            }else{
                reject("invalid userId and Password");
            }
        },2000)

    });
}


// const res = login("vicky", 123);
// const res2 = res.then(profileFetch);

// res2.then()

async function instaScrolling(){
    console.log("insta is  starting...!");
    try{
    const userData = await login("harshit", 657557);
    const profileData = await fetchProfile(userData.userId);
    const friendsList = await fetchFriends(userData.userId);
    const postData = await fetchPosts(friendList);
    const comments = await fetchComments(postData);
    }
    catch(error){
        console.log(error);
        console.log("try again...!")
    }

}
instaScrolling();

process.on("unhandledRejection", (error) => {
    console.error(error);
});

instaScrolling().catch((error) => {
    console.error(error);
});