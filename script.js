// ✅ All recipes inside JS
const recipesData = [
  {
    name: "Masala Kheema",
    ingredients: ["keema", "pyaj", "lehsun", "adrak", "tamatar", "masale", "hari mirch"],
    instructions: "Pyaj-lehsun-adrak bhuno, tamatar aur masale daal kar keema pakao, thoda garam masale se flavor badhao aur serve karo.",
    image: "https://www.thespruceeats.com/thmb/NgFhnXaOul3-NoX1vzMC_BFJ89E=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/masala-kheema-dry-spicy-minced-meat-1957323-hero-01-5c92d3b646e0fb0001d88054.jpg"
  },
  {
    name: "Basic Chicken Curry",
    ingredients: ["chicken", "pyaj", "tamatar", "lehsun", "adrak", "masale", "dahi"],
    instructions: "Pyaj-lehsun-adrak bhuno, tamatar aur masale daal kar chicken pakao, dahi milao aur simmer karo, garma garam serve karo.",
    image: "https://www.thespruceeats.com/thmb/DF8WwthRron6-z38YmREux3-72o=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/basic-indian-chicken-curry-1957386-step-09_edit-ba0ff3b1bef54ab7885d0008d43a17c0.jpg"
  },
  {
    name: "Mint-Cucumber Raita",
    ingredients: ["dahi", "kheera", "pudina", "namak", "jeera"],
    instructions: "Dahi ko achhi tarah phent lo, kheera aur pudina kaat kar mix karo, jeera aur namak daal kar serve karo.",
    image: "https://www.thespruceeats.com/thmb/OXhlmFD9dE0wcbPNrpe3NW7NZPs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SES-mint-cucumber-raita-1957765-hero-01-995c07ea20d8469cb4ced497befa2719.jpg"
  },
  {
    name: "Bhajias (Pakoras)",
    ingredients: ["pyaj", "aaloo", "palak", "besan", "namak", "mirch"],
    instructions: "Sabziyon ko besan aur masale me coat karo, fry karo golden brown hone tak aur chutney ke saath serve karo.",
    image: "https://www.thespruceeats.com/thmb/XcTjgs9YeqjqrdSMDchlkkM1NOw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bhajias-fried-indian-snack-1958032-hero-04-51c9afbdcfeb4d4184eca38951483478.jpg"
  },
  {
    name: "South Indian Lemon Rice",
    ingredients: ["chawal", "nimboo ka ras", "sabut rai", "hari mirch", "curry leaves"],
    instructions: "Chawal ubal lo, tadka me rai, mirch aur curry leaves daal kar mix karo, nimboo ka ras daal kar serve karo.",
    image: "https://www.thespruceeats.com/thmb/IyJy2CphVwWfrXyBSjfjz1vLEpE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/south-indian-lemon-rice-1957723-hero-02-18047e2504ad42fa96817e047c075ac3.jpg"
  },
  {
    name: "Moong Dal (Yellow Lentil Dal)",
    ingredients: ["moong dal", "pyaj", "lehsun", "adrak", "haldi", "namak", "ghee"],
    instructions: "Dal dhoke ubalo, pyaj-lehsun-adrak bhuno, masale daal kar dal me mix karo aur tadka ke saath serve karo.",
    image: "https://www.thespruceeats.com/thmb/0x8GtQj86KDrBObG5fyayGSnk84=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/vegetarian-mung-dhal-recipe-3378496-hero-03-f1c34f2638ff46d9880130cda0c61e3e.jpg"
  },
  {
    name: "Grilled Tandoori Chicken",
    ingredients: ["chicken", "dahi", "tandoori masala", "lehsun", "adrak", "nimboo"],
    instructions: "Chicken ko dahi aur masale me marinate karo, grill ya oven me cook karo, chutney ke saath serve karo.",
    image: "https://www.thespruceeats.com/thmb/Frr_PbePDWxV-cuMvo0vvZ4yfhg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/indian-tandoori-chicken-1957405-step-08-492ff9f63ade4944a3ea44287d85d1d9.jpg"
  },
  {
    name: "Prawn Masala",
    ingredients: ["jhinga", "pyaj", "tamatar", "lehsun", "adrak", "masale"],
    instructions: "Pyaj-tamatar bhuno, masale aur prawns daal kar cook karo, garam serve karo chapati ya chawal ke saath.",
    image: "https://www.thespruceeats.com/thmb/S60JC0tRrveFXTVuBVauPkrGK30=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/indian-prawn-masala-1957738-hero-01-bdb304b8519e4444bf4b7fac142ab6d0.jpg"
  },
  {
    name: "Kachumber (Cucumber Salad)",
    ingredients: ["kheera", "tamatar", "pyaj", "nimboo ka ras", "namak", "kaali mirch"],
    instructions: "Sabziyan chhoti kaat lo, nimboo, namak aur mirch daal kar toss karo aur fresh serve karo.",
    image: "https://www.thespruceeats.com/thmb/NonbmV7-N7wA20-JCvxZh-ZFQk8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/KachumberIndianCucumberSalad-TheSpruce_DianaChistruga-b24cf35030c64bbea3749827724abf1a.jpg"
  },
  {
    name: "Yellow Split Pea Dal",
    ingredients: ["chana dal", "pyaj", "lehsun", "adrak", "haldi", "namak", "ghee"],
    instructions: "Dal dhoke ubalo, tadka me pyaj-lehsun-adrak bhuno, dal me daal kar simmer karo aur ghee se serve karo.",
    image: "https://www.thespruceeats.com/thmb/RCfJJLiJzldY4uMwzZY1pwOP4xA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/indian-yellow-split-pea-dal-recipe-3378495_13_preview-5b1988540e23d90036f1f739.jpeg"
  },
  {
    name: "Murgh Makhani (Butter Chicken)",
    ingredients: ["chicken", "makhan", "malai", "pyaj", "tamatar", "masale"],
    instructions: "Chicken bhuno, pyaj-tamatar aur masale me cook karo, makhan-malai daal kar sim karo aur garma garam serve karo.",
    image: "https://www.thespruceeats.com/thmb/mFQ_auCez23JUPsQjPxhSM0HPRE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/butter-chicken-479366-step-12-3536fe3a146d4f31abafaf571790e544.jpg"
  },
  {
    name: "Spicy Vegan Lentil Dal",
    ingredients: ["masoor dal", "pyaj", "lehsun", "adrak", "haldi", "lal mirch", "tel"],
    instructions: "Dal dhoke ubalo, pyaj-lehsun-adrak bhuno, masale daal kar dal me mix karo aur garam serve karo.",
    image: "https://www.thespruceeats.com/thmb/vhHzz10iId00CSDBiCVTlYVnhnE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/spicy-lentil-dahl-recipe-1001539-Hero_02-3f77c029c899411dac6da158c609e957.jpg"
  },
  {
    name: "Chicken Saagwala",
    ingredients: ["chicken", "palak", "pyaj", "lehsun", "adrak", "masale"],
    instructions: "Pyaj-lehsun-adrak bhuno, masale aur chicken daal kar cook karo, palak mix karke sim karo aur serve karo.",
    image: "https://www.thespruceeats.com/thmb/_cO9StxQy2xb39COHUKhyNelIHE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chicken-saagwala-with-spinach-1957402-hero-01-19aac800e82e48e0978b12b2667390f6.jpg"
  },
  {
    name: "Masala Kheema Paratha",
    ingredients: ["keema", "atta", "pyaj", "masale", "tel"],
    instructions: "Keema bhuno, atta ka dough gundho, paratha me bhar kar fry karo aur garma garam serve karo.",
    image: "https://www.thespruceeats.com/thmb/0Tc9_pm2hC2CmQ37qKEgcNldcZE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/kheema-paratha-spicy-minced-meat-paratha-1957341-hero-01-601b036727e245dc8309a3eb56502904.jpg"
  },
  {
    name: "Mutter Paneer",
    ingredients: ["paneer", "matar", "pyaj", "tamatar", "malai", "masale"],
    instructions: "Pyaj-tamatar bhuno, masale daal kar paneer aur matar add karo, malai mix karke simmer karo aur serve karo.",
    image: "https://www.thespruceeats.com/thmb/KE-8kDObmWBP5Frgl3NYL824qyY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/mutter-paneer-peas-cottage-cheese-curry-1957971-hero-01-fe2c40de95ce41358589b3a7f01b2d97.jpg"
  },
  {
    name: "Sada Roti",
    ingredients: ["atta", "paani", "namak", "tel"],
    instructions: "Atta aur paani se dough gundho, round roti banaye aur tawa pe sekho, garma garam serve karo.",
    image: "https://www.thespruceeats.com/thmb/5974IJt4nTycKb1WAt0G4SuBn3c=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sada-roti-2138052-Hero_01-c121ed4e32cd4224a358c7096a068650.jpg"
  },
  {
    name: "Chicken Vindaloo",
    ingredients: ["chicken", "pyaj", "tamatar", "lehsun", "adrak", "masale", "nimbu"],
    instructions: "Pyaj-tamatar bhuno, masale aur chicken daal kar cook karo, nimbu ka ras daal kar tangy aur spicy serve karo.",
    image: "https://www.thespruceeats.com/thmb/Zheo3Yboly7R_9JPpEisZREzICg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/authentic-chicken-vindaloo-recipe-468712017-step-hero_1-57c6cc32841d4726b5f2eedd298b206d.jpg"
  },
  {
    name: "Crockpot Curried Rice and Lentils",
    ingredients: ["chawal", "masoor dal", "pyaj", "lehsun", "masale", "tel"],
    instructions: "Sab ingredients crockpot me daal kar cook karo, dal aur chawal soft hone tak wait karo aur serve karo.",
    image: "https://www.thespruceeats.com/thmb/NfQ6JsZlOUShexvcXDjbGuABqGI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/VeganCrockPotCurriedRiceandLentils-lleerogers-GettyImages-e5ef0bb78de045ea91645591700c97aa.jpg"
  },
  {
    name: "Chicken with Creamy Curry Sauce",
    ingredients: ["chicken", "pyaj", "tamatar", "lehsun", "malai", "masale"],
    instructions: "Chicken fry karo, pyaj-tamatar aur masale mix karo, malai daal kar creamy sauce banao aur serve karo.",
    image: "https://www.thespruceeats.com/thmb/kfvGn-2weCyoAHwm27Ngm13m2lk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/curry-chicken-15-56a8c2813df78cf772a05fba.jpg"
  },
  {
    name: "Chicken Pulao",
    ingredients: ["chawal", "chicken", "pyaj", "adrak", "masale"],
    instructions: "Chawal aur chicken ko masale aur pyaj ke saath cook karo, fragrant pulao ready, garma garam serve karo.",
    image: "https://www.thespruceeats.com/thmb/0N63LwUBQfPBik7MUQU9VoeYXDc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chickenpulao-56e758415f9b5854a9f966d5.jpg"
  },
  {
    name: "Kadhi (Yogurt Curry)",
    ingredients: ["dahi", "besan", "pyaj", "sabut masale", "namak", "mirch"],
    instructions: "Dahi-besan ka batter banao, tadka me pyaj aur masale bhuno, batter daal kar cook karo aur serve karo.",
    image: "https://www.thespruceeats.com/thmb/G6qtMWUKyHOldc_AD-mFO6ElcBs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dill-and-peanut-kadhi-is-healthy-version-of-north-indian-kadhi--925612280-5ae393218e1b6e0037e39482.jpg"
  },
  {
    name: "Rabdi Rasgulla",
    ingredients: ["doodh", "cheeni", "cardamom", "rasgulla", "badam"],
    instructions: "Doodh ko ghana karo, rasgulla daal kar cardamom aur badam se garnish karo aur serve karo chilled.",
    image: "https://www.thespruceeats.com/thmb/V0mvqW3x9GpsJVBiCiqpQ3iMiuo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/rasgulla-indian-dessert-1957839-hero-01-7c3528a2d34a4f1b9248c7483a73d0a6.jpg"
  },
  {
    name: "Gulab Jamun",
    ingredients: ["mawa", "cheeni", "ghee", "rose water"],
    instructions: "Mawa se gol balls banao, fry karo ghee me, cheeni ka syrup aur rose water me dal kar serve karo.",
    image: "https://www.thespruceeats.com/thmb/nJvBfWCyTrd7v98S-uKZTQ80nh4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/gulab-jamun-dessert-1957825-hero-01-ede4b62583704cd1926b59142d6ddc1f.jpg"
  },
  {
    name: "Kheer",
    ingredients: ["chawal", "doodh", "cheeni", "elaichi", "dry fruits"],
    instructions: "Doodh me chawal daal kar pakao, cheeni aur elaichi add karo, dry fruits se garnish karke serve karo.",
    image: "https://www.thespruceeats.com/thmb/jA4K3x3qy-8KAjQYMUzM7ImFOAg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/kheer-payasam-rice-pudding-1957827-84c4680664254f03815991474d510336.jpg"
  }
];



const searchBtn = document.getElementById('searchBtn');
const inputs = document.querySelectorAll('.ingredientInput');
const container = document.getElementById('recipesContainer');

searchBtn.addEventListener('click', () => {
    const userIngredients = Array.from(inputs).map(input => input.value.toLowerCase().trim());
    
    if(userIngredients.some(ing => ing==='')){
        alert('Please fill all 3 ingredients!'); 
        return;
    }

    const matched = recipesData.filter(recipe =>
        userIngredients.every(ing => recipe.ingredients.includes(ing))
    );

    container.innerHTML = '';
    if(matched.length===0){
        container.innerHTML = `<p style="text-align:center; color:white; font-size:1.2rem;">No recipes found! 😢</p>`;
        return;
    }

    matched.forEach(recipe => {
        const card = document.createElement('div');
        card.classList.add('recipe-card');
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-img">
            <h3>${recipe.name}</h3>
            <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
        `;
        container.appendChild(card);

        card.animate([
            { transform: 'translateY(20px)', opacity: 0 },
            { transform: 'translateY(0)', opacity: 1 }
        ], { duration: 500, easing: 'ease-out' });
    });
});
