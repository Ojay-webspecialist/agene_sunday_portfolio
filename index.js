
import getSharingImage from '@jlengstorf/get-share-image'
const socialImage = getSharingImage({
  title: 'Agene O. Sunday Portfolio',
  tagline: 'Frontend Developer and Teacher',
  // This is the name you see in your url
  // https://res.cloudinary.com/<Your cloud name will be here>/image/upload/v1579118925/jp-blog-post-card.png
  //https://res.cloudinary.com/ojaymedia/image/upload/v1593260165/website_card_Template.png
  cloudName: 'ojaymedia',
  imagePublicID: 'website_card_Template',
  titleFont: 'Roboto',
  titleExtraConfig: '_bold',
  taglineFont: 'Roboto',
});