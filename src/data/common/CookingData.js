// import React, { useState } from "react";
// import Filter from "filter-data";

// // Sample product data
// const products = [
//   {
//     id: 1,
//     name: "Fresh Apple",
//     category: "Fresh Fruit",
//     price: 200,
//     rating: 4.5,
//     tags: ["Healthy", "Vegetarian"],
//   },
//   {
//     id: 2,
//     name: "Broccoli",
//     category: "Vegetables",
//     price: 150,
//     rating: 4.0,
//     tags: ["Low fat", "Vegetarian", "Healthy"],
//   },
//   {
//     id: 3,
//     name: "Olive Oil",
//     category: "Cooking",
//     price: 500,
//     rating: 5.0,
//     tags: ["Healthy"],
//   },
//   {
//     id: 4,
//     name: "Chips",
//     category: "Snacks",
//     price: 50,
//     rating: 3.5,
//     tags: ["Kid foods"],
//   },
//   {
//     id: 5,
//     name: "Orange Juice",
//     category: "Beverages",
//     price: 120,
//     rating: 4.2,
//     tags: ["Healthy", "Low fat"],
//   },
//   {
//     id: 6,
//     name: "Shampoo",
//     category: "Beauty & Health",
//     price: 250,
//     rating: 4.8,
//     tags: ["Vitamins"],
//   },
//   {
//     id: 7,
//     name: "Whole Wheat Bread",
//     category: "Bread & Bakery",
//     price: 80,
//     rating: 4.3,
//     tags: ["Bread", "Healthy"],
//   },
// ];

// const FilterSidebar = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All Products");
//   const [priceRange, setPriceRange] = useState([50, 1500]);
//   const [selectedRating, setSelectedRating] = useState([]);
//   const [selectedTags, setSelectedTags] = useState([]);

//   const categories = [
//     "All Products",
//     "Fresh Fruit",
//     "Vegetables",
//     "Cooking",
//     "Snacks",
//     "Beverages",
//     "Beauty & Health",
//     "Bread & Bakery",
//   ];

//   const tags = ["Healthy", "Low fat", "Vegetarian", "Kid foods", "Vitamins", "Bread"];

//   // Filter the products using filter-data package
//   const filterConditions = {
//     category: selectedCategory === "All Products" ? undefined : selectedCategory,
//     price: { $between: priceRange },
//     rating: selectedRating.length > 0 ? { $in: selectedRating } : undefined,
//     tags: selectedTags.length > 0 ? { $in: selectedTags } : undefined,
//   };

//   // Apply filters using filter-data
//   const filteredProducts = Filter(products, filterConditions);

//   return (
//     <div className="flex">
//       {/* Sidebar with filters */}
//       <div className="p-4 bg-white rounded-lg shadow-md w-80">
//         <h2 className="mb-4 text-lg font-bold">Filters</h2>

//         {/* Category Filter */}
//         <div className="mb-4">
//           <h3 className="font-semibold">All Categories</h3>
//           <ul>
//             {categories.map((category) => (
//               <li key={category} className="mt-2">
//                 <label>
//                   <input
//                     type="radio"
//                     value={category}
//                     checked={selectedCategory === category}
//                     onChange={() => setSelectedCategory(category)}
//                   />
//                   <span className="ml-2">{category}</span>
//                 </label>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Price Filter */}
//         <div className="mb-4">
//           <h3 className="font-semibold">Price</h3>
//           <input
//             type="range"
//             min={50}
//             max={1500}
//             value={priceRange[1]}
//             onChange={(e) =>
//               setPriceRange([priceRange[0], parseInt(e.target.value)])
//             }
//           />
//           <div className="mt-2">
//             Price: ${priceRange[0]} - ${priceRange[1]}
//           </div>
//         </div>

