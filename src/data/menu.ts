export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: string;
  note?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  note?: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: 'appetizers',
    name: 'Appetizers',
    items: [
      { id: 'mozzarella-sticks', name: 'Mozzarella Sticks', price: '$6.59' },
      { id: 'basket-of-fries', name: 'Basket of Fries', price: '$10.99' },
      { id: 'cheese-curds', name: 'Cheese Curds', price: '$7.99' },
      { id: 'jalapeno-poppers', name: 'Jalapeno Poppers', price: '$4.49' },
      { id: 'flaming-shrimp', name: 'Flaming Shrimp', price: '$7.99' },
      { id: 'breaded-mushrooms', name: 'Breaded Mushrooms', price: '$4.79' },
      { id: 'boscos-breadsticks', name: 'Boscos Breadsticks', price: '$8.49' },
      { id: 'buffalo-dip', name: 'Buffalo Dip', price: '$11.99' },
      { id: 'spinach-dip', name: 'Spinach Dip', price: '$12.99' },
      { id: 'potato-kegs', name: 'Potato Kegs', price: '$9.99' },
      { id: 'pickle-fries', name: 'Pickle Fries', price: '$5.49' },
      { id: 'pretzel-bites', name: 'Pretzel Bites', price: '$4.99' },
      { id: 'sampler-platter', name: 'Sampler Platter', price: '$13.99' },
      { id: 'ultimate-nachos', name: 'Ultimate Nachos', price: '$12.99' },
      { id: 'reg-nachos', name: 'Reg. Nachos', price: '$8.79' }
    ]
  },
  {
    id: 'burgers',
    name: 'Burgers',
    note: 'Add Slaw $0.50 & Add Cheese $0.50. Hamburgers can be cooked to order. Consuming raw or undercooked beef may increase your risk of food-born illness.',
    items: [
      { id: 'chief-burger', name: 'Chief Burger', price: '$8.95', description: 'Mayo, Lettuce, Tomato, Red Onion, Ketchup, Mustard, Pickles' },
      { id: 'chief-burger-cheese', name: 'Chief Burger w/ Cheese', price: '$9.19', description: 'Mayo, Lettuce, Tomato, Red Onion, Ketchup, Mustard, Pickles' },
      { id: 'double-chief-burger', name: 'Double Chief Burger w/Cheese', price: '$11.79', description: 'Mayo, Lettuce, Tomato, Red Onion, Ketchup, Mustard, Pickles' },
      { id: 'philly-steak-burger', name: 'Philly Steak Burger', price: '$10.69', description: 'Provolone & American Cheese, mayo, Green Peppers, Onions' },
      { id: 'omg-burger', name: 'O.M.G. Burger (Oh My Goodness)', price: '$12.79', description: 'Double Burger, Double Cheese, Bacon, Egg, Mayo, Lettuce, Tomato' },
      { id: 'diablo-burger', name: 'Diablo Burger', price: '$9.29', description: 'Spicy Mayo, Lettuce, Tomato, Bacon, Jalapeno Peppers, Pepper jack' },
      { id: 'guacamole-burger', name: 'Guacamole Burger', price: '$9.79', description: 'Mayo, Lettuce, Tomato, Red Onion, Swiss Cheese, Guacamole' },
      { id: 'ole-carolina-burger', name: 'Ole Carolina Burger', price: '$9.19', description: 'American Cheese, Chili, Slaw, Onion, Mustard' },
      { id: 'western-burger', name: 'Western Burger', price: '$9.29', description: 'Cheddar Cheese, Bacon, Onion Ring, BBQ Sauce, Ranch Dressing' },
      { id: 'bacon-cheddar-burger', name: 'Bacon Cheddar Burger', price: '$9.29', description: 'Mayo, Lettuce, Tomato, Cheddar Cheese' },
      { id: 'black-bleu-burger', name: 'Black & Bleu Burger', price: '$9.29', description: 'Mayo, Lettuce, Tomato, Bleu Cheese Sauce, Blackening Seasoning' },
      { id: 'mushroom-swiss-burger', name: 'Mushroom Swiss Burger', price: '$9.39', description: 'Mayo, Lettuce, Tomato, Grilled Mushrooms, Swiss Cheese' },
      { id: 'hawaiian-burger', name: 'Hawaiian Burger', price: '$10.29', description: 'Mayo, Lettuce, Tomato, Pineapple, Teriyaki Sauce, Swiss Cheese' },
      { id: 'patty-melt', name: 'Patty Melt', price: '$9.29', description: 'American Cheese, Grilled Onions, Mayo, on Grilled Texas Toast' },
      { id: 'steakhouse-burger', name: 'Steakhouse Burger', price: '$11.69', description: 'Mayo, Tomato, Bacon, Bleu Cheese, A-1 Steak Sauce, Onion Ring' }
    ]
  },
  {
    id: 'hot-dogs',
    name: 'Hot Dogs',
    items: [
      { id: 'plain-dog', name: 'Plain', price: '$3.99' },
      { id: 'chili-dog', name: 'Chili', price: '$4.99' },
      { id: 'nathans-dog', name: "Nathan's", price: '' }
    ]
  },
  {
    id: 'chicken',
    name: 'Chicken',
    items: [
      { id: 'grilled-chicken', name: 'Grilled Chicken', price: '$7.99', description: 'Mayo, Lettuce, Tomato' },
      { id: 'blacken-chicken', name: 'Blacken Chicken', price: '$8.09', description: 'Mayo, Slaw, Tomato, Blackening Seasoning' },
      { id: 'hawaiian-chicken', name: 'Hawaiian Chicken', price: '$8.09', description: 'Mayo, Lettuce, Tomato, Pineapple, Teriyaki Sauce, Swiss Cheese' },
      { id: 'buffalo-chicken', name: 'Buffalo Chicken', price: '$8.09', description: 'Mayo, Lettuce, Tomato' },
      { id: 'western-chicken', name: 'Western Chicken', price: '$8.09', description: 'Cheddar Cheese, Bacon, Onion Ring, BBQ Sauce, Ranch Dressing' },
      { id: 'fried-chicken', name: 'Fried Chicken', price: '$7.99', description: 'Mayo, Lettuce, Tomato' }
    ]
  },
  {
    id: 'tenders',
    name: 'Tenders',
    note: 'Rolled in Sauce add .50 cents',
    items: [
      { id: '3pc-tenders', name: '3pc.', price: '$5.19' },
      { id: '6pc-tenders', name: '6pc.', price: '$8.99' },
      { id: '12pc-tenders', name: '12 pc.', price: '$16.49' }
    ]
  },
  {
    id: 'sandwiches',
    name: 'Sandwiches',
    items: [
      { id: 'philly-cheese-steak', name: 'Philly Cheese Steak', price: '$9.89', description: 'Sirloin Steak, Provolone Cheese, Green Peppers, Onions' },
      { id: 'chicken-philly', name: 'Chicken Philly Cheese Steak', price: '$9.89', description: 'Chicken, Provolone Cheese, Green Peppers, Onions' },
      { id: 'italian-sub', name: 'Italian Sub', price: '$10.19', description: 'Ham, Salami, Pepperoni, Olive Oil, Provolone & Cheddar Cheese, Mayo, Red Onions, Lettuce & Tomato' },
      { id: 'parmesan-chicken', name: 'Parmesan Chicken', price: '$10.09', description: 'Chicken, Marinara Sauce, Mozzarella Cheese & Provolone Cheese' },
      { id: 'meatball-sub', name: 'Meatball Sub', price: '$9.89', description: 'Meatballs, Marinara, Provolone & Mozzarella Cheese' },
      { id: 'french-dip', name: 'French Dip', price: '$10.09', description: 'French Sub Roll, Roast Beef, Horseradish Aioli, Swiss Cheese, Au Jus Sauce' },
      { id: 'chicken-fajita', name: 'Chicken Fajita', price: '$9.79', description: 'Provolone Cheese, Cherry Peppers, Green Peppers, Onions & Ranch' },
      { id: 'fish-sandwich', name: 'Fish Sandwich', price: '$5.69', description: 'Alaskan Pollack White Fish, Lettuce, Tartar Sauce' },
      { id: 'ham-cheese', name: 'Ham \'n Cheese', price: '$9.89', description: 'Mayo, Lettuce, Tomato, Swiss Cheese' },
      { id: 'grilled-cheese', name: 'Grilled Cheese', price: '$3.99' }
    ]
  },
  {
    id: 'wings',
    name: 'Wings',
    items: [
      { id: '6pc-wings', name: '6 Pc.', price: '$7.99' },
      { id: '12pc-wings', name: '12 Pc.', price: '$13.99' },
      { id: '24pc-wings', name: '24 Pc.', price: '$25.49' },
      { id: '48pc-wings', name: '48 Pc.', price: '$46.99' }
    ],
    note: 'Wing Flavors: Mild, Hot, Reaper Hot, Mango Habeneiro, Korean BBQ, BBQ, Parmesan Garlic, Honey Hot, Caribbean Jerk (Dry Rub & Wet), Teriyaki, Lemon Pepper (Dry Rub), Nashville Hot (Dry Rub & Wet), Jalapeno Cheddar.'
  },
  {
    id: 'sides',
    name: 'Sides',
    items: [
      { id: 'seasoned-fries', name: 'Seasoned Fry\'s', price: 'Reg. $3.39 | Lrg. $3.99' },
      { id: 'potato-chips', name: 'Homemade Potato Chips', price: '$4.19' },
      { id: 'steak-fries', name: 'Premium Steak Fry\'s', price: '$4.19' },
      { id: 'flaming-chips', name: 'Flaming Chips', price: '$5.99' },
      { id: 'onion-rings', name: 'Onion Rings', price: 'Reg. $3.89 | Lrg. $4.29' },
      { id: 'loaded-fries', name: 'LOADED FRIES', price: 'Chili Cheese - $5.49, Bacon Cheddar - $5.59, Extreme Fry\'s - $5.89' }
    ]
  },
  {
    id: 'salads',
    name: 'Salads',
    note: 'Add Chicken $4.29 | Make it Large $9.29',
    items: [
      { id: 'garden-salad', name: 'Garden Salad', price: '$6.19' },
      { id: 'caesar-salad', name: 'Caesar Salad', price: '$6.19' }
    ]
  },
  {
    id: 'kids',
    name: 'For Kids',
    note: '$6.19 each. Kids Meals for Kids 12 and under, all other additional charges apply.',
    items: [
      { id: 'kids-burger', name: 'Burger w/Cheese', price: '$6.19', description: 'Ketchup, Mustard, Pickles & Sm Fry/Sm Drink' },
      { id: 'kids-tenders', name: 'Chicken Tenders', price: '$6.19', description: '2 Chicken & Sm Fry/Sm Drink' },
      { id: 'kids-pizza', name: 'Pizza', price: '$6.19', description: '1 Slice Cheese or Pep & Sm Drink' },
      { id: 'kids-hotdog', name: 'Hot Dog', price: '$6.19', description: 'Ketchup, Mustard & Sm Fry/Sm Drink' },
      { id: 'kids-spaghetti', name: 'Spaghetti w/ Meat Sauce', price: '$6.49', description: 'Toast/Sm Drink' }
    ]
  },
  {
    id: 'drinks',
    name: 'Drinks',
    items: [
      { id: 'tea-lemonade-pepsi', name: 'Tea, Lemonade, Pepsi', price: 'Sm. (16oz.) - $2.99 | Med. (20oz.) - $3.29 | Lrg. (32oz.) - $3.79' }
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts',
    items: [
      { id: 'tiramisu', name: 'Tiramisu', price: '$4.19' },
      { id: 'cheesecake', name: 'Cheesecake', price: '$6.49' },
      { id: 'ultimate-choc-cake', name: 'Ultimate Choc. Cake', price: '$7.89' },
      { id: 'smores-lava-cake', name: 'S\'mores Lava Cake', price: '$7.79' },
      { id: 'red-velvet-cake', name: 'Red Velvet Cake', price: '$7.89' },
      { id: 'oreo-cheesecake', name: 'Oreo Cheesecake', price: '$7.99' },
      { id: 'carrot-cake', name: 'Carrot Cake', price: '$7.89' },
      { id: 'coconut-cake', name: 'Coconut Cake', price: '$6.99' },
      { id: 'key-lime-pie', name: 'Key Lime Pie', price: '$7.89' }
    ]
  },
  {
    id: 'pasta',
    name: 'Pasta',
    items: [
      { id: 'spaghetti-meat-sauce', name: 'Spaghetti w/ Meat Sauce', price: '$10.99' },
      { id: 'spaghetti-meat-balls', name: 'Spaghetti w/ Meat Balls', price: '$15.99' },
      { id: 'spaghetti-marinara', name: 'Spaghetti w/ Marinara', price: '$9.19' },
      { id: 'chicken-parm', name: 'Chicken Parm', price: '$14.29' },
      { id: 'stuffed-pasta-shells', name: 'Stuffed Pasta Shells', price: '$13.19' },
      { id: 'alfredo-noodles', name: 'Alfredo Noodles', price: '$10.49' },
      { id: 'chicken-alfredo', name: 'Chicken Alfredo w/ Grilled Chicken', price: '$15.39' }
    ]
  },
  {
    id: 'seafood',
    name: 'Seafood',
    items: [
      { id: 'shrimp-basket', name: 'Shrimp Basket', price: '$13.99' },
      { id: 'fish-n-chips', name: 'Fish-N-Chips', price: '$13.99' }
    ]
  },
  {
    id: 'specialty-pizza',
    name: 'Specialty Pizza',
    items: [
      { id: 'meatazza', name: 'Meatazza', price: '$19.99', description: 'Pepperoni, Italian sausage, ham, beef, real bacon' },
      { id: 'supreme', name: 'Supreme', price: '$19.99', description: 'Pepperoni, beef, green peppers, mushrooms, onions' },
      { id: 'garden-lovers', name: 'Garden Lovers', price: '$19.99', description: 'Green peppers, mushrooms, onions, banana peppers, green & black olives' },
      { id: 'bacon-cheeseburger', name: 'Bacon Cheeseburger', price: '$18.99', description: 'Beef, onion, bacon, cheddar & mozzarella cheese' },
      { id: 'buffalo-chicken-pizza', name: 'Buffalo Chicken', price: '$19.99', description: 'Chicken, onions, bacon, ranch dressing & mild wing sauce' },
      { id: 'philly-cheese-steak-pizza', name: 'Philly Cheese Steak', price: '$19.99', description: 'Steak, green peppers, onions, special white sauce' },
      { id: 'bbq-chicken-pizza', name: 'BBQ Chicken', price: '$18.99', description: 'Chicken, bacon, onions, BBQ sauce, cheddar & mozzarella cheese' },
      { id: 'tommy-gun', name: 'Tommy Gun', price: '$23.99', description: 'Pepperoni, beef, ham, Italian sausage, bacon, green peppers, onions, mushrooms, black olives, and green olives' },
      { id: 'spinach-alfredo', name: 'Spinach Alfredo', price: '$19.99', description: 'Spinach Alfredo sauce, garlic, salt & pepper, olive oil, mozzarella & parmesan cheese' },
      { id: 'white-pizza', name: 'White Pizza', price: '$18.99', description: 'Mozzarella & parmesan cheeses, Alfredo sauce, salt & pepper, olive oil' },
      { id: 'hawaiian-pizza', name: 'Hawaiian', price: '$18.99', description: 'Ham, pineapple, & extra cheese' }
    ]
  },
  {
    id: 'single-slice',
    name: 'Single Slice',
    note: 'Single slices are from 18" pizza. Extra Toppings +$0.99.',
    items: [
      { id: 'pepperoni-slice', name: 'Pepperoni', price: '$3.25' },
      { id: 'cheese-slice', name: 'Cheese', price: '$3.00' }
    ]
  },
  {
    id: 'pizza',
    name: 'Pizza',
    items: [
      { id: 'stromboli', name: 'Stromboli', price: '$9.99', note: 'Extra Toppings +$.99' },
      { id: 'whole-pizza', name: 'Whole Pizza', price: '$9.00/+', note: 'Extra Toppings +$1.99' },
      { id: 'pizza-sizes', name: 'Pizza Sizes', price: '16" - $9.00 | 18" - $12.00' },
      { id: 'cauliflower-crust', name: '10" Cauliflower Crust', price: '$10.99', note: 'Extra Toppings +$.99' }
    ]
  }
];
