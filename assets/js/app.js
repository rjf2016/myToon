$(document).ready(function() {

	console.log("Document loaded!");

	//Assigning a div with ID testingBtnDiv to a variable, that will be used to hold our buttons..
	//when a user hovers over an image
	var testingBtnDiv = $('<div/>', {
		id: 'testingBtnDiv'
	});

	//Assiging a div with an ID 'overlay' to a variable, that will overlay an image when hovered over
	var imgOverlay = $('<div/>', {
		id: 'overlay',
	});

	//Assigning a button to a variable, giving it class & ID and text: 'lol'
	var lolButton = $('<button/>', {
		class: 'btn btn-default',
		id: 'lolButton',
		text: 'Lol'
	});
	//Assigning a button to a variable, giving it class & ID and text: 'lmao'
	var lmaoButton = $('<button/>', {
		class: 'btn btn-default',
		id: 'lmaoButton',
		text: 'Lmao'
    });
	//Assigning a button to a variable, giving it class & ID and text: 'rofl'
	var roflButton = $('<button/>', {
		class: 'btn btn-default',
		id: 'roflButton',
		text: 'Rofl' 
	});	
	//Current user profile pic (dumby data for the moment)
	var profilePicture = $('<img/>', {
		class: "img-circle",
		id: "modalTitleProfilePic",
		src: "http://www.electricferret.com/static/images/cbub/cbub_contender_image/3/2910/2910.jpg",
		height: '60px',
		width: '60px'

	});
	//Time since post, will be displayed in modal title
	var galleryTimeSincePostDiv = $('<div/>', {
		'id': 'galleryTimeSincePostDiv',
		text: '12d  ',
		'css' : {
			'text-transform' : 'lowercase'
		}


	});

	var profileInfo = {
		name: "Rick Fahey",
		username: "Ricker81",
		profilePic: profilePicture
	};

	var modalProfileNameHolder = $('<div/>', {
		"id": "modalProfileNameHolder"
	});





	//When a users cursor goes over an imageHolder, run the following function
	$('.imageHolder').mouseenter(function() {
		//assign this .imageHolder the class .activeImgHolder
		$(this).addClass('activeImgHolder');
		//remove any previous imgOverlay & testingBtnDiv to avoid repeats
		imgOverlay.remove();
		testingBtnDiv.remove();
		//append the imgOverlay to the activeImageHolder
		$('.imageHolder.activeImgHolder').append(imgOverlay);
		//append the testingBtnDiv to the imgOverlay (testingBtnDiv will hold our buttons)
		imgOverlay.append(testingBtnDiv);
		//finally append our pre-defined buttons to testingBtnDiv 
		testingBtnDiv.append(lolButton, lmaoButton, roflButton);
	});


	//When a users cursor leaves an imageHolder, run the following function
	$('.imageHolder').mouseleave(function() {
		//remove the class activeImgHolder from the imageHolder that was previously being hovered
		$(this).removeClass('activeImgHolder');
		//remove the overlay that was over the previously 'active' ImageHolder
		$('#overlay').remove();
	});

	

	//On click of .imageHolder
	$('.imageHolder').click(function() {
		//grab the image that is being clicked and set it to var selectedImage
		var selectedImage = $(this).children('img')[0];
		//grab the src of that selectedImage and set it to var selectedImageSource		
		var selectedImageSource = selectedImage.src
		//create an obj called imageBeingDisplayed, that will be passed the selected image src..
		//and will have a height and width of 400px
		var imageBeingDisplayed = $('<img/>', {
			"id": 'imageBeingDisplayed',
			"class": 'img-rounded',
			src: selectedImageSource,
			height: '400px',
			width: '500px'
		});
		//console.log the image that is being displayed
	    console.log(imageBeingDisplayed);
	    //empty the modal each time to avoid repeats
	    $('.modalImageHolder').empty();
	    //append (essentially) a copy of the clicked image to the modal body / modalImageHolder
	    $('.modalImageHolder').append(imageBeingDisplayed);

	    $('.modal-title').empty();
	    console.log(profileInfo.profilePic);
	    $('.modal-title').append(profileInfo.profilePic);



	    $('.modal-title').append(modalProfileNameHolder);


	    $('#modalProfileNameHolder').empty();
   		$('#modalProfileNameHolder').append(profileInfo.name);
   		$('#modalProfileNameHolder').append(galleryTimeSincePostDiv);
   		console.log(profileInfo);

	    //call .modal(); to display it
	    $('#myModal').modal();
	});	









		
});	

