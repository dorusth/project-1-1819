function dataFilter(stream){
	console.log(stream);
	let newData = [];
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
	console.log(newData);
	return newData
}

export default dataFilter;
