$(document).ready(function(){
    
    var count=0;

    developer_animation();

    function developer_animation() {
    
        setTimeout (function(){
        count++;
        if(count==1){
            title="D";
        }else if(count==2){
            title="De";
        }else if(count==3){
            title="Dev";
        }else if(count==4){
            title="Deve";
        }else if(count==5){
            title="Devel";
        }else if(count==6){
            title="Develo";
        }else if(count==7){
            title="Develop";
        }else if(count==8){
            title="Develope";
        }else if(count==9){
            title="Developer";
        }
        if(count !=10){
            $('.title').text(`I'm a ${title}`);
            developer_animation();
        }else if(count==10){
            count=0;
            setTimeout(function(){
                designer_animation();
            },1000);
        }

    },100);

}

        function designer_animation(){
            
            setTimeout(function(){
                count++;
                if(count==1){
                    title="D";
                }else if(count==2){
                    title="De";
                }else if(count==3){
                    title="Des";
                }else if(count==4){
                    title="Desi";
                }else if(count==5){
                    title="Desig";
                }else if(count==6){
                    title="Design";
                }else if(count==7){
                    title="Designe";
                }else if(count==8){
                    title="Designer";
                }

                if(count!=9){
                    $('.title').text(`I'm a ${title}`);
                    designer_animation();
                }else if(count==9){
                    count=0;
                    setTimeout(function(){
                        developer_animation();
                    },1000);
                }

            },100);
        }
        $('.see_resume').mouseenter(function(){
            $(this).css('background-color','rgb(182, 21, 21)');
        })
    
        $('.see_resume').mouseleave(function(){
            $(this).css('background-color','rgb(165, 42, 42)');
        })
    






    })
