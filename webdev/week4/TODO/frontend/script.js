function showsignup(){
    document.querySelector(".signup").classList.remove('hidden');
    document.querySelector(".signin").classList.add('hidden');
    document.querySelector(".mainlogic").classList.add('hidden');
}

function showsignin(){
    document.querySelector(".signup").classList.add('hidden');
    document.querySelector(".signin").classList.remove('hidden');
    document.querySelector(".mainlogic").classList.add('hidden');
}

function showmainlogic(){
    document.querySelector(".signup").classList.add('hidden');
    document.querySelector(".signin").classList.add('hidden');
    document.querySelector(".mainlogic").classList.remove('hidden');
}


 async function signup(){
    const email=document.getElementsByClassName("email")[0].value;
    const password=document.getElementsByName("psw")[0].value;
    const confirmpassword=document.getElementsByName("psw-repeat")[0].value;
    console.log(email);
    await axios.post("http://localhost:3000/signup",{
        data:{
            email:email,
            password:password,
            confirmpassword:confirmpassword
        }
    }
    )
    alert("u are signed up successfully");
    showmainlogic();
}
async function signin(){
    const email=document.getElementsByName("uname")[0].value;
    const password=document.getElementsByName("psw2")[0].value;
    const response=await axios.post("http://localhost:3000/signin",{
        body:{
            email:email,
            password:password
        }
    })
    localStorage.setItem("token",response.data.token);
    alert("u are signed in");
    showmainlogic();
}

async function todos(){
    const title=document.getElementsByName('title').value;
    const description=document.getElementsByName('Description').value;
    const response=await axios.post("http://localhost:3000/todos",{
        body:{
            title:title,
            description:description,
        }
    })

}