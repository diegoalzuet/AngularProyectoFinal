let cartContent = [];

export const getCart = (req, res) => {
    res.send(cartContent);
}

export const addToCart = (req, res) => {
    const itemToAdd = req.body;

    if (cartContent.findIndex(movie => movie.id === itemToAdd.id) < 0) {
        cartContent.push(itemToAdd);
        res.send({
            status: 'OK',
            cartContent
        });

    } else {
        res.send({
            status: 'NOT OK',
            cartContent
        })
    }
}

export const removeFromCart = (req, res) => {
    const id = req.query.id;
    console.log(req);
    console.log(id);

    const indexToRemove = cartContent.findIndex(movie=> movie.id === id);
    console.log(indexToRemove);

    if(indexToRemove>=0){
        cartContent.splice(indexToRemove,1);
        res.send({
            status:'OK',
            msg: 'Se elimino exitosamente la pelicula',
            cartContent
        })
    }else{
        res.send({
            status:'NOT OK',
            cartContent
        })
    }
}

export const deleteAll = (req,res) => {

    cartContent=[];
    res.send({
        status:'OK',
        msg: 'El Carrito esta vacio',
        cartContent
    })

}