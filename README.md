# Project 1 @cmda-minor-web · 2018-2019

## Search the music collection of the OBA

The OBA has a broad collection of cd's, but it doesn't provide an easy way to listen to fragments of the albums for it's users.

My solution is a webApp which lets the user search for cd's by using the barcode and RFID chips on the cd's to find more info on the cd.


<!-- Add a link to your live demo in GitHub Pages 🌐-->
## Live demo
[Live demo](https://dorusth.github.io/project-1-1819/) | [Repo](https://github.com/dorusth/project-1-1819 )

<!-- ☝️ replace this description with a description of your own work -->
## OBA API
In this project i'm making use of the OBA API. To gt data from this API i'm using the [OBA wrapper](https://github.com/maanlamp/OBA-wrapper)

<!-- Add a nice image here at the end of the week, showing off your shiny frontend 📸 -->
![app](app.png)

<!-- Maybe a table of contents here? 📚 -->
## table of contents
- [Installation](#Installation)
- [Features](#Features)
- [API](#API)
- [Filter](#Filter)

<!-- How about a section that describes how to install this project? 🤓 -->
## Installation
this project doesn't have any dependencties so you can clone and run it with:
```bash
$ git clone https://github.com/dorusth/project-1-1819.git
```
and/or download the files and open the index.html file

<!-- ...but how does one use this project? What are its features 🤔 -->
## Features
- Search cd's
- Scan cd barcodes
- Scan cd RFID tags
- Data filter fro cd's

<!-- What external data source is featured in your project and what are its properties 🌠 -->
## API
For this project the [OBA API](https://zoeken.oba.nl/api/v1/) as data source.
By default the API only returns 20 entities with each request
to request the data i've used the [OBA wrapper](https://github.com/maanlamp/OBA-wrapper).

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->
## Filter
The OBA API doesn't contain a filter for music cd's by default.
Becaus of this i've written a filter which checks the amount of items the and checks the formats and filters out the audiobooks.
```javascript
function dataFilter(stream){
	console.log(stream);
	let newData = [];
	if(stream.length){
		for (const obj in stream){
			let list = [];
			let item = stream[obj].formats.format;
			for(const name in item){
				list.push(item[name]._text);
			}
			if(!list.includes("audiobook")){
				newData.push(stream[obj]);
			}
		}
	}else{
		let list = [];
		let item = stream.formats.format;
		for(const name in item){
			list.push(item[name]._text);
		}
		if(!list.includes("audiobook")){
			newData.push(stream);
		}
	}
	console.log(newData);
	return newData
}
```

[MIT](LICENCE) © [Dorus ten Haaf](https://dorustenhaaf.com)
