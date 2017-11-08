var arrayOfObjects = [
    {name:"object-01"},
    {name:"object-02"},
    {name:"object-04"},
    {name:"object-05"},
    {name:"object-06"},
    {name:"object-07"},
    {name:"object-08"}
];

arrayOfObjects.forEach(function(e,i){
    console.log("The object at index position "+i+" has the name of "+e.name);
});