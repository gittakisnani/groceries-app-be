export default function handler(req, res) {
    //Here we put the filter i guess....! Maybe not here we gonna see which way is BETTER
    if(req.method === 'GET') {
      res.status(200).json(data)
    }
}

const data = {
        categories: [
          {
            cat: "Fruits & Vegetables",
            catId: "1",
          },
          {
            cat: "Breads & Sweets",
            catId: "2",
          },
          {
            cat: "Frozen Seafoods",
            catId: "3",
          },
          {
            cat: "Raw Meat",
            catId: "4",
          },
          {
            cat: "Coffee & Teas",
            catId: "5",
          },
          {
            cat: "Milks & Dairies",
            catId: "6",
          },
          {
            cat: "Fast Foods",
            catId: "7",
          },
        ],
        products: [
          {
            name: 'Cameo Apple',
            desc: 'Cameo Apple is an American bicolor apple cultivar with a thin yellow peel and red stripes. Cameo apples have a subtly sweet flavor, rich creamy flesh, and a crisp fresh texture. These juicy apples are known for their natural resistance to browning, as well as their suitability for making applesauce and apple pie. The Cameo Apple was discovered in 1987 by the Caudle family as a chance seedling in their Dryden, Washington orchard.',
            rating: {
              "1": 120,
              "2": 11,
              "3": 12,
              "4": 18,
              "5": 7
            },
            sold: 200,
            all: 391,
            addedToBag: 0,
            hasDiscount: false,
            discountExpiryDate: null,
            price: 17.99,
            isLiked: false,
            cat: 'Fruits & Vegetables',
            recentlyViewed: false,
            mainImg:'https://images.unsplash.com/photo-1576179634586-d8c5c8ae5d49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            previewImg: {
              "1": 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
              "2": 'https://images.unsplash.com/photo-1645519115635-b80cd66cde3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
              "3": 'https://images.unsplash.com/photo-1569870499705-504209102861?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
              "4": 'https://images.unsplash.com/photo-1617235178117-a1f5fecb72bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
            }
          },
          {
            name: 'Mandarins',
            desc: 'Mandarins belong to the Citrus genus. It’s believed they originated in ancient China, which is how they got their name.Their peel is deep-orange, leathery, and protects the sweet, juicy segments inside. Mandarins grow on flowering small- to moderately-sized citrus trees. As they ripen, they change from a deep green to their recognizable orange color and grow to a width of about 1.6–3 inches (4–8 cm) (1Trusted Source, 2Trusted Source). You may hear mandarins referred to as “mandarin oranges,” but this is not an accurate description. Though they share an orange exterior, mandarins are a different species of citrus from oranges, which belong to Citrus sinensis (3Trusted Source).',
            rating: {
              "1": 17,
              "2": 20,
              "3": 29,
              "4": 33,
              "5": 10
            },
            sold: 220,
            all: 411,
            addedToBag: 0,
            hasDiscount: false,
            discountExpiryDate: null,
            price: 14.99,
            isLiked: false,
            cat: 'Fruits & Vegetables',
            recentlyViewed: false,
            mainImg:'https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
            previewImg: {
              "1": 'https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
              "2": 'https://images.unsplash.com/photo-1639126492619-314152b71c7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbmRhcmluZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
              "3": 'https://images.unsplash.com/photo-1608022757731-e7c2bc13819d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbmRhcmluZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
              "4": 'https://images.unsplash.com/photo-1649408418112-400bd22cf992?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG1hbmRhcmluZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            }
          },
          {
            name: 'Cavendish Bananas',
            desc: 'The most widely exported banana in the world, the Cavendish has a sturdy peel that travels well. Almost all bananas sold in the United States and Europe are this variety.',
            rating: {
              "1": 12,
              "2": 11,
              "3": 12,
              "4": 20,
              "5": 7
            },
            sold: 120,
            all: 212,
            addedToBag: 0,
            hasDiscount: false,
            discountExpiryDate: null,
            price: 23.99,
            isLiked: false,
            cat: 'Fruits & Vegetables',
            recentlyViewed: false,
            mainImg:'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFuYW5hc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            previewImg: {
              "1": 'https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFuYW5hc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
              "2": 'https://images.unsplash.com/photo-1589217157315-046ac1a3fca6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhbmFuYXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
              "3": 'https://images.unsplash.com/photo-1619893071414-adeb38c108fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJhbmFuYXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
              "4": 'https://images.unsplash.com/photo-1560522361-23b37e4ad4a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=282&q=80',
            }
          },
          {
            name: 'Yukon Gold Potatoes',
            desc: 'The Yukon Gold potato is one of the most popular potato varieties because it falls into the all-purpose category. Yukon Golds have thin gold skin that doesn\'t need to be peeled before mashing, and their creamy flesh has a sweet, buttery flavor. Use just about any cooking method for these gold potatoes and you won\'t be disappointed with the results. Because they\'re so versatile, Yukons are a popular option for restaurants and commercial kitchens.',
            rating: {
              "1": 17,
              "2": 20,
              "3": 29,
              "4": 33,
              "5": 10
            },
            sold: 220,
            all: 411,
            addedToBag: 0,
            hasDiscount: false,
            discountExpiryDate: null,
            price: 14.99,
            isLiked: false,
            cat: 'Fruits & Vegetables',
            recentlyViewed: false,
            mainImg:'https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG90YXRvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            previewImg: {
              "1": 'https://images.unsplash.com/photo-1635774855536-9728f2610245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
              "2": 'https://images.unsplash.com/photo-1573196444577-af471298e034?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG90YXRvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
              "3": 'https://images.unsplash.com/photo-1603048719539-9ecb4aa395e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG90YXRvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
              "4": 'https://images.unsplash.com/photo-1635847163737-c93e3d73bcc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBvdGF0b2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            }
          },
          {
            name: 'Strawberries',
            desc: 'Strawberries are a versatile and healthy fruit that has a portion size larger than most other fruit. Plus, even though they\'re sweet as can be, they\'re an excellent choice for people with diabetes or on a low-carb diet. "A serving of strawberries is one and a quarter cup which is equivalent to 15 grams of carbohydrate and three grams of fiber, making this a good fruit choice for people with diabetes," says Toby Smithson, RD registered dietitian, certified diabetes care and education specialist, founder of Diabetes EveryDay and author of Diabetes Meal Planning and Nutrition for Dummies',
            rating: {
              "1": 12,
              "2": 11,
              "3": 12,
              "4": 18,
              "5": 7
            },
            sold: 200,
            all: 391,
            addedToBag: 0,
            hasDiscount: false,
            discountExpiryDate: null,
            price: 18.99,
            isLiked: false,
            cat: 'Fruits & Vegetables',
            recentlyViewed: false,
            mainImg:'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RyYXdiZXJyaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            previewImg: {
              "1": 'https://images.unsplash.com/photo-1543158181-e6f9f6712055?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyYXdiZXJyaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
              "2": 'https://images.unsplash.com/photo-1592918489661-b098eb4e343c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3RyYXdiZXJyaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
              "3": 'https://images.unsplash.com/photo-1587393855524-087f83d95bc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3RyYXdiZXJyaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
              "4": 'https://images.unsplash.com/photo-1564518087238-8d82baa9d7cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0cmF3YmVycmllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            }
          },
          {
            name: 'Blueberries',
            desc: '"Once you pop, you just can\'t stop" should have been written about these blue beauties. It\'s easy to eat a handful (or several) in one sitting, but thankfully blueberries are just as healthy as they are delicious. Blueberries are full of antioxidants, and eating berries at least twice a week is an important part of the MIND Diet, a diet that has neuroprotective effects, explains registered dietitian Christina Iaboni, RD.',
            rating: {
              "1": 17,
              "2": 20,
              "3": 29,
              "4": 33,
              "5": 10
            },
            sold: 220,
            all: 411,
            addedToBag: 0,
            hasDiscount: false,
            discountExpiryDate: null,
            price: 14.99,
            isLiked: false,
            cat: 'Fruits & Vegetables',
            recentlyViewed: false,
            mainImg:'https://images.unsplash.com/photo-1594002348772-bc0cb57ade8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ymx1ZWJlcnJpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            previewImg: {
              "1": 'https://images.unsplash.com/photo-1587242155092-d126d2db782f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ymx1ZWJlcnJpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
              "2": 'https://images.unsplash.com/photo-1460400408855-36abd76648b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJsdWViZXJyaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
              "3": 'https://images.unsplash.com/photo-1597474561103-0773c378a1fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJsdWViZXJyaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
              "4": 'https://images.unsplash.com/photo-1584908125631-d537dc63120d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJsdWViZXJyaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            }
          },
          {
            name: 'Watermelon',
            desc: 'Cameo Apple is an American bicolor apple cultivar with a thin yellow peel and red stripes. Cameo apples have a subtly sweet flavor, rich creamy flesh, and a crisp fresh texture. These juicy apples are known for their natural resistance to browning, as well as their suitability for making applesauce and apple pie. The Cameo Apple was discovered in 1987 by the Caudle family as a chance seedling in their Dryden, Washington orchard.',
            rating: {
              "1": 12,
              "2": 11,
              "3": 12,
              "4": 18,
              "5": 7
            },
            sold: 200,
            all: 391,
            addedToBag: 0,
            hasDiscount: false,
            discountExpiryDate: null,
            price: 17.99,
            isLiked: false,
            cat: 'Fruits & Vegetables',
            recentlyViewed: false,
            mainImg:'https://images.unsplash.com/photo-1621961048737-a9993789e1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXJtZWxvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            previewImg: {
              "1": 'https://images.unsplash.com/photo-1595475207225-428b62bda831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0ZXJtZWxvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
              "2": 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0ZXJtZWxvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
              "3": 'https://images.unsplash.com/photo-1593558628703-535b2556320b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2F0ZXJtZWxvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
              "4": 'https://images.unsplash.com/photo-1625367601763-03c05b49937e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdhdGVybWVsb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            }
          },
          {
            name: 'Hawaiian Sweet Bread',
            desc: 'If you don’t love King Hawaiian sweet rolls, you may need to get your tastebuds checked. Those rolls are phenomenal – soft, sweet, and as pillowy as a cloud. With this recipe, you can make Hawaiian loaf bread that feels, tastes, and even smells the same.With its thin, brown layer of crust and light, white insides, this bread is always a hit.',
            rating: {
              "1": 12,
              "2": 11,
              "3": 12,
              "4": 18,
              "5": 7
            },
            sold: 200,
            all: 391,
            addedToBag: 0,
            hasDiscount: false,
            discountExpiryDate: null,
            price: 17.99,
            isLiked: false,
            cat: 'Breads & Sweets',
            recentlyViewed: false,
            mainImg:'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGF3YWlpYW4lMjBzd2VldCUyMGJyZWFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            previewImg: {
              "1": 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGF3YWlpYW4lMjBzd2VldCUyMGJyZWFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
              "2": 'https://images.unsplash.com/photo-1511629036492-6c07153d3e83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhhd2FpaWFuJTIwc3dlZXQlMjBicmVhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
              "3": 'https://images.unsplash.com/photo-1523314832514-41a5cbaefa51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGhhd2FpaWFuJTIwc3dlZXQlMjBicmVhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
              "4": 'https://images.unsplash.com/photo-1508616185939-efe767994166?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGhhd2FpaWFuJTIwc3dlZXQlMjBicmVhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            }
          },
          {
            name: 'Chocolate Zucchini Bread',
            desc: 'If you enjoy zucchini bread, wait until you try it with chocolate. This recipe takes everything you love most about zucchini bread – its moistness, sweetness, and chunkiness – and adds Dutch chocolate and semi-sweet chocolate chips to it.Each bite is more robust and chocolatey than the last. There’s no sweet-talking or getting around this one.This is pure, decadent cake, and no one will ever confuse it for bread.',
            rating: {
              "1": 17,
              "2": 20,
              "3": 29,
              "4": 33,
              "5": 10
            },
            sold: 220,
            all: 411,
            addedToBag: 0,
            hasDiscount: false,
            discountExpiryDate: null,
            price: 14.99,
            isLiked: false,
            cat: 'Breads & Sweets',
            recentlyViewed: false,
            mainImg:'https://images.unsplash.com/photo-1601654847729-b182ccbc09a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8enVjY2hpbmklMjBicmVhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            previewImg: {
              "1": 'https://images.unsplash.com/photo-1601654847729-b182ccbc09a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8enVjY2hpbmklMjBicmVhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
              "2": 'https://images.unsplash.com/photo-1601654847729-b182ccbc09a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8enVjY2hpbmklMjBicmVhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
              "3": 'https://images.unsplash.com/photo-1601654847729-b182ccbc09a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8enVjY2hpbmklMjBicmVhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
              "4": 'https://images.unsplash.com/photo-1601654847729-b182ccbc09a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8enVjY2hpbmklMjBicmVhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            }
          },
          {
            name: 'Pineapple Bread',
            desc: 'Because you’ll add one and a half cups of pineapples and juice to this bread, it’s one of the moistest quick breads you’ll ever make.I swear, every time I bite into it, I almost expect pineapple juice to run down my chin.It doesn’t, but it’s still spectacular, particularly if you enjoy sweets with a more tropical flavor.',
            rating: {
              "1": 12,
              "2": 11,
              "3": 12,
              "4": 20,
              "5": 7
            },
            sold: 120,
            all: 212,
            addedToBag: 0,
            hasDiscount: false,
            discountExpiryDate: null,
            price: 23.99,
            isLiked: false,
            cat: 'Breads & Sweets',
            recentlyViewed: false,
            mainImg:'https://images.unsplash.com/photo-1603379421561-6837bc0ee23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBpbmVhcHBsZSUyMGJyZWFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            previewImg: {
              "1": 'https://images.unsplash.com/photo-1603379421561-6837bc0ee23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBpbmVhcHBsZSUyMGJyZWFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
              "2": 'https://images.unsplash.com/photo-1603379421561-6837bc0ee23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBpbmVhcHBsZSUyMGJyZWFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
              "3": 'https://images.unsplash.com/photo-1603379421561-6837bc0ee23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBpbmVhcHBsZSUyMGJyZWFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
              "4": 'https://images.unsplash.com/photo-1603379421561-6837bc0ee23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBpbmVhcHBsZSUyMGJyZWFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            }
          },
          {
            name: 'Yukon Gold Potatoes',
            desc: 'This soft, thick bread is buttery and full of apples, and I could sit and eat it by the handfuls with just the bread itself. However, it also has streusel topping made of cinnamon and brown sugar and a generous spread of vanilla glaze icing on top of that. In short, this is some of the sweetest of all the sweet breads.You may want to pair it with a cup of black coffee or unsweetened tea to help offset all the sugar. ',
            rating: {
              "1": 17,
              "2": 20,
              "3": 29,
              "4": 33,
              "5": 10
            },
            sold: 220,
            all: 411,
            addedToBag: 0,
            hasDiscount: false,
            discountExpiryDate: null,
            price: 14.99,
            isLiked: false,
            cat: 'Breads & Sweets',
            recentlyViewed: false,
            mainImg:'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHV0Y2glMjBhcHBsZSUyMGJyZWFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            previewImg: {
              "1": 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHV0Y2glMjBhcHBsZSUyMGJyZWFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
              "2": 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHV0Y2glMjBhcHBsZSUyMGJyZWFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
              "3": 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHV0Y2glMjBhcHBsZSUyMGJyZWFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
              "4": 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHV0Y2glMjBhcHBsZSUyMGJyZWFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            }
          },
          {
            name: 'Braided Sweet Bread',
            desc: 'Everything you need to know about this scrumptious bread is right there in the name. It’s braided; it’s sweet; it’s bread.Put those three things together, and you’ll have a gorgeous, tasty treat.It’s perfectly golden-brown with a slightly crispy outer crust, but the inside is pillow-soft, light, and airy.It’s sweet, but not dessert sweet, meaning you can eat it as an appetizer or with dinner.',
            rating: {
              "1": 12,
              "2": 11,
              "3": 12,
              "4": 18,
              "5": 7
            },
            sold: 200,
            all: 391,
            addedToBag: 0,
            hasDiscount: false,
            discountExpiryDate: null,
            price: 18.99,
            isLiked: false,
            cat: 'Breads & Sweets',
            recentlyViewed: false,
            mainImg:'https://images.unsplash.com/photo-1592148121354-383fe3029e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3dlZXQlMjBicmVhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            previewImg: {
              "1": 'https://images.unsplash.com/photo-1592148121354-383fe3029e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3dlZXQlMjBicmVhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
              "2": 'https://images.unsplash.com/photo-1592148121354-383fe3029e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3dlZXQlMjBicmVhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
              "3": 'https://images.unsplash.com/photo-1592148121354-383fe3029e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3dlZXQlMjBicmVhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
              "4": 'https://images.unsplash.com/photo-1592148121354-383fe3029e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3dlZXQlMjBicmVhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            }
          },
          {
            name: 'Condensed Milk Bread',
            desc: 'These soft, fluffy rolls feel like clouds, and once you add the butter and condensed milk glaze, they’ll almost literally melt in your mouth.They’re sweet, but not overly so, and they taste great by themselves, with a tall glass of milk, or served with dinner.If you want to kick them up a notch, cover them with some homemade cinnamon butter.',
            rating: {
              "1": 17,
              "2": 20,
              "3": 29,
              "4": 33,
              "5": 10
            },
            sold: 220,
            all: 411,
            addedToBag: 0,
            hasDiscount: false,
            discountExpiryDate: null,
            price: 14.99,
            isLiked: false,
            cat: 'Breads & Sweets',
            recentlyViewed: false,
            mainImg:'https://images.unsplash.com/photo-1510504195284-a0afd26cae81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWlsayUyMGJyZWFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            previewImg: {
              "1": 'https://images.unsplash.com/photo-1510504195284-a0afd26cae81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWlsayUyMGJyZWFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
              "2": 'https://images.unsplash.com/photo-1510504195284-a0afd26cae81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWlsayUyMGJyZWFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
              "3": 'https://images.unsplash.com/photo-1510504195284-a0afd26cae81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWlsayUyMGJyZWFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
              "4": 'https://images.unsplash.com/photo-1510504195284-a0afd26cae81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWlsayUyMGJyZWFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            }
          },
          {
            name: 'Sweet Orange Bread',
            desc: 'You can have this incredible orange bread ready for the oven in about 5 to 10 minutes, and it’s so good, it doesn’t need a glaze.It requires fewer than ten ingredients to make, and all of them are everyday pantry staples. In addition to looking pretty, this bread is sweet and citrusy, and you can enjoy it as a dessert or as a sweet breakfast option.',
            rating: {
              "1": 12,
              "2": 11,
              "3": 12,
              "4": 18,
              "5": 7
            },
            sold: 200,
            all: 391,
            addedToBag: 0,
            hasDiscount: false,
            discountExpiryDate: null,
            price: 17.99,
            isLiked: false,
            cat: 'Breads & Sweets',
            recentlyViewed: false,
            mainImg:'https://images.unsplash.com/photo-1582231640551-2103f0b3f4bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            previewImg: {
              "1": 'https://images.unsplash.com/photo-1582231640551-2103f0b3f4bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
              "2": 'https://images.unsplash.com/photo-1582231640551-2103f0b3f4bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
              "3": 'https://images.unsplash.com/photo-1582231640551-2103f0b3f4bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
              "4": 'https://images.unsplash.com/photo-1582231640551-2103f0b3f4bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            }
          },
        ]
}

data.products = data.products.map((product, index) => ({ ...product, productId: index + 1 }))