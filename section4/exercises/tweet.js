/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }

  addComment(comments) {
    this.comments.push(comments);
  }

  addLikes() {
    this.numberOfLikes++;
  }

};

var tweet1 = new Tweet('Adam', 'Hello, World!', '12:20 PM', 30, ['Nice tweet!', 'Keep up the good work.']);
console.log(tweet1);

tweet1.addComment('How did you tweet that?');
tweet1.addLikes();
console.log(tweet1);

var tweet2 = new Tweet('John', 'My favorite team is the St. Louis Cardinals', '11:30 AM', 800, ['Go Cards!', 'Cubs are better!']);
console.log(tweet2);

tweet2.addComment('Who is your favorite player on the Cardinals?')
tweet2.addLikes();
console.log(tweet2);
