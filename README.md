Check out the website [here](https://chows23.github.io/shop-cart-2-React/) and click MouseHeavan to start purchasing.

When you click any item there will add to cart on the top right side. 

<img width="935" alt="24" src="https://user-images.githubusercontent.com/71317442/203140409-d23cc5b2-ce33-4da1-ae88-4ef1bf350017.png">

There is another page when you click on cart icon.

<img width="407" alt="25" src="https://user-images.githubusercontent.com/71317442/203140627-1f9a1947-93ff-4d80-96d0-80d986291127.png">


## React Practice Project
Using React, develop a simple shopping cart app
* `App`: the application main component.
* `Cart`: The top level cart component, contains the cart total and helps to print out each individual cart item.
* `CartItem`: A component that represents each individual cart item.
* `Item`: A component that represents each of the items for sale.

Items to pre-populate your cart are available at this API endpoint:
* https://5ed0108416017c00165e327c.mockapi.io/api/v1/items

# Part 2 - Cart App Refactor
**Requirements**
* Add 2 routes.
   * The first one that responds exactly to "/". This is your homepage that contains all the items and the header.
   * The second route responds exactly to "/cart" and contains the cart and the header.
* The app should display some high level cart information in the top right hand corner of the page, in the header, regardless of which page the user is routed it. It should include:
   * the total amount of items in your cart
   * the current total of all the items in your cart.
* Pay special attention to the plurality of the word item - 0 items, 1 item, 2 items.
* The cart page should display the message 'No Items in your Cart' if the cart is empty
* The cart icon should be clickable. Upon clicking it, it should navigate the user to the /cart page.
* The app should have a link that allows the user to navigate back to the home page from the cart page and keep shopping.
