import { createClient } from "contentful";

export const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "YOUR SPACE ID",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "YOUR ACCESS TOKEN"
});
