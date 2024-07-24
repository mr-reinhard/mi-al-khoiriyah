
function login(mainForm,loginForm,urlBackEnd){

    $(mainForm).on("submit",loginForm,function(){
        $.ajax({
            url:urlBackEnd,
            type:'POST',
            data:$(loginForm).serialize(),
            success:function(data){
                console.log(data)
            },
            error:function(xhr,status,error){
                console.log('Ajax Error : ',status,error)
                console.log('Response Text : ',xhr.resposeText)
                console.log('Status : ',xhr.status)
            }
        })
    })
}

function register(mainForm,registerForm,urlBackEnd){

    $(mainForm).on("submit",registerForm,function(){

        $.ajax({
            url:urlBackEnd,
            type:'POST',
            data:$(register).serialize(),
            success:function(data){
                console.log(data)
            },
            error:function(xhr,status,error){
                console.log('Ajax Error : ',status,error)
                console.log('Response Text : ',xhr.responseTest)
                console.log('Status : ',xhr.status)
            }
        })
    })
}

function cekSession(urlBackEnd){

    $.ajax({
        url:urlBackEnd,
        type:'GET',
        success:function(data){
            console.log(data)
            window.location.href
        },
        error:function(xhr,status,error){
            console.log('Ajax Error : ',status.error)
            console.log('Response Text : ',xhr,responseText)
            console.log('Status : ',xhr.status)
        }
    })
}