
function getOption(e) {
	e.preventDefault();
	control = document.getElementById('control').options[control.selectedIndex].text;
	region = document.getElementById('region').options[region.selectedIndex].text;
	type = document.getElementById('type').options[type.selectedIndex].text;
	reading = document.getElementById('reading').options[reading.selectedIndex].text;
	writing = document.getElementById('writing').options[writing.selectedIndex].text;
	math = document.getElementById('math').options[math.selectedIndex].text;
	console.log(control)
	console.log(universityByRegion(region))


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
	console.log(words.aggregations)
	//var data = JSON.parse()
}