// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
//$.id.metodo
$.titleLabel.text = args.title || 'Default title';
$.authorLabel.text = args.author || 'Default Author';
$.dateLabel.text = args.date || '01/01/1900';
$.bookImage.image = args.image;