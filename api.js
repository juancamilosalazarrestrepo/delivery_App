import sanityClient from "./sanity";
let sanityQuery = (query, params) => sanityClient.fetch(query, params);

export const getFeauredRestaurants = async () => {
  const data = await sanityQuery(
    `*[_type == "featured"] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->{
        ...
    },
    type->{
    name
    }
      }
    }`
  );
  return data;
};



export const getCategories = async () => {
  const data = await sanityQuery(
    `*[_type == "category"]`
  );
  return data;
};

export const getFeaturedRestaurantById=id=>{
    return sanityQuery(
        `*[_type == "featured" && _id == $id] {
          ...,
          restaurants[]->{
            ...,
            dishes[]->{
            ...
        },
        type->{
        name
        }
          }
        }`,
        { id }
      );
}

export const getFeaturedRestaurantsByCategory = async (id) => {
  const data = await sanityQuery(
    `*[_type == "featured" && $id == _id] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->{
        ...
    },
    type->{
    name
    }
      }
    }`,
    { id }
  );
  return data?.[0];
};