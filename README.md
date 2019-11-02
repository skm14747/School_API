## Clone the repository, install node packages and verify routes locally

//on local

git clone https://skm14747@bitbucket.org/skm14747/cubereum_school_api.git

cd cubereum_school_api

npm install

npm start

## File organisation


└── node_modules

└── data  
--------└──schoolData.json  

└── models  
--------└──school.js

└── routes

--------└──school.js

└── helpers

--------└──csvToJsonConverter.js 

└── package-lock.json

└── package.json

└── server.js


## API
#### `GET http://localhost:5000/`
This endpoint will fetch all the data
#### `GET http://localhost:5000/?search=keyword`
This endpoint will search and fetch all the data based on the given keyword in the query string.
#### `GET http://localhost:5000/?search=keyword&sortby=schoolname_asc`
This endpoint will search and fetch all the data based on the given keyword in the query string and will order all the data based on below keywords

| Sort fields      | Description    |
| --------|---------|
| schoolname_asc  | This will sort data in ascending order by school name   |
| schoolname_desc | This will sort data in descending order by school name |
| pincode_asc  | This will sort data in ascending order by school name   |
| pincode_desc | This will sort data in descending order by school name |
| medofinst_asc  | This will sort data in ascending order by medium_of_inst   |
| medofinst_desc | This will sort data in descending order by medium_of_inst |

###  Sample Response of above request


    {
    "filters": {
        "category": [
            "Upper Primary",
            "Lower Primary"
        ],
        "gender": [
            "co-ed"
        ],
        "medium_of_inst": [
            "kannada",
            "urdu"
        ]
    },
    "data": [
        {
            "block": "south-3",
            "cluster": "konanakunte",
            "schoolid": "32457",
            "schoolname": "GKHPS  HARINAGAR",
            "category": "Upper Primary",
            "gender": "co-ed",
            "medium_of_inst": "kannada",
            "address": "Harinagar, Bommanahalli, Beside Ram Nagar",
            "area": "Harinagar Bommanahalli",
            "pincode": "",
            "landmark": "Next to Ram Mandir",
            "busroutes": ""
        },
        {
            "block": "south-3",
            "cluster": "konanakunte",
            "schoolid": "32464",
            "schoolname": "GULPS HARINAGAR",
            "category": "Lower Primary",
            "gender": "co-ed",
            "medium_of_inst": "urdu",
            "address": "Harinagar, Bangalore South-2",
            "area": "Harinagar",
            "pincode": "560002",
            "landmark": "Behind Om Shakthi Temple",
            "busroutes": "215 A"
        }
    ]
}




