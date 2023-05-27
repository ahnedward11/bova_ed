const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/menudb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })


const seedProducts = [
    {
        dish: "naan & dips",
        price: 18,
        description: "tahini tofu . carrot 'hummus'",
        type: "snacks"
    },
    {
        dish: "pretzel pull-apart",
        price: 12,
        description: "bread and butter relish . pastrami butter",
        type: "snacks"
    },
    {
        dish: "goat liver mousse",
        price: 22,
        description: "crumpets . biscuit crackers . pickled green strawberries . blueberry jam . craisin relish",
        type: "snacks"
    },
    {
        dish: "shrimp & crispy greens",
        price: 24,
        description: "avocado . strawberries . pepita crunch . limey-herby dressing",
        type: "salads"
    },
    {
        dish: "pork belly noodles",
        price: 23,
        description: "chili crunch . black eyed peas . pickled veggies",
        type: "salads"
    },
    {
        dish: "roasted beet",
        price: 19,
        description: "yuzu kosho vinaigrette . party nuts. golden beet giardiniera",
        type: "salads"
    },
    {
        dish: "chickpea fritters",
        price: 16,
        description: "goat yogurt . herb chutney . tamarind . sev crunch",
        type: "veggies"
    },
    {
        dish: "roasted shishitos",
        price: 18,
        description: "harissa-tahini yogurt . parmesan . garlic crunch",
        type: "veggies"
    },
    {
        dish: "grilled corn",
        price: 16,
        description: "spiced coconut caramel . cotija . tajin",
        type: "veggies"
    },
    {
        dish: "sautéed green beans",
        price: 19,
        description: "fish sauce vinaigrette . cashews",
        type: "veggies"
    },
    {
        dish: "kingfish poke",
        price: 24,
        description: "browned goat butter . goat crema . pickled kumquats . tempura crunch . sesame seed",
        type: "fish"
    },
    {
        dish: "roasted oysters",
        price: 17,
        description: "clam baguette . sausage butter . oyster sauce mayo . blood orange",
        type: "fish"
    },
    {
        dish: "grilled whole branzino",
        price: 40,
        description: "thai style sweet n' sour . green papaya . mung bean-pomelo salad . pickled veggies",
        type: "fish"
    },
    {
        dish: "pan-seared halibut",
        price: 34,
        description: "miso-marcona almond butter . snap peas . blueberry nuoc cham",
        type: "fish"
    },
    {
        dish: "braised crispy lamb",
        price: 30,
        description: "12 spice bagna cauda . grilled radicchio",
        type: "meat"
    },
    {
        dish: "tasty chicken skewer situation",
        price: 28,
        description: "cashew butter . hen of the woods . mushrooms . sunchoke chips",
        type: "meat"
    },
    {
        dish: "goat curry*",
        price: 35,
        description: "masa chips . radish . pickled veggies *subject to availability",
        type: "meat"
    },
    {
        dish: "grilled skirt steak",
        price: 34,
        description: "sichuan peanut sauce . pickled cucumbers . fresno chiles",
        type: "meat"
    },
    {
        dish: "confit goat belly",
        price: 33,
        description: "tahini yogurt . hazlenut dukkah . blood orange vinaigrette . pickled blueberries",
        type: "meat"
    },
    {
        dish: "sticky glazed pork shank",
        price: 42,
        description: "nectarine . spring onion . hoisin mayo . hot mustard . naan . lettuce cups",
        type: "meat"
    },
    {
        dish: "lemon & strawberry posset",
        price: 15,
        description: "sumac chickpea cookie . boozy golden raisins . pomegranate whip",
        type: "dessert"
    },
    {
        dish: "mango sticky rice",
        price: 15,
        description: "mango tamarind ice cream . pickled green mango . coconut cloud . watermelon granita",
        type: "dessert"
    },
    {
        dish: "balmond & citrus",
        price: 15,
        description: "almond buttercake . citrus ice cream . kumquats . blood orange gastrique . brown butter fun crunch",
        type: "dessert"
    },
    {
        dish: "choco crinkle cookie sundae",
        price: 15,
        description: "montamore ice cream . cajeta . choco masa chips",
        type: "dessert"
    },
    {
        dish: "sesame cookies & cream scoop",
        price: 6,
        description: "sesame caramel . chocolate crunchies",
        type: "dessert"
    },
    {
        dish: "hazelnut ice cream",
        price: 6,
        description: "chocolate magic shell",
        type: "dessert"
    },


]

Menu.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })