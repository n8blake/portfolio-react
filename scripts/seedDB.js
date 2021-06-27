const mongoose = require("mongoose");
const db = require("../models");
const PortfolioItem = db.PortfolioItem;

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/portfolio-n8blake"
);

const PORTFOLIO_ITEMS = [
	{'name':'Radian Rule',
	'description':'A simple app that can aid in determining the required angle between two objects when the desired lateral separation and current distance between the two objects is know. This is useful in maritime operations such as stationing.',
	'link':'https://apps.apple.com/us/app/radian-rule/id1487263442#?platform=iphone',
	'image':'Radian-Rule-1024.png',
	'badges':[{
		'label':'Download on App Store',
		'showLabel':false,
		'color':'#000',
		'image':'Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg',
		'link':'https://apps.apple.com/us/app/radian-rule/id1487263442#?platform=iphone'
	}],
	'screenShots':[{
		'image':'radian_rule_screen.png',
	}],
	},
	{'name':'Weather App',
	'description':'A web app that uses the OpenWeather API to display general weather data.',
	'link':'https://github.com/n8blake/WeatherApp',
	'github':'https://github.com/n8blake/WeatherApp',
	'image':'WeatherApp-1024.png',
	'badges':[{
		'label':'View on GitHub',
		'showLabel':true,
		'color':'#000',
		'link':'https://github.com/n8blake/WeatherApp'
		},
		{
		'label':'View Live Demo',
		'showLabel':true,
		'color':'#000',
		'link':'https://n8blake.github.io/WeatherApp/'
		}
		],
	'screenShots':[{
		'image':'weather_app_screen.png',
	}],
	},
	{'name':'Bev-Films',
	'description':'This web application delivers recommended drink pairings for movies and tv series.',
	'link':'https://n8blake.github.io/bev-films/',
	'github':'https://github.com/n8blake/bev-films',
	'image':'bev-films-1024.png',
	'badges':[{
		'label':'View on GitHub',
		'showLabel':true,
		'color':'#000',
		'link':'https://github.com/n8blake/bev-films'
		},
		{
		'label':'View Live Demo',
		'showLabel':true,
		'color':'#000',
		'link':'https://n8blake.github.io/bev-films/'
		}
		],
	'screenShots':[{
		'image':'Bev-Films_Demo.png',
	}],
	},
];

PortfolioItem
    .remove({})
    .then(() => PortfolioItem.collection.insertMany(PORTFOLIO_ITEMS))
    .then(data => {
        console.log(data.result.n + " records insterted!");
        process.exit(0);
    })
    .catch(error => {
        console.error(error);
        process.exit(1);
    });