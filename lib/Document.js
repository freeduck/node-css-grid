var util = require('util');
module.exports = Document;

function Document(initialContent){
    this.content = typeof initialContent !== 'undefined' ? initialContent : '';
    this.indentation = '';
    this.indentationSize = '  ';
    this.indentationCount = 0;
}

Document.prototype.openScope = function(signature, scopeStart){
    scopeStart = typeof scopeStart !== 'undefined' ? scopeStart : "{";
    this.writeLine(this.indentation + signature + scopeStart);
    this.increaseIndentation();
}

Document.prototype.closeScope = function(scopeEnd){
    scopeEnd = typeof scopeEnd !== 'undefined' ? scopeEnd : '}';
    this.decreaseIndentation();
    this.writeLine(this.indentation + scopeEnd);
}

Document.prototype.writeStatement = function(string){
    this.writeLine(this.indentation + string);
}

Document.prototype.writeLine = function(string){
    this.content += (string + "\n");
}

Document.prototype.increaseIndentation = function(){
    this.indentationCount++;
    this.updateIndentation();
}

Document.prototype.decreaseIndentation = function(){
    this.indentationCount--;
    this.updateIndentation();
}

Document.prototype.updateIndentation = function(){
    this.indentation = '';
    for(i = 0; i < this.indentationCount; i++){
	this.indentation += this.indentationSize;
    }
}

Document.prototype.toString = function(){
    return this.content;
}
