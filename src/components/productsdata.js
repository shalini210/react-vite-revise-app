import nokia from "../assets/img/Nokia.jpg";
import nokia2 from "../assets/img/Nokia2.jpg";
import nokia3 from "../assets/img/Nokia3.jpg";
import nokia4 from "../assets/img/Nokia4.jpg";
import nokia5 from "../assets/img/Nokia5.jpg";

import realme from "../assets/img/realme.jpg";
import realme2 from "../assets/img/realme2.jpg";
import realme3 from "../assets/img/realme3.jpg";
import realme4 from "../assets/img/realme4.jpg";
import realme5 from "../assets/img/realme5.jpg";

import sumsung from "../assets/img/sumsung.jpg";
import sumsung2 from "../assets/img/sumsung2.jpg";
import sumsung3 from "../assets/img/sumsung3.jpg";
import sumsung4 from "../assets/img/sumsung4.jpg";
import sumsung5 from "../assets/img/sumsung5.jpg";

import iphone from "../assets/img/iphone.jpg";
import iphone2 from "../assets/img/iphone2.jpg";
import iphone3 from "../assets/img/iphone3.jpg";
import iphone4 from "../assets/img/iphone4.jpg";
import iphone5 from "../assets/img/iphone5.jpg";

// Product data array
var prdts = [
  {
    id: 1,
    img: nokia,
    name: "Nokia 1600",
    company: "Nokia",
    price: "1250",
    brand: "Nokia",
    modelno: "1600",
    title: "All Around Protection Case",
    coloroptions: ["Red", "Blue", "Grey"],
    originalprice: "1250",
    discountedprice: "1150",
    modelseries: "Nokia Series",
    weight: "150g",
    dimensions: "10x5x0.5 cm",
    type: "Leather Case",
    keyfeatures: [
      "All around protection",
      "PU leather material",
      "Raised edges for screen safety",
    ],
    des: "All Around protection: PU leather case wraps around the whole phone for all around protection. Covers all four sides and includes raised edges to keep the screen safe.",
    rating: 4,
    additionalImages:[nokia2,nokia3,nokia4,nokia5,realme2]
  },
  {
    id: 2,
    img: realme,
    name: "Realme 9",
    company: "Realme",
    price: "12500",
    brand: "Realme",
    modelno: "RM9",
    title: "Anti-Splash Magnetic Wireless Charging Case",
    coloroptions: ["Red", "Black", "Green"],
    originalprice: "12500",
    discountedprice: "12000",
    modelseries: "Realme Series",
    weight: "120g",
    dimensions: "9x5x0.5 cm",
    type: "Magnetic Wireless Charging Case",
    keyfeatures: [
      "Anti-Splash",
      "Magnetic wireless charging",
      "Easy access to all ports",
    ],
    des: "LK098 Anti-Splash Magnetic Wireless Charging iPhone 15 Pro Max Back Case.",
    rating: 4.5,
    additionalImages:[realme2,realme3,realme4,realme5]
  },
  {
    id: 3,
    img: sumsung,
    name: "Galaxy 45",
    company: "Samsung",
    price: "5000",
    brand: "Samsung",
    modelno: "G45",
    title: "Polycarbonate Case",
    coloroptions: ["Black", "White", "Blue"],
    originalprice: "5000",
    discountedprice: "4500",
    modelseries: "Galaxy Series",
    weight: "140g",
    dimensions: "10x5x0.7 cm",
    type: "Polycarbonate Case",
    keyfeatures: [
      "Durable polycarbonate material",
      "Lightweight",
      "Easy to clean",
    ],
    des: "Polycarbonate Wipe it with a clean and dry cloth to remove dust.",
    rating: 3,
    additionalImages:[sumsung2,sumsung3,sumsung4,sumsung5]
  },
  {
    id: 4,
    img: iphone,
    name: "iPhone 15",
    company: "Apple",
    price: "200050",
    brand: "Apple",
    modelno: "IP50",
    title: "Premium Protection Case",
    coloroptions: ["Gold", "Silver", "Black"],
    originalprice: "200050",
    discountedprice: "190000",
    modelseries: "iPhone Series",
    weight: "160g",
    dimensions: "11x5.5x1 cm",
    type: "Premium Case",
    keyfeatures: [
      "100% original products",
      "Pay on delivery might be available",
      "Easy 30 days returns and exchanges",
    ],
    des: "100% Original Products. Pay on delivery might be available. Easy 30 days returns and exchanges.",
    rating: 5,
    additionalImages: [iphone2, iphone3, iphone4,iphone5]
  },
];

export default prdts;