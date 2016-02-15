$(function(){
	var submitIcon=$(".icon-search");
	var inputBox=$(".search");
	var searchBox=$(".search-bar");
	var isOpen=false;
	submitIcon.click(function(){
		if(isOpen == false){
			searchBox.addClass('search-bar-open');
			inputBox.focus();
			isOpen=true;
		}
		else{
			searchBox.removeClass('search-bar-open');
			inputBox.blur();
			isOpen=false;
		}
	});
	submitIcon.mouseup(function(){
		return false;
	});
	searchBox.mouseup(function(){
		return false;
	});
	$(document).mouseup(function(){
		if(isOpen ==true){
			$('.icon-search').css('display','inline-block');
			submitIcon.click();
		}
	})
	$("#search").focus();
	$("form").on("submit",function(event){
		event.preventDefault();
  		var userInput=$("#search").val().trim();
  		if(userInput==''){
  			userInput="haven't typed in the search box";
  		}
  		$("#repeater").text(userInput+"?");
  		
  		$("#search").val('');
	});
	
	function userEnter(){
		var userInput=$(".search").val().trim();
		if(userInput==""){
			userInput="haven't searched";
		}
		if(userInput !==0){
			$("#repeater").text(userInput+"?");
			$(".icon-search").css('display','none');
		}
		else{
			$('.icon-search').css('display','block');
		}
	}
});