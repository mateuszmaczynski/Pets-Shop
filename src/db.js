const data = {
  products: [
    {
      _id: '1',
      name: 'WOW FOOD Adult & Senior Dog Food – Chicken &  Brown Rice',
      category: 'Dog',
      countInStock: 10,
      subcategory: 'Dry Food',
      image: '/images/photo1001.png',
      price: 32,
      currency: '£',
      weight: '6kg',
      brand: 'WOW FOOD',
      rating: 4.76,
      numReviews: 1155,
      sellingPoints: [
      "High-quality dry food for large breed adult & senior dogs",
      "No added wheat, soya or dairy",
      "Healthy skin and coat",
      "Hypo-allergenic"
      ],
      description: "Chicken & Brown Rice Adult & Senior Original contains everything an adult & senior dog needs for lifelong health and vitality. When used as a general maintenance diet it can help to maintain healthy skin, coat and digestion. Where dogs need a little extra help WOW FOOD can be used for the management of many dietary related health problems. Quality Ingredients: Made with whole grains and high quality animal proteins, WOW FOOD is a complete diet containing all the nutrients a dog needs for a long and healthy life. Hypo-Allergenic:  WOW FOOD is hypo-allergenic, so it is suitable for even the most sensitive dog. It is formulated without ingredients such as wheat, soya, dairy, artificial colourings and artificial preservatives which are known to cause symptoms of food intolerance including itchy skin, excessive moulting, full anal glands and waxy ears. Healthy Digestion, Skin and Coat:  WOW FOOD can help manage many dietary related health issues including bad breath, wind, itchy skin and excessive moulting."
    },
    {
      _id: '2',
        name: 'Lover Puppy- Chicken with Fish',
      category: 'Dog',
      countInStock: 10,
      subcategory: 'Dry Food',
      image: '/images/photo1002.png',
      price: 4.99,
      currency: '£',
      weight: '1kg',
      brand: 'Lover',
      rating: 4.7,
      numReviews: 223,
      sellingPoints: [
      " Meat and protein-rich complete dry dog food for puppies: 41% top quality protein",
      " Grain-free with a delicious mix of tender chicken and exquisite salmon",
      "Adapted calcium-phosphorus ratio"
      ],
      description: "Lover Puppy - Grain-free Chicken with Fish dry dog food is is based on the natural carnivorous diet of dogs and made to a unique recipe with a balanced mix of meat and fish ingredients. This premium dry food has been specifically developed to meet the nutritional needs of your growing puppy. The carefully selected ingredients create a balanced mix of meat and fish and reflect your young dog's natural diet in the wild."
    },
    {
      _id: '3',
        name: 'Wild Taste - High Prairie Adult',
      category: 'Dog',
      countInStock: 10,
      subcategory: 'Dry Food',
      image: '/images/photo1003.png',
      price: 59.99,
      currency: '£',
      weight: '12,2 kg',
      brand: 'Wild Taste',
      rating: 4.9,
      numReviews: 1299,
      sellingPoints: [
      "Pure bison and venison meat: selected ingredients offer highly digestible protein and fat that act as great energy sources, to keep your dog in best shape",
      "Free from grains: the grain-free recipe provides your dog with balanced nutrition for optimum health and vitality. ",
      " Omega fatty acids: omega-6 and -3 fatty acids support healthy skin and glossy coat",
      " Digestive system support: dried chicory root and Yucca schidigera extract support balance in the intestinal flora, strengthening the immune system"
     ],
      description: "Wild Taste - High Prairie Adult is made with high-quality bison and venison. The grain-free recipe is completed with healthy sweet potato as well as selected fruits and vegetables. Wild Taste - High Prairie Adult is suitable for dogs of all life stages, providing sufficient energy and natural antioxidants to support a healthy immune system.This complete dog nutrition is based around the natural canine diet, tailored to the changing lifestyle of the modern dog with regular feeding and less exercise."
    },
    {
      _id: '4',
        name: 'WOLFIE Adult Black Rocks - Goat with fruits of the forest, roots and wild herbs',
      category: 'Dog',
      countInStock: 10,
      subcategory: 'Wet Food',
      image: '/images/photo1004.png',
      price: 1.12,
      currency: '£',
      weight: '400g',
      brand: 'WOLFIE',
      rating: 5.0,
      numReviews: 155,
      sellingPoints: [
      "100% grain-free recipe",
      "Enriched with fruits of the forest (mixed berries), wild herbs and roots",
      "No artificial preservatives, colours or aromas",
      "Mono protein with prey-typical meat"
      ],
      description : "We all love our dogs and consider them an important member of the family. They are endearing, very loyal pets and they deserve the right diet to keep them fit and healthy. Many believe that the domesticated dog originates from the wolf. Research into the wolves' natural eating habits shows that their diet consists of mostly meat and some berries, wild herbs and roots. This diet has remained unchanged throughout the course of evolution. Wolfie grain-free dog food is based on these eating habits and will appeal to your dog's natural instincts. The wholesome wet food is similar to the wolf's natural diet. It is well accepted, easy to digest and provides your pet with a balanced nutrient uptake. Wolfie wet dog food contains at least 66% pure meat. This is the sole source of animal protein and also provides your pet with essential fatty acids as well. The only other ingredients are fruits of the forest (mixed berries), wild herbs and roots. Cranberries, blackberries, blueberries or raspberries, together with dandelion roots and wild herbs such as nettle leaves, common yarrow and dandelion root, provide important minerals as well as secondary plant matter. The premium quality ingredients provide your trusty pet with a tasty, natural meal and you can be sure that you are feeding your dog with a species appropriate diet. This delicious wet food is well accepted and suitable for dogs with nutritional sensitivities."
    },
    {
      _id: '5',
        name: 'Health live – veterinary diet Renal',
      category: 'Dog',
      countInStock: 10,
      subcategory: 'Dry Food',
      image: '/images/photo1005.png',
      price: 2.99,
      currency: '£',
      weight: '400g',
      brand: 'Health life',
      rating: 2.8,
      numReviews: 75,
      sellingPoints: [
      "Dietetic complete wet food tailored to your dog's specific nutritional needs",
      "Scientifically-based nutrition which supports veterinary therapy",
      "Top-quality raw ingredients ensure it is well-accepted, and very digestible",
      "No wheat, corn or soya"
      ],
      description: "Premium complete wet food for adult dogs with kidney issues. When renal function is impaired it compromises the kidney's abilities to perform efficiently. Toxins and protein wastes are not eliminated properly, and the kidneys become overloaded. If your dog is suffering from kidney disease it needs a diet that relieves and supports the kidneys. Insufficient or low fluid intake combined with an acidic urinary environment can lead to the formation of bladder stones such as calcium oxalate or uric acid stones. The appropriate mineral content and urinary pH values can help to reduce the risk of bladder stones."
    },
    {
      _id: '6',
        name: 'Paws – Natural dog food – Chicken breast',
      category: 'Dog',
      countInStock: 10,
      subcategory: 'Dry Food',
      image: '/images/photo1006.png',
      price: 0.68,
      currency: '£',
      weight: '160g',
      brand: 'Paws',
      rating: 3.7,
      numReviews: 149,
      sellingPoints: [
      "100% natural complementary pet food for adult dogs made with nothing more than the ingredients listed",
      "Gluten-free",
      "No artificial colours, flavours, or preservatives"
    ],
      description: "Paws dog food is a 100% natural dog food made entirely of premium natural ingredients. Paws is also completely free of additives, artificial colours, flavours, aromas, and preservatives.You'll see the difference the minute you open the can: the natural consistency will convince you, and your dog will love it!"
    },
    {
      _id: '7',
      name: 'enjoy – grain free chicken',
      category: 'Cat',
      countInStock: 10,
      subcategory: 'Wet Food',
      image: '/images/photo1007.png',
      price: 0.45,
      currency: '£',
      weight: '85g',
      brand: 'enjoy',
      rating: 2.7,
      numReviews: 139,
      sellingPoints: [
        "Complete wet food for kittens and cats",
        "Ideal for sensitive stomachs",
        "Free from artificial additives, sugars and salt",
        "With slippery elm: helps to soothe stomachs and boost digestive health"
      ],
      description: "enjoy Grain Free Chicken Wet Cat Food is a delicious wet food designed to support the nutritional needs of kittens and adults cats, with a complete, grain-free recipe that even sensitive cats will enjoy. It is rich in meat protein from tender British chicken, as cats are carnivores and require plenty of animal protein for essential amino acids and overall wellbeing. enjoy Grain Free Chicken Wet Cat Food is formulated to support every aspect of your cat's health. It contains slippery elm to soothe sensitive stomachs and support digestion, as well as salmon oil as a source of omega-3 fatty acids and sunflower oil as a source of omega-6 fatty acids, both of which can support heart, brain, skin and coat health. enjoy Grain Free Chicken Wet Cat Food is also free from common allergens such as eggs, dairy, gluten and grain, to help avoid unwanted intolerances and reactions. The recipe is also free from artificial additives, sugars and salt. As well as caring for your cat, this enjoy Grain Free Chicken Wet Cat Food also cares for the environment, with packaging that can be recycled after use!"
    },
    {
      _id: '8',
      name: 'KING KITTY – Regular Sensible',
      category: 'Cat',
      countInStock: 10,
      subcategory: 'Dry Food',
      image: '/images/photo1008.png',
      price: 14.59,
      currency: '£',
      weight: '2kg',
      brand: 'KING KITTY',
      rating: 4.97,
      numReviews: 1906,
      sellingPoints: [
        "For sensitive digestion: L.I.P. proteins are easy to digest and can support a healthy digestive system",
        "Healthy urinary tract: through a specially tailored mineral content",
        "Rice: can help to improve digestion"
      ],
      description: "KING KITTY Quality Guarantee All KING KITTY products undergo thorough quality controls to ensure optimum food quality and to provide food that is appropriate for your cat's individual nutritional needs and lifestyle. This means that KING KITTY cat food offers high-quality, balanced nutrition."
    },
    {
      _id: '9',
      name: 'Wild adult',
      category: 'Cat',
      countInStock: 10,
      subcategory: 'Dry Food',
      image: '/images/photo1009.png',
      price: 4.99,
      currency: '£',
      weight: '400g',
      brand: 'Wild',
      rating: 4.65,
      numReviews: 167,
      sellingPoints: [
        "Balanced, complete wet food for adult cats",
        "100% grain-free",
        "Total meat content including lean muscle meat: 98%"
      ],
      description: "Wild Adult wet cat food is a wholesome wet food formulated specifically for adult cats and inspired by your cat's natural instincts. It is species-appropriate, packed with vital nutrients and tastes delicious. The modern, tame cat that is a member of your family has evolved from the wild cat, and even though it has been domesticated for thousands of years, it still retains the predator instincts of its ancestors. Domesticated cats are obligate carnivores, in other words they need to eat meat to survive so it is important to give them a diet with lots of healthy, protein-rich meat which provides them with all the nutrients they need to stay healthy. This premium wet food is made with lots of healthy meat including lean muscle meat. The total meat content comes to 98%. And since cats do not eat grain in the wild this cat food is completely grain-free."
    },
    {
      _id: '10',
        name: 'Nature mood',
      category: 'Cat',
      countInStock: 10,
      subcategory: 'Wet Food',
      image: '/images/photo10010.png',
      price: 0.45,
      currency: '£',
      weight: '70g',
      brand: 'Nature mood',
      rating: 4.1,
      numReviews: 437,
      sellingPoints: [
      "High fresh meat content: with 60% – 75% first-class fresh meat, of food grade quality ",
      "Natural: gently cooked and preserved in its own broth, to make it very tasty and healthy",
      "High nutrient density: gentle production process helps to preserve natural micronutrients",
      "Gluten free: also suitable for cats with food intolerances"
      ],
      description: "Treat your cat to this Nature mood supplementary wet cat food, available in a variety of different flavour variations, which are all gluten free. There are single-protein varieties as well as flavours which combine two or more different protein types for a distinct flavour sensation. The way that the food is made helps to ensure that it is easy to digest, with an excellent taste. Even the choosiest cats are bound to find a favourite amongst the many varieties available. Nature mood complementary cat food is entirely natural and full of flavour, without needing to add any artificial ingredients like flavourings, colourings or preservatives."
    },
    {
      _id: '11',
        name: 'Mrauu… with love – Pacific tuna in jelly',
      category: 'Cat',
      countInStock: 10,
      subcategory: 'Dry Food',
      image: '/images/photo1011.png',
      price: 4.99,
      currency: '£',
      weight: '6x100g',
      brand: 'Mrauu… with love',
      rating: 3.9,
        numReviews: 1731,
      sellingPoints: [
      " Premium supplementary wet cat food",
      " Single protein: just one source of animal protein",
      " No artificial preservatives, taste enhancers or colours",
      " In convenient single serving pouches "
      ],
      description: "Mrauu… in love in Jelly pouches is a supplementary high-quality wet food for adult cats. It is made from pure meat or fish in delicious jelly and provides your cat with a species-appropriate food. Each variety contains only a single source of protein (meat or fish) and is made with top-quality ingredients which have been gently prepared to retain the delicious, natural taste. This species-appropriate food is free from artificial preservatives, taste enhancers and colours. These mouth-watering Mrauu… in love  varieties come in convenient pouches that are just the right size for a single serving, so it is easy to serve your cat a fresh meal every time."
    },
  ],
};
export default data;
