const universityByRegion = (region) => {
    let query = {
        "aggs": {
          "2": {
            "terms": {
              "field": "Region",
              "order": {
                "_count": "desc"
              },
              "size": 10
            },
            "aggs": {
              "3": {
                "terms": {
                  "field": "School Name",
                  "order": {
                    "3-orderAgg": "desc"
                  },
                  "size": 400
                },
                "aggs": {
                  "4": {
                    "terms": {
                      "field": "Starting Median Salary",
                      "order": {
                        "_count": "desc"
                      },
                      "size": 5
                    }
                  },
                  "3-orderAgg": {
                    "max": {
                      "field": "Starting Median Salary"
                    }
                  }
                }
              }
            }
          }
        },
        "size": 0,
        "stored_fields": [
          "*"
        ],
        "script_fields": {},
        "docvalue_fields": [],
        "_source": {
          "excludes": []
        },
        "query": {
          "bool": {
            "must": [],
            "filter": [
              {
                "bool": {
                  "should": [
                    {
                      "match_phrase": {
                        "Region": ""+region
                      }
                    }
                  ],
                  "minimum_should_match": 1
                }
              },
              {
                "bool": {
                  "should": [
                    {
                      "match_phrase": {
                        "Region": "California"
                      }
                    }
                  ],
                  "minimum_should_match": 1
                }
              }
            ],
            "should": [],
            "must_not": []
          }
        }
      }

    return query
}