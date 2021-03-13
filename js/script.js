jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
  });
 
  $( "#myform" ).validate({
      rules: {
        Uname: {
        required: true,
        rangelength: [3, 10]
      },
      
      Pass: {
        required: true,
        minlength: 6,
        maxlength: 8,
        required: true,
        pwcheck: true 
    },
    },

    messages: {
        name: "فیلد نام کاربری را وارد کن ",
      
        Pass : {
            required: "فیلد رمز را وارد کن",
            pwcheck: "پسورد را درست وارد کن",
            checklower: "پسورد شما می تواند شامل 6 تا 8 کارکتر باشد ",
            checkupper: "پسورد شما می تواند شامل 6 تا 8 کارکتر باشد",
            checkdigit: "حداقل به یک رقم نیاز دارید"
        },
    }
  });

   
function functionValid(){
    var test =$("#myform").valid();
    console.log(test);
    
    if (test === true){
        var frm = $('#myform');
        
        frm.submit(function (e) {
        $.ajax({
            url: 'https://api.noaeincloud.ir/api/sample',
            data:frm.serialize(),
            type: 'GET',
            dataType: 'JSON',
            beforeSend: function() {
          
            },
            success: function(xhr, response) {
                
                swal({
                    title: "it is registered !",
                    text: "You clicked the button!",
                    icon: "success",
                    button: "Aww yiss!",
                  });
            },
            error: function(xhr, status, error) {
              
                swal ( xhr.message ,  "Something went wrong!" ,  "error" )
            },
         
          });
        
    })
    }
    
    }
    