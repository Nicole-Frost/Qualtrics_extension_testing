define(['pipAPI', 'https://baranan.github.io/minno-tasks/quiat8.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
        category1 : {
            name : 'Fat people', //Will appear in the data.
            title : {
                media : {word : 'Fat people'}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
            stimulusMedia : [ //Stimuli content as PIP's media objects
                {image: 'fatman1.jpg'},
                {image: 'fatman3.jpg'},
                {image: 'fatman4.jpg'},
				{image: 'fatman5.jpg'},
                {image: 'fatman6.jpg'},                 
				{image: 'fatwoman1.jpg'},
                {image: 'fatwoman2.jpg'},
                {image: 'fatwoman3.jpg'},
                {image: 'fatwoman4.jpg'},
                {image: 'fatwoman6.jpg'}     
    	    ],
    		//Stimulus css (style)
    		stimulusCss : {color:'#31940F','font-size':'2.3em'}
        },    
        category2 :    {
            name : 'Thin people', //Will appear in the data.
            title : {
                media : {word : 'Thin people'}, //Name of the category presented in the task.
                css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
                height : 4 //Used to position the "Or" in the combined block.
            }, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
            {image: 'thinman1.jpg'},
            {image: 'thinman2.jpg'},
            {image: 'thinman3.jpg'},
            {image: 'thinman5.jpg'},
            {image: 'thinman6.jpg'},                 
            {image: 'thinwoman1.jpg'},
            {image: 'thinwoman2.jpg'},
            {image: 'thinwoman3.jpg'},
            {image: 'thinwoman5.jpg'},
            {image: 'thinwoman6.jpg'} 
        		], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://github.com/Nicole-Frost/Qualtrics_extension_testing.git/images/'
		} 
	});
});
