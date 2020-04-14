const mongoose = require('mongoose');
const Item = mongoose.model('Item')

exports.getAllItems =  (req, res) => {
    let today = new Date();
    //to get the date and the day of the week
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }
    let day = today.toLocaleDateString("en-US", options);
    
    Item.find((error, items) => {
        console.log('items:', items)
        if(!error){
            res.render('wishList', 
                {
                    listTitle: day,
                    newListItems: items,
                    pageTitle: "List of all items",
                    path: '/'
                });
        } else {
            console.log("Failed to retrieve the data");
        }
    });    
}

exports.postAllItems = (req, res) => {
    let userInput = req.body.newItem;
    let newWish = new Item();
    newWish.name = userInput;
    newWish.save((error, response) => {
        if(!error){
            res.redirect('/');
        } else {
            console.log(error);            
        }
    });
}

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
    const item = new Item({name:req.body.title});
    item.save(function (err, item) {
        if(err) return console.error(err);
        console.log(item.name + 'saved to items collection')
    })
    res.redirect('/');
}

exports.deleteATask = async (req, res) => {
    console.log('deleting item with id: ', req.params.id);
    const itemToDelete = req.params.id;
    await Item.findByIdAndRemove(itemToDelete, function(error) {
        if(!error){
            console.log("Successfully deleted the checked item!");
            res.redirect('/');
        }
        // res.redirect(req.get('referer'));
    });
}

