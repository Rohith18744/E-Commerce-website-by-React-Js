import React from 'react'
import './DescriptionBox.css'
 const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
       <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
       </div>
       <div className='descriptionbox-description'>
        <p>A website that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.</p>
       <p>An ecommerce website is an online platform that enables businesses to sell their products or services directly to customers over the internet. It acts as a virtual storefront, allowing customers to browse, select, and purchase items conveniently from their devices.
At its core, an ecommerce website features a product catalog showcasing detailed descriptions, images, and pricing of all available offerings. Customers can add desired items to a shopping cart and proceed through a secure checkout process, entering their payment and shipping information to complete the purchase. Payment gateways are integrated to facilitate seamless transactions.
Ecommerce websites often provide features like user accounts for storing order histories and payment details, advanced search and filtering capabilities, and product reviews and ratings. Order management systems track and process customer orders, handle inventory, and coordinate shipping and delivery.
These websites can range from simple, single-vendor online stores to complex, multi-vendor marketplaces catering to diverse industries and customer bases. The primary goal is to offer a convenient, secure, and user-friendly online shopping experience that drives sales and fosters customer loyalty, while providing businesses with a platform to reach a broader audience and expand their reach beyond traditional brick-and-mortar stores.</p>
       </div>
    </div>
  )
}
export default DescriptionBox;