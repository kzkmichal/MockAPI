let express = require("express");
let cors = require('cors');
let app = express();

app.use(cors());

app.get("/data", (req, res, next) => {
  res.json(data);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

let data = [
    {
      "id": 1,
      "url": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      "title": "USA dream",
      "rate": 4.4,
      "duration": 10,
      "numberOfCountries": 1,
      "oldPrice": "500",
      "newPrice": "300",
      "currency": "£",
      "isPopular": "true"
    },
    {
      "id": 2,
      "url": "https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      "title": "Kapadocia",
      "rate": 4.5,
      "duration": 7,
      "numberOfCountries": 1,
      "oldPrice": "500",
      "newPrice": "300",
      "currency": "£",
      "isPopular": "true"
    },
    {
      "id": 3,
      "url": "https://images.unsplash.com/photo-1505832018823-50331d70d237?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      "title": "Scotland Tour",
      "rate": 4.6,
      "duration": 10,
      "numberOfCountries": 1,
      "oldPrice": "500",
      "newPrice": "300",
      "currency": "£",
      "isPopular": "true"
    },
    {
      "id": 4,
      "url": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      "title": "Thailand Resort",
      "rate": 3,
      "duration": 14,
      "numberOfCountries": 1,
      "oldPrice": "500",
      "newPrice": "300",
      "currency": "£"
    },
    {
      "id": 5,
      "url": "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      "title": "Grand Canyon",
      "rate": "4",
      "duration": 3,
      "numberOfCountries": 1,
      "oldPrice": "500",
      "newPrice": "300",
      "currency": "£"
    },
    {
      "id": 6,
      "url": "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      "title": "Alps Group Trip ",
      "rate": 4,
      "duration": 14,
      "numberOfCountries": 3,
      "oldPrice": "500",
      "newPrice": "300",
      "currency": "£"
    },
    {
      "id": 7,
      "url": "https://images.unsplash.com/photo-1621112904887-419379ce6824?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      "title": "Rustical",
      "rate": 4,
      "duration": 1,
      "numberOfCountries": 1,
      "oldPrice": "500",
      "newPrice": "300",
      "currency": "£"
    },
    {
      "id": 8,
      "url": "https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      "title": "Beach Party",
      "rate": 4.5,
      "duration": 1,
      "numberOfCountries": 1,
      "oldPrice": "500",
      "newPrice": "300",
      "currency": "£"
    },
    {
      "id": 9,
      "url": "https://images.unsplash.com/photo-1498503403619-e39e4ff390fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      "title": "Luxury Greece",
      "rate": 4.7,
      "duration": 7,
      "numberOfCountries": 1,
      "oldPrice": "500",
      "newPrice": "300",
      "currency": "£"
    }
]
  