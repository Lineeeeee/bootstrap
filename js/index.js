$(function(){
   $(".usa_serve [class*=serve-data]").mouseenter(function(){
     $(this).addClass('act').parent().siblings().children('[class*=serve-data]').removeClass('act')
     $(this).parent().siblings().find('h4').removeClass('act')
     $(this).find('h4').addClass('act').parent().siblings()
     $(this).parent().siblings().find('a').removeClass('act')
     $(this).find('a').addClass('act')
   })

})