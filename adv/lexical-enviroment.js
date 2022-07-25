function printName(){
    return 'Santiago bogosavljevich'
}

function findName(){
    function a(){} //Ésto es lexicamente distinto, porque está anidada a otra función, por ende está a un nivel distinto
   return printName()
}

function sayName(){
    return findName()
}

sayName() //El resto de funciones, se corren con normalidad, porque lo que hace el Lexical Enviroment es chequear que cada función sea un universo y se esté llamando correctamente