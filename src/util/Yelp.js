const apiKey = "0YMrqgbOZOrwuWOlgd_kAUO9oRsw5jm11J-mflnm-ieUodikkunuBwPmqeMXT2hwFrERDC11B4liw89TDcUDaS2VFidCK25VR76tw3CCoQp2mjbax9Nu4gLMNzfdYHYx";

const Yelp = {
search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => { 
            return response.json();
         }).then(jsonResponse => {if (jsonResponse.businesses) {
            return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count,
                    googleMapsUrl: `https://www.google.com/maps/place/${business.location.address1}, ${business.location.city}, ${business.location.state}/${business.name}`
                }));
            }
          });
        }
      };

export default Yelp;