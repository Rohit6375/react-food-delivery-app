
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

/**
 * Header
 * --Logo
 * --Nav-items
 * Body
 * --Search 
 * --Restaurent Contaner
 * ---Restaurent card
 * -----Img
 * -----Name of res, start ratin,cuisine delivery time
 * Footer
 * --Copyright  
 * --Links
 * --Address
 * --contact
 */
const Header= ()=> {
    return (
        <div className="header">
            <div className="logo-container">
            <img className=  "logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s"/>
            </div>
            <div className="nav-items">
            <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
// const styleCard={
//     backgroundColor: "#f0f0f0",

// };
const RestaurentCard = (props) => {
  const { resData } = props;
  
  return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
          <img 
              alt="Restaurant logo" 
              src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId} 
          />
          <h3>{resData.info.name}</h3>
          <h4>{resData.info.cuisines.join(", ")}</h4>
          <h4>{resData.info.avgRating} stars</h4>
          <h4>{resData.info.costForTwo}</h4>
          <h4 style={{ fontSize: "14px" }}>{resData.info.sla.deliveryTime} minutes</h4>
      </div>
  );
};

const resList =[
  {
    info: {
      id: "450852",
      name: "Brothers Bakery",
      cloudinaryImageId: "hd6ypa4m8ipzhgeross7",
      locality: "Govind Nagar",
      areaName: "Jhotwara",
      costForTwo: "₹1090 for two",
      cuisines: [
        "Bakery"
      ],
      avgRating: 4,
      veg: true,
      parentId: "6930",
      avgRatingString: "4.0",
      totalRatingsString: "50+",
      promoted: true,
      adTrackingId: "cid=16028254~p=0~adgrpid=16028254#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=450852~eid=60105d89-75a8-4718-883d-9938d70e06b9~srvts=1722885395605~collid=45995",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2024-08-06 01:45:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {
            
          },
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg"
                }
              }
            ]
          },
          textExtendedBadges: {
            
          }
        }
      },
      aggregatedDiscountInfoV3: {
        header: "₹50 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {
            
          },
          video: {
            
          }
        }
      },
      reviewsSummary: {
        
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {
        
      },
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      
    },
    cta: {
      link: "swiggy://menu?restaurant_id=450852",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK"
    }
  },
  {
    info: {
      id: "45606",
      name: "Domino's Pizza",
      cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
      locality: "Jhotwara",
      areaName: "Jhotwara",
      costForTwo: "₹400 for two",
      cuisines: [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      avgRating: 4.3,
      parentId: "2456",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2024-08-06 00:59:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {
            
          },
          textBased: {
            
          },
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                  description: "Delivery!"
                }
              }
            ]
          }
        }
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {
            
          },
          video: {
            
          }
        }
      },
      reviewsSummary: {
        
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {
        
      },
      externalRatings: {
        aggregatedRating: {
          rating: "4.0",
          ratingCount: "1K+"
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      
    },
    cta: {
      link: "swiggy://menu?restaurant_id=45606",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK"
    }
  },
  {
    info: {
      id: "60739",
      name: "Roop Basant Bhojnalaya",
      cloudinaryImageId: "536c2b24d520761fb614b26bb30c8108",
      locality: "Gopalbari",
      areaName: "Gopalbari",
      costForTwo: "₹200 for two",
      cuisines: [
        "Tandoor",
        "Snacks",
        "Punjabi",
        "Thalis",
        "Indian"
      ],
      avgRating: 4.2,
      parentId: "171393",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 10.3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "10.3 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2024-08-06 05:00:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {
            
          },
          textBased: {
            
          },
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg"
                }
              }
            ]
          }
        }
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {
            
          },
          video: {
            
          }
        }
      },
      reviewsSummary: {
        
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {
        
      },
      externalRatings: {
        aggregatedRating: {
          rating: "3.4",
          ratingCount: "100+"
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      
    },
    cta: {
      link: "swiggy://menu?restaurant_id=60739",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK"
    }
  },
  {
    info: {
      id: "675417",
      name: "Sharma Dhaba",
      cloudinaryImageId: "c331332d78280d5886d81d6276d8d71c",
      locality: "VAISHALI NAGAR",
      areaName: "Vaishali nagar",
      costForTwo: "₹200 for two",
      cuisines: [
        "North Indian",
        "Fast Food"
      ],
      avgRating: 3.6,
      veg: true,
      parentId: "13766",
      avgRatingString: "3.6",
      totalRatingsString: "10+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2024-08-06 03:00:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {
            
          },
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg"
                }
              }
            ]
          },
          textExtendedBadges: {
            
          }
        }
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "ABOVE ₹149",
        discountTag: "FLAT DEAL"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {
            
          },
          video: {
            
          }
        }
      },
      reviewsSummary: {
        
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {
        
      },
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      
    },
    cta: {
      link: "swiggy://menu?restaurant_id=675417",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK"
    }
  },
  {
    info: {
      id: "454623",
      name: "Cakes",
      cloudinaryImageId: "lugqbjg6fhqfcesxrg1s",
      locality: "Govind Nagar",
      areaName: "Jhotwara",
      costForTwo: "₹600 for two",
      cuisines: [
        "Bakery"
      ],
      avgRating: 4.2,
      veg: true,
      parentId: "4861",
      avgRatingString: "4.2",
      totalRatingsString: "100+",
      promoted: true,
      adTrackingId: "cid=16028255~p=1~adgrpid=16028255#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=454623~eid=1dc80c4e-c135-4112-b6e5-3ca37b3a8924~srvts=1722885395605~collid=45995",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2024-08-06 01:45:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {
            
          },
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg"
                }
              }
            ]
          },
          textExtendedBadges: {
            
          }
        }
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
        discountCalloutInfo: {
          message: "Free Delivery",
          logoCtx: {
            logo: "v1655895371/free_delivery_logo_hqipbo.png"
          }
        }
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {
            
          },
          video: {
            
          }
        }
      },
      reviewsSummary: {
        
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {
        
      },
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      
    },
    cta: {
      link: "swiggy://menu?restaurant_id=454623",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK"
    }
  },
  {
    info: {
      id: "577811",
      name: "Burger Singh (Big Punjabi Burgers)",
      cloudinaryImageId: "972a37599772cdc7df93a0855ad87591",
      locality: "Shivraj Niketan Colony",
      areaName: "Vaishali Nagar",
      costForTwo: "₹300 for two",
      cuisines: [
        "Burgers",
        "Snacks",
        "Desserts",
        "Beverages",
        "Fast Food",
        "American",
        "Indian",
        "Biryani"
      ],
      avgRating: 4.3,
      parentId: "375065",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 6.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "6.9 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2024-08-06 03:30:00",
        opened: true
      },
      badges: {
        
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {
            
          },
          textBased: {
            
          },
          imageBased: {
            
          }
        }
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {
            
          },
          video: {
            
          }
        }
      },
      reviewsSummary: {
        
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {
        
      },
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      
    },
    cta: {
      link: "swiggy://menu?restaurant_id=577811",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK"
    }
  },
  {
    info: {
      id: "674503",
      name: "Punjabi Tadka",
      cloudinaryImageId: "96a7bcf2586ae17f0072704e1c76165c",
      locality: "vaishali nagar",
      areaName: "Jhotwara",
      costForTwo: "₹200 for two",
      cuisines: [
        "Punjabi",
        "Indian"
      ],
      avgRating: 2.7,
      parentId: "435887",
      avgRatingString: "2.7",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2024-08-06 03:00:00",
        opened: true
      },
      badges: {
        
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {
            
          },
          imageBased: {
            
          },
          textExtendedBadges: {
            
          }
        }
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "ABOVE ₹149",
        discountTag: "FLAT DEAL"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {
            
          },
          video: {
            
          }
        }
      },
      reviewsSummary: {
        
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {
        
      },
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      
    },
    cta: {
      link: "swiggy://menu?restaurant_id=674503",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK"
    }
  },
  {
    info: {
      id: "485471",
      name: "Pizza Plus",
      cloudinaryImageId: "ognqaol6oyuyo5cls4r3",
      locality: "ASHOK VIHAR",
      areaName: "Jhotwara",
      costForTwo: "₹250 for two",
      cuisines: [
        "Pizzas",
        "Fast Food"
      ],
      avgRating: 4,
      parentId: "14111",
      avgRatingString: "4.0",
      totalRatingsString: "8",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2024-08-06 03:00:00",
        opened: true
      },
      badges: {
        
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {
        
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {
            
          },
          imageBased: {
            
          },
          textExtendedBadges: {
            
          }
        }
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {
            
          },
          video: {
            
          }
        }
      },
      reviewsSummary: {
        
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {
        
      },
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      
    },
    cta: {
      link: "swiggy://menu?restaurant_id=485471",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK"
    }
  },
  {
    info: {
      id: "632986",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "b9ixfa8dpbf19njypjbt",
      locality: "Kalwad Road",
      areaName: "Jhotwara",
      costForTwo: "₹400 for two",
      cuisines: [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
      ],
      avgRating: 4.3,
      veg: true,
      parentId: "4961",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2024-08-06 03:00:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {
            
          },
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          textExtendedBadges: {
            
          }
        }
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹90"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {
            
          },
          video: {
            
          }
        }
      },
      reviewsSummary: {
        
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {
        
      },
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      
    },
    cta: {
      link: "swiggy://menu?restaurant_id=632986",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK"
    }
  },
  {
    info: {
      id: "586590",
      name: "Khandelwal Dhaba",
      cloudinaryImageId: "l6nf6ilr5irv1xx4wgz9",
      locality: "Vaishali nagar",
      areaName: "Jhotwara",
      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian"
      ],
      avgRating: 2.5,
      veg: true,
      parentId: "117386",
      avgRatingString: "2.5",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2024-08-06 03:00:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {
            
          },
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg"
                }
              }
            ]
          },
          textExtendedBadges: {
            
          }
        }
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "ABOVE ₹149",
        discountTag: "FLAT DEAL"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {
            
          },
          video: {
            
          }
        }
      },
      reviewsSummary: {
        
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {
        
      },
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      
    },
    cta: {
      link: "swiggy://menu?restaurant_id=586590",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK"
    }
  },
  {
    info: {
      id: "48313",
      name: "Kebabs & Curries Company",
      cloudinaryImageId: "y0nemsn6lv32wkey0xlo",
      locality: "Chitrakoot",
      areaName: "Chitrakoot",
      costForTwo: "₹750 for two",
      cuisines: [
        "Indian",
        "North Indian",
        "Thalis",
        "Chinese",
        "Mughlai",
        "Chaat",
        "Punjabi",
        "Desserts",
        "Snacks",
        "Rajasthani",
        "Tandoor",
        "Sweets",
        "Beverages",
        "Ice Cream",
        "Italian",
        "Pastas"
      ],
      avgRating: 4.3,
      parentId: "6302",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 51,
        lastMileTravel: 8.9,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "8.9 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2024-08-06 04:00:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {
            
          },
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "newg.png",
                  description: "Gourmet"
                }
              }
            ]
          },
          textExtendedBadges: {
            
          }
        }
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹799",
        discountTag: "FLAT DEAL"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {
            
          },
          video: {
            
          }
        }
      },
      reviewsSummary: {
        
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {
        
      },
      externalRatings: {
        aggregatedRating: {
          rating: "4.3",
          ratingCount: "1K+"
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      
    },
    cta: {
      link: "swiggy://menu?restaurant_id=48313",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK"
    }
  },
  {
    info: {
      id: "921219",
      name: "House Of Biryani",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/5/b91ea3db-5840-483f-92e4-c5f8fa3f07a7_921219.jpg",
      locality: "SANJAY NAGAR ",
      areaName: "Jhotwara",
      costForTwo: "₹200 for two",
      cuisines: [
        "Biryani",
        "Indian",
        "rolls"
      ],
      parentId: "9334",
      avgRatingString: "NEW",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 4.2,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.2 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2024-08-06 01:00:00",
        opened: true
      },
      badges: {
        
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {
        
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {
            
          },
          imageBased: {
            
          },
          textExtendedBadges: {
            
          }
        }
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {
            
          },
          video: {
            
          }
        }
      },
      reviewsSummary: {
        
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {
        
      },
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      
    },
    cta: {
      link: "swiggy://menu?restaurant_id=921219",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK"
    }
  },
  {
    info: {
      id: "806075",
      name: "Burgrill - The Win Win Burger",
      cloudinaryImageId: "f596863116da4b4688b48e813e25000d",
      locality: "Girnar Colony",
      areaName: "Vaishali Nagar",
      costForTwo: "₹400 for two",
      cuisines: [
        "Burgers",
        "Healthy Food",
        "American",
        "Salads",
        "Beverages",
        "Desserts",
        "Snacks"
      ],
      avgRating: 4.4,
      parentId: "302366",
      avgRatingString: "4.4",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 8.5,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "8.5 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2024-08-06 02:00:00",
        opened: true
      },
      badges: {
        
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {
        
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {
            
          },
          imageBased: {
            
          },
          textExtendedBadges: {
            
          }
        }
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {
            
          },
          video: {
            
          }
        }
      },
      reviewsSummary: {
        
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {
        
      },
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      
    },
    cta: {
      link: "swiggy://menu?restaurant_id=806075",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK"
    }
  },
  {
    info: {
      id: "880304",
      name: "Biryani House",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/4/457fa0ee-4730-4f13-a688-4be09ede7e51_880304.jpg",
      locality: "Ashok Nagar",
      areaName: "Jhotwara",
      costForTwo: "₹200 for two",
      cuisines: [
        "Mughlai",
        "Thalis"
      ],
      avgRating: 3,
      parentId: "134",
      avgRatingString: "3.0",
      totalRatingsString: "4",
      sla: {
        deliveryTime: 39,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2024-08-06 02:00:00",
        opened: true
      },
      badges: {
        
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {
        
      },
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {
            
          },
          textBased: {
            
          },
          imageBased: {
            
          }
        }
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {
            
          },
          video: {
            
          }
        }
      },
      reviewsSummary: {
        
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {
        
      },
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      
    },
    cta: {
      link: "swiggy://menu?restaurant_id=880304",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK"
    }
  },
  {
    info: {
      id: "478661",
      name: "Rominus Pizza And Burger",
      cloudinaryImageId: "9ec9ffd900c24ef751e2f34ba3d2fd4b",
      locality: "Kalwar Road",
      areaName: "Jhotwara",
      costForTwo: "₹150 for two",
      cuisines: [
        "Pizzas",
        "Italian",
        "Italian-American",
        "Fast Food",
        "Snacks",
        "American",
        "Desserts",
        "Beverages",
        "Bakery",
        "Continental"
      ],
      avgRating: 4.4,
      parentId: "8387",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2024-08-06 03:00:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                  description: "Delivery!"
                }
              }
            ]
          },
          textExtendedBadges: {
            
          },
          textBased: {
            
          }
        }
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {
            
          },
          video: {
            
          }
        }
      },
      reviewsSummary: {
        
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {
        
      },
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      
    },
    cta: {
      link: "swiggy://menu?restaurant_id=478661",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK"
    }
  },
  {
    info: {
      id: "765400",
      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/a2fbdd94-b3af-4fab-89c8-6fd240cd6951_765400.JPG",
      locality: "Near Shanischar Mandir",
      areaName: "Sindhi Camp",
      costForTwo: "₹200 for two",
      cuisines: [
        "Desserts",
        "Ice Cream",
        "Ice Cream Cakes"
      ],
      avgRating: 4.6,
      veg: true,
      parentId: "582",
      avgRatingString: "4.6",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 10.9,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "10.9 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2024-08-06 05:59:00",
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg"
          }
        ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {
            
          },
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          textExtendedBadges: {
            
          }
        }
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL"
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {
            
          },
          video: {
            
          }
        }
      },
      reviewsSummary: {
        
      },
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {
        
      },
      externalRatings: {
        aggregatedRating: {
          rating: "--"
        }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
      
    },
    cta: {
      link: "swiggy://menu?restaurant_id=765400",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK"
    }
  }
] ;

  
  
const Body=()=>{
    return (
        <div className="body">
         <div className="search">Search</div>
         <div className="res-container">
            <RestaurentCard 
           resData={resList[0]}
            />
            <RestaurentCard 
           resData={resList[1]}
            />
            <RestaurentCard 
           resData={resList[2]}
            />
            <RestaurentCard 
           resData={resList[3]}
            />
            <RestaurentCard 
           resData={resList[4]}
            />
            <RestaurentCard 
           resData={resList[5]}
            />
            <RestaurentCard 
           resData={resList[6]}
            />
           

         </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
       
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // converting object to h1 tag and puting it up on the DOM
