
function aboutMe(mainForm,childForm,elementTrigger){

    $(mainForm).on("input",childForm,elementTrigger,function(){

        var nilaiInput = $(elementTrigger).val()

        if (nilaiInput === "capt_bon") {
            window.location.href = 'https://www.instagram.com/capt_bon/'
            $(elementTrigger).val("")
        }
        else if (nilaiInput === "capt_info") {
            sweetAlert_withImage("@capt_bon","Please follow my instagram :)","https://scontent.fcgk33-1.fna.fbcdn.net/v/t31.18172-8/21414828_160404027875304_7732449593713731691_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=P7fVLBijKf0Q7kNvgGi4LKy&_nc_ht=scontent.fcgk33-1.fna&gid=Ao5vkyjj29KQd9IH6p4DqTI&oh=00_AYBzZtviEcZxDBr8VYDPssfK6fnhKcrH5GespZHdg35heg&oe=66CDF00A","")
            $(elementTrigger).val("")
        }
        
    })
}

//aboutMe("#mainContentLoginUser","#id_formLogin_userLoginUser","#id_inputPassword_userFormLoginUser")