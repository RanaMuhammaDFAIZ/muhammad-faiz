let a =[
"containg to facebook...."  ,
"containg to linkedin........"  ,
"containg to twitter........"  ,
"containg to instagram........"  ,
"containg to youtube........"  ,
"containg to pinterest........"  ,
"containg to whatsapp........"  ,
"containg to telegram........"  ,
"containg to snapchat........"  ,
"containg to tiktok........"  ,
"containg to reddit........"  ,
"containg to quora........"  ,
"containg to vimeo........"  ,
"containg to dailymotion........"  ,
"containg to vimeo........"  ,
"containg to vimeo........"  ,
"containg to vimeo........"  ,
"containg to vimeo........"  ,
"containg to vimeo........"  ,
"contating to server2........"  ,
"contating to server3........"  ,
"contating to server4........"  ,
"contating to server5........"  ,
"connecting to all server successfully........"  , 
"username i am faiz........",
"trying bute force attack........",
"trying dictionary attack........",
"trying rainbow table attack........",
"trying brute force attack........",
"trying dictionary attack........",
"trying rainbow table attack.......",
"trying brute force attack........",
"trying dictionary attack........",
"300k password is trying........",
"trying rainbow table attack........",
"Match not found........",
"Another 300k password is trying........",
"Match not found........",
"Another 300k password is trying........",
"Match found........",
"Accessind Account........",
"Hack Successfull........",
];

const sleep=async (seconds)=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(true)
        } ,seconds * 1000)
    })
}

const showhake=async (message)=>{
    await sleep(2)
    // console.log(message)
    let box=document.getElementById("box")
    box.innerHTML=box.innerHTML+message+"<br>";
}

(async ()=>{
    for(let i=0;i<a.length;i++){
        await showhake(a[i])
    }
})()

