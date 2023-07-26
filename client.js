import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

//Setup Sanity Client
export const client = sanityClient({
  projectId: "cq3uxsem",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: "skxubiVGztg9pQpYnJ81UFudhh0F4IQM3ghZ25yRN3kE8Jf4BrAqviDxkTcpGl57fxb59wQvEo2iSoBQ4mD515fHrzfU2PQmm9DZyS13tYyw2OGPvwdZMH6CO3uKOvCIJWkBJuCeHeJyavNFsgVgDDDcj8VrtE6nMre9pUx1UlkapqBtAmjc",
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

/*imageUrlBuilder 
- is the function responsible 
- to turn the image into a string to be passed into the src
*/
export const urlFor = (source) => builder?.image(source);