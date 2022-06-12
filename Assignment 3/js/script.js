// WEB303 Assignment 3
// Gurjant Singh

     function getDataByJson(){
        $.getJSON("data/glitchTeam.json").done(function(member){
        $.each(member.members,function(key,val){
     $('div#glitch-team').append(`<h4>${val.fullname}</h5
            <h6>${val.position}</h6>
            <p>${val.shortbio}</p>`)})
        })
    };
    function getDataByAjax(){
        $.ajax({
            url:"data/glitchTeam.json",
            beforeSend:function(){
                $('#glitch-team').text("Loading.....")
            },
            error:function(){
                alert("Data Invaild")

            },
            success:function(){
                $.getJSON("data/glitchTeam.json").done(function(member){
                    $.each(member.members,function(key,val){
                 $('div#glitch-team').append(`<h4>${val.fullname}</h5
                        <h6>${val.position}</h6>
                        <p>${val.shortbio}</p>`)})
                    })

            }
        })
    }
    $(function(){
        //getDataByJson();
getDataByAjax();    })