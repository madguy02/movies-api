### Movies API

#### Steps to start application

- git clone <repo>
- cd /movies-api
- yarn install
- yarn run start

#### Request Endpoint:

http://localhost:3005/movies/selection

#### Request Schema:

```
{
	"movies": [
		{
			"movieName": "Bala",
			"startDate": "1/6/2020",
			"endDate": "1/31/2020"
		},

		{
			"movieName": "Rock",
			"startDate": "1/20/2020",
			"endDate": "1/30/2020"
		},
		{
			"movieName": "Policy Maker",
			"startDate": "1/29/2020",
			"endDate": "2/16/2020"
		}
    ]
}

```
Start Date and End Date should be in the form of - month/day/year



