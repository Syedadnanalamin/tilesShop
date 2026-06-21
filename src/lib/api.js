
// featured cards api


// export const featuredCard = async () => {


//     const data = await fetch("http://localhost:3000/data/tiles.json");
//     const result = await data.json();
//     return result;
// }

import tiles from "../../public/data/tiles.json";

export const featuredCard = async () => {
    return tiles;
};