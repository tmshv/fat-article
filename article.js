/**
 * Core object represents the article item.
 * @param {Object} params object with article fields.
 */
function Article (params) {
	for(var i in params){
		this[i] = params[i];
	}
}
module.exports = Article;

Article.create = function(i){
	if(i instanceof Array){
		var out = [];
		i.forEach(function(item){
			out.push(create(item));
		});
		return out;
	}else{
		return create(i);
	}
}

Article.prototype.hasCategory = function(category){
	if(!this.categories) return false;
	return this.categories.indexOf(category) > -1;
}

function create(item){
	var article = new Article();
	article.sourceFeedObject = item;
	article.title = item.title;
	article.url = item.link;
	article.description = item.description;
	article.summary = item.summary;
	article.date = item.date;
	article.id = item.guid;
	article.author = item.author;
	article.categories = item.categories;
	return article;
}