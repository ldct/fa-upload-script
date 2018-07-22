const s3Podcast = require("s3-podcast");
const fs = require('fs');

const testFolder = './tests/';

const filenames = fs.readdirSync('./pack1').map(file => {
    if (file.endsWith('.mp3')) {
        return file;
    } else {
        return null;
    }
}).filter((x) => x !== null);

console.log(filenames);

const items = filenames.map((filename) => {
    return {
    'title': filename,
    'description': filename.replace(/_/g, ' ').replace('.mp3', ''),
    'localPath': "./pack1/" + filename,
    'pubDate': new Date("2006-11-11T00:00:00Z"),
}});

const data = {
  title: "Pack 1",
  description: "Pack 1.",
  items: items,
};

const bucketName = "xuanji.fa-podcast.pack1";

s3Podcast(bucketName, data, console);
