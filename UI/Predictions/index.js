let collegeData = []

function getOption(e) {
	e.preventDefault();
	control = document.getElementById('control').options[control.selectedIndex].text;
	region = document.getElementById('region').options[region.selectedIndex].text;
	type = document.getElementById('type').options[type.selectedIndex].text;
	reading = document.getElementById('reading').options[reading.selectedIndex].text;
	writing = document.getElementById('writing').options[writing.selectedIndex].text;
	math = document.getElementById('math').options[math.selectedIndex].text;
	//Store a list of promises
	let promiseList = []
	//Append the promises
	promiseList.push(getESData("salariesbyregion", universityByRegion(region)))
	promiseList.push(getESData("salariesbycollegetype", universityByType(type)))
	promiseList.push(getESData("collegetuitiondata", universityByTuitionAndSATAndControlByInstitution(30000,
		15000, 500, 500, 500, control
	)))
	//Collect the results
	Promise.all(promiseList).then(([regionData, typeData, tuitionData]) => {
		// console.log(regionData)
		// console.log(typeData)
		// console.log(tuitionData)
		var indexes = [2, 3, 4, 5, 7, 8, 9];
		loopThrough(JSON.parse(tuitionData).aggregations, indexes, 0);
		console.log(collegeData)
	}).catch((error) => {
		console.log(error)
	})
}

function parseQueryResult(e) {
	e.preventDefault();
	//var fs = require('fs');
	//var data = fs.readFileSync('result3.json', 'utf8');
	var words = JSON.parse(`{
		"_shards": {
			"failed": 0,
			"skipped": 0,
			"successful": 1,
			"total": 1
		},
		"aggregations": {
			"2": {
				"buckets": [
					{
						"3": {
							"buckets": [
								{
									"4": {
										"buckets": [
											{
												"5": {
													"buckets": [
														{
															"7": {
																"buckets": [
																	{
																		"8": {
																			"buckets": [
																				{
																					"9": {
																						"buckets": [
																							{
																								"doc_count": 1,
																								"key": 0
																							}
																						],
																						"doc_count_error_upper_bound": 0,
																						"sum_other_doc_count": 0
																					},
																					"doc_count": 1,
																					"key": 0
																				}
																			],
																			"doc_count_error_upper_bound": 0,
																			"sum_other_doc_count": 0
																		},
																		"doc_count": 1,
																		"key": 0
																	}
																],
																"doc_count_error_upper_bound": 0,
																"sum_other_doc_count": 0
															},
															"doc_count": 1,
															"key": 30193
														}
													],
													"doc_count_error_upper_bound": 0,
													"sum_other_doc_count": 0
												},
												"doc_count": 1,
												"key": "Pennsylvania"
											}
										],
										"doc_count_error_upper_bound": 0,
										"sum_other_doc_count": 0
									},
									"doc_count": 1,
									"key": "Pennsylvania College of Technology"
								},
								{
									"4": {
										"buckets": [
											{
												"5": {
													"buckets": [
														{
															"7":{
																"buckets": [
																	{
																		"8": {
																			"buckets": [
																				{
																					"9": {
																						"buckets": [
																							{
																								"doc_count": 1,
																								"key": 485
																							}
																						],
																						"doc_count_error_upper_bound": 0,
																						"sum_other_doc_count": 0
																					},
																					"doc_count": 1,
																					"key": 490
																				}
																			],
																			"doc_count_error_upper_bound": 0,
																			"sum_other_doc_count": 0
																		},
																		"doc_count": 1,
																		"key": 470
																	}
																],
																"doc_count_error_upper_bound": 0,
																"sum_other_doc_count": 0
															},
															"doc_count": 1,
															"key": 30150
														}
													],
													"doc_count_error_upper_bound": 0,
													"sum_other_doc_count": 0
												},
												"doc_count": 1,
												"key": "Pennsylvania"
											}
										],
										"doc_count_error_upper_bound": 0,
										"sum_other_doc_count": 0
									},
									"doc_count": 1,
									"key": "Pennsylvania State University-Penn State Schuylkill"
								}
							],
							"doc_count_error_upper_bound": 0,
							"sum_other_doc_count": 0
						},
						"doc_count": 2,
						"key": "Public"
					}
				],
				"doc_count_error_upper_bound": 0,
				"sum_other_doc_count": 0
			}
		},
		"hits": {
			"hits": [],
			"max_score": null,
			"total": {
				"relation": "eq",
				"value": 2
			}
		},
		"timed_out": false,
		"took": 5
	}`);
	//	console.log(words.aggregations[2].buckets)
	var indexes = [2, 3, 4, 5, 7, 8, 9];
	loopThrough(tuitionData.aggregations, indexes, 0);

	// for (var i = 0; i < words.aggregations[2].buckets.length; i++) {
	// 	console.log(words.aggregations[2].buckets[i])
	// 	result = words.aggregations[2].buckets[i];
	// 	console.log(result[3].buckets)
	// }
	//var data = JSON.parse()
}
let tmp = []
function loopThrough(content, indexes, index) {
	if (index === 4) {
		//	console.log(content[index].key);
		// console.log(content[index]);

	}
	// console.log("index: " + index)

	if (index == indexes.length) {
		collegeData.push(tmp)
		tmp = [tmp[0]]
		return;

	}


	for (var i = 0; i < content[indexes[index]].buckets.length; i++) {
		//console.log(content[index].buckets[i])
		result = content[indexes[index]].buckets[i];

		// console.log(result.key)
		tmp.push(result.key)
		// collegeData[i] = [...collegeData[i], result.key]

		loopThrough(result, indexes, index + 1)

	}
}
// function loopThrough(content, indexes, index) {
// 	// if (index === 4) {
// 	// 	console.log(content[index].key);
// 	// 	console.log(content[index]);
// 	// }
// 	//console.log("index: " + index)
// 	// if (index === 6) {
// 	// 	return;
// 	// 	//	index = index + 1;
// 	// 	//console.log("index : " + index);
// 	// }
// 	if (typeof content[index] === 'undefined' || content[index] === null)
// 		return;
// 	// for(var index =0;index<indexes.length;index++){

// 	// }

// 	for (var i = 0; i < content[index].buckets.length; i++) {
// 		//console.log(content[index].buckets[i])
// 		result = content[index].buckets[i];

// 		console.log(result.key)


// 		// while (typeof content[index] === 'undefined' || content[index] === null)
// 		// 	index++;
// 		if (index === 5) {
// 			index = index + 1;
// 			//console.log("index : " + index);
// 		}
// 		loopThrough(result, indexes, index + 1)

// 	}
// }