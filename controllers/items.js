const Item = require('../models/item');

exports.getAddItemPage = 
    (req, res) => {
    res.render('add-item', {
        pageTitle: "Add New Item to WishList",
        path: "/admin/add-item"
    });
}

exports.postAddItems = (req, res) => {
    console.log(req.body.title);
    //products.push({title: req.body.title});
    const item = new Item(req.body.title);
    item.saveProduct();
    res.redirect('/');
}

exports.getItems = (req, res) => {
    
    Item.fetchAllItems((items)=>{
        res.render('wishList', {
        pageTitle: 'Welcome to My WishList!',
        items: items,
        path: '/'
        });
    })
    
   // res.sendFile(path.join(rootDirectory, 'views', 'shop.html'));
}