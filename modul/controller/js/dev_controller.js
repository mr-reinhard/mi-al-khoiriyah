
function execute_manualQuery(MainFormId,childFormId,urlBackEnd){

    $(MainFormId).on("submit",childFormId, function(e){

        e.preventDefault();

        $.ajax({

            url:urlBackEnd,
            type:'POST',
            data:$(childFormId).serialize(),
            success:function(data){
                console.log(data);
            }
        })
    })
}

function showTableDatabase(formId,selectOption,urlBackEnd){

        $(formId).ready(function(){
            $.ajax({
                url:urlBackEnd,
                type:'GET',
                dataType:'JSON',
                success:function(data){
    
                    //console.log(data)
    
                    $(selectOption).empty()
    
                    $(selectOption).append('<option disabled selected>-- Pilih Nama Table --</option>')
    
                    $.each(data, function(index, item){
                        var option = '<option value = "'+item[0]+'">'+item[0]+'</option>';
                        $(selectOption).append(option);
                    })
    
                },
                error:function(xhr, status, error){
                    console.log("Error", error)
                }
            })
        })

}









