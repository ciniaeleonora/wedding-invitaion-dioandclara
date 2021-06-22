const { Comment } = require('../models')

class Controller{
  static getComments(req, res, next){
    Comment.findAll()
        .then(comments => {
            res.status(200).json(comments)
        })
        .catch(err => {
            next(err)
        })
  }

  static postComment(req, res, next){
      let {name, message} = req.body

      Comment.create({name, message})
          .then(comment => {
              res.status(201).json(comment)
          })
          .catch(err => {
              next(err)
          })
  }


  static deleteComment(req, res, next) {
    let id = +req.params.id

    Comment.destroy({
        where: {
            id
        }
    })
        .then(data => {
            res.status(200).json({"message": `comment has been successfully deleted`})
        })
        .catch(err => {
            next(err)
        })
}
}

module.exports = Controller