//         {/* Rating Filter */}
//         <div className="mb-4">
//           <h3 className="font-semibold">Rating</h3>
//           <ul>
//             {[5, 4, 3, 2, 1].map((rating) => (
//               <li key={rating} className="mt-2">
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={selectedRating.includes(rating)}
//                     onChange={() =>
//                       setSelectedRating((prev) =>
//                         prev.includes(rating)
//                           ? prev.filter((r) => r !== rating)
//                           : [...prev, rating]
//                       )
//                     }
//                   />
//                   <span className="ml-2">{rating} & up</span>
//                 </label>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Tag Filter */}
//         <div className="mb-4">
//           <h3 className="font-semibold">Popular Tags</h3>
//           <div className="flex flex-wrap">
//             {tags.map((tag) => (
//               <label key={tag} className="mt-2 mr-2">
//                 <input
//                   type="checkbox"
//                   checked={selectedTags.includes(tag)}
//                   onChange={() =>
//                     setSelectedTags((prev) =>
//                       prev.includes(tag)
//                         ? prev.filter((t) => t !== tag)
//                         : [...prev, tag]
//                     )
//                   }
//                 />
//                 <span className="ml-1">{tag}</span>
//               </label>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Product List */}
//       <div className="flex-grow p-4 product-list">
//         <h2 className="mb-4 text-lg font-bold">Products</h2>
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => (
//             <div key={product.id} className="p-4 mb-4 border rounded-lg">
//               <h2 className="text-lg font-bold">{product.name}</h2>
//               <p>Category: {product.category}</p>
//               <p>Price: ${product.price}</p>
//               <p>Rating: {product.rating} ⭐</p>
//               <p>Tags: {product.tags.join(", ")}</p>
//             </div>
//           ))
//         ) : (
//           <p>No products found matching your criteria.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FilterSidebar;


import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaHeart, FaEye } from 'react-icons/fa'; // Icons from react-icons
export const CookingData = [
    {
        id:'c1',
        name : "Oil",
        sku : "CD00001",
        price: {
            original: 30,
            discounted: 12,
            discountPercentage: 60
        },
        
        category:"Cooking",
        tags: ["Cooking", "Healthy", "Organic", "Mustard"],
        rating: 4,
        review: 10,
        inStock: true,
        mainDec: "Cooking oil is a versatile fat used in frying, baking, and dressing, enhancing flavor and texture in various dishes.",
        brand:"Organic India",
        socialMedia: [
            { facebook: FaFacebookF },
            { instagram: FaInstagram },
            { pinterest: FaPinterestP },
            { twitter: FaTwitter }
        ],
        actions: [
            { like: FaHeart },
            { views: FaEye }
        ],
        socialLink: ['https://www.facebook.com/', 'https://twitter.com/', 'https://in.pinterest.com/', 'https://www.instagram.com/'],
        images: [
            {
                main: 'https://organicindia.com/cdn/shop/files/613A0014_500x550.jpg?v=1695981451', 
                thumbnails: [
                    'https://organicindia.com/cdn/shop/files/613A0710_500x550.jpg?v=1695981451',
                    'https://organicindia.com/cdn/shop/files/613A0710_500x550.jpg?v=1695981451',
                    'https://organicindia.com/cdn/shop/files/613A0008_500x550.jpg?v=1695981451',
                    'https://organicindia.com/cdn/shop/files/613A0010_500x550.jpg?v=1695981451',
                ],
            },
        ],
        

        description:{
            dec1: 'Mustard oil is rich in monounsaturated fats and omega-3 fatty acids.',
            dec2: 'It promotes heart health and supports joint function.',
            dec3: ['Boosts circulation.', 'Has natural anti-inflammatory properties.', 'Rich in antioxidants.'],
            dec4: 'Ideal for cooking, frying, or adding to pickles and marinades.'
        },

        additionalInformation:{
            weight: "1 L",
            color: "Golden yellow",
            type: "Cold-pressed",
            category: "Cooking",
            stockStatus: "Available",
            stockQuantity: 500
        },
        customerFeedback: [
            {
                name: "John Doe",
                reviewImg: 'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: "Fresh and sweet!",
                rating: 5,
            },
            {
                name: "Jane Smith",
                reviewImg: 'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: "A bit too crunchy for my taste.",
                rating: 4,
            },
        ],
        promotions: {
            discount: "60% Discount",
            organic: "100% Organic",
        },
        
        
    
    },

    {
        id: 'c2',
        name: "Pink Salt",
        sku: "CD00002",
        price: {
            original: 20,
            discounted: 8,
            discountPercentage: 60
        },
        
        category: "Cooking",
        tags: ["Cooking", "Healthy", "Natural", "Pink Salt"],
        rating: 4.5,
        review: 25,
        inStock: true,
        mainDec: "Pink salt is a natural mineral-rich salt used for seasoning and enhancing the flavor of various dishes.",
        brand: "Himalayan Pure",
        socialMedia: [
            { facebook: FaFacebookF },
            { instagram: FaInstagram },
            { pinterest: FaPinterestP },
            { twitter: FaTwitter }
        ],
        actions: [
            { like: FaHeart },
            { views: FaEye }
        ],
        socialLink: ['https://www.facebook.com/', 'https://twitter.com/', 'https://in.pinterest.com/', 'https://www.instagram.com/'],
        images: [
            {
                main: 'https://organicindia.com/cdn/shop/products/Pinksalt_Benefit_500x550_crop_center.jpg?v=1672736574', 
                thumbnails: [
                    'https://organicindia.com/cdn/shop/products/Pinksalt_back_500x550_crop_center.jpg?v=1672736574',
                    'https://organicindia.com/cdn/shop/products/Pinksalt_front_500x550_crop_center.jpg?v=1672736574',
                    'https://organicindia.com/cdn/shop/products/Pinksalt_back_500x550_crop_center.jpg?v=1672736574',
                    'https://organicindia.com/cdn/shop/products/Pinksalt_Benefit_500x550_crop_center.jpg?v=1672736574',
                ],
            },
        ],
        
    
        description: {
            dec1: 'Pink salt is rich in essential minerals and trace elements.',
            dec2: 'It helps regulate hydration and balance pH levels in the body.',
            dec3: ['Promotes healthy digestion.', 'Supports respiratory function.', 'Contains natural detoxifying properties.'],
            dec4: 'Perfect for seasoning, gourmet cooking, or using in salt lamps and spa treatments.'
        },
    
        additionalInformation: {
            weight: "500g",
            color: "Light pink",
            type: "Himalayan",
            category: "Cooking",
            stockStatus: "Available",
            stockQuantity: 1000
        },
        customerFeedback: [
            {
                name: "John Doe",
                reviewImg: 'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: "Fresh and sweet!",
                rating: 5,
            },
            {
                name: "Jane Smith",
                reviewImg: 'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: "A bit too crunchy for my taste.",
                rating: 4,
            },
        ],
        promotions: {
            discount: "60% Discount",
            organic: "100% Natural",
        }
    },

    {
        id: 'c3',
        name: "Wheat Dalia",
        sku: "CD00003",
        price: {
            original: 30,
            discounted: 18,
            discountPercentage: 40
        },
        
        category: "Cooking",
        tags: ["Cooking", "Healthy", "Organic", "Wheat Dalia"],
        rating: 4.6,
        review: 20,
        inStock: true,
        mainDec: "Wheat dalia is a nutritious and versatile grain perfect for a range of healthy meals and snacks.",
        brand: "Pure Harvest",
        socialMedia: [
            { facebook: FaFacebookF },
            { instagram: FaInstagram },
            { pinterest: FaPinterestP },
            { twitter: FaTwitter }
        ],
        actions: [
            { like: FaHeart },
            { views: FaEye }
        ],
        socialLink: ['https://www.facebook.com/', 'https://twitter.com/', 'https://in.pinterest.com/', 'https://www.instagram.com/'],
        images: [
            {
                main: 'https://organicindia.com/cdn/shop/products/492579984_Image2_500x550_crop_center.jpg?v=1667894580',
                thumbnails: [
                    'https://organicindia.com/cdn/shop/products/492579984_Image2_500x550_crop_center.jpg?v=1667894580',
                    'https://organicindia.com/cdn/shop/products/492579984_Image2_500x550_crop_center.jpg?v=1667894580',
                    'https://organicindia.com/cdn/shop/products/492579984_Image2_500x550_crop_center.jpg?v=1667894580',
                    'https://organicindia.com/cdn/shop/products/492579984_Image2_500x550_crop_center.jpg?v=1667894580',
                ],
            },
        ],
    
        description: {
            dec1: 'Wheat dalia is high in fiber and essential nutrients.',
            dec2: 'It supports digestive health and provides sustained energy.',
            dec3: ['Rich in protein.', 'Ideal for breakfast and savory dishes.', 'Contains essential vitamins and minerals.'],
            dec4: 'Perfect for making porridge, upma, or as a base for various recipes.'
        },
    
        additionalInformation: {
            weight: "500g",
            color: "Light brown",
            type: "Cracked wheat",
            category: "Grains",
            stockStatus: "Available",
            stockQuantity: 600
        },

        customerFeedback: [
            {
                name: "John Doe",
                reviewImg: 'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: "Fresh and sweet!",
                rating: 5,
            },
            {
                name: "Jane Smith",
                reviewImg: 'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: "A bit too crunchy for my taste.",
                rating: 4,
            },
        ],
        
        promotions: {
            discount: "40% Discount",
            organic: "100% Organic",
        }
    },

    {
        id: 'c4',
        name: "Urad Whole",
        sku: "UW00005",
        price: {
            original: 50,
            discounted: 30,
            discountPercentage: 40
        },
        
        category: "Pulses",
        tags: ["Cooking", "Healthy", "Organic", "Urad Whole"],
        rating: 4.8,
        review: 45,
        inStock: true,
        mainDec: "Urad Whole is a nutritious black lentil, rich in protein and perfect for various savory dishes.",
        brand: "Natural Harvest",
        socialMedia: [
            { facebook: FaFacebookF },
            { instagram: FaInstagram },
            { pinterest: FaPinterestP },
            { twitter: FaTwitter }
        ],
        actions: [
            { like: FaHeart },
            { views: FaEye }
        ],
        socialLink: ['https://www.facebook.com/', 'https://twitter.com/', 'https://in.pinterest.com/', 'https://www.instagram.com/'],
        images: [
            {
                main: 'https://organicindia.com/cdn/shop/files/Uradwhole.jpg?v=1713869820',
                thumbnails: [
                    'https://organicindia.com/cdn/shop/files/urad-whole-wip.jpg?v=1713869836',
                    'https://organicindia.com/cdn/shop/files/Uradwhole.jpg?v=1713869820',
                    'https://organicindia.com/cdn/shop/files/urad-whole-back_500x550_crop_center.jpg?v=1713869836',
                    'https://organicindia.com/cdn/shop/files/urad-whole-back_500x550_crop_center.jpg?v=1713869836',
                ],
            },
        ],
    
        description: {
            dec1: 'Urad Whole is a rich source of protein and dietary fiber.',
            dec2: 'It helps support muscle growth and digestive health.',
            dec3: ['Excellent for heart health.', 'High in iron and magnesium.', 'Versatile for making dals, curries, and dosa batter.'],
            dec4: 'Ideal for making traditional Indian dishes like dal makhani, idli, and dosa.'
        },
    
        additionalInformation: {
            weight: "1 kg",
            color: "Black",
            type: "Whole Lentil",
            category: "Pulses",
            stockStatus: "Available",
            stockQuantity: 1000
        },

        customerFeedback: [
            {
                name: "John Doe",
                reviewImg: 'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: "Fresh and sweet!",
                rating: 5,
            },
            {
                name: "Jane Smith",
                reviewImg: 'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: "A bit too crunchy for my taste.",
                rating: 4,
            },
        ],
       
        promotions: {
            discount: "40% Discount",
            organic: "100% Organic",
        }
    },

    {
        id: 'c5',
        name: "Brown Channa",
        sku: "CD00005",
        price: {
            original: 40,
            discounted: 24,
            discountPercentage: 40
        },
        
        category: "Cooking",
        tags: ["Cooking", "Healthy", "Organic", "Brown Channa"],
        rating: 4.7,
        review: 30,
        inStock: true,
        mainDec: "Brown Channa is a nutritious legume known for its high fiber and protein content, ideal for various savory dishes.",
        brand: "Earth's Bounty",
        socialMedia: [
            { facebook: FaFacebookF },
            { instagram: FaInstagram },
            { pinterest: FaPinterestP },
            { twitter: FaTwitter }
        ],
        actions: [
            { like: FaHeart },
            { views: FaEye }
        ],
        socialLink: ['https://www.facebook.com/', 'https://twitter.com/', 'https://in.pinterest.com/', 'https://www.instagram.com/'],
        images: [
            {
                main: 'https://organicindia.com/cdn/shop/files/brown-chana-wip_500x550_crop_center.jpg?v=1713870611',
                thumbnails: [
                    'https://organicindia.com/cdn/shop/files/brown-chana-mood_500x550_crop_center.jpg?v=1713870611',
                    'https://organicindia.com/cdn/shop/files/Brownchana_500x550_crop_center.jpg?v=1713870611',
                    'https://organicindia.com/cdn/shop/files/brown-chana-back_500x550_crop_center.jpg?v=1713870611',
                    'https://organicindia.com/cdn/shop/files/brown-chana-wip_500x550_crop_center.jpg?v=1713870611'
                ],
            },
        ],
    
        description: {
            dec1: 'Brown Channa is high in protein, fiber, and essential nutrients.',
            dec2: 'It aids in digestion and helps maintain healthy blood sugar levels.',
            dec3: ['Rich in iron and magnesium.', 'Supports heart health.', 'Versatile for curries, salads, and soups.'],
            dec4: 'Perfect for making channa masala, salads, or adding to stews and soups.'
        },
    
        additionalInformation: {
            weight: "500g",
            color: "Brown",
            type: "Whole Legume",
            category: "Pulses",
            stockStatus: "Available",
            stockQuantity: 800
        },
        
        customerFeedback: [
            {
                name: "John Doe",
                reviewImg: 'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: "Fresh and sweet!",
                rating: 5,
            },
            {
                name: "Jane Smith",
                reviewImg: 'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: "A bit too crunchy for my taste.",
                rating: 4,
            },
        ],
        promotions: {
            discount: "40% Discount",
            organic: "100% Organic",
        }
    },

    {
        id: 'c6',
        name: "Turmeric Powder",
        sku: "CD00006",
        price: {
            original: 35,
            discounted: 21,
            discountPercentage: 40
        },
        
        category: "Cooking",
        tags: ["Cooking", "Healthy", "Organic", "Turmeric"],
        rating: 4.9,
        review: 50,
        inStock: true,
        mainDec: "Turmeric Powder is a vibrant yellow spice known for its anti-inflammatory properties and distinct flavor, perfect for enhancing a variety of dishes.",
        brand: "Spice World",
        socialMedia: [
            { facebook: FaFacebookF },
            { instagram: FaInstagram },
            { pinterest: FaPinterestP },
            { twitter: FaTwitter }
        ],
        actions: [
            { like: FaHeart },
            { views: FaEye }
        ],
        socialLink: ['https://www.facebook.com/', 'https://twitter.com/', 'https://in.pinterest.com/', 'https://www.instagram.com/'],
        images: [
            {
                main: 'https://organicindia.com/cdn/shop/products/492579990_Image1_500x550_crop_center.jpg?v=1667894141',
                thumbnails: [
                    'https://organicindia.com/cdn/shop/products/492579990_Image4_500x550_crop_center.jpg?v=1667894142',
                    'https://organicindia.com/cdn/shop/products/492579990_Image5_500x550_crop_center.jpg?v=1667894141',
                    'https://organicindia.com/cdn/shop/products/492579990_Image3_500x550_crop_center.jpg?v=1667894144',
                    'https://organicindia.com/cdn/shop/products/492579990_Image1_200x220_crop_center.jpg?v=1667894141',
                ],
            },
        ],
    
        description: {
            dec1: 'Turmeric Powder is rich in curcumin, known for its potent anti-inflammatory and antioxidant properties.',
            dec2: 'It supports joint health and boosts the immune system.',
            dec3: ['Promotes healthy digestion.', 'Enhances flavor and color in dishes.', 'Can be used in cooking, baking, and as a natural dye.'],
            dec4: 'Ideal for curries, soups, and as a natural remedy in health drinks.'
        },
    
        additionalInformation: {
            weight: "100g",
            color: "Bright yellow",
            type: "Ground spice",
            category: "Spices",
            stockStatus: "Available",
            stockQuantity: 1200
        },
        
        customerFeedback: [
            {
                name: "John Doe",
                reviewImg: 'https://www.zerozero.pt/img/jogadores/new/36/26/553626_eduardo_person__20240626011936.png',
                feedback: "Fresh and sweet!",
                rating: 5,
            },
            {
                name: "Jane Smith",
                reviewImg: 'https://agendapartnership.co.uk/wp-content/uploads/2019/06/thinking-person-png-hd-thinking-man-png-324.png',
                feedback: "A bit too crunchy for my taste.",
                rating: 4,
            },
        ],
        
        promotions: {
            discount: "40% Discount",
            organic: "100% Organic",
        }
    }
    
    
    
    
    
]