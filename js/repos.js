function getRepos() {

	fetch('https://api.github.com/users/shallowbug/repos?sort=updated&per_page=1000').then(function (response) {

		if(!response.ok){return Promise.reject(response);}

		return response.json();

	}).then(function (data) {

		showRepos(data);

	}).catch(function (err) {

		const apiErr = '<div class="err">There was an API error.</div>';
		const apiWrap = "repos";
		showErr(apiWrap, apiErr);

	});

	function showRepos(repos){
		const repoList = repos;

		function displayRepo() {
			repos.forEach(function(repo) {
				const langUrl = repo.languages_url;
				let lang = [];

				fetch(langUrl)
				.then( response => response.json() )
				.then(function( response ){
					lang = Object.keys(response);
					genHTML(repo, lang);
				}).catch(function (){
					lang = ['no data'];
					genHTML(repo, lang);
				});

				function genHTML(repo, lang){
				  	let repoItem =`<li class="repo">
					    <h3>${repo.name}</h3>
					    <p>
					    	<b>url:</b> ${repo.html_url}<br />`;
					if(repo.fork){
						repoItem += `<b>fork</b><br />`;
					};
					repoItem += `<b>Languages:</b> ${lang.join(", ")} `;
					repoItem +=`</p>
						<p>${repo.description}</p>
				    	</li>`;
				    console.log(lang);
				    document.getElementById("repoList").innerHTML += repoItem;
				}
			});
		};

		displayRepo();
	};
};

function showErr(tagID, err){
	console.warn(err);
	document.getElementById(tagID).innerHTML = err;
};

getRepos();