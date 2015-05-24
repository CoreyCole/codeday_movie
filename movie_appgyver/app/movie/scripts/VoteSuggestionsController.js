angular
  .module('movie')
  .controller('VoteSuggestionsController', function($scope, supersonic) {

	$scope.init = function() {
		var movie_data = [{"rating": "PG-13 (for some sexual situations, language and a brief intense image)", "genres": ["Drama", "Sports & Fitness", "Comedy"], "description": " Gerard Butler, Jessica Biel, Uma Thurman, Catherine Zeta-Jones and Dennis Quaid star in Playing for Keeps, a romantic comedy about a charming, down-on-his luck former soccer star (Butler) who returns home to put his life back together. Looking for a way to rebuild his relationship with his son, he gets roped into coaching the boy's soccer team. But his attempts to finally become an \"adult\" are met with hilarious challenges from the attractive \"soccer moms\" who pursue him at every turn. -- (C) ... Read more on rottentomatoes.com", "length": " 1 hr. 46 min.", "cast": [" Gerard Butler", " Jessica Biel", " Uma Thurman", " Catherine Zeta-Jones", " Dennis Quaid", " Judy Greer", " Noah Lomax", " James Tupper", " Abella Wyss", " Grant S. Goodman", " Grant Collins", " Aidan Potter", " Marlena Rayne Lerner", " Igbal Theba", " Sean O'Bryan", " Mike Martindale", " Jason George", " Emily Somers", " Gerry May", " Katia Gomez", " Gisella Marengo", " Cindy Creekmore", " Nicki Buggs", " Ritchie Montgomery", " Jon Mack", " Jesse De Luna", " Soumia Aakaboune", " Parker Eppes", " Joe Chrest", " Shanna Forrestall", " Aisha Kabia", " Jody Lambert", " Adam Kulbersh", " Kimberly Hawthorne", " Jason Winston George", " Iqbal Theba"], "imageLink": "http://resizing.flixster.com/QEWkwC0ZTIUgJblvi0CkCYTpvhI=/180x270/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/17/11171701_ori.jpg", "score": "3", "year": " (2012)", "name": " Playing for Keeps"},
			{"rating": "PG (for thematic elements and brief language)", "genres": ["Drama", "Romance", "Art House & International"], "description": " For his first film since the 1997 Hong Kong handover, auteur filmmaker Wong Kar-wai directs this moody period drama about unrequited love that, like his earlier work, swoons with romantic melancholy. Set in a Shanghaiese enclave in Hong Kong in 1962, the film centers on two young couples who rent adjacent rooms in a cramped and crowded tenement. Li-zhen (Maggie Cheung) works as a secretary in an export company while her husband's job at a Japanese multinational keeps him away on extended ... Read more on rottentomatoes.com", "length": " 1 hr. 37 min.", "cast": [" Tony Leung Chiu Wai", " Maggie Cheung", " Lai Chin", " Lai Chen", " Rebecca Pan", " Siu Ping-lam", " Chan Man-lui", " Tony Leung Karfai", " Lui Chun", " Ma Chin Chiang", " Kam-wah Koo", " Yu Hsien", " Chow Po-Chun"], "imageLink": "http://resizing.flixster.com/ynblxSslt6Dwhz2-upmthXZrTrM=/179x270/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/90/11179022_ori.jpg", "score": "90", "year": " (2001)", "name": " In the Mood for Love"},
			{"rating": "PG-13 (for mature thematic material involving sexual situations and for brief drug use)", "genres": ["Drama", "Romance"], "description": " The film examines the plight of a group of widows forced into poverty at a temple in the holy city of Varanasi. It focuses on a relationship between one of the widows, who wants to escape the social restrictions imposed on widows, and a man who is from the highest caste and a follower of Mahatma Gandhi. ... Read more on rottentomatoes.com", "length": " 1 hr. 57 min.", "cast": [" Lisa Ray", " John Abraham", " Seema Biswas", " Kalbushan Kharbadna", " Kulbhushan Kharbanda", " Sarala", " Manorama", " Waheeda Rehman", " Raghubir Yadav", " Vinay Pathak", " Vidula Javalgekar", " Gerson Da Cuhna", " Meera Biswas", " Gerson Da Cunha", " Deepa Mehta", " Buddhi Wickrama", " Ronica Sajnani", " Rinsly Weerarathne", " Iranganie Serasinghe", " Hermantha Gamage", " Rishma Malik", " Sanoja Bibile", " Dolly Ahluwalia Tewa...", " Daya Alwis", " Delon Weerasinghe", " Eric Seema", " Francisca Mudannayak...", " Mulchand Dedhia", " Isuru Navodya", " Niroshan Wijesinghe", " Vasanth Nath", " Mohan Jhangiani", " Zul Vilani"], "imageLink": "http://resizing.flixster.com/Y1XoPbqFvrWdMCfsoeiFYpMhYIQ=/180x266/dkpu1ddg7pbsk.cloudfront.net/movie/31/30/313096_ori.jpg", "score": "91", "year": " (2005)", "name": " Water"},
			{"rating": "R", "genres": ["Drama", "Romance", "Science Fiction & Fantasy"], "description": " After winning a cult following for several offbeat and darkly witty gore films, New Zealand director Peter Jackson abruptly shifted gears with this stylish, compelling, and ultimately disturbing tale of two teenage girls whose friendship begins to fuel an ultimately fatal obsession. Pauline (Melanie Lynskey) is a student in New Zealand who doesn't much care for her family or her classmates; she's a bit overweight and not especially gracious, but she quickly makes friends with Juliet (Kate ... Read more on rottentomatoes.com", "length": " 1 hr. 38 min.", "cast": [" Melanie Lynskey", " Kate Winslet", " Sarah Peirse", " Diana Kent", " Clive Merrison", " Simon O'Connor", " Jed Brophy", " Peter Elliott", " Peter Elliot", " Gilbert Goldie", " Geoffrey Heath", " Jean Marie Guerin", " Peter Jackson", " Stephen Reilly", " Kirsti Ferry", " Ben Skjellerup", " Darien Takle", " Elizabeth Moody", " Liz Mullane", " Moreen Eason", " Pearl Carpenter", " Lou Dobson", " Jesse Griffin", " Glen Drake", " Nick Farra", " Chris Clarkson", " Ray Henwood", " John Nicoll", " Mike Maxwell", " Raewyn Pelham", " Toni Jones", " Glenys Lloyd-Smith", " Wendy Watson", " Andrea Sanders", " Ben Fransham", " Jessica Bradley", " Alex Shirtcliffe-Sco...", " Barry Thomson", " Peter Anthony Elliot..."], "imageLink": "http://resizing.flixster.com/f5VBu-EtAhDDq8B8VPa3_WfZHHM=/110x150/dkpu1ddg7pbsk.cloudfront.net/movie/10/90/75/10907555_ori.jpg", "score": "94", "year": " (1994)", "name": " Heavenly Creatures"},
			{"rating": "Unrated", "genres": ["Documentary", "Musical & Performing Arts", "Special Interest"], "description": " The life of John Peterson, a farmer, artist and progressive thinker, as seen through family home movies, photographs, film and video. In the late 1960s, John turned his traditional family farm into an experiment of art and agriculture, making it a haven for hippies, radicals and artists. In the late 1980s, his local community ostracizes him as a devil worshipper/drug dealer, and the farm debt crisis of the time brings about the tragic collapse of his farm. Defying all odds, John eventually farms ... Read more on rottentomatoes.com", "length": " 1 hr. 22 min.", "cast": [" John Peterson", " Clay Boggs", " Bob Bower", " Jesus Briano", " Everett Bussy", " Robert Clothier", " Peggy Cox", " Dennis Dwyer", " John Edwards", " Lesley Freeman", " Isa Jacoby", " Arlene Larson", " Kate McAfee", " Brad Morelock", " Rosemary Palmer", " Robin Parr", " Anna Peterson", " Bob Scheffler", " Cynthia Scheffler", " Tom Spaulding", " Dave Tenenbaum"], "imageLink": "http://resizing.flixster.com/-EjJr50-F1Eb4G9s8hpmRy1f9hM=/110x150/dkpu1ddg7pbsk.cloudfront.net/movie/10/89/77/10897764_ori.jpg", "score": "88", "year": " (2007)", "name": " The Real Dirt on Farmer John"},
			{"rating": "R (for strong sci-fi action and violence, and for language)", "genres": ["Action & Adventure", "Science Fiction & Fantasy"], "description": " A sequel to the sci-fi action thriller that made him and star Arnold Schwarzenegger A-list Hollywood names, writer/director James Cameron upped the ante with this follow-up by employing a more sweeping storyline and cutting-edge special effects. Linda Hamilton returns as Sarah Connor, now a single mother to rebellious teen John Connor (Edward Furlong), during the late nineties. Having been informed by a time-traveling soldier in the first film that John will one day grow up to become humanity's ... Read more on rottentomatoes.com", "length": " 2 hr. 30 min.", "cast": [" Arnold Schwarzenegge...", " Linda Hamilton", " Edward Furlong", " Robert Patrick", " Earl Boen", " Joe Morton", " S. Epatha Merkerson", " Castulo Guerra", " Danny Cooksey", " Jenette Goldstein", " Leslie Hamilton Gaer...", " Xander Berkeley", " DeVaughn Walter Nixo...", " Leslie Hamilton Gear...", " Ken Gibbel", " Robert Winley", " Pete Schrum", " Shane Wilder", " Michael Edwards", " Jared Lounsberry", " Casey Chavez", " Ennalls Berl", " Don Lake", " Richard Vidan", " Tom McDonald", " Jim Palmer", " Gerard G. Williams", " Gwenda Deacon", " Don Stanton", " Dan Stanton", " Colin Patrick Lynch", " Noel Evangelisti", " Nikki Cox", " Lisa Brinegar", " Tony Simotes", " Diane Rodriguez", " Dalton Abbott", " Ron Young", " Charles Robert Brown", " Abdul Salaam El Raza...", " Abdul Salaam El Razz...", " Mike Muscat", " Dean Norris", " Charles Tamburro", " J. Rob Jordan", " Denney Pierce", " Mark Christopher Law...", " Terrence Evans", " Pat Kouri", " Van Ling", " Peter Kent", " Michael Biehn", " Nancy Fish"], "imageLink": "http://resizing.flixster.com/sKc-3qOa64rxXpfEsKbNqv6DeY0=/180x270/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/43/11174301_ori.jpg", "score": "92", "year": " (1991)", "name": " Terminator 2: Judgment Day"},
			{"rating": "R (adult situations/language, violence)", "genres": ["Mystery & Suspense", "Comedy"], "description": " The Guard is a comedic fish-out-of-water tale of murder, blackmail, drug trafficking and rural police corruption. Two policemen must join forces to take on an international drug- smuggling gang - one, an unorthodox Irish policeman and the other, a straitlaced FBI agent. Sergeant Gerry Boyle (Brendan Gleason) is an eccentric small-town cop with a confrontational and crass personality and a subversive sense of humor. A longtime policeman in County Galway, Boyle is a maverick with his own moral ... Read more on rottentomatoes.com", "length": " 1 hr. 36 min.", "cast": [" Brendan Gleeson", " Don Cheadle", " Rory Keenan", " Liam Cunningham", " David Wilmot", " Mark Strong (II)", " Fionnula Flanagan", " Dominique McElligott", " Sarah Greene", " Katarina Cas", " Wale Ojo", " Ronan Collins", " Conor Moloney", " Laura Hitchings", " Declan Mannion", " Sharon Kearney", " Laurence Kirlan", " Laurence Kinlan", " David Pearse", " Michael Og Lane", " Owen Sharpe", " Eamonn Olwill", " Yuyang Shields", " Mark O'Halloran", " Pat Shortt", " Gary Lydon", " Gay McKeon", " Mary Corcoran", " Darren Healy", " Giedrius Nagys", " Colm Gannon", " Dermot Healy", " Johnny McDonagh", " Dominick Hewitt", " Gary Robinson", " Paraic Nialand", " John Patrick Beirne", " Liam O'Conghaile", " Christopher Kilmarti..."], "imageLink": "http://resizing.flixster.com/nWDNuP6PCt6QW30L1SZ6IG97My4=/180x268/dkpu1ddg7pbsk.cloudfront.net/movie/11/15/84/11158465_ori.jpg", "score": "95", "year": " (2011)", "name": " The Guard"},
			{"rating": "PG (for mild peril)", "genres": ["Animation", "Kids & Family", "Comedy"], "description": " Set against the onslaught of the ice age -- and a world filled with wonder and danger -- the story revolves around three unforgettable characters: a wooly mammoth, a saber-toothed tiger, and a sloth, who unite to return a human baby to his tribe. ... Read more on rottentomatoes.com", "length": " 1 hr. 20 min.", "cast": [" Ray Romano", " John Leguizamo", " Denis Leary", " Goran Visnjic", " Jack Black", " Cedric the Entertain...", " Stephen Root", " Diedrich Bader", " Tara Strong", " Alan Tudyk", " Lorri Bagley", " Jane Krakowski", " Peter Ackerman", " P.J. Benjamin", " Josh Hamilton", " Chris Wedge", " Denny Dillon", " Mitzi McCall", " Kristen Johnston"], "imageLink": "http://resizing.flixster.com/G2PNS_GykbZtx_u_kQgBFuVkqFE=/180x265/dkpu1ddg7pbsk.cloudfront.net/movie/10/93/89/10938906_ori.jpg", "score": "77", "year": " (2002)", "name": " Ice Age"},
			{"rating": "G", "genres": ["Drama", "Kids & Family"], "description": " The 1993 remake of The Secret Garden is a rendition of the classic Frances Hodgon Burnett novel about a young girl (Kate Maberly) who discovers an abandoned garden on her uncle's large Victorian country estate, as well as an invalid cousin she didn't realize she had. With the help of a local boy, the girl sets out to restore the garden and, once it is blooming again, she discovers it has magical powers. ... Read more on rottentomatoes.com", "length": " 1 hr. 43 min.", "cast": [" Kate Maberly", " Maggie Smith", " Heydon Prowse", " Andrew Knott", " Laura Crossley", " John Lynch", " Walter Sparrow", " Ir\u00e8ne Jacob", " Karen Lindsay-Stewar...", " Frank Baker", " Arthur Spreckley", " Colin Bruce", " David Stoll"], "imageLink": "http://resizing.flixster.com/gTzdiyNoHr7AaIhyHdfkatvlZCY=/177x270/dkpu1ddg7pbsk.cloudfront.net/movie/11/15/28/11152871_ori.jpg", "score": "85", "year": " (1993)", "name": " The Secret Garden"}
		];

		for (var i = 0; i < movie_data.length; i++) {
			var score = parseInt(movie_data[i]["score"]);
			if (score > 50) {
				movie_data[i]["iconImageLink"] = "http://www.rottentomatoes.com/static/images/icons/fresh-16.png";
			} else {
				movie_data[i]["iconImageLink"] = "http://www.rottentomatoes.com/static/images/icons/splat-16.png";
			}
		}

		$scope.movies = movie_data;
		$scope.votes = {
			movies: []
		};
	};

	$scope.init();

	$scope.voteTapped = function() {
		var waitingView = new supersonic.ui.View("movie#waitingForViewers2");
		supersonic.ui.layers.push(waitingView);
	};

	$scope.showMovie = function(index) {
		var boxes = document.querySelectorAll(".checkz");
		for (var i = 0; i < boxes.length; i++) {
			if (boxes[i].checked) {
				$scope.votes.movies.push(boxes[i].checkboxValue);
			}
		}
		$scope.test = $scope.votes.movies;
	};

	$scope.deleteMovie = function(index) {
		$scope.movies.splice(index,1);
	};
  });
