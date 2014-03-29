var should = require("should");
var Article = require("../article");

function getSampleArticle () {
	return {
		title: "Sample article",
		description: "This field contains sample description",
		url: "http://sample.com/feed/sample-post",
		guid: "http://sample.com/feed/sample-post",
		categories: ["sample", "interesting"],
		author: "Sample Writer",
		date: new Date(2001, 8, 9)
	};
}
	
describe("Article" , function(){
	describe("create()", function(){
		it("should have source object link", function(){
			var a = Article.create(getSampleArticle());
			a.should.have.property("sourceFeedObject");
			a.sourceFeedObject.should.have.property("title", "Sample article");
			a.sourceFeedObject.should.have.property("description", "This field contains sample description");
			a.sourceFeedObject.should.have.property("url", "http://sample.com/feed/sample-post");
			a.sourceFeedObject.should.have.property("guid", "http://sample.com/feed/sample-post");
			a.sourceFeedObject.should.have.property("author", "Sample Writer");
		});

		it("should work with single item", function(){
			var a = Article.create(getSampleArticle());
			a.should.have.property("title", "Sample article");
			a.sourceFeedObject.should.have.property("description", "This field contains sample description");
			a.sourceFeedObject.should.have.property("url", "http://sample.com/feed/sample-post");
			a.sourceFeedObject.should.have.property("guid", "http://sample.com/feed/sample-post");
			a.sourceFeedObject.should.have.property("author", "Sample Writer");
		});

		it("should work with list of items", function(){
			var a = Article.create([
				getSampleArticle(),
				getSampleArticle(),
				getSampleArticle(),
			]);

			a.should.be.an.instanceOf(Array);
			a.length.should.equal(3);
			a[0].should.have.property("title", "Sample article");
			a[0].sourceFeedObject.should.have.property("description", "This field contains sample description");
			a[0].sourceFeedObject.should.have.property("url", "http://sample.com/feed/sample-post");
			a[0].sourceFeedObject.should.have.property("guid", "http://sample.com/feed/sample-post");
			a[0].sourceFeedObject.should.have.property("author", "Sample Writer");

			a[1].should.have.property("title", "Sample article");
			a[1].sourceFeedObject.should.have.property("description", "This field contains sample description");
			a[1].sourceFeedObject.should.have.property("url", "http://sample.com/feed/sample-post");
			a[1].sourceFeedObject.should.have.property("guid", "http://sample.com/feed/sample-post");
			a[1].sourceFeedObject.should.have.property("author", "Sample Writer");

			a[2].should.have.property("title", "Sample article");
			a[2].sourceFeedObject.should.have.property("description", "This field contains sample description");
			a[2].sourceFeedObject.should.have.property("url", "http://sample.com/feed/sample-post");
			a[2].sourceFeedObject.should.have.property("guid", "http://sample.com/feed/sample-post");
			a[2].sourceFeedObject.should.have.property("author", "Sample Writer");
		});
	});

	describe("hasCategory()", function(){
		it("should return `true` for existing category and `false` instead", function(){
			var a = Article.create(getSampleArticle());
			a.hasCategory("interesting").should.be.true;
			a.hasCategory("missing").should.be.false;
		});
	});
});