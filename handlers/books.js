//const { db } = require('../util/admin');
/*
exports.books = async (req, res) => {
    const booksRef = db.collection('books');
    try{
        const titulo = req.params.titulo;
        console.log(titulo);
            booksRef.get().then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),


        }));
            console.log(data);
            return res.status(201).json(data);
        })
    } catch (error) {
        return res
        .status(500)
        .json({ general: "Something went wrong, please try again"});          
    }
};
*/

 