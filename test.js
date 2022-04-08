let test = [{"id":"6246c3aae140e36a3c524841","domain":"Domaine Leflaive","flag":"/flags/FR.svg","img":"/wines/grand-cru.png","name":"Montrachet Grand Cru","origin":"France","price":4206,"type":null,"quantity":1},{"id":"6246c683e140e36a3c524842","domain":"Domaine Georges & Christophe","flag":"/flags/FR.svg","img":"/wines/musigny.png","name":"Roumier Musigny Grand Cru","origin":"France","price":4205,"type":null,"quantity":1},{"id":"6246c6b0e140e36a3c524843","domain":"Bruno Giacosa Collina Rionda","flag":"/flags/IT.svg","img":"/wines/barolo.png","name":"Barolo DOCG","origin":"Italy","price":4207,"type":null,"quantity":1}];

const transformedItems = test.reduce((arr, item) => {
  arr.push({
      price_data: {
          currency: "eur",
          product_data: {
              name: item.name,
          },
          unit_amount: item.price,
      },
      description: "test",
      quantity: item.quantity
  })
  return arr;
}, [])

console.log(transformedItems);